const axios = require("axios");
const settings = require("./settings");
const portifolio = require("./coins");

const priceRequest = axios.create({
  baseURL: settings.api + settings.priceUrl,
  headers: settings.header,
});

async function getWalletPrice(priceRequest) {
  let walletPrice = 0;

  for (const asset of portifolio) {
    try {
      const coinInfo = await priceRequest.get("/latest", {
        params: {
          symbol: asset.symbol,
        },
      });
      const coinPrice = coinInfo.data.data[asset.symbol].quote.USD.price;
      walletPrice += coinPrice * asset.total;
    } catch (e) {
      console.log(e);
    }
  }

  console.log('You have ' + walletPrice.toFixed(2) + ' USD on yout crypto wallet!')
}

getWalletPrice(priceRequest);
