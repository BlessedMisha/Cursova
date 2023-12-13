document.addEventListener("DOMContentLoaded", function () {
  const numberOfItems = 9;

  const images = [
    { image: "1.webp", name: "Foxy Life" },
    { image: "2.webp", name: "Cat From Future" },
    { image: "3.webp", name: "Psycho Dog" },
    { image: "4.webp", name: "Designer Bear" },
    { image: "5.webp", name: "Dancing Robot 0375" },
    { image: "6.webp", name: "Dancing Robot 0356" },
    { image: "7.webp", name: "Dancing Robot 0321" },
    { image: "8.webp", name: "Dancing Robot 0512" },
    { image: "9.webp", name: "Dancing Robot 0024" },
  ];

  const container = document.querySelector(".morenft_cardrow");

  for (let i = 0; i < numberOfItems; i++) {
    const divItem = document.createElement("div");
    divItem.classList.add("more_cardrow_item");

    if (i > 1 && i < 6) {
      divItem.classList.add("secondrow");
    }
    if (i >= 5) {
      divItem.classList.add("thirdrow");
    }

    const pos = Math.floor(Math.random() * images.length);
    const { image: randomImage, name: randomName } = images[pos];
    images.splice(pos, 1);

    divItem.innerHTML = `
      <div class="atropos my-atropos-${i}">
              <div class="atropos-scale">
                <div class="atropos-rotate">
                  <div class="atropos-inner">
                    <a href="nftpage.html" class="more_card">
                      <img
                        class="cardrow_img"
                        src="images/nftpage/morenft${randomImage}"
                      />
                      <div class="nft_card_placeholder">
                        <h5 class="sans">${randomName}</h5>
                        <div class="more_card_artistcard">
                          <img src="images/nftpage/artist-avatar.svg" alt="" />
                          <p class="base-sans">Orbition</p>
                        </div>
                        <div class="more_addinfo">
                          <div class="more_addinfo_price">
                            <p style="color: #858584" class="caption-mono">
                              Price
                            </p>
                            <p style="color: #fff" class="base-mono">1.63 ETH</p>
                          </div>
                          <div class="more_addinfo_bid">
                            <p style="color: #858584" class="caption-mono grey">
                              Highest Bid
                            </p>
                            <p style="color: #fff" class="base-mono">0.33 wETH</p>
                          </div>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
              `;
    container.appendChild(divItem);
    atroposFunc(i);
  }
});
