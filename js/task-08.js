const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email.trim() === "" || password.trim() === "") {
    alert("All fields must be filled in");
    return;
  }
  const formData = new FormData(event.currentTarget);

  const formDataObject = {};
  formData.forEach((value, name) => {
    formDataObject[name] = value;
  });

  console.log(formDataObject);

  form.reset();
}
