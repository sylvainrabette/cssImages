(function() {
    var iPhone, iPhoneController;

    iPhoneController = (function() {
        function iPhoneController() {}

        iPhoneController.prototype.init = function() {
            this.setCurrentTime();
            this.setCurrentDate();
            this.controls();
        };

        iPhoneController.prototype.controls = function() {

            /* On power button click */
            $('.power').on('click', function(e) {
                /* If screen on */
                if ($('.screen').hasClass('screen-on')) {
                    $('.screen').removeClass('screen-on');
                    $('.screen').addClass('screen-off');
                    $('.unlock-bar').css('background-color', '#000');
                } else if ($('.screen').hasClass('screen-off')) {
                    $('.screen').removeClass('screen-off');
                    $('.screen').addClass('screen-on');
                    $('.unlock-bar').css('background-color', '#FFF');
                }
            });   

            /* Unlock iPhone */ 
            $('.lock-icon').on('click', function(e) {
                
            });     
        };



        iPhoneController.prototype.setCurrentTime = function() {
            setInterval(function() {
                var hours, minutes, secondes, now, today;
                now = new Date();
                hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
                minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
                today = hours + ':' + minutes;
                return $('#time').text(today);
            }, 0);
        };

        iPhoneController.prototype.setCurrentDate = function() {
            var currentDay, days, months, dayOfWeek, curMonth, dayOfMonth, today;
            currentDay = new Date();
            days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
            months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
            dayOfWeek = days[currentDay.getDay()];
            curMonth = months[currentDay.getMonth()];
            dayOfMonth = today + ( currentDay.getDate() < 10) ? '0' + currentDay.getDate() + domEnder : currentDay.getDate();
            today = dayOfWeek + ", " + curMonth + " " + dayOfMonth;
            return $('#date').text(today);
        };

        return iPhoneController;

    })();

    iPhone = new iPhoneController;
    iPhone.init();

}).call(this);