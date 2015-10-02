app.animation('.swipe-animation', function () {
    return {
        addClass: function (element, className, done) {
          var scope = element.scope()
          if (className == 'ng-hide') {
            var finish = 2000
            if (scope.direction !== 'right') {
              finish = -2000
            }
              TweenMax.to(element, 0.5, {transform: 'translateX(' + finish + 'px)', onComplete: done })
          }
          else {
              done()
          }
        },
        removeClass: function (element, className, done) {
          var scope = element.scope()
          if (className == 'ng-hide') {
              element.removeClass('ng-hide');
              var start = 2000
              if (scope.direction === 'right') {
                start = -2000
              }

              TweenMax.set(element, {transform: 'translateX(' + start + 'px)' });
              TweenMax.to(element, 0.5, {transform: 'translateX(0)', onComplete: done });
          }
          else {
              done();
          }
        }
    }
})
