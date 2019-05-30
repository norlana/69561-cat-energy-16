(function () {
  var tablet_width = 768;
  var desktop_width = 1300;
  var small_marker = {width: 62, height: 53};
  var big_marker = {width: 124, height: 106};

  window.initialize = function() {
    var viewport = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var mapCenter = viewport < desktop_width ? {lat: 59.93886, lng: 30.323182} : {lat: 59.939075, lng: 30.319555};
    var markerCenter = viewport < tablet_width ? {lat: 59.938781, lng: 30.323182} : {lat: 59.938781, lng: 30.3232};
    var markerSize = viewport < tablet_width ? small_marker : big_marker;

    var map = new google.maps.Map(document.getElementById('map'), {
      center: mapCenter,
      zoom: 17,
      mapTypeControl: false,
      streetViewControl: false,
      rotateControl: false,
      zoomControl: true,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
      }
    });

    var image = {
      url: "img/map/map-pin.png",
      scaledSize: markerSize
    };

    var marker = new google.maps.Marker({
      position: markerCenter,
      map: map,
      optimized: true,
      icon: image
    });
  };

  window.addEventListener("resize", initialize);
})();
