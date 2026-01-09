@extends('layouts.admin-dashboard.app')

@section('title', 'Student Category')

@push('page-styles')

<link rel="stylesheet" type="text/css" href="{{ asset('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">

<!-- Data table styles -->
<link rel="stylesheet" type="text/css" href="{{ url('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">
@endpush

@section('page-title-bread-crumb')
<!-- Bread crumb and right sidebar toggle -->
<!-- ============================================================== -->
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Student Category</h4>
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
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Add Category</h4>
                <div class="row">
                    <div class="col-md-12">
                        <form method="POST" action="" enctype="multipart/form-data" novalidate>
                            @csrf
                            <div class="form-row">
                                <div class="col-md-12 mb-3">
                                    <label for="first_name">Category Name</label>  <span class="text-danger">*</span>
                                    <input type="text" class="form-control" name="first_name" placeholder="" value="">
                                    @error('')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>   
                                <button class="btn btn-primary" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-md-8">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Category List</h4>
                <div class="table-responsive m-t-20">
                    <table id="data_table" class="display nowrap table table-hover table-striped table-bordered"
                        cellspacing="0" width="100%">
                        <thead>
                            <tr>
                                <th>SN</th>
                                <th>Category</th>
                                <th>Grade</th>
                                <th>Section</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody id="tbl_data">
                            @php $sn = 1 @endphp
                            
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
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
