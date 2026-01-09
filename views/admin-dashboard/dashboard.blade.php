<!-- @include('guards.admin') -->
@extends('layouts.admin-dashboard.app')

@section('title', 'Dashboard')

@push('page-styles')

<!-- Calendar CSS -->
<link href="{{ url('assets/node_modules/calendar/dist/fullcalendar.css') }}" rel="stylesheet" />

<!-- Bootstrap + Icons -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" rel="stylesheet">

<!-- Select2 plugins css -->
<link href="{{ url('assets/node_modules/select2/dist/css/select2.min.css') }}" rel="stylesheet" type="text/css" />

<!-- Morris Chart CSS -->
<link href="{{ url('assets/node_modules/morrisjs/morris.css') }}" rel="stylesheet">

<link href="{{ url('dist/css/style.min.css') }}" rel="stylesheet">

<!-- Bootstrap Datepicker CSS -->
<link href="{{ url('assets/node_modules/bootstrap-datepicker/bootstrap-datepicker.min.css') }}" rel="stylesheet" type="text/css" />

<style>
    .card {
        border-radius: 5px;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.05);
        border: none;
    }

    .card-title {
        font-size: 18px;
        font-weight: 600;
        color: #2c3e50;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 1px solid #eee;
    }

    .datepicker-inline {
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
        margin: 0 auto !important;
    }

    .ui-datepicker {
        margin: auto !important;
    }
</style>
@endpush

@section('content')
<div class="container-fluid">
    <div class="row align-items-stretch mb-1 mt-4">

        <!-- Welcome Card -->
        <div class="col-md-7 mb-3">
            <div class="card border-0 h-100 shadow-sm bg-white rounded-4">
                <div class="card-body p-4 d-flex justify-content-between align-items-center h-100">
                    <!-- Text Section -->
                    <div class="flex-grow-1 me-4 d-flex flex-column justify-content-between">
                        <div>
                            <h2 class="fw-semibold text-dark mb-3">Welcome back, The Deenway School Team!</h2>
                            <p class="text-muted mb-0" style="line-height: 1.6;">
                                Manage your school operations with ease. Stay updated on academics, attendance,
                                finances, and more — all in one place.
                                Let’s keep shaping a brighter future together!
                            </p>
                        </div>
                    </div>

                    <!-- Image Section -->
                    <div class="flex-shrink-0 d-flex align-items-center">
                        <img src="{{ asset('assets/images/dashboard-img/img-1.png') }}" alt="Decoration"
                            class="img-fluid" style="height: 260px; object-fit: contain;">
                    </div>
                </div>
            </div>
        </div>

        <!-- Stats Section -->
        <div class="col-md-2 mb-3">
            <div class="card border-0 h-100 shadow-sm rounded-4">
                <div class="card-body d-flex flex-column justify-content-between">

                    <!-- Students -->
                    <div class="card border-0 shadow-sm rounded-3 mb-2" style="background-color: #fde68a;">
                        <div class="card-body py-3 px-3">
                            <div class="d-flex justify-content-between align-items-start mb-1">
                                <h6 class="fw-semibold text-dark mb-0">Students</h6>

                                <!-- Dropdown Icon -->
                                <div class="dropdown">
                                    <i class="bi bi-three-dots text-dark fs-5" id="studentMenu"
                                        data-bs-toggle="dropdown" aria-expanded="false" style="cursor: pointer;"></i>
                                    <ul class="dropdown-menu dropdown-menu-end shadow-sm rounded-3"
                                        aria-labelledby="studentMenu">
                                        <li><a class="dropdown-item" href="#">View Details</a></li>
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item text-danger" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="fw-bold text-dark mb-0">1,230</h3>
                        </div>
                    </div>

                    <!-- Teachers -->
                    <div class="card border-0 shadow-sm rounded-3 mb-2" style="background-color: #e9d5ff;">
                        <div class="card-body py-3 px-3">
                            <div class="d-flex justify-content-between align-items-start mb-1">
                                <h6 class="fw-semibold text-dark mb-0">Teachers</h6>

                                <!-- Dropdown Icon -->
                                <div class="dropdown">
                                    <i class="bi bi-three-dots text-dark fs-5" id="teacherMenu"
                                        data-bs-toggle="dropdown" aria-expanded="false" style="cursor: pointer;"></i>
                                    <ul class="dropdown-menu dropdown-menu-end shadow-sm rounded-3"
                                        aria-labelledby="teacherMenu">
                                        <li><a class="dropdown-item" href="#">View Details</a></li>
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item text-danger" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="fw-bold text-dark mb-0">60</h3>
                        </div>
                    </div>

                    <!-- Employee -->
                    <div class="card border-0 shadow-sm rounded-3 mb-0" style="background-color: #fde68a;">
                        <div class="card-body py-3 px-3">
                            <div class="d-flex justify-content-between align-items-start mb-1">
                                <h6 class="fw-semibold text-dark mb-0">Employee</h6>

                                <!-- Dropdown Icon -->
                                <div class="dropdown">
                                    <i class="bi bi-three-dots text-dark fs-5" id="employeeMenu"
                                        data-bs-toggle="dropdown" aria-expanded="false" style="cursor: pointer;"></i>
                                    <ul class="dropdown-menu dropdown-menu-end shadow-sm rounded-3"
                                        aria-labelledby="employeeMenu">
                                        <li><a class="dropdown-item" href="#">View Details</a></li>
                                        <li><a class="dropdown-item" href="#">Edit</a></li>
                                        <li><a class="dropdown-item text-danger" href="#">Delete</a></li>
                                    </ul>
                                </div>
                            </div>
                            <h3 class="fw-bold text-dark mb-0">100</h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Calendar Card -->
        <div class="col-md-3 mb-3 d-flex">
            <div class="card border-0 shadow-sm rounded-4 h-100 w-100">
                <div class="card-body d-flex flex-column justify-content-center align-items-center text-center">

                    <!-- Datepicker Center -->
                    <div class="flex-grow-1 d-flex justify-content-center align-items-center" style="min-height: 250px;">
                        <div id="datepicker-inline" class="datepicker-inline"></div>
                    </div>

                    <button class="btn btn-light btn-sm w-50 rounded-3 fw-medium mt-3">
                        Manage Calendar
                    </button>

                </div>
            </div>
        </div>

        <!-- Students Chart -->
        <div class="col-md-4 mb-3">
            <div class="card border-0 shadow-sm rounded-4 h-100 d-flex flex-column">
                <div class="card-body">
                    <!-- Header with Dropdown -->
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="fw-semibold mb-0">Students</h5>

                        <!-- Dropdown Menu for Chart Options -->
                        <div class="dropdown">
                            <i class="bi bi-three-dots text-dark fs-5" id="studentChartMenu" data-bs-toggle="dropdown"
                                aria-expanded="false" style="cursor: pointer;"></i>
                            <ul class="dropdown-menu dropdown-menu-end shadow-sm rounded-3"
                                aria-labelledby="studentChartMenu">
                                <li><a class="dropdown-item" href="#">View Full Chart</a></li>
                                <li><a class="dropdown-item" href="#">Export Chart as Image</a></li>
                                <li><a class="dropdown-item" href="#">Compare Boys vs Girls</a></li>
                                <li><a class="dropdown-item" href="#">Show Detailed Stats</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Two Knobs Side by Side -->
                    <div class="text-center d-flex justify-content-around align-items-center mb-3 flex-wrap">
                        <div class="text-center">
                            <input data-plugin="knob" data-width="150" data-height="150" data-linecap="round"
                                data-fgColor="#B5A8FF" value="53" data-skin="tron" data-angleOffset="180"
                                data-readOnly="true" data-thickness=".15" />
                        </div>

                        <div class="text-center">
                            <input data-plugin="knob" data-width="150" data-height="150" data-linecap="round"
                                data-fgColor="#FFE79B" value="47" data-skin="tron" data-angleOffset="180"
                                data-readOnly="true" data-thickness=".15" />
                        </div>
                    </div>

                    <!-- Chart Summary -->
                    <div class="mt-3 text-center">
                        <div class="row">
                            <div class="col-6 text-primary fw-semibold">
                                <i class="bi bi-gender-male"></i> 3,178 (Boys)
                            </div>
                            <div class="col-6 text-warning fw-semibold">
                                <i class="bi bi-gender-female"></i> 2,731 (Girls)
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Notice Board -->
        <div class="col-md-3 mb-3">
            <div class="card h-100 border-0 shadow-sm rounded-4 d-flex flex-column">
                <div class="card-body d-flex flex-column flex-grow-1">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="fw-semibold mb-0">Notice Board</h5>
                        <a href="#" class="text-decoration-none small fw-semibold text-muted">view all</a>
                    </div>

                    <!-- Scrollable Notices -->
                    <div class="flex-grow-1 overflow-auto" style="max-height: 210px;"> <!-- 👈 Only 2 notices visible -->
                        
                        <!-- Notice 1 -->
                        <div class="d-flex align-items-start p-3 mb-2 rounded-3" style="background-color: #fff8e6;">
                            <div class="me-3 d-flex align-items-center justify-content-center rounded-3"
                                style="width: 40px; height: 40px; background-color: #FFEFB8;">
                                <i class="bi bi-bell-fill text-warning fs-5"></i>
                            </div>
                            <div>
                                <h6 class="fw-semibold mb-1">Sports Day Announcement</h6>
                                <p class="mb-0 text-muted small">Annual Sports Day on May 12, 2024. Mark your calendars!</p>
                            </div>
                        </div>

                        <!-- Notice 2 -->
                        <div class="d-flex align-items-start p-3 mb-2 rounded-3" style="background-color: #f2f0ff;">
                            <div class="me-3 d-flex align-items-center justify-content-center rounded-3"
                                style="width: 40px; height: 40px; background-color: #E0DBFF;">
                                <i class="bi bi-bell-fill text-primary fs-5"></i>
                            </div>
                            <div>
                                <h6 class="fw-semibold mb-1">Summer Break Start</h6>
                                <p class="mb-0 text-muted small">Summer break begins on May 25, 2024. Enjoy!</p>
                            </div>
                        </div>

                        <!-- Notice 3 (scroll starts here) -->
                        <div class="d-flex align-items-start p-3 mb-2 rounded-3" style="background-color: #eafaf1;">
                            <div class="me-3 d-flex align-items-center justify-content-center rounded-3"
                                style="width: 40px; height: 40px; background-color: #c8f7d0;">
                                <i class="bi bi-bell-fill text-success fs-5"></i>
                            </div>
                            <div>
                                <h6 class="fw-semibold mb-1">New Timetable Uploaded</h6>
                                <p class="mb-0 text-muted small">Check the updated class schedule on the portal.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Buttons -->
                    <div class="d-flex justify-content-start align-items-center mt-auto pt-3">
                        <button class="btn btn-light btn-sm border rounded-3 me-2"><i class="bi bi-plus-lg"></i> Add</button>
                        <button class="btn btn-light btn-sm border rounded-3 me-2"><i class="bi bi-pencil"></i></button>
                        <button class="btn btn-light btn-sm border rounded-3"><i class="bi bi-trash"></i></button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Financial Overview -->
        <div class="col-md-5 mb-3">
            <div class="card border-0 shadow-sm rounded-4 h-100 d-flex flex-column">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h5 class="fw-semibold mb-0">Financial Overview</h5>
                        <div class="d-flex align-items-center gap-2">
                            <select class="form-select select2 form-select-sm border-0 bg-light me-2">
                                <option>2023-2024</option>
                                <option>2022-2023</option>
                                <option>2021-2022</option>
                            </select>
                            <select class="form-select select2 form-select-sm border-0 bg-light">
                                <option>Annual</option>
                                <option>Monthly</option>
                                <option>Weekly</option>
                            </select>
                        </div>
                    </div>
                    <div class="d-flex flex-wrap gap-3 mt-4">
                        <!-- Total Income -->
                        <div class="flex-fill bg-info bg-opacity-25 p-3 rounded-4 position-relative text-white">
                            <!-- Top-left Growth Icon -->
                            <i class="bi bi-graph-up-arrow position-absolute top-0 start-0 m-3 fs-4 text-white"></i>

                            <!-- Top-right Badge -->
                            <span
                                class="badge bg-success-subtle text-success border border-success rounded-pill small position-absolute top-0 end-0 m-3">
                                ↑ 12%
                            </span>

                            <h4 class="fw-bold mb-1 mt-5 text-dark">PKR 29,545,000</h4>
                            <p class="text-muted mb-0 small">Total Income</p>
                        </div>

                        <!-- Total Expenses -->
                        <div class="flex-fill bg-info bg-opacity-25 p-3 rounded-4 position-relative text-white">
                            <!-- Top-left Growth Icon -->
                            <i class="bi bi-graph-down-arrow position-absolute top-0 start-0 m-3 fs-4 text-white"></i>

                            <!-- Top-right Badge -->
                            <span
                                class="badge bg-danger-subtle text-danger border border-danger rounded-pill small position-absolute top-0 end-0 m-3">
                                ↓ 0.5%
                            </span>

                            <h4 class="fw-bold mb-1 mt-5 text-dark">PKR 19,291,266</h4>
                            <p class="text-muted mb-0 small">Total Expenses</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <!-- Earnings -->
        <div class="col-lg-7 mb-3 d-flex">
            <div class="card border-0 shadow-sm rounded-4 flex-fill">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h4 class="card-title mb-0 fw-semibold text-dark">Earning</h4>

                        <ul class="list-inline mb-0 d-flex gap-3 align-items-center justify-content-center flex-grow-1">
                            <li class="list-inline-item mb-0">
                                <h6 class="mb-0">
                                    <i class="fa fa-circle me-2" style="color: #c3ebfa;"></i>Income
                                </h6>
                            </li>
                            <li class="list-inline-item mb-0">
                                <h6 class="mb-0">
                                    <i class="fa fa-circle me-2" style="color: #cfceff;"></i>Expense
                                </h6>
                            </li>
                        </ul>

                        <!-- Dropdown -->
                        <div class="dropdown">
                            <i class="bi bi-three-dots text-dark fs-5" id="earningMenu" data-bs-toggle="dropdown"
                                aria-expanded="false" style="cursor: pointer;"></i>
                            <ul class="dropdown-menu dropdown-menu-end shadow-sm rounded-3"
                                aria-labelledby="earningMenu">
                                <li><a class="dropdown-item" href="#">View Full Report</a></li>
                                <li><a class="dropdown-item" href="#">Export Data</a></li>
                                <li><a class="dropdown-item" href="#">Compare with Last Month</a></li>
                                <li><a class="dropdown-item text-danger" href="#">Reset Chart</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Chart -->
                    <div id="morris-area-chart" class="flex-grow-1" style="min-height: 300px;"></div>
                </div>
            </div>
        </div>

        <!-- Fee Status -->
        <div class="col-md-2 mb-3 d-flex">
            <div class="card border-0 shadow-sm rounded-4 flex-fill position-relative" style="height: 320px;">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <div class="d-flex justify-content-between align-items-start mb-3">
                            <h6 class="fw-semibold mb-0">Fee Status</h6>

                            <!-- Dropdown -->
                            <div class="dropdown">
                                <i class="bi bi-three-dots text-dark fs-5" id="feeStatusMenu" data-bs-toggle="dropdown"
                                    aria-expanded="false" style="cursor: pointer;"></i>
                                <ul class="dropdown-menu dropdown-menu-end shadow-sm rounded-3"
                                    aria-labelledby="feeStatusMenu">
                                    <li><a class="dropdown-item" href="#">View Payment Details</a></li>
                                    <li><a class="dropdown-item" href="#">Generate Fee Report</a></li>
                                    <li><a class="dropdown-item" href="#">Send Reminders</a></li>
                                    <li><a class="dropdown-item text-danger" href="#">Clear Records</a></li>
                                </ul>
                            </div>
                        </div>

                        <div
                            class="d-flex justify-content-between align-items-center mb-3 p-2 rounded border bg-success-subtle text-success">
                            <span>Paid</span><strong>$38,420</strong>
                        </div>
                        <div
                            class="d-flex justify-content-between align-items-center mb-3 p-2 rounded border bg-warning-subtle text-warning">
                            <span>Pending</span><strong>$6,780</strong>
                        </div>
                        <div
                            class="d-flex justify-content-between align-items-center p-2 rounded border bg-danger-subtle text-danger">
                            <span>Overdue</span><strong>$1,450</strong>
                        </div>
                    </div>

                    <div class="mt-auto">
                        <select class="form-select select2 form-select-sm" style="width: 90px;">
                            <option selected disabled>Annual</option>
                            <option>2023</option>
                            <option>2024</option>
                            <option>2025</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

        <!-- Messages -->
        <div class="col-md-3 mb-3 d-flex">
            <div class="card border-0 shadow-sm rounded-4 flex-fill" style="height: 320px;"> <!-- 👈 Fixed height -->
                <div class="card-body d-flex flex-column">
                    
                    <!-- Header -->
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <h6 class="fw-semibold mb-0">Messages</h6>

                        <!-- Dropdown -->
                        <div class="dropdown">
                            <i class="bi bi-three-dots text-dark fs-5" id="messagesMenu" data-bs-toggle="dropdown"
                                aria-expanded="false" style="cursor: pointer;"></i>
                            <ul class="dropdown-menu dropdown-menu-end shadow-sm rounded-3"
                                aria-labelledby="messagesMenu">
                                <li><a class="dropdown-item" href="#">View All Messages</a></li>
                                <li><a class="dropdown-item" href="#">Compose New</a></li>
                                <li><a class="dropdown-item" href="#">Mark All as Read</a></li>
                                <li><a class="dropdown-item text-danger" href="#">Clear Inbox</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Message List -->
                    <div class="message-list flex-grow-1" style="overflow-y: auto; max-height: 220px;"> <!-- 👈 Scroll after 3 divs -->
                        <div class="d-flex align-items-start mb-3 pb-3 border-bottom">
                            <img src="{{ asset('assets/images/dashboard-img/img-3.png') }}" class="rounded-circle me-3"
                                style="width:40px; height:40px; object-fit:cover;">
                            <div>
                                <h6 class="fw-semibold mb-0">John Doe</h6>
                                <small class="text-muted">10 min</small>
                                <p class="mb-0 text-muted small mt-1">Regarding student progress report...</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-3 pb-3 border-bottom">
                            <img src="{{ asset('assets/images/dashboard-img/img-2.jpeg') }}" class="rounded-circle me-3"
                                style="width:40px; height:40px; object-fit:cover;">
                            <div>
                                <h6 class="fw-semibold mb-0">Sarah Smith</h6>
                                <small class="text-muted">2h ago</small>
                                <p class="mb-0 text-muted small mt-1">Meeting request for next week...</p>
                            </div>
                        </div>
                        <div class="d-flex align-items-start mb-3 pb-3 border-bottom">
                            <img src="{{ asset('assets/images/dashboard-img/img-3.png') }}" class="rounded-circle me-3"
                                style="width:40px; height:40px; object-fit:cover;">
                            <div>
                                <h6 class="fw-semibold mb-0">Admin</h6>
                                <small class="text-muted">5h ago</small>
                                <p class="mb-0 text-muted small mt-1">System maintenance notice...</p>
                            </div>
                        </div>

                        <!-- Add more messages here — scrollbar will appear automatically -->
                    </div>

                </div>
            </div>
        </div>

    </div>
</div>

@endsection

@push('page-scripts')
<!-- Calendar -->
<script src="{{ url('assets/node_modules/calendar/jquery-ui.min.js') }}"></script>
<script src="{{ url('assets/node_modules/moment/moment.js') }}"></script>
<script src="{{ url('assets/node_modules/calendar/dist/fullcalendar.min.js') }}"></script>
<script src="{{ url('assets/node_modules/calendar/dist/cal-init.js') }}"></script>

<!-- Bootstrap Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<!-- Raphael + Morris -->
<script src="{{ url('assets/node_modules/raphael/raphael-min.js') }}"></script>
<script src="{{ url('assets/node_modules/morrisjs/morris.js') }}"></script>
<script src="{{ url('dist/js/pages/morris-data.js') }}"></script>

<!-- ApexCharts + Select2 -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

<!-- select2 -->
<script src="{{ url('assets/node_modules/select2/dist/js/select2.full.min.js') }}"></script>

<!--jquery knob -->
<script src="{{ url('assets/node_modules/knob/jquery.knob.js') }}"></script>

<!--Custom JavaScript -->
<script src="{{ url('dist/js/custom.min.js') }}"></script>

<!-- Include required JS libraries -->
<script src="{{ url('assets/node_modules/bootstrap-datepicker/bootstrap-datepicker.min.js') }}"></script>


<script>
    $(function () {
        $('[data-plugin="knob"]').knob();
    });
</script>
<script>
    $(".select2").select2();
</script>
<!-- Initialize Datepickers -->
<script>
    $(function () {
        // Inline Datepicker
        $('#datepicker-inline').datepicker({
            todayHighlight: true
        });
    });
</script>  
<script>
    $(function () {
        Morris.Area({
            element: 'morris-area-chart',
            data: [
                { month: 'Jan', income: 1200, expense: 800 },
                { month: 'Feb', income: 1500, expense: 1100 },
                { month: 'Mar', income: 1700, expense: 1200 },
                { month: 'Apr', income: 1400, expense: 1000 },
                { month: 'May', income: 1900, expense: 1300 },
                { month: 'Jun', income: 2000, expense: 1600 },
                { month: 'Jul', income: 2100, expense: 1700 },
                { month: 'Aug', income: 2300, expense: 1800 },
                { month: 'Sep', income: 2200, expense: 1500 },
                { month: 'Oct', income: 2500, expense: 1900 },
                { month: 'Nov', income: 2700, expense: 2000 },
                { month: 'Dec', income: 3000, expense: 2200 },
            ],
            xkey: 'month',
            ykeys: ['income', 'expense'],
            labels: ['Income', 'Expense'],
            lineColors: ['#c3ebfa', '#cfceff'], // 👈 updated colors
            pointFillColors: ['#c3ebfa', '#cfceff'],
            pointStrokeColors: ['#999', '#999'],
            fillOpacity: 0.8,
            behaveLikeLine: true,
            hideHover: 'auto',
            resize: true,
            parseTime: false,
        });

    });
</script>
@endpush