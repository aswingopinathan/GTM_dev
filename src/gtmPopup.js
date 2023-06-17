import React, { useState } from "react";
// import { useEffect } from "react";
import Modal from "react-modal";

const GTMPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

//   useEffect(()=>{
//     setIsOpen(true);
//   },[])

  const openPopup = () => {
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    content: {
      width: "360px",
      height: "160px",
      top: "80%",
      left: "83%",
      transform: "translate(-50%, -50%)",
      overflow: "hidden",
      backgroundColor: "#F08367",
      padding:"25px",
      margin:"16px"
    },

  };

  const buttonContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    fontSize: "16px",
    padding: "5px 20px", 
    color:"white",
    backgroundColor: "#F08367",
    border:"1px solid white",
    cursor: "pointer"
  };

  const contentStyle={
    color:"white"
  }

  return (
    <div>
      <button onClick={openPopup}>Open GTM Popup</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={closePopup}
        contentLabel="GTM Popup"
        style={modalStyle}
      >
        <p style={contentStyle}>
          We use our own cookies and third-party cookies so that we can show you
          this website and better understand how you use it, with a view to
          improving the services we offer.
        </p>
        <div style={buttonContainerStyle}>
        <div><button style={buttonStyle}>OK</button></div>
        <div><button style={buttonStyle}>No, thank you</button></div>
        </div>

        <iframe
          title="GTM"
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.REACT_APP_GPIN}`}
          height="200"
          width="100"
          style={{ border: 0 }}
        />
      </Modal>
    </div>
  );
};

export default GTMPopup;
