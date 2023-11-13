const nightmare = require("nightmare")();

const agrs = process.argv.slice(2);
const url = agrs[0];
const minPrice = agrs[1];

const checkPrice = async () => {
  const priceString = await nightmare
    .goto(url)
    .wait(".a-offscreen")
    .evaluate(() => document.querySelector(".a-offscreen").innerText)
    .end();
  const priceNumber = parseFloat(priceString.replace("£", ""));
  if (priceNumber < minPrice) {
    console.log("It is cheap");
  } else {
    console.log("It is expensive");
  }
};

checkPrice();
