import React from "react";
import { useState } from "react";

import Button from "./button";
import Header from "./header";
import TokenSelectionModal from "./tokenSelectionModal";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

function Form() {
  const [selectToken1, setSelectToken1] = useState("BTC");
  const [selectToken2, setSelectToken2] = useState("MATIC");
  const [startTime, setStartTime] = useState("2021-11-01T03:00");
  const [lotDuration, setLotDuration] = useState("1 day 3 hrs");
  const [deposit, setDeposit] = useState("1000");
  const [openModal, setOpenModal] = useState(false);
  const [flag, setFlag] = useState(false);
  const [tokenDisplay1, setTokenDisplay1] = useState(
    <>
      <img src={require(`../Images/btc.png`)} className="pr-2 h-[28px]" />
      <span>BTC</span>
    </>
  );
  const [tokenDisplay2, setTokenDisplay2] = useState(
    <>
      <img src={require(`../Images/matic.png`)} className="pr-2 h-[28px]" />
      <span>MATIC</span>
    </>
  );

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleToken1 = (e) => {
    handleOpen();
    setFlag(true);
    e.preventDefault();
  };

  const handleToken2 = (e) => {
    handleOpen();
    setFlag(false);
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    console.log(
      `
      Token 01: ${selectToken1}\n
      Token 02: ${selectToken2}\n
      Start Time: ${startTime}\n
      Lot Duration: ${lotDuration}\n 
      Initial Deposit: ${deposit}
      `
    );
    e.preventDefault();
  };

  const cardClass = "flex relative bg-dark-late-grey rounded-2xl h-full my-6";
  const textField =
    "bg-dark-late-blue rounded-lg p-2 w-full border-2 border-field-border inline-flex items-center";
  const innerText = "text-xs text-inner-text pb-2";
  const innerFieldContainer = "p-5 pt-3";
  const infoIcon =
    "!h-[0.8rem] mt-[0.5rem] mr-[0.3rem] ml-auto text-inner-text";

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
            className="absolute top-[16%] left-[40%]"
          />
          <div
            className={`${innerFieldContainer} w-[48%] pr-[3rem] border-r-2 border-divider-color`}
          >
            <div className={innerText}>TOKEN 01</div>
            <button onClick={handleToken1} className={textField}>
              {tokenDisplay1}
              <KeyboardArrowDownIcon className="ml-auto" />
            </button>
            <TokenSelectionModal
              setSelectToken1={setSelectToken1}
              setSelectToken2={setSelectToken2}
              setTokenDisplay1={setTokenDisplay1}
              setTokenDisplay2={setTokenDisplay2}
              openModal={openModal}
              handleClose={handleClose}
              flag={flag}
            />
          </div>

          <div className={`${innerFieldContainer} w-[48%] pl-[3rem]`}>
            <div className={innerText}>TOKEN 02</div>
            <button onClick={handleToken2} className={textField}>
              {tokenDisplay2}
              <KeyboardArrowDownIcon className="ml-auto" />
            </button>
          </div>
          <InfoOutlinedIcon className={infoIcon} />
        </div>
        <div className={cardClass}>
          <div className={`${innerFieldContainer} w-[53%]`}>
            <div className={innerText}>STARTS ON</div>
            <input
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className={textField}
            />
          </div>
          <div className={`${innerFieldContainer} w-[43%] pl-[1.5rem]`}>
            <div className={innerText}>LOT DURATION</div>
            <input
              type="text"
              value={lotDuration}
              pattern="(0?[0-9]|[1-5][0-9]) day (0?[0-9]|1[0-9]|2[0-3]) hrs"
              title=" -- day -- hrs"
              onChange={(e) => setLotDuration(e.target.value)}
              className={textField}
            />
          </div>
          <InfoOutlinedIcon className={infoIcon} />
        </div>
        <div className={cardClass}>
          <div className={`${innerFieldContainer} w-[53%]`}>
            <div className={innerText}>INITIAL DEPOSIT</div>
            <input
              type="number"
              value={deposit}
              onChange={(e) => setDeposit(e.target.value)}
              className={textField}
            />
          </div>
          <InfoOutlinedIcon className={infoIcon} />
        </div>
      </div>
      <Button />
    </form>
  );
}

export default Form;
