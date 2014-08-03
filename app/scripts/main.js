/*global _ */
(function() {

	'use strict';

	var imageNum = 22;

	$.getJSON('data.json', function(data) {
		console.log(data);
		//var dayNum = data.dailyData.length;
		var latest = data.dailyData[0];

		latest.data.palestine.killed.civilianPercent = Math.round(latest.data.palestine.killed.civilian / latest.data.palestine.killed.total * 100);

		latest.data.isreal.killed.civilianPercent = Math.round(latest.data.isreal.killed.civilian / latest.data.isreal.killed.total * 100);

		var killed = _.template(
            $( '#killed' ).html()
        );

        $( '.container .row' ).after(
            killed( latest )
        );
        var i = 0;

        $('.vis .child .img').each(function() {

			$(this).css('background-image', 'url(images/'+(i % imageNum + 1)+'.jpg)');
			i++;
        });

	});
	/*
	var firebaseUrl = 'https://ocha.firebaseio.com/';
	var fb = new Firebase(firebaseUrl);

	fb.child('daily').on('value' , function(data) {
		var dailyData = data.val();
		console.log(dailyData);
		var latest = {};
		for(var key in dailyData) {
			console.log(key);
			var date;
			for (date in dailyData[key]) break;
			latest = {date: date, data: dailyData[key][date]};

		}
		
		console.log(latest);

		var killed = _.template(
            $( '#killed' ).html()
        );

        $( '.container .row' ).after(
            killed( latest )
        );

        $('.vis .child .img').on('mouseover', function() {
			console.log($(this));
			$(this).css('background-image', 'url(https://pbs.twimg.com/media/BtovQz7CUAEfMxh.jpg:large)');
        });
	});

	*/
})();

