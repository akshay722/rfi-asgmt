import React from "react";
import { useState } from "react";
import { BtcIcon, RelativefiIcon } from "../Helpers/icons";
import Button from "./button";
import Header from "./header";

function Form() {
  const [selectToken1, setSelectToken1] = useState("btc");
  const [selectToken2, setSelectToken2] = useState("matic");
  const [startTime, setStartTime] = useState("");
  const [lotDuration, setLotDuration] = useState("");
  const [deposit, setDeposit] = useState("");

  const cardClass = "flex bg-dark-late-grey rounded-2xl h-full my-6";
  const textField =
    "bg-dark-late-blue rounded-lg p-2 w-full border-2 border-field-border";
  const innerText = "text-2xs text-inner-text pb-2";
  const innerElementContainer = "w-1/2 p-5 pt-3";

  const icon = <BtcIcon />;

  const handleSubmit = (e) => {
    console.log(
      `Token 01: ${selectToken1} 
      Token 02: ${selectToken2} 
      Start Time: ${startTime} 
      Lot Duration: ${lotDuration} 
      Initial Deposit: ${deposit}`
    );
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container max-w-lg m-auto bg-gray-700"
    >
      <Header />
      <div>
        <div className={cardClass}>
          <div
            className={`${innerElementContainer} border-r-2 border-divider-color`}
          >
            <div className={innerText}>TOKEN 01</div>
            <select
              value={selectToken1}
              className={textField}
              onChange={(e) => setSelectToken1(e.target.value)}
            >
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="matic">MATIC</option>
              <option value="usdt">USDT</option>
            </select>
          </div>
          <img src="Untitled.svg" alt="" className="h-4" />
          {/* <RelativefiIcon /> */}
          <div className={innerElementContainer}>
            <div className={innerText}>TOKEN 02</div>
            <select
              value={selectToken2}
              className={textField}
              onChange={(e) => setSelectToken2(e.target.value)}
            >
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="matic">MATIC</option>
              <option value="usdt">USDT</option>
            </select>
          </div>
        </div>
        <div className={cardClass}>
          <div className={innerElementContainer}>
            <div className={innerText}>STARTS ON</div>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className={textField}
            />
          </div>
          <div className={innerElementContainer}>
            <div className={innerText}>LOT DURATION</div>
            <input
              type="text"
              value={lotDuration}
              onChange={(e) => setLotDuration(e.target.value)}
              className={textField}
            />
          </div>
        </div>
        <div className={cardClass}>
          <div className={innerElementContainer}>
            <div className={innerText}>INITIAL DEPOSIT</div>
            <input
              type="number"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              className={textField}
            />
          </div>
        </div>
      </div>
      <Button />
    </form>
  );
}

export default Form;
