<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">

<!-- Bootstrap CSS -->
<link href="{{ url('assets/node_modules/bootstrap/dist/css/bootstrap.min.css') }}" rel="stylesheet">

<!-- Page CSS -->
<link href="{{ url('assets/dist/css/pages/login-register-lock.css') }}" rel="stylesheet">

<!-- Custom CSS -->
<link href="{{ url('assets/dist/css/style.min.css') }}" rel="stylesheet">

</head>

<body>

<div class="row mt-5">
    <div class="col-7" style="margin: auto;">
        <div class="card">
            <div class="card-body">
                <div class="row justify-content-center">
                    <div class="col-md-12">

                        <form id="adminForm" enctype="multipart/form-data" style="background-color:#f0f0f0;padding:20px;box-shadow:0px 4px 8px rgba(0,0,0,0.1);">
                            @csrf

                            <div id="adminFormError" class="text-danger mb-2" style="display:none;"></div>
                            <div id="adminFormSuccess" class="text-success mb-2" style="display:none;"></div>

                            <div class="form-row">

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title text-center">Admin Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label>Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" name="name">
                                    <div class="text-danger" id="admin-name-error"></div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label>Email <span class="text-danger">*</span></label>
                                    <input type="email" class="form-control" name="email">
                                    <div class="text-danger" id="admin-email-error"></div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label>Password <span class="text-danger">*</span></label>
                                    <input type="password" class="form-control" name="password">
                                    <div class="text-danger" id="admin-password-error"></div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label>Age</label>
                                    <input type="number" class="form-control" name="age">
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title text-center">School Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label>School Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" name="schoolName">
                                    <div class="text-danger" id="school-name-error"></div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label>School Email <span class="text-danger">*</span></label>
                                    <input type="email" class="form-control" name="schoolEmail">
                                    <div class="text-danger" id="school-email-error"></div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label>Contact Person</label>
                                    <input type="text" class="form-control" name="contactPerson">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label>Address</label>
                                    <input type="text" class="form-control" name="address">
                                </div>

                                <div class="col-md-12 mb-3">
                                    <label>Branch Name <span class="text-danger">*</span></label>
                                    <input type="text" class="form-control" name="branchName">
                                    <div class="text-danger" id="branch-name-error"></div>
                                </div>

                            </div>

                            <div class="d-flex justify-content-center">
                                <button class="btn btn-primary" type="submit">Save</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- ================== SCRIPTS ================== -->
<!-- jQuery first -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Bootstrap Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

<!-- Axios -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<!-- Your custom JS -->
<script>
$(document).ready(function() {

    $("#adminForm").submit(function(e) {
        e.preventDefault();

        $('#adminFormError').hide().text('');
        $('#adminFormSuccess').hide().text('');
        $('#admin-name-error, #admin-email-error, #admin-password-error, #school-name-error, #school-email-error, #branch-name-error').text('');
        $("input[name='name'], input[name='email'], input[name='password'], input[name='schoolName'], input[name='schoolEmail'], input[name='branchName']").removeClass('is-invalid');

        let name = $("input[name='name']").val().trim();
        let adminEmail = $("input[name='email']").val().trim();
        let adminPassword = $("input[name='password']").val();
        let ageVal = $("input[name='age']").val();

        let schoolName = $("input[name='schoolName']").val().trim();
        let schoolEmail = $("input[name='schoolEmail']").val().trim();
        let contactPerson = $("input[name='contactPerson']").val().trim();
        let address = $("input[name='address']").val().trim();
        let branchName = $("input[name='branchName']").val().trim();

        // ===== Frontend validation =====
        let hasError = false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name) {
            $('#admin-name-error').text('Admin name is required');
            $("input[name='name']").addClass('is-invalid');
            hasError = true;
        }
        if (!adminEmail) {
            $('#admin-email-error').text('Admin email is required');
            $("input[name='email']").addClass('is-invalid');
            hasError = true;
        } else if (!emailRegex.test(adminEmail)) {
            $('#admin-email-error').text('Please enter a valid admin email');
            $("input[name='email']").addClass('is-invalid');
            hasError = true;
        }
        if (!adminPassword) {
            $('#admin-password-error').text('Password is required');
            $("input[name='password']").addClass('is-invalid');
            hasError = true;
        } else if (adminPassword.length < 8) {
            $('#admin-password-error').text('Password must be at least 8 characters');
            $("input[name='password']").addClass('is-invalid');
            hasError = true;
        }
        if (!schoolName) {
            $('#school-name-error').text('School name is required');
            $("input[name='schoolName']").addClass('is-invalid');
            hasError = true;
        }
        if (!schoolEmail) {
            $('#school-email-error').text('School email is required');
            $("input[name='schoolEmail']").addClass('is-invalid');
            hasError = true;
        } else if (!emailRegex.test(schoolEmail)) {
            $('#school-email-error').text('Please enter a valid school email');
            $("input[name='schoolEmail']").addClass('is-invalid');
            hasError = true;
        }
        if (!branchName) {
            $('#branch-name-error').text('Branch name is required');
            $("input[name='branchName']").addClass('is-invalid');
            hasError = true;
        }

        if (hasError) {
            return;
        }

        let payload = {
            adminInfo: {
                name: name,
                email: adminEmail,
                password: adminPassword,
                age: parseInt(ageVal) || 0,
                role: "admin"
            },
            schoolInfo: {
                schoolName: schoolName,
                schoolEmail: schoolEmail,
                contactPerson: contactPerson,
                address: address,
                branchName: branchName
            }
        };

        let token = localStorage.getItem('token');

        if (!token) {
            alert('Session expired. Please login again.');
            // Redirect to common login page (single view for super admin & admin)
            window.location.href = "{{ route('saas.login.view') }}";
            return;
        }

        axios.post("https://api.aldermin.online/Admin/create-admin-school", payload, {
            headers: { Authorization: `Bearer ${token}` }
        })
        .then(function(response) {
            console.log("Success:", response.data);
            $("#adminForm")[0].reset();
            $('#adminFormSuccess')
                .text('Your registration has been successfully completed.')
                .fadeIn();
        })
        .catch(function(error) {
            console.error("Error:", error.response ? error.response.data : error);

            let msg = 'Something went wrong while saving admin & school. Please try again.';

            if (error.response && error.response.data) {
                // Try common patterns: { message: "..." } or { error: "..." } or { errors: {field: [..]} }
                if (typeof error.response.data === 'string') {
                    msg = error.response.data;
                } else if (error.response.data.message) {
                    msg = error.response.data.message;
                } else if (error.response.data.error) {
                    msg = error.response.data.error;
                } else if (error.response.data.errors) {
                    try {
                        // take first validation error
                        const firstKey = Object.keys(error.response.data.errors)[0];
                        const firstVal = error.response.data.errors[firstKey][0];
                        msg = firstVal || msg;
                    } catch (e) {}
                }
            }

            $('#adminFormError')
                .text(msg)
                .fadeIn();
        });
    });
});
</script>


</body>
</html>
