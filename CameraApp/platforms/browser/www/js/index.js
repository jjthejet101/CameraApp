let app = {
  init: function () {
    document.getElementById('btn').addEventListener('click', app.takephoto)
    console.log('started app.init/app is ready')
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
    navigator.camera.getPicture(app.ftw, app.wtf, opts)
    console.log('executed camera.getPicture')
  },
  ftw: function (imageData) {
    var onSuccess = function (position) {
      alert('Latitude: '          + position.coords.latitude          + '\n' +
            'Longitude: '         + position.coords.longitude         + '\n' +
            'Timestamp: '         + position.timestamp                + '\n');
    }
    navigator.geolocation.getCurrentPosition(onSuccess)
    console.log('executed geolocation.getCurrentPosition')
    document.getElementById('msg').textContent = imageData
    console.log('sent imgageData as textContent to "msg" element')
    document.getElementById('photo').src = 'data:image/jpeg;base64,' + imageData
    console.log('rendered picture')
  },
  wtf: function (msg) {
    document.getElementById('msg').textContent = msg
    function onError(error) {
      alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    }
    console.log('error')
  }
}

document.addEventListener('deviceready', app.init)
