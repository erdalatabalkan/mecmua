$(document).ready(function() {

	function getUrlVars(){
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++){
			hash = hashes[i].split('=');
			if($.inArray(hash[0], vars)>-1){
				vars[hash[0]]+=","+hash[1];
			}
			else{
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
		}
		return vars;
	}
	
	var splashpacket = getUrlVars()["pak"];
	
	function splashbackground(splashcolormessage) {
		document.body.style.backgroundColor = '"'+splashcolormessage+'"';
	}

	function splashtoast(splashversionmessage) {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			splashversiontoast.splashversiontoastmessage(splashversionmessage);
		}
	}

	if( splashpacket == "erd.mecmua" ) {
		var splashversion = "1.02.5";
		var splashcolor   = "#222";
		splashbackground(splashcolor);
		splashtoast(splashversion);
	}
	
	else if( splashpacket == "erd.autosurfinc" ) {
		var splashversion = "1.02.5";
		var splashcolor   = "#2E3842";
		splashbackground(splashcolor);
		splashtoast(splashversion);
	}
});
