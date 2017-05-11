$(document).ready(function() {
  $('.btn').on('click', function() {
    const lookup = {
      'first-btn': '#second',
      'second-btn': '#third',
      'third-btn': '#first',
    };
    const classList = this.classList;
    const target = lookup[classList[1]];
    var $next = $(target); // jQyery doesn't like const or let
    const position = $next.position();
    $('body, html').animate({
      scrollTop: position.top
    }, 1000, function() {
      switch (target) {
        case '#second':
          fadeInSecond();
          break;
        case '#third':
          fadeInThird();
          break;
      }  
    });
  });
  fadeInFirst();
});

function fadeInFirst() {
  setTimeout(function() {
    var $firstContent = $('.first-content');
    $firstContent.css('border-color', '#FFF');
  }, 500);

  setTimeout(function() {
    var $firstContentSpan = $('.first-content-span');
    var $horizontalLine = $('.horizontal-line');
    $firstContentSpan.css('color', '#FFF');
    $horizontalLine.css('border-color', '#FFF');
  }, 2000);

  setTimeout(function() {
    var $firstBtn = $('.first-btn');
    $firstBtn.fadeIn(500);
  }, 4000);
}

function fadeInSecond() {
  var $secondContent = $('.second-content');
  $secondContent.css('border-color', '#000');
  setTimeout(function() {
    var $secondContentSpan = $('.second-content-span');
    $secondContentSpan.fadeIn(1000, function() {
      setTimeout(function() {
        $secondContentSpan.fadeOut(1000, function() {
          $secondContentSpan.html('for all the sacrifices you make to keeep our family strong');
          $secondContentSpan.fadeIn(1000, function() {
            setTimeout(function() {
              $secondContentSpan.fadeOut(1000, function() {
                $secondContentSpan.html('and for always believing in my dreams.');
                $secondContentSpan.fadeIn(1000, function() {
                  setTimeout(function() {
                    $secondContentSpan.fadeOut(1000, function() {
                      $secondContentSpan.html('You are the one person I can always count on');
                      $secondContentSpan.fadeIn(1000, function() {
                        var $secondBtn = $('.second-btn');
                        $secondBtn.fadeIn(500);
                      });
                    });
                  }, 3000);
                });
              });
            }, 3000);
          });
        });
      }, 3000);
    });
  }, 1000);
}

function fadeInThird() {
  setTimeout(function() {
    var $thirdBtn = $('.third-btn');
    $thirdBtn.css('border-top', '25px solid #DD8183');
  }, 2000);
}

function fadeInThird() {
  setTimeout(function() {
    var $thirdContent = $('.third-content');
    $thirdContent.css('border-color', '#FFF');
  }, 500);

  setTimeout(function() {
    var $thirdContentSpan = $('.third-content-span');
    $thirdContentSpan.css('color', '#FFF');
    setTimeout(function() {
      var $thirdContentSpanTwo = $('.third-content-span-two');
      $thirdContentSpanTwo.css('color', '#FFF');
    }, 1500);
  }, 1500);

  setTimeout(function() {
    var $thirdBtn = $('.third-btn');
    $thirdBtn.fadeIn(500);
  }, 4000);
}
