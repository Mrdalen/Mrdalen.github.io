var h2 = document.getElementsByTagName('h2')[0]

var i = 0
var timerID = setInterval(function () {
    i++
    alert('我是Deilen')

    if (confirm('在吗')) {
        alert('嘻嘻嘻')
    } else {
        alert('看什么呢')
    }
    if (i == 1) {
        clearInterval(timerID)
    }
}, 1000)