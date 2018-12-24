ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [55.61352599, 37.72574151],
        zoom: 16,
				controls: ['smallMapDefaultSet'],
				type: 'yandex#hybrid'
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

		myMap.hint.open(myMap.getCenter());

		myMap.behaviors.disable('scrollZoom');
}