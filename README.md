jquery-countdown
================

Very simple jquery countdown plugin that works on only one element

````javascript
$.('#myDiv').countdown({
	day: 0, // days to countdown
	hour: 0, // hours to countdown
	min: 0, // minutes to countdown
	sec: 0, // seconds to countdown
	divider: ':', // divider between time fragments
	containerClass: 'countdown-container', // class given the whole timer container
	digitClass: 'countdown-digits', // class given to a digit of the timer
	dividerClass: 'countdown-divider', // class given to the divider
	finish: function() {}
});

````

And some css to go along with it.

````css
.countdown-container {
	display: inline-block;;
	position: relative;
	background: #333;
	border: 1px solid #aaa;
	border-radius: 5px;
	text-align: center;
	font-size: 2em;
	font-weight: bold;
}
.countdown-digits {
	display: inline-block;
	margin: 0.2em;
	padding: 0.3em;
	background: #000;
	border-radius: 5px;
	color: #fff;
}
.countdown-divider {
	display: inline-block;
	color: #fff;
}
````