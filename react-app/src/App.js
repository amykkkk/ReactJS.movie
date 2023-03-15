import { useState, useEffect } from "react";
import styled from "./style.css";

function App() {
  const [loading, setLoading] = useState(true);      // data 가져오기전 loading
  const [coins, setCoins] = useState([]);
  const [price, setPrice] = useState(0);             // coin 값
  const [amount, setAmount] = useState("");          // input 값

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")  // 정보 가져올 url
      .then((response) => response.json())           // url에서 가져온 정보를 json으로 변환
      .then((json) => setCoins(json));               // 변환된 json을 coins(빈 array)에 넣기
    setLoading(false);                               // loading 글자 지우기
  }, []);
  
  const handleInput = (e) => setAmount(e.target.value);
  const handlePrice = (event) => {setPrice(event.target.value);};

  return (
    <div className="set">
      <div className="title-container">
        <h1>The coins! {loading ? "" : `(${coins.length})`}</h1>
        <p>
          Database:
          <a href="https://api.coinpaprika.com/v1/tickers">Coin Paprika</a>
        </p>
      </div>

      <div className="main-container">
        <div>
          <label className="label1">Dollars you have $ </label>
          <input
            onChange={handleInput}
            value={amount}
            type="number"
            placeholder="Please write your USD"
          />
          <span> USD</span>
        </div>
        <br />

        {loading ? (
          <strong>Loading...</strong>
        ) : (
          <div>
            <label className="label1">Choose coin :</label>
            <select onChange={handlePrice}>
              <option key="-1">Select Coin !</option>
              {coins.map((coin) => (
                <option key={coin.id} value={coin.quotes.USD.price.toFixed(2)}>
                  {/* index 대신 coin.id 사용 */}
                  {coin.name} ({coin.symbol})
                </option>
              ))}
            </select>
          </div>
        )}

        <div className="result">
          <strong>
            You can get &nbsp;
            {price === 0 ? "0" : (amount / price).toFixed(2)} Coin(s).
          </strong>
        </div>
      </div>
    </div>
  );
}

export default App;
