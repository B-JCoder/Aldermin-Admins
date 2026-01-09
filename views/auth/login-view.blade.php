<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Responsive -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Aldermin - Login</title>

    <!-- Favicon -->
    <link rel="icon" type="image/png" sizes="16x16" href="{{ url('assets/images/favicon.png') }}">
    
    <!-- CSS -->
    <link href="{{ url('assets/dist/css/pages/login-register-lock.css') }}" rel="stylesheet">
    <link href="{{ url('assets/dist/css/style.min.css') }}" rel="stylesheet">
</head>
<!-- <script>
    const token = localStorage.getItem('token');
    const role  = localStorage.getItem('loginRole');

    if (token && role) {
        if (role === 'superAdmin') {
            window.location.href = "/";
        }
        if (role === 'admin') {
            window.location.href = "/";
        }
    }
</script> -->
<body>

    <!-- Preloader -->
    <div class="preloader">
        <div class="loader">
            <div class="loader__figure"></div>
            <p class="loader__label">Aldermin</p>
        </div>
    </div>

    <!-- Login Section -->
    <section id="wrapper" class="login-register d-flex align-items-center justify-content-center">
        <div class="login-box card">
            <div class="card-body">

                <form id="loginform" class="text-center" novalidate method="POST" action="{{ route('saas.login.submit') }}">
                    @csrf
                
                    <!-- Error Message -->
                    <div id="error-msg" class="text-danger mt-3" style="display:none;"></div>

                    <!-- Logo -->
                    <div class="mb-4">
                        <img src="{{ url('assets/images/aldermin-logo.png') }}" alt="Aldermin" style="max-width:200px;">
                    </div>

                    <!-- Email -->
                    <div class="form-group text-left">
                        <!-- <label for="email">Email</label> -->
                        <input class="form-control" type="email" id="email" name="email" placeholder="Enter email">
                        @error('email')<div class="text-danger">{{ $message }}</div>@enderror
                        <div class="text-danger" id="email-error"></div>
                    </div>

                    <!-- Password -->
                    <div class="form-group text-left">
                        <!-- <label for="password">Password</label> -->
                        <input class="form-control" type="password" id="password" name="password" placeholder="Enter password">
                        @error('password')<div class="text-danger">{{ $message }}</div>@enderror
                        <div class="text-danger" id="password-error"></div>
                    </div>

                    <!-- Forgot Password Only -->
                    <div class="form-group d-flex justify-content-end">
                        <a href="{{ route('saas.forgot-password.view') }}" class="text-muted">
                            Forgot password?
                        </a>
                    </div>


                    <!-- Button -->
                    <button class="btn btn-info btn-lg btn-block btn-rounded mt-3" type="submit">
                        Log In
                    </button>

                </form>

            </div>
        </div>
    </section>

</body>


    <!-- Scripts -->
    <script src="{{ url('assets/node_modules/jquery/jquery-3.2.1.min.js') }}"></script>
    <script src="{{ url('assets/node_modules/popper/popper.min.js') }}"></script>
    <script src="{{ url('assets/node_modules/bootstrap/dist/js/bootstrap.min.js') }}"></script>

    <script>
        $(function() {
            $(".preloader").fadeOut();
            $('[data-toggle="tooltip"]').tooltip();

            // Login form submit
            $('#loginform').on('submit', function(e) {
                e.preventDefault();

                // clear old messages
                $('#error-msg').hide().text('');
                $('#email-error').text('');
                $('#password-error').text('');
                $('#role-error').text('');
                $('#email').removeClass('is-invalid');
                $('#password').removeClass('is-invalid');

                let email = $('#email').val().trim();
                let password = $('#password').val();
                let remember = $('#remember').is(':checked');
                let role = 'admin'; // default; actual role will come from API response

                // ===== Frontend validation =====
                let hasError = false;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (!email) {
                    $('#email-error').text('Email is required');
                    $('#email').addClass('is-invalid');
                    hasError = true;
                } else if (!emailRegex.test(email)) {
                    $('#email-error').text('Please enter a valid email address');
                    $('#email').addClass('is-invalid');
                    hasError = true;
                }

                if (!password) {
                    $('#password-error').text('Password is required');
                    $('#password').addClass('is-invalid');
                    hasError = true;
                } else if (password.length < 8) {
                    $('#password-error').text('Password must be at least 8 characters');
                    $('#password').addClass('is-invalid');
                    hasError = true;
                }

                if (hasError) {
                    return; // stop here, API call mat karo
                }

                // ===== Server-side Laravel validation (duplicate safety) =====
                $.ajax({
                    url: "{{ route('saas.login.submit') }}",
                    method: 'POST',
                    dataType: 'json',
                    data: {
                        _token: "{{ csrf_token() }}",
                        email: email,
                        password: password,
                    },
                    success: function(response) {
                        function handleLoginSuccess(apiResponse, defaultRole) {
                            const apiUser = apiResponse.user || (apiResponse.data && apiResponse.data.user) || null;
                            let finalRole = defaultRole || role;

                            if (apiUser && apiUser.role) {
                                finalRole = apiUser.role;
                            }

                            const isSuperAdmin = (finalRole === 'superAdmin' || finalRole === 'super-admin');
                            const isAdmin      = (finalRole === 'admin');
                            let ok = false;

                            if (isSuperAdmin) {
                                if (apiResponse.message === "Superadmin login successful") {
                                    ok = true;
                                }
                            } else {
                                if (apiResponse.token || (apiResponse.data && apiResponse.data.token) || apiResponse.status === true) {
                                    ok = true;
                                }
                                if (apiResponse.message && apiResponse.message.toLowerCase().includes('successful')) {
                                    ok = true;
                                }
                            }

                            if (ok) {
                                // Save tokens
                                if (apiResponse.data && apiResponse.data.token) {
                                    localStorage.setItem('token', apiResponse.data.token);
                                    if (apiResponse.data.refreshToken) {
                                        localStorage.setItem('refreshToken', apiResponse.data.refreshToken);
                                    }
                                } else if (apiResponse.token) {
                                    localStorage.setItem('token', apiResponse.token);
                                }

                                // Persist role & user for later checks
                                localStorage.setItem('loginRole', finalRole);
                                if (apiUser) {
                                    localStorage.setItem('user', JSON.stringify(apiUser));
                                }

                                // Optionally save 'remember me'
                                if (remember) {
                                    localStorage.setItem('rememberEmail', email);
                                } else {
                                    localStorage.removeItem('rememberEmail');
                                }

                                // Redirect based on role
                                if (isSuperAdmin) {
                                    window.location.href = "{{ route('saas.dashboard.index') }}";
                                } else if (isAdmin) {
                                    window.location.href = "{{ route('saas.ad.dashboard.index') }}";
                                } else {
                                    alert('Unauthorized role');
                                    localStorage.removeItem('token');
                                    localStorage.removeItem('loginRole');
                                    localStorage.removeItem('user');
                                }

                                return true;
                            }

                            return false;
                        }

                        // 1) Try super admin login first
                        $.ajax({
                            url: 'https://api.aldermin.online/Admin/loginSuperAdmin',
                            method: 'POST',
                            contentType: 'application/json',
                            headers: { 'Accept': 'application/json' },
                            data: JSON.stringify({ email: email, password: password }),
                            success: function(superRes) {
                                // If super admin login succeeded, handle and stop.
                                const done = handleLoginSuccess(superRes, 'superAdmin');
                                if (done) {
                                    return;
                                }

                                // Otherwise fall back to admin login
                                $.ajax({
                                    url: 'https://api.aldermin.online/Admin/login',
                                    method: 'POST',
                                    contentType: 'application/json',
                                    headers: { 'Accept': 'application/json' },
                                    data: JSON.stringify({ email: email, password: password }),
                                    success: function(adminRes) {
                                        const doneAdmin = handleLoginSuccess(adminRes, 'admin');
                                        if (!doneAdmin) {
                                            $('#error-msg').text('Login failed: ' + (adminRes.message || 'Invalid credentials')).fadeIn();
                                        }
                                    },
                                    error: function(xhr) {
                                        let msg;

                                        if (xhr.responseJSON && xhr.responseJSON.message) {
                                            msg = xhr.responseJSON.message;
                                        } else if (xhr.responseText) {
                                            try {
                                                let json = JSON.parse(xhr.responseText);
                                                msg = json.message || 'Something went wrong';
                                            } catch(e) {
                                                msg = xhr.responseText || 'Something went wrong';
                                            }
                                        } else {
                                            msg = 'Something went wrong';
                                        }

                                        $('#error-msg').text(msg).fadeIn();
                                    }
                                });
                            },
                            error: function(xhr) {
                                // If superadmin endpoint fails (e.g. not found / invalid super admin),
                                // try admin login as fallback.
                                $.ajax({
                                    url: 'https://api.aldermin.online/Admin/login',
                                    method: 'POST',
                                    contentType: 'application/json',
                                    headers: { 'Accept': 'application/json' },
                                    data: JSON.stringify({ email: email, password: password }),
                                    success: function(adminRes) {
                                        const doneAdmin = handleLoginSuccess(adminRes, 'admin');
                                        if (!doneAdmin) {
                                            $('#error-msg').text('Login failed: ' + (adminRes.message || 'Invalid credentials')).fadeIn();
                                        }
                                    },
                                    error: function(xhr2) {
                                        let msg;

                                        if (xhr2.responseJSON && xhr2.responseJSON.message) {
                                            msg = xhr2.responseJSON.message;
                                        } else if (xhr2.responseText) {
                                            try {
                                                let json = JSON.parse(xhr2.responseText);
                                                msg = json.message || 'Something went wrong';
                                            } catch(e) {
                                                msg = xhr2.responseText || 'Something went wrong';
                                            }
                                        } else {
                                            msg = 'Something went wrong';
                                        }

                                        $('#error-msg').text(msg).fadeIn();
                                    }
                                });
                            }
                        });
                    },
                    error: function(xhr) {
                        // Laravel validation errors
                        if (xhr.status === 422 && xhr.responseJSON && xhr.responseJSON.errors) {
                            let errors = xhr.responseJSON.errors;
                            if (errors.email && errors.email.length) {
                                $('#email-error').text(errors.email[0]);
                                $('#email').addClass('is-invalid');
                            }
                            if (errors.password && errors.password.length) {
                                $('#password-error').text(errors.password[0]);
                                $('#password').addClass('is-invalid');
                            }
                            return;
                        }

                        let msg = 'Something went wrong';
                        if (xhr.responseJSON && xhr.responseJSON.message) {
                            msg = xhr.responseJSON.message;
                        } else if (xhr.responseText) {
                            msg = xhr.responseText;
                        }

                        $('#error-msg').text(msg).fadeIn();
                    }

                });
            });

            // Forgot password toggle
            $('#to-recover').on("click", function() {
                $("#loginform").slideUp();
                $("#recoverform").fadeIn();
            });

            // Autofill remembered email
            let remembered = localStorage.getItem('rememberEmail');
            if(remembered) {
                $('#email').val(remembered);
                $('#remember').prop('checked', true);
            }
        });
    </script>
</html>
