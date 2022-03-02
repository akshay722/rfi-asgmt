import React from "react";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

import CloseIcon from "@mui/icons-material/Close";

export default function TokenSelectionModal({
  setSelectToken1,
  setSelectToken2,
  setTokenDisplay1,
  setTokenDisplay2,
  openModal,
  handleClose,
  flag,
}) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 300,
    backgroundColor: "#1e1e30",
    color: "white",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "10px",
  };

  const tokens = [
    {
      value: "btc",
      name: "BTC",
    },
    {
      value: "eth",
      name: "ETH",
    },
    {
      value: "usdt",
      name: "USDT",
    },
    {
      value: "bnb",
      name: "BNB",
    },
    {
      value: "usdc",
      name: "USDC",
    },
    {
      value: "matic",
      name: "MATIC",
    },
  ];

  return (
    <Modal open={openModal} onClose={handleClose}>
      <Box sx={style}>
        <div className="flex p-[15px]">
          <span>Select a Token</span>
          <CloseIcon onClick={handleClose} className="ml-auto cursor-pointer" />
        </div>
        <div className="border-t-2 border-divider-color">
          {tokens.map((item, index) => {
            const tokenClick = (e) => {
              if (flag) {
                setTokenDisplay1(
                  <>
                    <img
                      src={require(`../Images/${item.value}.png`)}
                      className="pr-2 h-[28px]"
                    />
                    <span>{item.name}</span>
                  </>
                );
                setSelectToken1(item.name);
              } else {
                setTokenDisplay2(
                  <>
                    <img
                      src={require(`../Images/${item.value}.png`)}
                      className="pr-2 h-[28px]"
                    />
                    <span>{item.name}</span>
                  </>
                );
                setSelectToken2(item.name);
              }
              handleClose();
            };

            return (
              <div
                className="flex p-[15px] hover:bg-[#292940] cursor-pointer"
                onClick={tokenClick}
                key={index}
              >
                <img
                  src={require(`../Images/${item.value}.png`)}
                  className="pr-2 h-[28px]"
                />
                {item.name}
              </div>
            );
          })}
        </div>
      </Box>
    </Modal>
  );
}
