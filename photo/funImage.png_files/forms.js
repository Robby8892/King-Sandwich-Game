//----------------------------------------------------------------------------------------------
// App Form Stuff
//----------------------------------------------------------------------------------------------
function buildMsg(msgin){return "    *  " + msgin + "\n";}
function errorMsg(msgin){return "There was a problem processing your request. Please correct the following and try again:\n\n" + msgin;}
function submitForm(actionin){
	frm = document.form1;	
	frm.action = sActionPage;
	frm.frmAction.value = actionin;
	if(actionin == "back"){
		document.location.href = sBackPage;
	}else if(actionin == "delete"){
		if (confirm("Are you sure you would like to permanently delete this record?") == true){frm.submit();}
	}else if(actionin == "save"){
		var msg = "";
		msg = validateForm();
		if (msg == ""){
			frm.submit();
		}else{
			alert(errorMsg(msg));
		}
	}
}
//----------------------------------------------------------------------------------------------
// Validation Stuff
//----------------------------------------------------------------------------------------------
var phoneNumberDelimiters = "()- "; // non-digit characters which are allowed in phone numbers

function validatePhone(strin){
	var tmp = "";
	//must be in (xxx) xxx-xxxx format
	tmp = stripChars(strin,phoneNumberDelimiters);
	if (isInteger(tmp) && tmp.length == 10){
		if (strin.indexOf("(",0) == 0 && strin.indexOf(")",0) == 4 && strin.indexOf(" ",0) == 5 && strin.indexOf("-",0) == 9) {
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}
}
function validateZip(strin){
	var tmp = "";
	tmp = stripChars(strin,"-");
	if (strin.length == 5 && isInteger(strin) == true){
		return true;
	}else if (strin.length == 10 && strin.indexOf("-") == 5 && isInteger(tmp)){
		return true;
	}else{
		return false;
	}
}
function hasFileExt(filepathin,extin){
	var startsearch = 0;	
	var extpos = 0;
	startsearch = filepathin.length-extin.length-1;
	extpos = filepathin.lastIndexOf(extin);	
	if (extpos-startsearch > 0){
		return true;	
	}else{
		return false;
	}
}
//----------------------------------------------------------------------------------------------
// Formatting Stuff
//----------------------------------------------------------------------------------------------
function formatPhone(strin){
	//must be in (xxx) xxx-xxxx format	
	var tmp = "";
	tmp = stripChars(strin,phoneNumberDelimiters + "./");
	if (isInteger(tmp) && tmp.length == 10){
		return "(" + tmp.slice(0,3) + ") " + tmp.slice(3,6) + "-" + tmp.slice(6,10);
	}else{
		return strin;
	}
}
function formatZip(strin){
	var tmp = "";
	tmp = stripChars(strin,"- ");
	if (isInteger(tmp) && tmp.length == 9){
		return tmp.slice(0,5) + "-" + tmp.slice(5,9);
	}else{
		return strin;
	}
}
//----------------------------------------------------------------------------------------------
// String Functions
//----------------------------------------------------------------------------------------------
function isInteger(s){
	var i;
    for (i = 0; i < s.length; i++){   
        var c = s.charAt(i);
        if (((c < "0") || (c > "9"))) return false;
    }
    return true;
}
function replaceStr(str,rep,subst){
	var tmp = "",returnstr = "";
	while (str.indexOf(rep)!=-1){
		tmp = str.substring(0,str.indexOf(rep))+subst;
		str = str.substring(str.indexOf(rep)+rep.length());
		returnstr = returnstr+tmp;
	}
	return returnstr+str;
}
function selectValue(fieldin,selectin){
	for (var i=0; i < fieldin.length; i++){
		if (fieldin.options[i].value == selectin){fieldin.options[i].selected = true;}
	}
}
function stripChars(s, str){
	var i;
    var returnString = "";
    // Search through string's characters one by one. Toss out any non numbers
    for (i = 0; i < s.length; i++){   
        // Check that current character isn't whitespace.
        var c = s.charAt(i);
        if (str.indexOf(c) == -1) returnString += c;
    }
    return returnString;
}
