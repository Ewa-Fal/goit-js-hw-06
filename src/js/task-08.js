const form = document.querySelector(".login-form");

function handleSubmit(event) {
	event.preventDefault();
	const {
		elements: { email, password },
	} = event.currentTarget;

	if (email.value === "" || password.value === "") {
		return alert("Please fill in all the fields!");
	}

	const formData = {
		email: email.value,
		password: password.value,
	};

	console.log(formData);
	event.currentTarget.reset();
}

form.addEventListener("submit", handleSubmit);

/*
Zadanie 8
Napisz skrypt zarządzania formularzem logowania.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>


Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona przy użycie wydarzenia submit
Podczas przesyłania formularza strona nie powinna się odświeżać.
Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym, że wszystkie pola powinny zostać wypełnione.
Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz wartość pól jako obiekt, gdzie nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości. Aby otrzymać dostęp do elementów formularza użyj właściwości elements.
Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól input metodą reset.
*/
