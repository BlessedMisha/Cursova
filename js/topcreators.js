function tabText() {
  var tabs = document.querySelectorAll(".tab");

  tabs.forEach(function (tab) {
    if (window.innerWidth <= 735) {
      switch (tab.id) {
        case "today":
          tab.textContent = "1d";
          break;
        case "this-week":
          tab.textContent = "7d";
          break;
        case "this-month":
          tab.textContent = "30d";
          break;
        case "all-time":
          break;
      }
    } else {
      switch (tab.id) {
        case "today":
          tab.textContent = "Today";
          break;
        case "this-week":
          tab.textContent = "This Week";
          break;
        case "this-month":
          tab.textContent = "This Month";
          break;
        case "all-time":
          tab.textContent = "All Time";
          break;
      }
    }
  });
}

window.addEventListener("load", tabText);
window.addEventListener("resize", tabText);

document.addEventListener("DOMContentLoaded", function () {
  const numberOfItems = 20;

  const rankings = [
    { image: "1.webp", name: "Marcus Saris" },
    { image: "2.webp", name: "Alfonso Bator" },
    { image: "3.webp", name: "Nolan Mango" },
    { image: "4.webp", name: "Valik Kluka" },
    { image: "5.webp", name: "Miracle Gouse" },
    { image: "6.webp", name: "Alena Septimus" },
    { image: "7.webp", name: "Desirae Lipshutz" },
    { image: "8.webp", name: "Paityn Kenter" },
    { image: "9.webp", name: "Alena Vaccaro" },
    { image: "13.webp", name: "Randy Carter" },
    { image: "14.webp", name: "Hanna Culhane" },
    { image: "15.webp", name: "Jocetyn Workman" },
    { image: "16.webp", name: "Desirae Septimus" },
    { image: "10.webp", name: "Ahmad Franci" },
    { image: "11.webp", name: "Maria Bergson" },
    { image: "17.webp", name: "Ahmad Geidt" },
    { image: "12.webp", name: "Skylar Mango" },
    { image: "2.webp", name: "Rayna Geidt" },
    { image: "1.webp", name: "Marley Rosser" },
    { image: "5.webp", name: "Tatiana Philips" },
  ];

  const container = document.querySelector(".rankings_table");

  for (let i = 0; i < numberOfItems; i++) {
    const divItem = document.createElement("a");
    divItem.classList.add("rankings_table_item");
    divItem.classList.add("hvr-shrink");
    divItem.setAttribute("href", "artistpage.html");

    const pos = Math.floor(Math.random() * rankings.length);
    const { image: randomImage, name: randomName } = rankings[pos];
    rankings.splice(pos, 1);

    divItem.innerHTML = `
      <p style="font-size:16px" class="table_num caption-mono">${i + 1}</p>
      <div class="table_name rankings_table_artist">
        <img src="images/artist_avatar${randomImage}" alt="" />
        <p class="table_artistname base-sans">${randomName}</p>
      </div>
      <p style="color: #00ac4f" class="table_change base-sans">+1.41%</p>
      <p class="table_sold base-sans">602</p>
      <p class="table_price base-sans">12.4 ETH</p>
              `;
    container.appendChild(divItem);
  }
});
