const promiseData = fetch("../constant/data.json")
  .then((res) => res.json())
  .then((resData) => resData.data);
const loopData = async () =>{
    const data = await promiseData;
    loopGalleryItems(data);
}
function loopGalleryItems(data) {
    const target = document.querySelector(".gallery-one");
    let output = "";
    data.forEach(function callback(item, index) {
      output = `<div class="grid-item">
      <figure class="effect-sadie">
        <img
          src="img/${item.thumbnail}"
          alt="Image"
          class="img-fluid tm-img"
        />
        <figcaption>
          <h2 class="tm-figure-title">
            Chart <span><strong>${item.name}</strong></span>
          </h2>
          <p class="tm-figure-description">
            ${item.description}
          </p>
          <a href="img/${item.image}">View more</a>
        </figcaption>
      </figure>
    </div>`
      target.innerHTML += output;
    });
  }