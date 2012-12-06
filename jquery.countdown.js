/**
 * Very simple jQuery plugin used for showing a countdown
 *
 * @author Anthony Vanden Bossche <toonevdb@gmail.com>
 */
 (function($) {

 	$.fn.countdown = function(method) {

 		var $this = $(this);
 		var defaults = {
 			day: 0,
 			hour: 0,
 			min: 0,
 			sec: 0,
 			divider: ':',
 			containerClass: 'countdown-container',
 			digitClass: 'countdown-digits',
 			dividerClass: 'countdown-divider',
 			finish: function() {}
 		};
 		var options = {};
 		var time = {day: 0, hour: 0, min: 0, sec: 0};
 		var interval;
 		var methods = {
 			init: function(initOptions) {
 				options = $.extend(defaults, initOptions);
 				time = {day: options.day, hour: options.hour, min: options.min, sec: options.sec};
 				var divider = '<div class="' + options.dividerClass + '">' + options.divider + '</div>';
 				var $container = $('<div class="' + options.containerClass + '" />');
 				if (time.day) $container.append('<div id="' + options.digitClass + '-day" class="' + options.digitClass + '">' + methods._formatNumber(time.day) + '</div>').append(divider);
 				if (time.day || time.hour) $container.append('<div id="' + options.digitClass + '-hour" class="' + options.digitClass + '">' + methods._formatNumber(time.hour) + '</div>').append(divider);
 				if (time.day || time.hour || time.min) $container.append('<div id="' + options.digitClass + '-min" class="' + options.digitClass + '">' + methods._formatNumber(time.min) + '</div>').append(divider);
 				if (time.day || time.hour || time.min || time.sec) $container.append('<div id="' + options.digitClass + '-sec" class="' + options.digitClass + '">' + methods._formatNumber(time.sec) + '</div>').append(divider);
 				$container.find('.' + options.dividerClass + ':last').remove();
 				$container.appendTo(this);
 				interval = setInterval(function() {
 					methods._decreaseTime();
 					methods._updateTimer();
 				}, 1000);
 				$this.data('countdown', {options: options, time: time, interval: interval});
 			},
 			getRemainingTime: function() {
 				methods._loadInstance();
 				return time;
 			},
 			_loadInstance: function() {
 				var data = $this.data('countdown');
 				options = data.options;
 				time = data.time;
 				interval = data.interval;
 			},
 			_decreaseTime: function() {
 				if (time.sec > 0)
 				{
 					--time.sec;
 				} else if (time.min > 0)
 				{
 					time.sec = 59;
 					--time.min;
 				} else if (time.hour > 0)
 				{
 					time.sec = 59;
 					time.min = 59;
 					--time.hour;
 				} else if (time.day > 0)
 				{
 					time.sec = 59;
 					time.min = 59;
 					time.hour = 23;
 					--time.day;
 				} else {
 					clearInterval(interval);
 					options.finish();
 				}
 			},
 			_updateTimer: function() {
 				$('#' + options.digitClass + '-day').html(methods._formatNumber(time.day));
 				$('#' + options.digitClass + '-hour').html(methods._formatNumber(time.hour));
 				$('#' + options.digitClass + '-min').html(methods._formatNumber(time.min));
 				$('#' + options.digitClass + '-sec').html(methods._formatNumber(time.sec));
 			},
 			_formatNumber: function(number) {
 				var str = '' + number;
 				if (str.length == 1) return '0' + str;
 				return str;
 			}
 		};

 		// Method calling logic
	    if (methods[method]) {
	      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
	    } else if (typeof method === 'object' || ! method) {
	      return methods.init.apply(this, arguments);
	    } else {
	      $.error('Method ' +  method + ' does not exist on jQuery.countdown.');
	    }    
 	}
 })(jQuery);