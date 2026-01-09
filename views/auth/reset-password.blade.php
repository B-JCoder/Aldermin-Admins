<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Aldermin - Reset Password</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{ url('assets/images/favicon.png') }}">

    <!-- CSS -->
    <link href="{{ url('assets/dist/css/pages/login-register-lock.css') }}" rel="stylesheet">
    <link href="{{ url('assets/dist/css/style.min.css') }}" rel="stylesheet">
</head>

<body>

<!-- Preloader -->
<div class="preloader">
    <div class="loader">
        <div class="loader__figure"></div>
        <p class="loader__label">Aldermin</p>
    </div>
</div>

<!-- Reset Password Section (login style) -->
<section id="wrapper" class="login-register d-flex align-items-center justify-content-center">
    <div class="login-box card">
        <div class="card-body">

            <form id="resetPasswordForm" class="text-center" novalidate>
                @csrf

                <!-- Logo -->
                <div class="mb-4">
                    <img src="{{ url('assets/images/aldermin-logo.png') }}" alt="Aldermin" style="max-width:200px;">
                </div>

                <h3 class="box-title m-b-10">Reset Password</h3>
                <p class="text-muted m-b-20">
                    Enter your email, OTP and new password
                </p>

                <!-- Global message -->
                <div id="reset-msg" class="mt-2" style="display:none;"></div>

                <!-- Email -->
                <div class="form-group text-left">
                    <input class="form-control" type="email" id="reset-email" placeholder="Enter email" autocomplete="email">
                    <div class="text-danger" id="reset-email-error"></div>
                </div>

                <!-- OTP -->
                <div class="form-group text-left">
                    <input class="form-control" type="text" id="reset-otp" placeholder="Enter 6-digit OTP" maxlength="6" inputmode="numeric">
                    <div class="text-danger" id="reset-otp-error"></div>
                </div>

                <!-- New Password -->
                <div class="form-group text-left">
                    <input class="form-control" type="password" id="reset-password" placeholder="Enter new password" autocomplete="new-password">
                    <div class="text-danger" id="reset-password-error"></div>
                </div>

                <!-- Button -->
                <button class="btn btn-info btn-lg btn-block btn-rounded mt-3" type="submit">
                    Reset Password
                </button>

                <div class="mt-3">
                    <a href="{{ route('saas.login.view') }}" class="text-muted">Back to Login</a>
                </div>

            </form>

        </div>
    </div>
</section>

<!-- Scripts -->
<script src="{{ url('assets/node_modules/jquery/jquery-3.2.1.min.js') }}"></script>
<script src="{{ url('assets/node_modules/popper/popper.min.js') }}"></script>
<script src="{{ url('assets/node_modules/bootstrap/dist/js/bootstrap.min.js') }}"></script>

<script>
$(function () {
    $(".preloader").fadeOut();

    // Autofill email from localStorage if available (from forgot password flow)
    try {
        const storedEmail = localStorage.getItem('forgotEmail');
        if (storedEmail && !$('#reset-email').val()) {
            $('#reset-email').val(storedEmail);
        }
    } catch (e) {}

    $('#resetPasswordForm').on('submit', function (e) {
        e.preventDefault();

        $('#reset-msg').hide().removeClass('text-success text-danger').text('');
        $('#reset-email-error').text('');
        $('#reset-otp-error').text('');
        $('#reset-password-error').text('');

        const email    = $('#reset-email').val().trim();
        const otp      = $('#reset-otp').val().trim();
        const password = $('#reset-password').val();

        let hasError = false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            $('#reset-email-error').text('Email is required');
            hasError = true;
        } else if (!emailRegex.test(email)) {
            $('#reset-email-error').text('Please enter a valid email');
            hasError = true;
        }

        if (!otp) {
            $('#reset-otp-error').text('OTP is required');
            hasError = true;
        } else if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
            $('#reset-otp-error').text('Please enter a valid 6-digit OTP');
            hasError = true;
        }

        if (!password) {
            $('#reset-password-error').text('New password is required');
            hasError = true;
        } else if (password.length < 8) {
            $('#reset-password-error').text('Password must be at least 8 characters');
            hasError = true;
        }

        if (hasError) {
            return;
        }

        const btn = $('#resetPasswordForm button[type="submit"]');
        btn.prop('disabled', true).text('Resetting...');

        $.ajax({
            url: 'https://api.aldermin.online/Admin/reset-password',
            method: 'POST',
            contentType: 'application/json',
            headers: { 'Accept': 'application/json' },
            data: JSON.stringify({ email: email, otp: otp, newPassword: password }),

            success: function (res) {
                $('#reset-msg')
                    .addClass('text-success')
                    .text(res.message || 'Password reset successfully')
                    .fadeIn();

                // optional: clear stored email
                try { localStorage.removeItem('forgotEmail'); } catch (e) {}

                setTimeout(function () {
                    window.location.href = "{{ route('saas.login.view') }}";
                }, 1500);
            },

            error: function (xhr) {
                let msg = 'Unable to reset password';
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    msg = xhr.responseJSON.message;
                } else if (xhr.responseText) {
                    try {
                        const json = JSON.parse(xhr.responseText);
                        msg = json.message || msg;
                    } catch (e) {
                        msg = xhr.responseText || msg;
                    }
                }

                $('#reset-msg')
                    .addClass('text-danger')
                    .text(msg)
                    .fadeIn();
            },

            complete: function () {
                btn.prop('disabled', false).text('Reset Password');
            }
        });
    });
});
</script>

</body>
</html>