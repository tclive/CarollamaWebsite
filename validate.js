

function validateForm(){
	var fname = document.getElementById("1").value;
	var lname = document.getElementById("2").value;
	var email = document.getElementById("3").value;
	var telephone = document.getElementById("4").value;
	
	
	
	var test1 = validateName(fname);
	var test2 = validateName(lname);
	var test3 = validateEmail(email);
	var test4 = validateNumber(telephone);
	var test5 = validateBoxes();
	
	if(test1 && test2 && test3 && test4 && test5){
		return true;
	}else{
		return false;
	}
	
	//alert('true');
	//} else{
	//	alert('false');
	//}
}

function validateName(name){
	if(name == "")
		return false;
	if(name.length >15)
		return false;
	if(name.charAt(0) >= 'A' && name.charAt(0) <= 'Z'){
		return true;
	}
}

function validateEmail(email){
	var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	return re.test(email);
}

function validateNumber(number){
	var re = /^\d{10}$/;
	return re.test(number.replace(/[\s-]/g,''));
}

function validateBoxes(){ //validates that at least one box is checked
	var nodeList = document.getElementsByTagName("input");
	for(var i = 0; i<nodeList.length; i++){
		if(nodeList[i].type=='checkbox'){
			if(nodeList[i].checked){
				return true; //at least one of the checkboxes is checked
			}
		}
	} return false;
}

