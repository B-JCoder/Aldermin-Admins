@extends('layouts/app')

@section('title', 'Page Title')

@push('page-styles')

<!-- Date picker plugins css -->
<link
    href="{{ url('assets/node_modules/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css') }}"
    rel="stylesheet">

<!-- Select2 plugins css -->
<link href="{{ url('assets/node_modules/select2/dist/css/select2.min.css') }}" rel="stylesheet" type="text/css" />

<link rel="stylesheet" type="text/css"
    href="{{ url('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">
<!-- Data table styles -->
<link rel="stylesheet" type="text/css"
    href="{{ url('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">

@endpush

@section('page-title-bread-crumb')
<!-- Bread crumb and right sidebar toggle -->
<!-- ============================================================== -->
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">My Profile</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                <!-- <li class="breadcrumb-item active">Blank Page3</li> -->
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
                <h4>Profile Details</h4>
                <hr>
                <center class="m-t-30">
                    <img src="{{ url('assets')}}/images/staff-profile/profile-img.jpg" class="img-circle" width="150" />
                    <h5 class="card-title m-t-10"></h5>
                    <h6 class="card-subtitle"></h6>
                </center>
            </div>
        </div>
    </div>
    <div class="col-md-12">
        <div class="card">
            <!-- Nav tabs -->
            <ul class="nav nav-tabs profile-tab" role="tablist">
                <li class="nav-item"> <a class="nav-link active" data-toggle="tab" href="#profile" role="tab">PROFILE</a> </li>
            </ul>
            <!-- Tab panes -->
            <div class="tab-content">
                <div class="tab-pane active" id="profile" role="tabpanel">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-12 col-xs-6 b-r"> <strong>PERSONAL INFO</strong>
                                <hr>
                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="col-md-12 col-xs-6 b-r"> <strong>Mobile No</strong>
                                            </td>
                                            <td>{{ "" }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12 col-xs-6 b-r"> <strong>ADDRESS</strong>
                                <hr>
                                <table class="table table-striped">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="col-md-12 col-xs-6 b-r"> <strong>Current Address</strong>
                                            </td>
                                            <td>{{ "" }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@push('page-scripts')

<!-- Date Picker Plugin JavaScript -->
<script src="{{ url('assets/node_modules/moment/moment.js') }}"></script>
<script
    src="{{ url('assets/node_modules/bootstrap-material-datetimepicker/js/bootstrap-material-datetimepicker.js') }}"></script>

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
    // MAterial Date picker    
    $('#from_date, #to_date').bootstrapMaterialDatePicker({ weekStart: 0, time: false });

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

    $("#class_id").change(function () {
        let class_id = $(this).val();

        if (class_id == "") {
            $("#section_id").html('<option value="">Select</option>');

            return;
        }

        $.get("/academics/assign-subjects/class-section/" + class_id, function (data, status) {

            console.log(data);
            var tag = '';
            data.sections.forEach(function (section) {
                tag += '<option value="' + section.id + '">' + section.section_name + '</option>';
            });
            $("#section_id").html(tag);
        });
    });

    $("#role_id").change(function () {
        let role_id = $(this).val();

        if (role_id == "") {
            $("#section_id").html('<option value="">Select</option>');

            return;
        }

        $.get("/human-resourse/staff_directory/class-section/" + role_id, function (data, status) {

            console.log(data);
            var tag = '';
            data.$staffs.forEach(function (staff) {
                tag += '<option value="' + staff.id + '">' + staff.staff_id + '</option>';
            });
            $("#staff_id").html(tag);
        });
    });
</script>
@endpush