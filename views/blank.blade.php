@extends('layouts.app')

@section('title', 'Page Title')

@push('page-styles')
    <link rel="stylesheet" type="text/css" href="{{ asset('assets/node_modules/datatables.net-bs4/css/responsive.dataTables.min.css')}}">
    <script src="/example.js"></script>
@endpush

@section('page-title-bread-crumb')
<!-- Bread crumb and right sidebar toggle -->
<!-- ============================================================== -->
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Blank Page</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="javascript:void(0)">Home</a></li>
                <li class="breadcrumb-item active">Blank Page1</li>
                <li class="breadcrumb-item active">Blank Page2</li>
                <li class="breadcrumb-item active">Blank Page3</li>
            </ol>
            <button type="button" class="btn btn-info d-none d-lg-block m-l-15"><i class="fa fa-plus-circle"></i> Create New</button>
        </div>
    </div>
</div>
<!-- ============================================================== -->
<!-- End Bread crumb and right sidebar toggle -->
@endsection

@section('content')
    <!-- <p>This is some text within a card block.</p> -->
    <h4 class="card-title">Blank Page</h4>
    <hr>
    <div class="row">
        <div class="col-md-12">            
            <P>Blank page....</P>
        </div>
    </div>
    
@endsection

@push('page-scripts')
    <script src="/example.js"></script>
        
@endpush