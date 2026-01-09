@extends('layouts.admin-dashboard.app')

@section('title', 'Seat Plan')

@push('page-styles')

<!-- icheck -->
<link href="{{ url('assets/node_modules/icheck/skins/all.css') }}" rel="stylesheet">
<link href="{{ url('assets/dist/css/pages/form-icheck.css') }}" rel="stylesheet">

<!-- Select2 plugins css -->
<link href="{{ url('assets/node_modules/select2/dist/css/select2.min.css') }}" rel="stylesheet" type="text/css" />

<link rel="stylesheet" type="text/css" href="{{ asset('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">

<!-- Data table styles -->
<link rel="stylesheet" type="text/css" href="{{ url('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">
@endpush

@section('page-title-bread-crumb')
<!-- Bread crumb and right sidebar toggle -->
<!-- ============================================================== -->
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Seat Plan</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <!-- <li class="breadcrumb-item active"><a href="javascript:void(0)">Setting</a></li>
                <li class="breadcrumb-item active"><a href="">Add Academic Year</a></li> -->
            </ol>
        </div>
    </div>
</div>
<!-- ============================================================== -->
<!-- End Bread crumb and right sidebar toggle -->
@endsection

@section('content')
<div class="row">
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title"> Search Seat Plan</h4>
                <div class="row">
                    <div class="col-md-12">
                        <form method="POST" action="" enctype="multipart/form-data" novalidate>
                            @csrf
                            <div class="form-row">
                                
                                <div class="col-md-12 mb-3">
                                    <label for="">Exam</label>  <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name=" " style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                    @error('')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Class</label>  <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name=" " style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                    @error('')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>

                                <div class="col-md-6 mb-3">
                                    <label for="">Section</label>  <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name=" " style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                    @error('')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>

                                <button class="btn btn-primary" type="submit">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Seat Plans</h4>
                <div class="table-responsive m-t-20">
                    <table id="data_table" class="display nowrap table table-hover table-striped table-bordered"
                        cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Student Name</th>
                                <th>Admission No</th>
                                <th>Class</th>
                                <th>Father Name</th>
                                <th>Category</th>
                                <th>Gender</th> 
                                <th>select</th> 
                            </tr>
                        </thead>
                        <tbody id="tbl_data">
                            @php $sn = 1 @endphp
                            
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><div class="col-12">
                                        <div class="form-group">
                                            <div class="input-group d-flex align-items-center">
                                                <ul class="icheck-list d-flex mb-0">
                                                    <li class="d-flex align-items-center">
                                                        <label for="is_mandatory" class="mr-4 mb-0">Average Passing Examination</label>
                                                        <input type="checkbox" class="check" id="is_mandatory" name="is_mandatory" value="1" data-radio="iradio_square-red">
                                                    </li>
                                                </ul>
                                                @error('is_tuition_fee')<div class="text-danger">{{ $message }}</div>@enderror
                                            </div>
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

<!-- icheck -->
<script src="{{ url('assets/node_modules/icheck/icheck.min.js') }}"></script>
<script src="{{ url('assets/node_modules/icheck/icheck.init.js') }}"></script>

<!-- Select2 Plugin JavaScript -->
<script src="{{ url('assets/node_modules/select2/dist/js/select2.full.min.js') }}" type="text/javascript"></script>
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

@endpush
