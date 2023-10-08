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

  formData.forEach((value, name) => {
    console.log("onFormSubmit -> name", name);
    console.log("onFormSubmit -> value", value);
  });

  form.reset();
}
