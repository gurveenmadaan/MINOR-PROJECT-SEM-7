const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});


function changeImage(element, value) {
	var image = document.getElementById(element);
	image.src = "./img/watch" + value + ".png";
}
function sendRequest(e) {
	// console.log(e);
	// e.preventDefault();

}

var form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	var button = document.getElementById("submit-button");
	button.innerHTML = `<div class="pl1">
	<div class="pl1__a"></div>
	<div class="pl1__b"></div>
	<div class="pl1__c"></div>
</div>`

	var firstname = document.getElementById("first-name").value;
	var lastname = document.getElementById("last-name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var country = document.getElementById("country").value;
	var comments = document.getElementById("comments").value;
	var data = {
		username: firstname,
		email: email,
		phone: phone,
		country: country,
		comments: comments
	}
	var jsonData = JSON.stringify(data);
	fetch('http://localhost:3000/contact/igoko', {
		method: "POST",
		headers: {
			'Content-Type': 'application/json'
		},
		body: jsonData

	}).then(response => response.json())
		.then(data => {
			window.alert(data.message);
			button.innerHTML=""
			button.innerText="✔️ Successfull"
			button.disabled=true;
		})
		.catch(error => {
			console.log(error);
		});
});