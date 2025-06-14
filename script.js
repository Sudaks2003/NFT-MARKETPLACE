document.getElementById("createForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("nftName").value;
  const price = document.getElementById("nftPrice").value;
  const imageFile = document.getElementById("nftImageFile").files[0];

  if (!imageFile) return;

  const reader = new FileReader();
  reader.onload = function () {
    const newCard = document.createElement("div");
    newCard.className = "nft-card";
    newCard.innerHTML = `
      <img src="${reader.result}" alt="${name}">
      <h3>${name}</h3>
      <p>Price: ${price}</p>
    `;
    document.querySelector(".nft-grid").appendChild(newCard);
    document.getElementById("createForm").reset();
  };
  reader.readAsDataURL(imageFile);
});
