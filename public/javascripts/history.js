function deleteCheckIn(_id) {
    if (confirm('Are you sure you want to delete this check-in?')) {
        $.ajax({
            url: base + `/check-in/${_id}`,
            method: 'DELETE',
            success: () => {
                location.reload()
            }
        });
    }
}
