(function() {
    var iPhone, iPhoneController;

    iPhoneController = (function() {
        function iPhoneController() {}

        iPhoneController.prototype.init = function() {
            this.setTime();
        };

        iPhoneController.prototype.checkTime = function(i) {
            return (i < 10) ? "0" + i : i;
        }

        iPhoneController.prototype.setTime = function() {
            var hours, minutes, now;
            now = new Date();
            hours = checkTime(now.getHours());
            minutes = checkTime(now.getMinutes());
            return $('#time').text(hours + ':' + minutes);s
        };


    })();

    iPhone = new iPhoneController;
    iPhone.init();

}).call(this);