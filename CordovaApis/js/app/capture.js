var app = app || {};

(function(a) {
    a.captureApi = {
        capture: function(){
             navigator.device.capture.captureAudio(captureSuccess, captureError, {limit: 2});       
        }
    }
    
    function captureSuccess(mediaFiles) {
        var i, len;
        for (i = 0, len = mediaFiles.length; i < len; i += 1) {
            uploadFile(mediaFiles[i]);
        }
    }
    
     function captureError(error) {
        var msg = 'An error occurred during capture: ' + error.code;
        navigator.notification.alert(msg, null, 'Uh oh!');
    }
}(app));