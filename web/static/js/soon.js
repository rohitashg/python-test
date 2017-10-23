
  $('.comming-soon').click(function(event) {
          event.stopPropagation();
      $('.toast-show').addClass('in');
  })
  $('.close-toast').click(function(event) {
      event.stopPropagation();
      $(this).parents('.toast-show').removeClass('in');
  })