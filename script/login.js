$(document).ready(function(){
	var formInputs = $('input[type="email"],input[type="password"]');
	formInputs.focus(function() {
       $(this).parent().children('p.formLabel').addClass('formTop');
       $('div#formWrapper').addClass('darken-bg');
       $('div.logo').addClass('logo-active');
	});
	formInputs.focusout(function() {
		if ($.trim($(this).val()).length == 0){
		$(this).parent().children('p.formLabel').removeClass('formTop');
		}
		$('div#formWrapper').removeClass('darken-bg');
		$('div.logo').removeClass('logo-active');
	});
	$('p.formLabel').click(function(){
		 $(this).parent().children('.form-style').focus();
	});
});
function isValidEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
} 

const subButton=document.getElementById("submit");
console.log(subButton)
subButton.addEventListener("click", function (event)
 { 
	if(event.target.parentElement.previousElementSibling.previousElementSibling.children[1].value==""||event.target.parentElement.previousElementSibling.children[1].value==""){
		alert("Please enter your email address and password")
	}else if(!isValidEmail(event.target.parentElement.previousElementSibling.previousElementSibling.children[1].value)){
		alert("Please enter a valid email address")
	}
	if(isValidEmail(event.target.parentElement.previousElementSibling.previousElementSibling.children[1].value)&& event.target.parentElement.previousElementSibling.children[1].value){
		window.location="./main.html"
	}
	

  })