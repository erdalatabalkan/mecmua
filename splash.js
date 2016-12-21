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
		document.body.style.backgroundImage = "url('"+splashpacket+".splash.jpg')";
	}

	function splashtoast(splashversionmessage,splashlinkmessage) {
		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			splashversiontoast.splashversiontoastmessage(splashversionmessage);
			splashlinktoast.splashlinktoastmessage(splashlinkmessage);
		}
	}

	if( splashpacket == "erd.mecmua" ) {
		var splashversion = "1.01.1";
		var splashlink	  = "mecmua.ga";
		var splashcolor   = "#f3f3f3";
		splashbackground(splashcolor);
		splashtoast(splashversion,splashlink);
	}
});
