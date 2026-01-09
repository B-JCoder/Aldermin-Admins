@extends('layouts/app')

@section('title', 'Change Password')

@push('page-styles')

<!-- Date picker plugins css -->
<link href="{{ url('assets/node_modules/bootstrap-material-datetimepicker/css/bootstrap-material-datetimepicker.css') }}" rel="stylesheet">

<!-- Data table styles -->
<link rel="stylesheet" type="text/css" href="{{ url('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css') }}">

@endpush

@section('page-title-bread-crumb')
<!-- Bread crumb and right sidebar toggle -->
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Change Password</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
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
                <div class="text-left">
                    <h4 class="card-title">Change Password</h4>
                </div>
                <form method="POST" action="" novalidate>
                    @csrf
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="mb-3">
                                <div class="input-group"> <span class="input-group-text"><i class="fas fa-key"></i></span>
                                    <input type="password" class="form-control @error('current_password') is-invalid @enderror" name="current_password" placeholder="Current Password" value="" style="height: 50px;" required>
                                </div>
                                @error('current_password') <div class="text-danger">{{ $message }}</div>@enderror
                            </div>

                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-unlock"></i></span>
                                    <input type="password" class="form-control @error('new_password') is-invalid @enderror" name="new_password" placeholder="New Password" value="" style="height: 50px;" required>
                                </div>
                                @error('new_password')<div class="text-danger">{{ $message }}</div>@enderror
                            </div>

                            <div class="mb-3">
                                <div class="input-group">
                                    <span class="input-group-text"><i class="fas fa-check"></i></span>
                                    <input type="password" class="form-control @error('password_confirmation') is-invalid @enderror" name="password_confirmation" placeholder="Confirm Password" value="" style="height: 50px;" required>
                                </div>
                                @error('password_confirmation')<div class="text-danger">{{ $message }}</div>@enderror
                            </div>

                            <div class="text-center mt-4">
                                <button class="btn btn-primary w-100" type="submit">Change Password</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
@endsection

@push('page-scripts')
<!-- Data Table js -->
<script src="{{ url('assets/node_modules/datatables.net/js/jquery.dataTables.min.js') }}"></script>
<script src="{{ url('assets/node_modules/datatables.net-bs4/js/dataTables.responsive.min.js') }}"></script>
<!-- start - This is for export functionality only -->
<script src="https://cdn.datatables.net/buttons/1.5.1/js/dataTables.buttons.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.flash.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.32/pdfmake.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.html5.min.js"></script>
<script src="https://cdn.datatables.net/buttons/1.5.1/js/buttons.print.min.js"></script>

@endpush