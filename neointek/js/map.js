ymaps.ready(init);
var myMap,
    myPlacemark;

function init(){
    myMap = new ymaps.Map("map", {
        center: [59.90577528, 30.48714974],
        zoom: 16,
				controls: ['smallMapDefaultSet'],
				type: 'yandex#hybrid'
    });

    myPlacemark = new ymaps.Placemark([59.90559206, 30.47991850], {
        hintContent: 'г. Санкт-Петербург, ул. Дыбенко 27 к1'
    }, {
        iconLayout: 'default#image',
        iconImageHref: 'images/market.svg',
        iconImageSize: [50, 54],
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
}