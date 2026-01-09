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
                <h4 class="text-themecolor text-center">Add Student</h4>
                <div class="row justify-content-center">
                    <div class="col-md-12">
                        
                        <form method="POST" action="#" enctype="multipart/form-data" novalidate
                            style="background-color: #f0f0f0; padding: 20px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);">
                            @csrf
                            <div class="form-row">

                                <div class="col-md-6 mb-3">
                                    <label for="academic_year_id">Class</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="academic_year_id" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="section">Section</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="section" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>
                                
                                <div class="col-md-6 mb-3">
                                    <label for="subject">Subject</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="subject" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="homework_date">Homework Date</label> <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="homework_date" id="homework_date" placeholder="" value="">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="submission_date">Submission Date</label> <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="submission_date" id="submission_date" placeholder="" value="">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="mark">Marks</label> 
                                    <input type="text" class="form-control" name="mark" id="mark" placeholder="" value="">
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">File</label>
                                    <input type="file" class="form-control" name="photo">
                                    <div class="text-info mt-2">(pdf, doc, docx, jpg, jpeg, png, txt are allowed.)</div>
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="first_name">Discription</label>
                                    <textarea class="form-control" name="" id=""></textarea>
                                    @error('')<div class="text-danger">{{ $message }}</div>@enderror
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
    $('#homework_date, #submission_date').bootstrapMaterialDatePicker({
        weekStart: 0,
        time: false
    });
</script>

@endpush