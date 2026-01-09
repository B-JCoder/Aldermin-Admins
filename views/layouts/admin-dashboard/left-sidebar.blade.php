<aside class="left-sidebar">
    <!-- Sidebar scroll-->
    <div class="scroll-sidebar">
        <!-- Sidebar navigation-->
        <nav class="sidebar-nav">
            <ul id="sidebarnav">

                <!-- <li class="nav-small-cap">--- DASHBOARD</li> -->
                <!-- Dashboard -->
                <li class="mb-1 dashboard-menu-item">
                    <a href="#" class="d-flex align-items-center justify-content-start p-2 text-decoration-none" aria-expanded="false">
                        <i class="icon-speedometer me-2"></i>
                        <span>Dashboard</span>
                    </a>
                </li>

                <li class="nav-small-cap">--- Academics</li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-user-graduate"></i> 
                        <span class="hide-menu">Student Info</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.student-info.student-category.index') }}" aria-expanded="false">
                            <span class="hide-menu">Student Category</span>
                        </a>
                        <a href="{{ route('saas.student-info.student.create') }}" aria-expanded="false">
                            <span class="hide-menu">Add Student</span>
                        </a>
                        <a href="{{ route('saas.student-info.student.index') }}" aria-expanded="false">
                            <span class="hide-menu">Student List</span>
                        </a>
                        <a href="{{ route('saas.student-info.student-attendance.index') }}" aria-expanded="false">
                            <span class="hide-menu">Student Attendance</span>
                        </a>
                        <a href="{{ route('saas.student-info.student-wise-attendance.index') }}" aria-expanded="false">
                            <span class="hide-menu">Student Wise Attendance</span>
                        </a>
                        <a href="{{ route('saas.student-info.student-group.index') }}" aria-expanded="false">
                            <span class="hide-menu">Student Group</span>
                        </a>
                        <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                            <span class="hide-menu">Student Promote</span>
                        </a>
                            <ul aria-expanded="false" class="collapse">
                                <a href="{{ route('saas.student-info.student-promote.index') }}" aria-expanded="false">
                                    <span class="hide-menu">Student Promote List</span>
                                </a>
                                <a href="{{ route('saas.student-info.student-promote.create') }}" aria-expanded="false">
                                    <span class="hide-menu">Add Student Promote</span>
                                </a>
                            </ul>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-clipboard-check"></i>
                        <span class="hide-menu">Behaviour Records</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.behaviour-record.incident.index') }}" aria-expanded="false">
                            <span class="hide-menu">Incidents</span>
                        </a>
                        <a href="{{ route('saas.behaviour-record.assign-incident.index') }}" aria-expanded="false">
                            <span class="hide-menu">Assign Incident</span>
                        </a>
                        <a href="{{ route('saas.behaviour-record.student-incident.index') }}" aria-expanded="false">
                            <span class="hide-menu">Student Incident Report</span>
                        </a>
                        <a href="{{ route('saas.behaviour-record.behaviour-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Behaviour Report</span>
                        </a>
                        <a href="{{ route('saas.behaviour-record.class-section.index') }}" aria-expanded="false">
                            <span class="hide-menu">Class Section Report</span>
                        </a>
                        <a href="{{ route('saas.behaviour-record.incident-wise-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Incident Wise Report</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-money-bill-wave"></i>
                        <span class="hide-menu">Fees</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.fee.fee-group.index') }}" aria-expanded="false">
                            <span class="hide-menu">Fees Group</span>
                        </a>
                        <a href="{{ route('saas.fee.fee-type.index') }}" aria-expanded="false">
                            <span class="hide-menu">Fees Type</span>
                        </a>
                        <a href="{{ route('saas.fee.fee-invoice.index') }}" aria-expanded="false">
                            <span class="hide-menu">Fees Invoice</span>
                        </a>
                        <a href="{{ route('saas.fee.fee-carry-forward.index') }}" aria-expanded="false">
                            <span class="hide-menu">Fees Carry Forward</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-book"></i>
                        <span class="hide-menu">Homework</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.home-work.home-work.create') }}" aria-expanded="false">
                            <span class="hide-menu">Add Homework</span>
                        </a>
                        <a href="{{ route('saas.home-work.home-work.index') }}" aria-expanded="false">
                            <span class="hide-menu">Homework List</span>
                        </a>
                        <a href="{{ route('saas.home-work-report.home-work-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Homework Report</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-book-open"></i>
                        <span class="hide-menu">Library</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.book.book.index') }}" aria-expanded="false">
                            <span class="hide-menu">Book</span>
                        </a>
                        <a href="{{ route('saas.book-category.book-category.index') }}" aria-expanded="false">
                            <span class="hide-menu">Book Category</span>
                        </a>
                        <a href="{{ route('saas.library-member.library-member.index') }}" aria-expanded="false">
                            <span class="hide-menu">Library Members</span>
                        </a>
                        <a href="{{ route('saas.issue-return-book.issue-return-book.index') }}" aria-expanded="false">
                            <span class="hide-menu">Issue/Return Book</span>
                        </a>
                        <a href="{{ route('saas.issued-book.issued-book.index') }}" aria-expanded="false">
                            <span class="hide-menu">All Issued Book</span>
                        </a>
                        <a href="{{ route('saas.Subject.Subject.index') }}" aria-expanded="false">
                            <span class="hide-menu">Subject</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-clipboard-list"></i>
                        <span class="hide-menu">Examination</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.exam-type.exam-type.index') }}" aria-expanded="false">
                            <span class="hide-menu">Exam Type</span>
                        </a>
                        <a href="{{ route('saas.exam-setup.exam-setup.index') }}" aria-expanded="false">
                            <span class="hide-menu">Exam Setup</span>
                        </a>
                        <a href="{{ route('saas.exam-schedule.exam-schedule.index') }}" aria-expanded="false">
                            <span class="hide-menu">Exam Schedule</span>
                        </a>
                        <a href="{{ route('saas.exam-attendance.exam-attendance.index') }}" aria-expanded="false">
                            <span class="hide-menu">Exam Attendance</span>
                        </a>
                        <a href="{{ route('saas.mark-register.mark-register.index') }}" aria-expanded="false">
                            <span class="hide-menu">Marks Register</span>
                        </a>
                        <a href="{{ route('saas.mark-grade.mark-grade.index') }}" aria-expanded="false">
                            <span class="hide-menu">Marks Grade</span>
                        </a>
                        <a href="{{ route('saas.marksheet-report.marksheet-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Marksheet Report</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-calendar-check"></i>
                        <span class="hide-menu">Exam Plan</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.admit-card.admit-card.index') }}" aria-expanded="false">
                            <span class="hide-menu">Admit Card</span>
                        </a>
                        <a href="{{ route('saas.seat-plan.seat-plan.index') }}" aria-expanded="false">
                            <span class="hide-menu">Seat Plan</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-laptop"></i>
                        <span class="hide-menu">Online Exam</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.question-group.question-group.index') }}" aria-expanded="false">
                            <span class="hide-menu">Question Group</span>
                        </a>
                        <a href="{{ route('saas.question-bank.question-bank.index') }}" aria-expanded="false">
                            <span class="hide-menu">Question Bank</span>
                        </a>
                        <a href="{{ route('saas.online-exam.online-exam.index') }}" aria-expanded="false">
                            <span class="hide-menu">Online Exam</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-users"></i>
                        <span class="hide-menu">Human Resource</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.designation.designation.index') }}" aria-expanded="false">
                            <span class="hide-menu">Designation</span>
                        </a>
                        <a href="{{ route('saas.department.department.index') }}" aria-expanded="false">
                            <span class="hide-menu">Department</span>
                        </a>
                        <a href="{{ route('saas.staff.staff.create') }}" aria-expanded="false">
                            <span class="hide-menu">Add Staff</span>
                        </a>
                        <a href="{{ route('saas.staff.staff.index') }}" aria-expanded="false">
                            <span class="hide-menu">Staff Directory</span>
                        </a>
                        <a href="{{ route('saas.staff-attendance.staff-attendance.index') }}" aria-expanded="false">
                            <span class="hide-menu">Staff Attendance</span>
                        </a>
                        <a href="{{ route('saas.payroll.payroll.index') }}" aria-expanded="false">
                            <span class="hide-menu">Payroll</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-users"></i>
                        <span class="hide-menu">Teacher Evaluation</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.approved-report.approved-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Approved Report</span>
                        </a>
                        <a href="{{ route('saas.pending-report.pending-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Pending Report</span>
                        </a>
                        <a href="{{ route('saas.teacher-wise-report.teacher-wise-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Teacher Wise Report</span>
                        </a>
                        <a href="{{ route('saas.staff.staff.index') }}" aria-expanded="false">
                            <span class="hide-menu">Setting</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-users"></i>
                        <span class="hide-menu">Leave</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.approved-report.approved-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Leave Type</span>
                        </a>
                        <a href="{{ route('saas.pending-report.pending-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Leave Define</span>
                        </a>
                        <a href="{{ route('saas.teacher-wise-report.teacher-wise-report.index') }}" aria-expanded="false">
                            <span class="hide-menu">Apply Leave</span>
                        </a>
                        <a href="{{ route('saas.staff.staff.index') }}" aria-expanded="false">
                            <span class="hide-menu">gfg</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-wrench"></i>
                        <span class="hide-menu">Admin Section</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                        <a href="{{ route('saas.admin-section.admission-query.index' ) }}" aria-expanded="false">
                            <span class="hide-menu">Admission Query</span>
                        </a>
                        <a href="{{ route('saas.admin-section.visitor-book.index') }}" aria-expanded="false">
                            <span class="hide-menu">Visitor Book</span>
                        </a>
                        <a href="{{ route('saas.admin-section.complaint.index') }}" aria-expanded="false">
                            <span class="hide-menu">Complaint</span>
                        </a>
                        <a href="{{ route('saas.admin-section.postal-receive.index') }}" aria-expanded="false">
                            <span class="hide-menu">Postal Receive</span>
                        </a>
                        <a href="{{ route('saas.admin-section.postal-dispatch.index') }}" aria-expanded="false">
                            <span class="hide-menu">Postal Dispatch</span>
                        </a>
                        <a href="{{ route('saas.admin-section.phone-call.index') }}" aria-expanded="false">
                            <span class="hide-menu">Phone Cal Log</span>
                        </a>
                        <a href="{{ route('saas.admin-section.admin-setup.index') }}" aria-expanded="false">
                            <span class="hide-menu">Admin Setup</span>
                        </a>
                        <a href="{{ route('saas.admin-section.id-card.index') }}" aria-expanded="false">
                            <span class="hide-menu">ID Card</span>
                        </a>
                        <a href="{{ route('saas.admin-section.certificate.index') }}" aria-expanded="false">
                            <span class="hide-menu">Certificate</span>
                        </a>
                        <a href="{{ route('saas.admin-section.generate-id-card.index') }}" aria-expanded="false">
                            <span class="hide-menu">Generate ID Card</span>
                        </a>
                        <a href="{{ route('saas.admin-section.generate-certificate.index') }}" aria-expanded="false">
                            <span class="hide-menu">Generate Certificate</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-graduation-cap"></i>
                        <span class="hide-menu">Academics</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                  
                        <a href="{{ route('saas.admin-section.section.index') }}" aria-expanded="false">
                            <span class="hide-menu">Section</span>
                        </a>
                        <a href="{{ route('saas.admin-class.class.index') }}" aria-expanded="false">
                            <span class="hide-menu">Class</span>
                        </a>
                        <a href="{{ route('saas.admin-subject.subject.index') }}" aria-expanded="false">
                            <span class="hide-menu">Subjects</span>
                        </a>
                        <a href="{{ route('saas.admin-assign-class-teacher.assign-class-teacher.index') }}" aria-expanded="false">
                            <span class="hide-menu">Assign Class Teacher</span>
                        </a>
                        <a href="{{ route('saas.admin-assign-subject.assign-subject.index') }}" aria-expanded="false">
                            <span class="hide-menu">Assign Subject</span>
                        </a>
                        <a href="{{ route('saas.admin-class-room.class-room.index') }}" aria-expanded="false">
                            <span class="hide-menu">Class Room</span>
                        </a>
                        <a href="{{ route('saas.admin-class-routine.class-routine.index') }}" aria-expanded="false">
                            <span class="hide-menu">Class Routine</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-file-lines"></i>
                        <span class="hide-menu">Study Material</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                  
                        <a href="{{ route('saas.admin-apload-content.apload-content.index') }}" aria-expanded="false">
                            <span class="hide-menu">Apload Content</span>
                        </a>
                        <a href="{{ route('saas.admin-assignment.assignment.index') }}" aria-expanded="false">
                            <span class="hide-menu">Assignment</span>
                        </a>
                        <a href="{{ route('saas.admin-syllabus.syllabus.index') }}" aria-expanded="false">
                            <span class="hide-menu">Syllabus</span>
                        </a>
                        <a href="{{ route('saas.admin-other-download.other-download.index') }}" aria-expanded="false">
                            <span class="hide-menu">Other Downloads</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-chalkboard-user"></i>
                        <span class="hide-menu">Lesson Plan</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                  
                        <a href="{{ route('saas.admin-lesson.lesson.index') }}" aria-expanded="false">
                            <span class="hide-menu">Lesson</span>
                        </a>
                        <a href="{{ route('saas.admin-topic.topic.index') }}" aria-expanded="false">
                            <span class="hide-menu">Topic</span>
                        </a>
                        <a href="{{ route('saas.admin-topic-overview.topic-overview.index') }}" aria-expanded="false">
                            <span class="hide-menu">Topic Overview</span>
                        </a>
                        <a href="{{ route('saas.admin-lesson-plan.lesson-plan.index') }}" aria-expanded="false">
                            <span class="hide-menu">Lesson Plan</span>
                        </a>
                        <a href="{{ route('saas.admin-lesson-overview.lesson-overview.index') }}" aria-expanded="false">
                            <span class="hide-menu">Lesson Overview</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-print"></i>
                        <span class="hide-menu">Bulk Print</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                  
                        <a href="" aria-expanded="false">
                            <span class="hide-menu">ID</span>
                        </a>
                        <a href="" aria-expanded="false">
                            <span class="hide-menu">Certificate</span>
                        </a>
                        <a href="" aria-expanded="false">
                            <span class="hide-menu">Payroll Bulk Print</span>
                        </a>
                        <a href="" aria-expanded="false">
                            <span class="hide-menu">Fees Invoice Bulk Print</span>
                        </a>
                        <a href="" aria-expanded="false">
                            <span class="hide-menu">Fees Invoice Bulk Print</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="has-arrow waves-effect waves-dark" href="javascript:void(0)" aria-expanded="false">
                        <i class="fa-solid fa-download"></i>
                        <span class="hide-menu">Download Centre</span>
                    </a>
                    <ul aria-expanded="false" class="collapse">
                  
                        <a href="{{ route('saas.admin-content-type.content-type.index') }}" aria-expanded="false">
                            <span class="hide-menu">Content Type</span>
                        </a>
                        <a href="{{ route('saas.admin-topic.topic.index') }}" aria-expanded="false">
                            <span class="hide-menu">Content List</span>
                        </a>
                        <a href="{{ route('saas.admin-shared-content.shared-content.index') }}" aria-expanded="false">
                            <span class="hide-menu">Shared Content List</span>
                        </a>
                        <a href="{{ route('saas.admin-lesson-plan.lesson-plan.index') }}" aria-expanded="false">
                            <span class="hide-menu">Video List</span>
                        </a>
                    </ul>
                </li>

                <li>
                    <a class="waves-effect waves-dark d-flex align-items-center" href="#">
                        <i class="fa-solid fa-user me-2"></i>
                        <span class="hide-menu">User</span>
                    </a>
                </li>

            </ul>
        </nav>
        <!-- End Sidebar navigation -->
    </div>
    <!-- End Sidebar scroll-->
</aside>