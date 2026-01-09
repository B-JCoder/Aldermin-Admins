@extends('layouts.admin-dashboard.app')

@section('title', 'Class Routine')

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
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Class Routine</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <ol class="breadcrumb"></ol>
    </div>
</div>
@endsection

@section('content')
<div class="row">

    <!-- ===== Form Section ===== -->
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Add Class Routine</h4>

                <form method="POST" action="" novalidate>
                    @csrf

                    <div class="form-row">

                        <div class="col-md-12 mb-3">
                            <label>Class</label> <span class="text-danger">*</span>
                            <select class="select2 form-control">
                                <option value="">Select Class</option>
                            </select>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label>Section</label> <span class="text-danger">*</span>
                            <select class="select2 form-control">
                                <option value="">Select Section</option>
                            </select>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label>Day</label> <span class="text-danger">*</span>
                            <select class="select2 form-control">
                                <option value="">Select Section</option>
                            </select>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="start-time">Start Time</label> 
                            <input type="text" class="form-control" name="start-time" id="start-time" placeholder="" value="">
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="end-time">End Time</label> 
                            <input type="text" class="form-control" name="end-time" id="end-time" placeholder="" value="">
                        </div>

                        <div class="col-md-12 mb-3">
                            <label>Subject</label> <span class="text-danger">*</span>
                            <select class="select2 form-control">
                                <option value="">Select Subject</option>
                            </select>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label>Teacher</label> <span class="text-danger">*</span>
                            <select class="select2 form-control">
                                <option value="">Select Teacher</option>
                            </select>
                        </div>

                        <div class="col-md-12 mb-3">
                            <label>Room No</label>
                            <input type="text" class="form-control" placeholder="Room / Lab">
                        </div>

                        <button class="btn btn-primary">Save</button>

                    </div>
                </form>

            </div>
        </div>
    </div>

    <!-- ===== List Section ===== -->
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Class Routine List</h4>
                <div class="table-responsive m-t-20">
                    <table id="data_table" class="display nowrap table table-hover table-striped table-bordered"
                        cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Class</th>
                                <th>Section</th>
                                <th>Day</th>
                                <th>Time</th>
                                <th>Subject</th>
                                <th>Teacher</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody id="tbl_data">
                            @php $sn = 1 @endphp
                            
                            <tr>
                                <td>1</td>
                                <td>Class 5</td>
                                <td>A</td>
                                <td>Monday</td>
                                <td>08:00 - 08:40</td>
                                <td>Math</td>
                                <td>Sir Ahmed</td>
                                <td class="text-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-outline-info dropdown-toggle"
                                            data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">Select</button>
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" href="">Edit</a>
                                            <form method="POST" action="">
                                                @csrf
                                                @method('DELETE')
                                                <button name="btn_delete" class="dropdown-item">Delete</button>
                                            </form>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            @php $sn++ @endphp
                            
                        </tbody>
                    </table>
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
    $('#start-time, #end-time').bootstrapMaterialDatePicker({
        weekStart: 0,
        time: false
    });
</script>
@endpush
