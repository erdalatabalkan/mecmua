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
	
function Toast(toast) {
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  		Android.showToast(toast);
	}
}

var paket = getUrlVars()["pak"];
//document.write(paket);
	
	
if(paket == "erd.mecmua") {
	var ver= "1.04.3";
	Toast(ver);
	//document.write(ver);
	

}
var x = window.location.hostname;	
document.write(var);
function getDomainName(hostName)
{
    return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
}

});
