;(function ($) {
    $.fn.roulette = function (options) {
        var self = this;

        var settings = $.extend({
            'start': '#start',
            'stop': '#stop',
            'reset': '#reset',
            'result': '#result',
            'history' : '#history',
            'roulette_table': '#roulette_table',
            'speed' : 70,
            'count' : 75,
            'img_path' : 'images/',
            'ext' : '.jpg',
            'loop_animate' : 'fadeIn',
            'result_animate' : 'fadeIn',
            'result_history' : 'fadeIn',
        }, options);

        var array = [];
        var value = Math.floor(Math.random() * settings['count']) + 1;
        var timer = null;

        $(document).on('click', settings['start'], function(){

            $(settings['start']).css('background-color', '#ef9a9a');
            $(settings['stop']).css('background-color', '#ef5350');

            $(settings['start']).attr("disabled", "disabled");
            $(settings['stop']).removeAttr("disabled");

            timer = setInterval(Random, settings['speed']);

            function Random() {
                value = Math.floor(Math.random() * settings['count']) + 1;
                $(settings['result']).empty().append('<div><img class="animated ' + settings['loop_animate'] + '" src="' + settings['img_path'] + value + settings['ext'] + '" /></div>');
            };

        });

        $(document).on('click', settings['stop'], function(){
            if ($(settings['start']).prop("disabled") === false && array.length === 0) {
                return false;
            }

            $(settings['stop']).css('background-color', '#ef9a9a');
            $(settings['start']).css('background-color', '#ef5350');

            $(settings['start']).removeAttr("disabled");
            $(settings['stop']).attr("disabled", "disabled");

            clearInterval(timer);

            while ($.inArray(value, array) >= 0) {
                value = Math.floor(Math.random() * settings['count']) + 1;
            }

            if ($.inArray(value, array) === -1) {
                array.push(value);
                $(settings['result']).empty().append('<div class="animated ' + settings['result_animate'] + '"><a href="' + settings['img_path'] + value + settings['ext'] + '" target="_blank"><img src="' + settings['img_path'] + value + settings['ext'] + '" /></a></div>');
                $(settings['history']).append('<div class="animated ' + settings['result_history'] + '"><a href="' + settings['img_path'] + value + settings['ext'] + '" target="_blank"><img src="' + settings['img_path'] + value + settings['ext'] + '" /></a></div>');
            }
            ;

            $.each(array, function (i, num) {
                $(settings['roulette_table']).find('td').eq(num - 1).css({
                    'background-color': '#FFFFFF',
                    'color': '#000000'
                });
            });

            if (array.length === settings['count']) {
                $(settings['start']).css('background-color', '#ef9a9a');
                $(settings['start']).attr("disabled", "disabled");
                $(settings['reset']).css('background-color', '#ef5350');
            }
        });

        $(document).on('click', settings['reset'], function(){
            location.reload();
        });

        $(window).keyup(function (e) {
            switch (e.which) {
                case 38:
                    $(settings['start']).click();
                    break;

                case 40:
                    $(settings['stop']).click();
                    break;

                case 16:
                    $(settings['reset']).click();
                    break;
            }
        });
    };
})(jQuery);