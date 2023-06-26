import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "react-modal";

const GTMPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(()=>{
    let popup = JSON.parse(localStorage.getItem("Gtagaccess"))
    if(popup && popup?.expiration > Date.now()){
      setIsOpen(false);
    }else{
      localStorage.removeItem("Gtagaccess");
      setIsOpen(true);
    }
  },[])

  const closePopup = () => {
    setIsOpen(false);
  };

  const tagAllow = (durationInSeconds=3600) => {
      const expirationTimestamp = Date.now() + durationInSeconds * 1000; 
      const data = {
        Gtag: true,
        expiration: expirationTimestamp,
      };
      localStorage.setItem("Gtagaccess", JSON.stringify(data));
      window.location.reload();
  }

  const tagDecline = (durationInSeconds=3600) => {
    const expirationTimestamp = Date.now() + durationInSeconds * 1000; 
    const data = {
      Gtag: false,
      expiration: expirationTimestamp,
    };  
    localStorage.setItem("Gtagaccess", JSON.stringify(data));
}

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
      {/* <button onClick={openPopup}>Open GTM Popup</button> */}

      <Modal
        isOpen={isOpen}
        // onRequestClose={closePopup}
        contentLabel="GTM Popup"
        style={modalStyle}
      >
        <p style={contentStyle}>
          We use our own cookies and third-party cookies so that we can show you
          this website and better understand how you use it, with a view to
          improving the services we offer.
        </p>
        <div style={buttonContainerStyle}>
        <div><button style={buttonStyle} onClick={()=>{
          closePopup()
          tagAllow()
        }}>OK</button></div>
        <div><button style={buttonStyle} onClick={()=>{
          closePopup()
          tagDecline()
        }}>No, thank you</button></div>
        </div>

        {/* <iframe
          title="GTM"
          src={`https://www.googletagmanager.com/ns.html?id=${process.env.REACT_APP_GPIN}`}
          height="200"
          width="100"
          style={{ border: 0 }}
        /> */}
      </Modal>
    </div>
  );
};

export default GTMPopup;
