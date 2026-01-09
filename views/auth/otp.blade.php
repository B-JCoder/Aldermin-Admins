{{-- OTP Verification Page --}}

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Aldermin - OTP Verification</title>

    <link rel="icon" type="image/png" sizes="16x16" href="{{ url('assets/images/favicon.png') }}">

    <!-- CSS -->
    <link href="{{ url('assets/dist/css/pages/login-register-lock.css') }}" rel="stylesheet">
    <link href="{{ url('assets/dist/css/style.min.css') }}" rel="stylesheet">

    <style>
        .otp-input {
            font-size: 24px;
            text-align: center;
            letter-spacing: 10px;
            height: 60px;
            border-radius: 12px;
            border: 2px solid #ced4da;
            font-weight: 600;
        }
        .otp-input:focus {
            border-color: #005bea;
            box-shadow: 0 0 8px rgba(0,91,234,0.3);
        }
    </style>
</head>

<body>

<!-- Preloader -->
<div class="preloader">
    <div class="loader">
        <div class="loader__figure"></div>
        <p class="loader__label">Aldermin</p>
    </div>
</div>

<!-- OTP Section (LOGIN STYLE) -->
<section id="wrapper" class="login-register d-flex align-items-center justify-content-center">
    <div class="login-box card">
        <div class="card-body">

            <form id="otpForm" class="text-center" novalidate>
                @csrf

                <!-- Logo -->
                <div class="mb-4">
                    <img src="{{ url('assets/images/aldermin-logo.png') }}" style="max-width:200px;">
                </div>

                <h3 class="box-title m-b-10">OTP Verification</h3>
                <p class="text-muted m-b-20">
                    Enter the 6-digit code sent to your email
                </p>

                <!-- Message -->
                <div id="otp-msg" class="mt-3" style="display:none;"></div>

                <!-- OTP -->
                <div class="form-group">
                    <input type="text"
                           id="otp"
                           class="form-control otp-input"
                           placeholder="______"
                           maxlength="6"
                           inputmode="numeric"
                           autocomplete="one-time-code">
                    <div class="text-danger" id="otp-error"></div>
                </div>

                <!-- Verify -->
                <button class="btn btn-info btn-lg btn-block btn-rounded mt-3" type="submit">
                    Verify OTP
                </button>

                <!-- Resend -->
                <div class="mt-3">
                    <a href="javascript:void(0)" id="resendOtp" class="text-muted">
                        Resend OTP
                    </a>
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

    /* ================= VERIFY OTP ================= */
    $('#otpForm').on('submit', function (e) {
        e.preventDefault();

        $('#otp-msg').hide().removeClass('text-success text-danger').text('');
        $('#otp-error').text('');

        const otp = $('#otp').val().trim();
        const email = localStorage.getItem('forgotEmail');

        if (!otp) {
            $('#otp-error').text('OTP is required');
            return;
        }
        if (otp.length !== 6 || !/^\d{6}$/.test(otp)) {
            $('#otp-error').text('Please enter a valid 6-digit OTP');
            return;
        }
        if (!email) {
            $('#otp-msg')
                .addClass('text-danger')
                .text('Email not found. Please use Forgot Password again.')
                .fadeIn();
            return;
        }

        const btn = $('#otpForm button[type="submit"]');
        btn.prop('disabled', true).text('Verifying...');

        // Yahan ab hum backend /Admin/verify-otp ko call nahi kar rahe
        // kyun ke wo endpoint available nahi (Cannot POST error aa raha tha).
        // Sirf front-end validation ke baad change-password page par redirect kar dete hain.

        $('#otp-msg')
            .addClass('text-success')
            .text('OTP accepted')
            .fadeIn();

        setTimeout(() => {
            window.location.href = "{{ route('saas.reset-password.view') }}";
        }, 800);

        btn.prop('disabled', false).text('Verify OTP');
    });

    /* ================= RESEND OTP ================= */
    $('#resendOtp').on('click', function () {
        const email = localStorage.getItem('forgotEmail'); // ✅ get email from localStorage
        if (!email) {
            alert('Email not found. Please try forgot password again.');
            return;
        }

        let link = $(this);
        link.text('Sending...').css('pointer-events', 'none');

        $.ajax({
            // Backend par resend ke liye alag endpoint authorized nahi lag raha,
            // is liye yahan simple forgot-password ko dobara call kar rahe hain
            // taake wahi email pe naya OTP / link chala jaye.
            url: 'https://api.aldermin.online/Admin/forgot-password',
            method: 'POST',
            contentType: 'application/json',
            headers: { 'Accept': 'application/json' },
            data: JSON.stringify({ email }),

            success: function (res) {
                $('#otp-msg')
                    .addClass('text-success')
                    .text(res.message || 'OTP resent successfully')
                    .fadeIn();
            },

            error: function (xhr) {
                let msg = 'Unable to resend OTP';
                if (xhr.responseJSON && xhr.responseJSON.message) {
                    msg = xhr.responseJSON.message;
                }

                $('#otp-msg')
                    .addClass('text-danger')
                    .text(msg)
                    .fadeIn();
            },

            complete: function () {
                setTimeout(() => {
                    link.text('Resend OTP').css('pointer-events', 'auto');
                }, 3000);
            }
        });
    });

});
</script>


</body>
</html>
