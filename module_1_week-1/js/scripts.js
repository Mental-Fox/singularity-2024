const form = document.querySelector("form");
const outputText = document.querySelector(".output-text");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const name = formData.get("username");
  const password = formData.get("password");

  // Пароль должен быть минимум 8 символов, содержать хотя бы одну букву и одну цифру
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (name.length < 1 || password.length < 1 || !passwordRegex.test(password)) {
    outputText.textContent = "Fields are not valid!";
  } else {
    outputText.textContent = "Fields are valid!";
  }
});
