require("dotenv/config");

module.exports = {
  api: "https://pro-api.coinmarketcap.com",
  header: {
    "Content-Type": "application/json",
    "X-CMC_PRO_API_KEY": process.env.CMC_API_KEY,
  },
  priceUrl: "/v1/cryptocurrency/quotes",
};
