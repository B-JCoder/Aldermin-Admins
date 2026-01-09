<script>
    const token = localStorage.getItem('token');
    const role  = localStorage.getItem('loginRole');

    if (!token || role !== 'superAdmin') {
        window.location.href = "{{ route('saas.login.view') }}";
    }
</script>
