// function initMap() {
//     var myLatLng = {lat: 45.5059118, lng: -73.5671222};
//
//     var customMapType = new google.maps.StyledMapType([
//         {
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#212121"
//                 }
//             ]
//         },
//         {
//             "elementType": "labels.icon",
//             "stylers": [
//                 {
//                     "visibility": "off"
//                 }
//             ]
//         },
//         {
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#757575"
//                 }
//             ]
//         },
//         {
//             "elementType": "labels.text.stroke",
//             "stylers": [
//                 {
//                     "color": "#212121"
//                 }
//             ]
//         },
//         {
//             "featureType": "administrative",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#757575"
//                 }
//             ]
//         },
//         {
//             "featureType": "administrative.country",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#9e9e9e"
//                 }
//             ]
//         },
//         {
//             "featureType": "administrative.land_parcel",
//             "stylers": [
//                 {
//                     "visibility": "off"
//                 }
//             ]
//         },
//         {
//             "featureType": "administrative.locality",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#bdbdbd"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#757575"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi.business",
//             "stylers": [
//                 {
//                     "visibility": "on"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi.business",
//             "elementType": "labels.icon",
//             "stylers": [
//                 {
//                     "lightness": -45
//                 }
//             ]
//         },
//         {
//             "featureType": "poi.park",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#181818"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi.park",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#616161"
//                 }
//             ]
//         },
//         {
//             "featureType": "poi.park",
//             "elementType": "labels.text.stroke",
//             "stylers": [
//                 {
//                     "color": "#1b1b1b"
//                 }
//             ]
//         },
//         {
//             "featureType": "road",
//             "elementType": "geometry.fill",
//             "stylers": [
//                 {
//                     "color": "#2c2c2c"
//                 }
//             ]
//         },
//         {
//             "featureType": "road",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#8a8a8a"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.arterial",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#373737"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.highway",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#3c3c3c"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.highway.controlled_access",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#4e4e4e"
//                 }
//             ]
//         },
//         {
//             "featureType": "road.local",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#616161"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#757575"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit.station.rail",
//             "stylers": [
//                 {
//                     "visibility": "on"
//                 }
//             ]
//         },
//         {
//             "featureType": "transit.station.rail",
//             "elementType": "labels.icon",
//             "stylers": [
//                 {
//                     "lightness": -45
//                 }
//             ]
//         },
//         {
//             "featureType": "water",
//             "elementType": "geometry",
//             "stylers": [
//                 {
//                     "color": "#000000"
//                 }
//             ]
//         },
//         {
//             "featureType": "water",
//             "elementType": "labels.text.fill",
//             "stylers": [
//                 {
//                     "color": "#3d3d3d"
//                 }
//             ]
//         }
//     ], {
//         name: 'Custom Style'
//     });
//     var customMapTypeId = 'custom_style';
//
//     var map = new google.maps.Map(document.getElementById('map'), {
//         //center: new google.maps.LatLng(45.5059118,-73.5671222),
//         center: myLatLng,
//         zoom: 16,
//         //zoom: 17,
//         mapTypeId: google.maps.MapTypeId.ROADMAP,
//         //mapTypeControlOptions: {
//         //    mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
//         //}
//         disableDefaultUI: true // Remove controls
//     });
//
//     //var transitLayer = new google.maps.TransitLayer();
//     //transitLayer.setMap(map);
//     map.mapTypes.set(customMapTypeId, customMapType);
//     map.setMapTypeId(customMapTypeId);
//
//     // Set marker
//     //var marker = new google.maps.Marker({
//     //    position: myLatLng,
//     //    map: map,
//     //    title: "Nyk's"
//     //});
// }



function resizeHeader() {
    $('header, .title-c, .title-d, .title-e').css('height', window.innerHeight + 'px');

    // console.log('window.innerHeight', window.innerHeight);
    // console.log("$('header').css('height')", $('header').css('height'));
}

$(function() {
    resizeHeader();

    // $(window).resize(function () {
    //     resizeHeader();
    // });

    $('#cf-fr').click(function() {
       $('#menu-du-jour').show();
    });

    $('#cf-en').click(function() {
        $('#daily-menu').show();
    });

    $('#close-menu').click(function() {
        $('#menu-du-jour').hide();
        $('#daily-menu').hide();
    })
});
