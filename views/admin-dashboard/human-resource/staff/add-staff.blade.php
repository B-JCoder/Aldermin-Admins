@extends('layouts.admin-dashboard.app')

@section('title', 'Add Staff')

@push('page-styles')

<!-- Select2 plugins css -->
<link href="{{ url('assets/node_modules/select2/dist/css/select2.min.css') }}" rel="stylesheet" type="text/css" />

<link rel="stylesheet" type="text/css" href="{{ asset('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">

<link href="../assets/node_modules/switchery/dist/switchery.min.css" rel="stylesheet" />

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
        <h4 class="text-themecolor">Add Staff</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <!-- <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li> -->

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
                                    <h4 class="card-title">Basic Info</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="staff-no">Staff No</label>   <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="staff-no" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="role">Role</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="role" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="department">Department</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="department" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="designation">Designation</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="designation" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="first-name">First Name</label> 
                                    <input type="text" class="form-control" name="first-name" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="last-name">Last Name</label> <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="last-name" id="last-name" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="father-name">Father Name</label> 
                                    <input type="text" class="form-control" name="father-name" id="father-name" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="mother-name">Mother Name</label> 
                                    <input type="text" class="form-control" name="mother-name" id="mother-name" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="email-address">Email Address</label> 
                                    <input type="text" class="form-control" name="email-address" id="email-address" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="gender">Gender</label> 
                                    <select class="select2 form-control custom-select" name="gender" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="date_of_birth">Date of Birth</label> <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="date_of_birth" id="date_of_birth" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="joining date">Joining Date</label> <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="joining date" id="joining date" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="phone/mobile">Phone/Mobile</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="phone/mobile" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="marital-status">Marital Status</label> 
                                    <select class="select2 form-control custom-select" name="marital-status" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="emergency-mobile">Emergency Mobile</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="emergency-mobile" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="driving-liacense">Driving Liacense</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="driving-liacense" placeholder="" value="">
                                </div>

                                <div class="col-md-9 mb-3">
                                    <label for="">Staff photo</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-3
                                 mb-3">
                                    <label for="status">Show as Expert Staff</label>
                                    <input type="checkbox" checked class="js-switch text-primary" data-size="small" />
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="discription">Address</label>
                                    <textarea class="form-control" name="" id=""></textarea>
                                    @error('')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="discription">Permanent Address</label>
                                    <textarea class="form-control" name="" id=""></textarea>
                                    @error('')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="discription">Experience</label>
                                    <textarea class="form-control" name="" id=""></textarea>
                                    @error('')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Personal Info</h4>
                                    <hr>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="epf-no">EPF No</label>
                                    <input type="text" class="form-control" name="epf-no" placeholder="epf-no" value="">
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="basic-salary">Basick Salary</label>
                                    <input type="text" class="form-control" name="basic-salary" placeholder="basic-salary" value="">
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="contract-type">Contract Type</label>
                                    <select class="select2 form-control custom-select" name="contract-type"
                                        style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-12 mb-3">
                                    <label for="location">Location</label>
                                    <textarea class="form-control" name="" id=""></textarea>
                                    @error('')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Bank Info Detail</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="religion">Bank Account Name</label>
                                    <input type="text" class="form-control" name="religion" placeholder="Religion" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="caste">Bank Account No</label>
                                    <input type="text" class="form-control" name="caste" placeholder="caste" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="email">Bank Name</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="email" placeholder="Email" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="">Branch Name</label>
                                    <input type="text" class="form-control" name="mobile" placeholder="Mobile" value="">
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Social Link Detail</h4>
                                    <hr>
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="facebook-url">Facebook Url</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="facebook-url" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="">Twiter Url</label>
                                    <input type="text" class="form-control" name="twiter-url" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="linkedin-url">Linkedin Url</label>
                                    <input type="text" class="form-control" name="linkedin-url" placeholder="" value="">
                                </div>

                                <div class="col-md-3 mb-3">
                                    <label for="instagram-url">Instagram Url</label>
                                    <input type="text" class="form-control" name="instagram-url" placeholder="" value="">
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Document Info</h4>
                                    <hr>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="">Resume</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="">Joining Date</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-4 mb-3">
                                    <label for="">Other Document</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-12 mt-3">
                                    <h4 class="card-title">Custom Field</h4>
                                    <hr>
                                </div>

                                <div class="col-md-12 mb-3">
                                    <label for="nic">NIC</label>
                                    <input type="text" class="form-control" name="nic" placeholder="" value="">
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

<script src="../assets/node_modules/switchery/dist/switchery.min.js"></script>

<script>
    $(".select2").select2();
    
    $(function () {
        // Switchery
            var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
            $('.js-switch').each(function () {
                new Switchery($(this)[0], $(this).data());
            });
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