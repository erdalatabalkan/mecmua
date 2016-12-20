$(document).ready(function() {
	
	
	
	function getUrlVars()
    {
        var vars = [], hash;
        var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        for(var i = 0; i < hashes.length; i++)
        {
            hash = hashes[i].split('=');

            if($.inArray(hash[0], vars)>-1)
            {
                vars[hash[0]]+=","+hash[1];
            }
            else
            {
                vars.push(hash[0]);
                vars[hash[0]] = hash[1];
            }
        }

        return vars;
    }
	
	
	
	
	
	var ver= "1043";
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  Android.showToast(ver);
}






});
