import React from "react";
import { useState } from "react";
import Button from "./button";
import Header from "./header";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Form() {
  const [selectToken1, setSelectToken1] = useState("btc");
  const [selectToken2, setSelectToken2] = useState("matic");
  const [startTime, setStartTime] = useState("2021-11-01T03:00");
  const [lotDuration, setLotDuration] = useState("1 day 3 hrs");
  const [deposit, setDeposit] = useState("1000");

  const cardClass = "flex relative bg-dark-late-grey rounded-2xl h-full my-6";
  const textField =
    "bg-dark-late-blue rounded-lg p-2 w-full border-2 border-field-border inline-flex items-center";
  const innerText = "text-xs text-inner-text pb-2";
  const innerElementContainer = "p-5 pt-3";

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
      className="container max-w-lg m-auto bg-gray-700 pt-[2rem]"
    >
      <Header />
      <div>
        <div className={cardClass}>
          <img
            src={require("../Images/Untitled.png")}
            className="absolute top-[14%] left-[41%]"
          />
          <div
            className={`${innerElementContainer} w-[48%] pr-[3rem] border-r-2 border-divider-color`}
          >
            <div className={innerText}>TOKEN 01</div>
            <button className={textField}>
              <img src={require("../Images/btc.png")} className="pr-2" />
              BTC
              <KeyboardArrowDownIcon className="ml-auto" />
            </button>
          </div>

          <div className={`${innerElementContainer} w-[48%] pl-[3rem]`}>
            <div className={innerText}>TOKEN 02</div>
            <button className={textField}>
              <img src={require("../Images/matic.png")} className="pr-2" />
              MATIC
              <KeyboardArrowDownIcon className="ml-auto" />
            </button>
          </div>
        </div>
        <div className={cardClass}>
          <div className={`${innerElementContainer} w-[53%]`}>
            <div className={innerText}>STARTS ON</div>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className={textField}
            />
          </div>
          <div className={`${innerElementContainer} w-[43%] pl-[1.5rem]`}>
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
          <div className={`${innerElementContainer} w-[53%]`}>
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

{
  /* <select
              value={selectToken1}
              className={textField}
              onChange={(e) => setSelectToken1(e.target.value)}
            >
              <option value="btc">BTC</option>
              <option value="eth">ETH</option>
              <option value="matic">MATIC</option>
              <option value="usdt">USDT</option>
            </select> */
}

{
  /* <select
              value={selectToken2}
              className={textField}
              onChange={(e) => setSelectToken2(e.target.value)}
            >
              <option value="btc">
                <img src={require("../Images/btc.png")} />
                BTC
              </option>
              <option value="eth">ETH</option>
              <option value="matic">MATIC</option>
              <option value="usdt">USDT</option>
            </select> */
}
