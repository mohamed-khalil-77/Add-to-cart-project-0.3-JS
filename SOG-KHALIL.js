const buttons = document.querySelectorAll(".the-click");
const cartDiv = document.getElementById("cart");

buttons.forEach((button) => {
  button.addEventListener("click", () => {

    const parentElement = button.parentElement;

    const contenu = parentElement.querySelector("#bio").textContent;
    const prix = parentElement.querySelector("#prix").textContent;

    const productDetails = document.createElement("div");
    productDetails.classList.add("product-details");
    productDetails.innerHTML = `
      <p>${contenu}</p>
      <p>${prix}</p>
    `;
  });
});

