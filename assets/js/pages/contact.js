var Contact = function () {

    return {
        
        //Map
        initMap: function () {
			var map,map2,map3;
			$(document).ready(function(){
			  map = new GMaps({
				div: '#map',
				lat: 19.062594,
				lng: 72.922643
			  });

			  map2 = new GMaps({
				div: '#map2',
				lat: 19.039211,
				lng: 72.946834
			  });

			  map3 = new GMaps({
				div: '#map3',
				lat: 19.09084,
				lng: 72.88471
			  });

			   var marker = map.addMarker({
		            lat: 19.062594,
					lng: 72.922643,
		            title: 'Masters Academy, Govandi.'
		        });

			   var marker2 = map2.addMarker({
		            lat: 19.039211,
					lng: 72.946834,
		            title: 'Masters Academy, Trombay.'
		        });

			   var marker3 = map3.addMarker({
		            lat: 19.09084,
					lng: 72.88471,
		            title: 'Masters Academy, Kurla.'
		        });

			});
        }

    };
}();