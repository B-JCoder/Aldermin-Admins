@extends('layouts.admin-dashboard.app')

@section('title', 'Edit Student Promote')

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

<style>
    /* (2) Reminders For Fee Schedule ko light dikhane ke liye */
    .disabled-section {
        opacity: 0.5;
        pointer-events: none;
    }
</style>
@endpush

@section('page-title-bread-crumb')
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Student Promote</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                 <a href="" class="btn btn-info d-none d-lg-block m-l-12 mr-2"></i> View</a>
            </ol>
        </div>
    </div>
</div>
@endsection

@section('content')

<div class="row">
    <div class="col-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title text-center">Edit Student Promote</h4>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        <form method="POST" action="" enctype="multipart/form-data" novalidate
                            style="background-color: #f0f0f0; padding: 20px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);">
                            @csrf
                            <div class="form-row">

                                <div class="col-md-12 mb-3">
                                    <span>Roll Number :</span>
                                </div>

                                <div class="col-md-12 mb-3">
                                    <span>Name :</span>
                                </div>

                                <div class="col-md-12 mb-3">
                                    <hr>
                                    <h4>Update Roll Number</h4>
                                </div>

                                <div class="col-md-12 mb-3">
                                    <label for="">New Roll Number</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="" value="2025-26">
                                </div>

                               <div class="col-md-12 mb-3">
                                    <hr>
                                    <h4>Promote</h4>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Promote Type</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name=""
                                        style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Promotion Session</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name=""
                                        style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Class</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name=""
                                        style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Section</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name=""
                                        style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-12 text-center">
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
<script src="{{ url('assets/node_modules/select2/dist/js/select2.full.min.js') }}"></script>
<script src="{{ url('assets/node_modules/icheck/icheck.min.js') }}"></script>
<script src="{{ url('assets/node_modules/icheck/icheck.init.js') }}"></script>
<script src="{{ url('assets/node_modules/moment/moment.js') }}"></script>
<script src="{{ url('assets/node_modules/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js') }}"></script>
<script src="{{ url('assets/node_modules/datatables.net/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ url('assets/node_modules/datatables.net-bs4/js/dataTables.responsive.min.js') }}"></script>

<script>
    $(".select2").select2();
    $('#start_date').bootstrapMaterialDatePicker({ weekStart: 0, time: false });      
    $('#end_date').bootstrapMaterialDatePicker({ weekStart: 0, time: false });  

    $(document).ready(function() {
        // (1) Show / Hide Reminder Settings Button Text & Icon
        $('#filter-toggle').click(function() {
            $('.filter-fields').toggle();
            if ($('.filter-fields').is(':visible')) {
                $(this).html('<i class="fa fa-minus-circle"></i> Hide Reminder Settings');
            } else {
                $(this).html('<i class="fa fa-plus-circle"></i> Show Reminder Settings');
            }
        });

        // (2) Main Form Reminder For Fee Due → Enable/Disable toggle
        function toggleSetReminder() {
            let selected = $('input[name="reminder_for_online_exam"]:checked').val();
            if (selected == "1") {
                $('#set-reminder-section').show();
            } else {
                $('#set-reminder-section').hide();
            }
        }
        toggleSetReminder();
        $(document).on('change', 'input[name="reminder_for_online_exam"]', function() {
            toggleSetReminder();
        });

        // (3) Modal Reminder For Fee Due → Enable/Disable toggle
        function toggleModalSetReminder() {
            let selected = $('input[name="reminder_modal"]:checked').val();
            if (selected == "1") {
                $('#modal-set-reminder-section').show();
            } else {
                $('#modal-set-reminder-section').hide();
            }
        }
        toggleModalSetReminder();
        $(document).on('change', 'input[name="reminder_modal"]', function() {
            toggleModalSetReminder();
        });
    });
</script>
<script>
    $(document).ready(function () {

        // Re-initialize iCheck
        $('.check').iCheck({
            checkboxClass: 'icheckbox_square-red',
            radioClass: 'iradio_square-red'
        });

        // Show/hide custom attendance table
        $('#enable_custom_attendance').on('ifChanged', function () {
            if ($(this).is(':checked')) {
                $('#custom_attendance_table').slideDown();
            } else {
                $('#custom_attendance_table').slideUp();
            }
        });

        // Show/hide lock duration section on attendance frequency change
        $('input[name="attendance_mark_frequency"]').on('ifChanged', function () {
            let selected = $('input[name="attendance_mark_frequency"]:checked').val();
            if (selected === "0") {
                $('#lock_duration_section').slideDown();
            } else {
                $('#lock_duration_section').slideUp();
            }
        });

        // Run on page load (in case Lock is pre-selected)
        if ($('input[name="attendance_mark_frequency"]:checked').val() === "0") {
            $('#lock_duration_section').show();
        }
    });
</script>
@endpush
