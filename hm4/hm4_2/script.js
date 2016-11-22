button.addEventListener('click', function() {
    var widthWindow = window.innerWidth,
        heightWindow = window.innerHeight,
        wherePaste = document.getElementById('container'),
        content = wherePaste.innerHTML,

        // передаем начальные значения блока 
        newBlock = {
            minWidth: 1,
            maxWidth: 100,
            minHeight: 1,
            maxHeight: 100,
            fromLeft: 0,
            fromTop: 0
        };

    // создаем размеры блока и позицию
    var elemWidth = randomIntFromInterval(newBlock.minWidth, newBlock.maxWidth),
        elemHeight = randomIntFromInterval(newBlock.minHeight, newBlock.maxHeight),
        elemLeft = randomIntFromInterval(0, widthWindow),
        elemTop = randomIntFromInterval(0, heightWindow),
        elemBackground = getRandomColor(),
        elemRight = '',
        elemBottom = '';

    // проверяем выход за пределы окна
    if (elemWidth + elemLeft >= widthWindow) {
        elemLeft = 'auto';
        elemRight = 'right:0;';
    } else {
        elemLeft += 'px';
    }

    if (elemHeight + elemTop >= heightWindow) {
        elemTop = 'auto';
        elemBottom = 'bottom:0;';
    } else {
        elemTop += 'px';
    }

    var blockCode = '<div class="block" style="width:' + elemWidth + 'px;height:' + elemHeight + 'px;top:' + elemTop + ';left:' + elemLeft + ';background-color:' + elemBackground + ';' + elemRight + '"></div>';

    content = content + blockCode;
    wherePaste.innerHTML = content;
});

container.onmousedown = function(event) { // пошла жара
    if (event.which != 1) return; // если ПКМ - игнор

    var target = event.target;

    if (target.className === 'block') {

        var coordinates = getCoordinates(target),
            fromLeft = event.pageX - coordinates.left,
            fromTop = event.pageY - coordinates.top;

        moveAt(event);

        // движение мышки
        document.onmousemove = function(event) {
            moveAt(event);
        };

        // меняем положение элемента
        function moveAt(event) {
            target.style.left = event.pageX - fromLeft + 'px';
            target.style.top = event.pageY - fromTop + 'px';
        }

        // закончили перемещение
        target.onmouseup = function() {
            document.onmousemove = null;
            target.onmouseup = null;
        };
    }


};

// функция рандомных размеров
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// функция рандомного цвета
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// получаем координаты элемента
function getCoordinates(elem) {
    var position = elem.getBoundingClientRect();

    return {
        top: position.top + pageYOffset,
        left: position.left + pageXOffset
    };

}