// JavaScript Document
function Registrasi(){//validasi registrasi
	var regis=document.forms["MyForms"]["nama"]["email"]["address"]["contact"]["email"].value;
	var pss= document.forms.["MyForms"]["pass"].value;
	var pss1=document.forms["MyForms"]["cpass"].value;
	

	if (regis != null || pss != pss1){
		alert('Password does not match  !');
		return false;
	}else{
		alert('Registration Sucess !');
		
	}
}
