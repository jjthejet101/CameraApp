let app = {
  init: function () {
    document.getElementById('btn').addEventListener('click', app.takephoto)
  },
  takephoto: function () {
    let opts = {
      quality: 100,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      mediaType: Camera.MediaType.PICTURE,
      encodingType: Camera.EncodingType.JPEG,
      cameraDirection: Camera.Direction.FRONT
    }
    var onSuccess = function (position) {
      alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Altitude: '          + position.coords.altitude          + '\n' +
            'Accuracy: '          + position.coords.accuracy          + '\n' +
            'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
            'Heading: '           + position.coords.heading           + '\n' +
            'Speed: '             + position.coords.speed             + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
    }
    navigator.camera.getPicture(app.ftw, app.wtf, opts)
    navigator.geolocation.getCurrentPosition(onSuccess);
  },
  ftw: function (imageData) {
    document.getElementById('msg').textContent = imageData
    document.getElementById('photo').src = 'data:image/jpeg;base64,' + imageData
  },
  wtf: function (msg) {
    document.getElementById('msg').textContent = msg
    function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
  }
}

document.addEventListener('deviceready', app.init)
