async function handleCreateForm(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const url = form.action;

  try {
    // const data = new FormData(form);
    // const data = new URLSearchParams(new FormData(form));

    const data = new FormData();
    data.append("name", document.querySelector("input[name='name']").value);
    data.append(
      "description",
      document.querySelector("input[name='description']").value
    );
    data.append(
      "image",
      document.querySelector("input[name='image']").files[0]
    );
    data.append(
      "thumbnail",
      document.querySelector("input[name='thumbnail']").files[0]
    );

    const responseData = await postFormDataAsJson({ url, data });
    console.log(responseData);
    if (responseData.data != null) {
      Swal.fire({
        title: "Creat Succes Gòi Ó >_<",
        width: 600,
        padding: "3em",
        color: "#716add",
        background: "#fff url(/img/trees.png)",
        backdrop: `
              rgba(0,0,123,0.4)
              url("/img/nyan-cat.gif")
              left top
              no-repeat
            `,
      }).then(result => {
        if (result.isConfirmed) {
            window.open("../admin.html","_self")
        }
      });
    }
    if (responseData.error != null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Create Fail Gòi >_<",
      });
    }
  } catch (error) {
    console.error(error);
  }
}

async function postFormDataAsJson({ url, data }) {
  let headers = new Headers();

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");

  headers.append("POST", "OPTIONS");

  const fetchOptions = {
    method: "POST",
    headers,
    body: data,
  };

  const response = await fetch(url, fetchOptions);

  var result = await response.json();
  return result;
}
