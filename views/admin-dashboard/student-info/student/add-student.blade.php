@extends('layouts.admin-dashboard.app')

@section('title', 'Add Student')

@push('page-styles')

<!-- Select2 plugins css -->
<link href="{{ url('assets/node_modules/select2/dist/css/select2.min.css') }}" rel="stylesheet" type="text/css" />

<link rel="stylesheet" type="text/css" href="{{ asset('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">

<!-- icheck -->
<link href="{{ url('assets/node_modules/icheck/skins/all.css') }}" rel="stylesheet">
<link href="{{ url('assets/dist/css/pages/form-icheck.css') }}" rel="stylesheet">

<!-- Date picker plugins css -->
<link href="{{ url('assets/node_modules/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css') }}" rel="stylesheet">

<!-- Data table styles -->
<link rel="stylesheet" type="text/css" href="{{ url('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">

@endpush

@section('page-title-bread-crumb')
<!-- Bread crumb and right sidebar toggle -->
<!-- ============================================================== -->
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Add Student</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <!-- <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li> -->

                <li class="breadcrumb-item"><a href="">< Student Detail</a></li>
            </ol>
        </div>
    </div>
</div>
<!-- ============================================================== -->
<!-- End Bread crumb and right sidebar toggle -->
@endsection

@section('content')

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        
                        <form method="POST" action="#" enctype="multipart/form-data" novalidate
                            style="background-color: #f0f0f0; padding: 20px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);">
                            @csrf
                            <div class="form-row">

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Academic Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="academic_year_id">Academic Year</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="academic_year_id" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="class">Class</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="class" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="section">Section</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="section" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="admission_number">Admission Number</label> 
                                    <input type="text" class="form-control" name="admission_number" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="admission_date">Admission Date</label> <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="admission_date" id="admission_date" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="admission_date">Roll No</label> 
                                    <input type="text" class="form-control" name="admission_date" id="admission_date" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="section">Student Group</label> 
                                    <select class="select2 form-control custom-select" name="section" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="first_name">ID Card</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="first_name" placeholder="" value="">
                                </div>
                      
                               <!-- Personal Details Section -->
                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Personal Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="first_name">First Name</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="first_name" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="last_name">Last Name</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="last_name" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="gender" class="form-label">Gender :</label>  <span class="text-danger">*</span>
                                    <div class="form-group">
                                        <div class="input-group icheck-list">
                                            <label>
                                                <input type="radio" class="check" name="gender" value="1"
                                                    data-radio="iradio_square-red" checked> Male
                                            </label>
                                            &nbsp;&nbsp;
                                            <label>
                                                <input type="radio" class="check" name="gender" value="0"
                                                    data-radio="iradio_square-red"> Female
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="date_of_birth">Date of Birth</label> <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="date_of_birth" id="date_of_birth" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="religion">Religion</label>
                                    <input type="text" class="form-control" name="religion" placeholder="Religion" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="caste">Caste</label>
                                    <input type="text" class="form-control" name="caste" placeholder="caste" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="">photo</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Contact Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="email">Email Address</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="email" placeholder="Email" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="">Phone/Mobile</label>
                                    <input type="text" class="form-control" name="mobile" placeholder="Mobile" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="current-address">Current Adderess</label>
                                    <input type="text" class="form-control" name="current-address" placeholder="current address" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="permanent-address">Permanent Address</label>
                                    <input type="text" class="form-control" name="permanent-address" placeholder="Permanent Address<" value="">
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Medical Record</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="blood_group">Blood Group</label>
                                    <select class="select2 form-control custom-select" name="blood_group"
                                        style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="">Category</label>
                                    <select class="select2 form-control custom-select" name="student_category_id" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="height">Height</label>
                                    <input type="text" class="form-control" name="height" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="weight">Weight</label>
                                    <input type="text" class="form-control" name="weight" placeholder="" value="">
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Parents Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="father-name">Father Name</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="father-name" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="occupation">Occupation</label>
                                    <input type="text" class="form-control" name="occupation" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="father-mobile">Father's Mobile</label>
                                    <input type="text" class="form-control" name="father-mobile" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="">Father-Photo</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>
                                
                                <div class="col-md-3 mb-3">
                                    <label for="mother-name">Mother Name</label>
                                    <input type="text" class="form-control" name="Mother-name" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="occupation">Occupation</label>
                                    <input type="text" class="form-control" name="occupation" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="Mother-mobile">Mother's Mobile</label>
                                    <input type="text" class="form-control" name="Mother-mobile" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="">Mother-Photo</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Guardian Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="guardian-name0">Guardians Name</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="guardian-name0" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="">Relation with Guardian</label>  <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="relation-guardian" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="guardian-email">Guardians Email</label>
                                    <input type="text" class="form-control" name="guardian-email" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="">Guardians-Photo</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="guardian-mobile">Guardians Mobile</label>
                                    <input type="text" class="form-control" name="guardian-mobile" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="occupation">Occupation</label>
                                    <input type="text" class="form-control" name="occupation" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="guardian-address">Guardians Address</label>
                                    <input type="text" class="form-control" name="guardian-address" placeholder="" value="">
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Father Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="national-id-number">National ID Number</label>
                                    <input type="text" class="form-control" name="national-id-number" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="birth-certificate-number">Birth Certificate Number</label>
                                    <input type="text" class="form-control" name="birth-certificate-number" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="additional-notes">Additional Notes</label>
                                    <input type="text" class="form-control" name="additional-notes" placeholder="" value="">
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Bank Account Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="bank-name">Bank Name</label>
                                    <input type="text" class="form-control" name="bank-name" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="account-number">Account Number</label>
                                    <input type="text" class="form-control" name="account-number" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="account-tittle">Account Tittle</label>
                                    <input type="text" class="form-control" name="account-tittle" placeholder="" value="">
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Document Attechments</h4>
                                    <hr>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="document-01-title">Document 01 Title</label>
                                    <input type="text" class="form-control" name="document-01-title" placeholder="" value="">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Document 01 file</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="document-02-title">Document 02 Title</label>
                                    <input type="text" class="form-control" name="document-02-title" placeholder="" value="">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Document 02 file</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="document-03-title">Document 03 Title</label>
                                    <input type="text" class="form-control" name="document-03-title" placeholder="" value="">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Document 03 file</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Previous School Info</h4>
                                    <hr>
                                </div>

                                <div class="col-md-12 mb-3">
                                    <label for="previous-school-info">Previous School Info</label>
                                    <input type="text" class="form-control" name="previous-school-info" placeholder="" value="">
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Transport Information</h4>
                                    <hr>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Route List</label>
                                    <select class="select2 form-control custom-select" name="" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Vehicle Number</label>
                                    <select class="select2 form-control custom-select" name="" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <hr>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Dormitory</label>
                                    <select class="select2 form-control custom-select" name=" " style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Room Number</label>
                                    <select class="select2 form-control custom-select" name="" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
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

@endsection

@push('page-scripts')
<!-- Select2 Plugin JavaScript -->
<script src="{{ url('assets/node_modules/select2/dist/js/select2.full.min.js') }}" type="text/javascript"></script>

<!-- icheck -->
<script src="{{ url('assets/node_modules/icheck/icheck.min.js') }}"></script>
<script src="{{ url('assets/node_modules/icheck/icheck.init.js') }}"></script>

<!-- Date Picker Plugin JavaScript -->
<script src="{{ url('assets/node_modules/moment/moment.js') }}"></script>
<script src="{{ url('assets/node_modules/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js') }}"></script>

<!-- Data Table js -->
<!-- This is data table -->
<script src="{{ url('assets/node_modules/datatables.net/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ url('assets/node_modules/datatables.net-bs4/js/dataTables.responsive.min.js') }}"></script>

<!-- start - This is for export functionality only -->
<script src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.flash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/vfs_fonts.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js"></script>

<script>
    $(".select2").select2();
    $(function () {
        $('#data_table').DataTable({
            dom: 'Bfrtip',
            buttons: [
                //'copy', 'csv', 'excel', 'pdf', 'print'
                'copy', 'excel', 'pdf'
            ],
            responsive: true,
            "displayLength": 10,
        });
        // $('.buttons-copy, .buttons-csv, .buttons-print, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
        $('.buttons-copy, .buttons-pdf, .buttons-excel').addClass('btn btn-primary mr-1');
    });
</script>
<script>
    $("#tbl_data").on('click', 'button[name="btn_delete"]', function (e) {
        e.preventDefault();
        var form = $(this).parent('form');

        var dialogue_result = confirm("Are your sure you want to delete this record?");
        if (dialogue_result) {
            form.submit();
        }
    });
</script>
<script>
    // Material Date picker    
    $('#admission_date, #date_of_birth').bootstrapMaterialDatePicker({
        weekStart: 0,
        time: false
    });
</script>

@endpush