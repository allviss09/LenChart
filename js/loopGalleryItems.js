function loopGalleryItems(data) {
  const target = document.querySelector(".gallery-one");
  let output = "";
  data.forEach(function callback(item, index) {
    output = `<div class="grid-item">
    <figure class="effect-sadie">
      <img
        src="img/${item.name}-tn.jpg"
        alt="Image"
        class="img-fluid tm-img"
      />
      <figcaption>
        <h2 class="tm-figure-title">
          Image <span><strong>${index+1}</strong></span>
        </h2>
        <p class="tm-figure-description">
          ${item.description}
        </p>
        <a href="img/${item.name}jpg">View more</a>
      </figcaption>
    </figure>
  </div>`
    target.innerHTML += output;
  });
}
