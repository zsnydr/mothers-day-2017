$(document).ready(function() {
  console.log('Document is ready');

  $('.btn').on('click', function() {
    const lookup = {
      'first-btn': '#second',
      'second-btn': '#third',
      'third-btn': '#fourth',
      'fourth-btn': '#first'
    };
    const classList = this.classList;
    var next = $(lookup[classList[1]]); // jQyery doesn't like const or let
    const position = next.position();
    $('body').animate({
      scrollTop: position.top
    }, 1000);
  });
});
