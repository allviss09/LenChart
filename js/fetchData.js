const loopData = async (isLogin) => {
  const data = await testFetch();
  await loopGalleryItems(data, isLogin);
};

async function testFetch() {
  let headers = new Headers();

  headers.append("Access-Control-Allow-Origin", "http://localhost:3000");
  headers.append("Access-Control-Allow-Credentials", "true");

  const url = "http://localhost:3000/lencharts";
  const response = await fetch(url, { headers });
  const { data } = await response.json();
  console.log(data);
  return data;
}

async function loopGalleryItems(data, isLogin) {
  const target = document.querySelector(".gallery-one");
  let output = "";
  data.forEach(function callback(item, index) {
    output = `<div class="grid-item">
      <figure class="effect-sadie">
        <img
          src="${item.thumbnailAWSURL}"
          alt="Image"
          class="img-fluid tm-img"
        />
        <figcaption>
          <h2 class="tm-figure-title">
            <span><strong>${item.name}</strong></span>
          </h2>
          <p class="tm-figure-description">
            ${item.description}
          </p>
          <a href="${
            isLogin == true ? item.imageAWSURL : item.thumbnailAWSURL
          }">View more</a>
        </figcaption>
      </figure>
    </div>`;
    target.innerHTML += output;
  });
}
