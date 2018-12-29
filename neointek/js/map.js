ymaps.ready(init);
var myMap,
		myPlacemark,
		mediaCenter;

if ($(window).width() <= 723) {
	mediaCenter = [55.61357457, 37.71915400];
}
else if ($(window).width() <= 829) {
	mediaCenter = [55.61357457, 37.72343259];
}
else if ($(window).width() <= 1035) {
	mediaCenter = [55.61357457, 37.72443259];
}
else {
	mediaCenter = [55.61352599, 37.72574151];
}

function init(){
    myMap = new ymaps.Map("map", {
        center: mediaCenter,
        zoom: 16,
				controls: ['smallMapDefaultSet']
				// type: 'yandex#hybrid'
    });

    myPlacemark = new ymaps.Placemark([55.61357457, 37.71915400], {
        hintContent: 'г. Москва, ул. Генерала Белова, д. 16, стр.4, офис 223'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/market.svg',
        iconImageSize: [39, 54],
        iconImageOffset: [-25, -57],
    });

    myMap.controls.remove('geolocationControl')
                  .remove('searchControl')
                  .remove('routeEditor')
                  .remove('trafficControl')
                  .remove('rulerControl')
                  .remove('zoomControl');

    myMap.controls.add('zoomControl', {
      position: {
        top: 10,
        left: 10
      }
    })

		myMap.geoObjects.add(myPlacemark);

		myMap.behaviors.disable('scrollZoom');
}

$(window).resize(function () {
	if ($(window).width() <= 740) {
		myMap.setCenter([55.61357457, 37.71915400]);
	}
	else if ($(window).width() <= 846) {
		myMap.setCenter([55.61357457, 37.72343259]);
	}
	else if ($(window).width() <= 1052) {
		myMap.setCenter([55.61357457, 37.72443259]);
	}
	else {
		myMap.setCenter([55.61352599, 37.72574151]);
	}
});