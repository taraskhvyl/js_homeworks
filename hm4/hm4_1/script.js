  var accordeon = document.querySelector('.accordeon');

  accordeon.addEventListener('click', function(event) {
      var heading = event.target;

      if (heading.classList.contains('accordeon__item_heading')) {
          checkOpen(heading.nextSibling.nextSibling);
      }
  });

  function checkOpen(elem) {
      // проверяем наличие класса
      if (elem.classList.contains('open')) {
          elem.classList.remove('open');
      } else {
          var allContents = document.querySelectorAll('.accordeon__item_content');

          // ищем открытые вкладки
          [].forEach.call(allContents, function(single) {
              var ifOpen = single.classList.contains('open');

              console.log(ifOpen);
              if (ifOpen === true) {
                  single.classList.remove('open');
              }
          });
          elem.className += ' open';
      }
  }