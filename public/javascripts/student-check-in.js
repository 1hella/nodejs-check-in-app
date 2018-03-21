$(() => {
    $('#check-in-form').on('submit', e => {
        e.preventDefault();

        $('#error').addClass('hidden');

        let checkIn = $('#check-in-form').serialize();

        $.ajax({
            url: base + '/student-check-in',
            data: checkIn,
            method: 'POST',
            error: err => {
                $('#error').removeClass('hidden');
                $('#error > p')[0].innerText = err.statusText;
            },
            success: () => {
                window.location = base + '/success'
            }
        });
    });
});
