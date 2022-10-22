function loginLabelClick(event) {
  event.preventDefault();
  const a = event.currentTarget;
  const content = a.innerHTML;

  if (content == "Login") {
    localStorage.clear();
    window.open("../login.html","_self");
  } else {
    localStorage.clear();
    window.open("../index.html","_self");
  }
}
