{{-- Forgot Password Page --}}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Aldermin - Forgot Password</title>

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

<!-- Forgot Password Section (SAME AS LOGIN) -->
<section id="wrapper" class="login-register d-flex align-items-center justify-content-center">
    <div class="login-box card">
        <div class="card-body">

            <form id="forgotForm" class="text-center" novalidate>
                @csrf

                <!-- Logo -->
                <div class="mb-4">
                    <img src="{{ url('assets/images/aldermin-logo.png') }}" alt="Aldermin" style="max-width:200px;">
                </div>

                <h3 class="box-title m-b-20">Forgot Password</h3>

                <!-- Success / Error -->
                <div id="forgot-msg" class="mt-3" style="display:none;"></div>

                <!-- Email -->
                <div class="form-group text-left">
                    <input class="form-control"
                           type="email"
                           id="forgot-email"
                           placeholder="Enter email">
                    <div class="text-danger" id="forgot-email-error"></div>
                </div>

                <!-- Button -->
                <button class="btn btn-info btn-lg btn-block btn-rounded mt-3" type="submit">
                    Send Reset Link
                </button>

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

    $('#forgotForm').on('submit', function (e) {
        e.preventDefault();

        $('#forgot-msg').hide().removeClass('text-success text-danger').text('');
        $('#forgot-email-error').text('');
        $('#forgot-email').removeClass('is-invalid');

        let email = $('#forgot-email').val().trim();
        let btn   = $('#forgotForm button[type="submit"]');

        if (!email) {
            $('#forgot-email-error').text('Email is required');
            $('#forgot-email').addClass('is-invalid');
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            $('#forgot-email-error').text('Please enter a valid email');
            $('#forgot-email').addClass('is-invalid');
            return;
        }

        btn.prop('disabled', true).text('Sending...');

        $.ajax({
            url: 'https://api.aldermin.online/Admin/forgot-password',
            method: 'POST',
            contentType: 'application/json',
            headers: { 'Accept': 'application/json' },
            data: JSON.stringify({ email }),

            success: function (res) {
                $('#forgot-msg')
                    .addClass('text-success')
                    .text(res.message || 'Password reset link sent successfully')
                    .fadeIn();

                // Save email for OTP page (used for verify + resend)
                try {
                    localStorage.setItem('forgotEmail', email);
                } catch (e) {}

                $('#forgot-email').prop('disabled', true);

                setTimeout(() => {
                    window.location.href = "{{ route('saas.otp.view') }}";
                }, 4000);
            },

            error: function (xhr) {
                let msg = 'Something went wrong';
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    msg = xhr.responseJSON.message;
                }

                $('#forgot-msg')
                    .addClass('text-danger')
                    .text(msg)
                    .fadeIn();
            },

            complete: function () {
                btn.prop('disabled', false).text('Send Reset Link');
            }
        });
    });
});
</script>

</body>
</html>
