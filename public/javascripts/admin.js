$(() => {
    $('#history-button').on('click', e => {
        $('#check-in-form').attr('action', 'history');
        if ($('#id').val() !== '') {
            $('#check-in-form').submit();
        }
    });
});