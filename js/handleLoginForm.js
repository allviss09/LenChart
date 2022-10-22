async function handleLoginForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;

  try {
    const formData = new FormData(form);
    const responseData = await postFormDataAsJson({ url, formData });
    console.log(responseData);
    if (responseData.role != null) {
      localStorage.setItem("role", responseData.role);
      localStorage.setItem("user", "Hi! Loan");
      window.open("../admin.html", "_self");
    }
    if (responseData.error != null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Login Fail Gòi >_<",
      });
    }
  } catch (error) {
    console.error(error);
  }
}

async function postFormDataAsJson({ url, formData }) {
  const plainFormData = Object.fromEntries(formData.entries());
  const formDataJsonString = JSON.stringify(plainFormData);
  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: formDataJsonString,
  };

  const response = await fetch(url, fetchOptions);

  var result = await response.json();
  return result;
}
