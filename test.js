      var text = 'UEsDBAoDAAAAADW42FSKPiTVEAAAABAAAAAHAAAAZm9vLnR4dHRlc3RpbmcKdGVzdGluZwpQSwECPwMKAwAAAAA1uNhUij4k1RAAAAAQAAAABwAkAAAAAAAAACCApIEAAAAAZm9vLnR4dAoAIAAAAAAAAQAYAAAXJEdIiNgBABckR0iI2AEAFyRHSIjYAVBLBQYAAAAAAQABAFkAAAA1AAAAAAA='
      var content_type = 'application/zip';
      var target_file_name = 'foo.zip';
 
      function base64ToArrayBuffer(base64) {
        var binary_string = window.atob(base64);
        var len = binary_string.length;
        var bytes = new Uint8Array(len);
        for (var i = 0; i < len; i++) {
          bytes[i] = binary_string.charCodeAt(i);
        }
        return bytes.buffer;
      }
  
      var data = base64ToArrayBuffer(text);
      var blob = new Blob([data], {type: 'octet/stream'});
      
	  if (window.navigator.msSaveBlob) {
        window.navigator.msSaveBlob(blob, target_file_name);
      } else {
        var a = document.createElement('a');
		document.body.appendChild(a);
		var url = URL.createObjectURL(blob);
        a.href = url;
        a.download = target_file_name;
        a.click();
        window.URL.revokeObjectURL(url);
      }
