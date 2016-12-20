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

var paket = getUrlVars()["pak"];
document.write(paket);
	
	
if(paket == "erd.mecmua") {
	var ver= "1.04.3";
	document.write(ver);
	
}



});
