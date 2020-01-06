var oKeepAlive = new Image();
function KeepAlive(sIDIn){
	if (sIDIn != ""){
		d = new Date();
		oKeepAlive.src = "/revive.asp?t=" + escape(d);
		setTimeout("KeepAlive('"+ sIDIn +"')",900000); //15 Minutes = 900000
	}
}