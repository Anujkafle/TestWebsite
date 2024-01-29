$(document).ready(function() {
    $("#login-form").submit(function(event) {
        event.preventDefault();

        var email = $("#email").val();
        var password = $("#password").val();

        if (email == "") {
            alert("Please enter your email.");
            return false;
        }

        if (password == "") {
            alert("Please enter your password.");
            return false;
        }

        // Submit the form via AJAX
        $.ajax({
            url: "login.php",
            type: "post",
            data: {
                email: email,
                password: password
            },
            success: function(response) {
                if (response == "success") {
                    window.location.href = "dashboard.php";
                } else {
                    alert("Invalid email or password.");
                }
            }
        });
    });
});