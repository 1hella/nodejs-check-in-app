$(() => { 
    $('#login-form').on('submit', e => {
        // e.preventDefault();

        let user = $('#login-form').serialize();

        $.ajax({
            url: 'login',
            data: user,
            method: 'POST',
            error: onFail,
            success: doc => {
                $('html').html(doc);
            }
        });

    });
});

function onFail() {
    $('#login-form')[0].reset();
    console.log('fail');
}