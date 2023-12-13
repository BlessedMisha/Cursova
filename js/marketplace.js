document.addEventListener("DOMContentLoaded", async function () {
  const numberOfItems = 12;
  const container = document.querySelector(".marketplace_cardrow");

  const response = await fetch('./json/artworks.json');
  const images = await response.json();

  for (let i = 0; i < numberOfItems; i++) {
    const divItem = document.createElement("div");
    divItem.classList.add("more_cardrow_item");

    if (i >= 5 && i <= 7) {
      divItem.classList.add("secondrow");
    }
    if (i >= 8) {
      divItem.classList.add("thirdrow");
    }

    const pos = Math.floor(Math.random() * images.length);
    const {
      image: img,
      name: naming,
      artist: artistName,
      artistpic: artistAvatar,
    } = images[pos];
    images.splice(pos, 1);

    divItem.innerHTML = `
      <div class="atropos my-atropos-${i}">
      <div class="atropos-scale">
        <div class="atropos-rotate">
          <div class="atropos-inner">
            <a href="nftpage.html" id="more_card">
              <img
                class="cardrow_img"
                src="images/marketplace/mark-pic${img}"
              />
              <div class="marketplace_card_placeholder">
                <h5 data-atropos-offset="5" class="marketplace_cardname sans">
                  ${naming}
                </h5>
                <div data-atropos-offset="5" class="more_card_artistcard">
                  <img
                    src="images/marketplace/${artistAvatar}.webp"
                    alt=""
                  />
                  <p class="marketplace_cardartist base-sans">
                    ${artistName}
                  </p>
                </div>
                <div data-atropos-offset="5" class="more_addinfo">
                  <div class="more_addinfo_price">
                    <p style="color: #858584" class="caption-mono">Price</p>
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
