let prices = [7,1,5,3,6,4];

let result = 0;
let buy = 0;
for (let sell=0; sell < prices.length; sell++) {
  if (prices[buy] >= prices[sell]) buy = sell;
  else {
    let profit = prices[sell] - prices[buy];
    if (profit > result)  result = profit;
  }
}
console.log(result);
