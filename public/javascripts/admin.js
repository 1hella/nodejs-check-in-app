$(() => {
  $('#history-button').on('click', e => {
      $('#check-in-form').attr('action', 'history');
      $('#check-in-form').submit();
  });
});