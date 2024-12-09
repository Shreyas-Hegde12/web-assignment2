document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('registration-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'submit.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

        xhr.onload = function() {
            if (xhr.status === 200) {
                document.getElementById('result').innerHTML = xhr.responseText;
            } else {
                document.getElementById('result').innerHTML = '<p>There was an error processing your request.</p>';
            }
        };

        var formData = new FormData(form);
        var encodedData = new URLSearchParams(formData).toString();
        xhr.send(encodedData);
    });
});
