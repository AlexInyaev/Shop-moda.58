function valid(form){
	var name = form.name.value;
	var password = form.password.value;
	var Repassword = form.Repassword.value;
	var email = form.email.value;
	var state = form.state.value;
	var fail = false;
	var abr_pattern = /[0-9a-z_-]+@[0-9a-z_-]+\.[a-z]{2,5}/i; // Регулярное выражение
	console.log(name)
	if(name==""||name==" ")
			fail='Вы не ввели имя';
		// else if( abr_pattern.test(email)== false) //проверка на на верный емайл рег выр
		// 	fail='Вы  ввели не верный адрес';
		else if( email.split('@').length-1== 0) //проверка на @
			fail='Вы  ввели не верный адрес';
		else if(password == "")
			fail='Вы не ввели Пароль';
		else if(password != Repassword)
			fail='Пароли несовподают';
		else if(state == "")
			fail='Укажите пол';
		if(fail){
			alert(fail);
		}else{
			window.location = "http://google.com"
		}
}
