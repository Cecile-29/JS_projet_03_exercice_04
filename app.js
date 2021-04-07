function getTheRightPassWord() {
	if (document.getElementById('field1').value == document.getElementById('field2').value) {
		document.getElementById('field1').style.border = '2px solid green';
		document.getElementById('field2').style.border = '2px solid green';
	} else {
		document.getElementById('field1').style.border = "2px solid red";
		document.getElementById('field2').style.border = '2px solid red';
		alert('Veillez saisir deux mots de passe identiques !');
	}
}
