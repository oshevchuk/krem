function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    // var clock = document.getElementById(id);
    //var clock = $('#'+id);
    var daysSpan = $('.days');
    var hoursSpan = $('.hours');
    // var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = $('.minutes');
    var secondsSpan = $('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        // console.log(t);
        daysSpan.html(t.days);
        hoursSpan.html(('0' + t.hours).slice(-2));
        minutesSpan.html(('0' + t.minutes).slice(-2));
        secondsSpan.html(('0' + t.seconds).slice(-2));

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

$(document).ready(function (e) {
    $('.goshowb').hide();

    var deadline = new Date(Date.parse(new Date()) + 16 * 14 * 30 * 60 * 1000);
    initializeClock('clockdiv', deadline);

    setInterval(showPop, 2000);
});

var showInfo = true;
function showPop() {
    // showInfo ? $('.goshowb').animate({margin-top: "-45px"},500) : $('.goshowb').hide(500);
    if (showInfo) {
        $('.goshowb').animate({
            // opacity: 0.25,
            // left: "+=50",
            height: "toggle"
        }, 500, function () {
            // Animation complete.
        });
    }

    showInfo = !showInfo;
}


