const imageUrl = "https://lenchart-api.cyclic.app/image/";

const loopData = async (isLogin) => {
  const data = await testFetch();
  await loopGalleryItems(data, isLogin);
};

async function testFetch() {
  const url = "https://lenchart-api.cyclic.app/lencharts";
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function loopGalleryItems(data, isLogin) {
  const target = document.querySelector(".gallery-one");
  let output = "";
  data.forEach(function callback(item, index) {
    output = `<div class="grid-item">
      <figure class="effect-sadie">
        <img
          src="${imageUrl + item.thumbnail}"
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
            isLogin == true ? imageUrl + item.image : imageUrl + item.thumbnail
          }">View more</a>
        </figcaption>
      </figure>
    </div>`;
    target.innerHTML += output;
  });
}
