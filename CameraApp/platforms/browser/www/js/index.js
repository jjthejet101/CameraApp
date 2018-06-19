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
      cameraDirection: Camera.Direction.FRONT,
    }
    navigator.camera.getPicture(app.ftw, app.wtf, opts)
  },
  ftw: function (imageData) {
    document.getElementById('msg').textContent = imageData
    document.getElementById('photo').src = 'data:image/jpeg;base64,' + imageData
  },
  wtf: function (msg) {
    document.getElementById('msg').textContent = msg
  }
}

document.addEventListener('deviceready', app.init)
