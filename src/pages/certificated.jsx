import React from "react";
import Cyberops from "assets/certificate/cyberops.png";
import EthicHacking from "assets/certificate/CertNexus.png";
import Crypto1 from "assets/certificate/Crypto.png";
import Ccna from "assets/certificate/CCNA.png";
import Python from "assets/certificate/Python.png";
const Certificate = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>Chứng chỉ cá nhân</h2>

      <div
        style={{
          display: "gird",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
        }}
      >
        <div>
          <img
            src={EthicHacking}
            alt="Chứng chỉ"
            style={{
              maxWidth: "100%",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "20px",
              height: "320px",
            }}
          />
          <img
            src={Crypto1}
            alt="Chứng chỉ"
            style={{
              maxWidth: "100%",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "20px",
              height: "320px",
            }}
          />
          <img
            src={Cyberops}
            alt="Chứng chỉ"
            style={{
              maxWidth: "100%",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "20px",
              height: "320px",
            }}
          />
          <img
            src={Crypto1}
            alt="Chứng chỉ"
            style={{
              maxWidth: "100%",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "20px",
              height: "320px",
            }}
          />
          <img
            src={Ccna}
            alt="Chứng chỉ"
            style={{
              maxWidth: "100%",
              border: "1px solid #ccc",
              borderRadius: "8px",
              marginTop: "20px",
              height: "320px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
