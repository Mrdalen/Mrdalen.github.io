var h2 = document.getElementsByTagName('h2')[0]

var i = 0
var timerID = setInterval(function () {
    i++
    alert('我是Deilen')

    if (i == 1) {
        clearInterval(timerID)
    }
}, 1000)