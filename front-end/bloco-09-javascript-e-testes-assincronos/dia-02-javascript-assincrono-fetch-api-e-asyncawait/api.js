const url = `https://api.coincap.io/v2/assets`;
const ul = document.querySelector('ul');

const coinLi = (data) => {
  data.filter(({ rank }) => rank <= 10)
    .forEach(({ name, symbol, priceUsd }) => {
      const li = document.createElement('li');
      li.innerHTML =  `${name} (${symbol}): USD ${priceUsd}`;
      ul.appendChild(li);
    })
}

const arrCoins = (callback) => {
  const coinsArray = fetch(url)
    .then((response) => response.json())
    .then((data) => callback(data.data))
    .catch((error) => console.log('deu ruim :', error));
};
arrCoins(coinLi);