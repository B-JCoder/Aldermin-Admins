@extends('layouts.admin-dashboard.app')

@section('title', 'Marksheet Report')

@push('page-styles')
<!-- Select2 plugins css -->
<link href="{{ url('assets/node_modules/select2/dist/css/select2.min.css') }}" rel="stylesheet" type="text/css" />

<link rel="stylesheet" type="text/css" href="{{ url('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">
<!-- Data table styles -->
<link rel="stylesheet" type="text/css" href="{{ url('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">
<style>

/* .card {
    border-radius: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
    overflow: hidden; 
} */

#gradient-bg {
    background: linear-gradient(to right, #016D5E, #43215e);
    color: white;
    padding: 15px;
    border-radius: 5px; 
}

#row-marksheet {
    border-radius: 5px; 
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
    padding: 30px; 
    margin-bottom: 30px; 
}

h4.text-center {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px; 
    color: #333; 
}

.card-body {
    padding: 20px;
}

.col-md-4 {
    padding: 10px;
}

.table-responsive {
    margin-top: 20px;
}

</style>

@endpush

@section('page-title-bread-crumb')
<!-- Bread crumb and right sidebar toggle -->
<!-- ============================================================== -->
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Marksheet Report</h4>
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
    <div class="col-12">
        <div class="card">
            <div class="card-body">                   
                <h4 class="card-title">Marksheet Report</h4>
                <div class="row">
                    <div class="col-md-12">           
                        <form method="POST" action="" novalidate>
                            @csrf
                            <div class="form-row">                                    
                                <div class="col-md-3 mb-3">
                                    <label for="exam_id">Exam </label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="exam_id" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                        
                                    </select>
                                    @error('exam_id')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="class_id">Class </label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="class_id" id="class_id" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                        
                                    </select>
                                    @error('class_id')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="section_id">Section </label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="section_id" id="section_id" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                    </select>
                                    @error('section_id')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>
                                <div class="col-md-3 mb-3">
                                    <label for="subject_id">Subject</label> <span class="text-danger">*</span>
                                    <select class="select2 form-control custom-select" name="subject_id" style="width: 100%; height:36px;">
                                        <option value="">Select</option>
                                        
                                    </select>
                                    @error('subject_id')<div class="text-danger">{{ $message }}</div>@enderror
                                </div>
                            </div>                                
                            <button class="btn btn-primary" type="submit">Search</button>
                        </form>  
                    </div>
                </div>
            </div>
        </div>
    </div>
   
</div>

<div class="row" id="row-marksheet">
    <div class="col-12">
        <div class="card" id="gradient-bg">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-4">
                        <img src="{{ url('assets/images/aldermin-logo.png') }}"
                            alt="Aldermin Logo"
                            style="height:100px;">
                    </div>
                    <div class="col-md-4"> 
                        <p><b>Exam : </b></p> 
                        <p><b>Subject : </b></p>
                        <p><b>Class : </b></p>
                    </div>
                    <div class="col-md-4">
                        <h4 class="text-right"><strong>Aldermin</strong></h4>
                        <p class="text-right">89/2 Panthapath, Dhaka 1215, Bangladesh</p>
                        <p class="text-right"><b>Email : </b>paradiseintlls@gmail.com</p>
                        <p class="text-right"><b>Phone : </b>+8801841412141</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12">
        <h4 class="text-center">Marksheet Report</h4>
        <hr>
        <div class="table-responsive m-t-20">
            <table id="data_table" class="display nowrap table table-bordered" cellspacing="0" width="100%">
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Admission No</th>
                        <th>Roll No</th>
                        <th>Position</th>
                        <th>Total Mark</th>
                        <th>Pass Mark</th>
                        <th>Obtained Mark</th>
                        <th>Result</th>
                        <th>Grade</th>
                    </tr>
                </thead>
                <tbody id="tbl_data">
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td> 
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>

                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>



@endsection

@push('page-scripts')
    
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
    </script>    
        
@endpush