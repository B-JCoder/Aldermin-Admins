<!-- @include('guards.super-admin') -->
@extends('layouts.super-admin-dashboard.super-admin-app')

@section('title', 'Super Admin Dashboard')

@section('page-title-bread-crumb')
<div class="row page-titles">
    <div class="col-md-5 align-self-center">
        <h4 class="text-themecolor">Super Admin Dashboard</h4>
    </div>
    <div class="col-md-7 align-self-center text-right">
        <div class="d-flex justify-content-end align-items-center">
            <ol class="breadcrumb">
                <li class="breadcrumb-item active">Dashboard</li>
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
                <h4 class="card-title">Welcome, Super Admin</h4>
                <p class="card-text mb-0">
                    Use the sidebar to manage schools. To create a new school and its admin,
                    click on <strong>Create School</strong> from the left menu.
                </p>
            </div>
        </div>
    </div>
</div>
@endsection
