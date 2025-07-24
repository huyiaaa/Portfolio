import React from "react";
import Cyberops from "assets/certificate/cyberops.png";
import EthicHacking from "assets/certificate/CertNexus.png";
import Crypto1 from "assets/certificate/Crypto.png";
import Ccna from "assets/certificate/CCNA.png";
import Python from "assets/certificate/Python.png";
import ISC2 from "assets/certificate/ISC2.png";
import Java from "assets/certificate/Java.png";
import PythonForEverybody from "assets/certificate/PythonForEverybody.png";
const Certificate = () => {
  const handleViewCertificate = (viewerPath) => {
    window.open(viewerPath, "_blank");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2 style={{ marginBottom: "30px", color: "#2c3e50" }}>🏆 Certificate</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "30px",
          marginTop: "30px",
        }}
      >
        {/* Certificate Images */}
        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={EthicHacking}
            alt="CertNexus Certificate"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.parentElement.style.transform = "translateY(-5px)";
              e.target.parentElement.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.parentElement.style.transform = "translateY(0)";
              e.target.parentElement.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.1)";
            }}
            onClick={() =>
              handleViewCertificate("/assets/CertNexus_viewer.html")
            }
          />
          <h3 style={{ margin: "15px 0 5px 0", color: "#2c3e50" }}>
            🛡️ CertNexus
          </h3>
          <p style={{ color: "#666", margin: "0 0 15px 0" }}>Ethical Hacking</p>
          <button
            onClick={() =>
              handleViewCertificate("/assets/CertNexus_viewer.html")
            }
            style={{
              padding: "10px 20px",
              backgroundColor: "#4facfe",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(79, 172, 254, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#43a5fd";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(79, 172, 254, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#4facfe";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(79, 172, 254, 0.3)";
            }}
          >
            📄 View Certificate
          </button>
        </div>

        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={Crypto1}
            alt="Cryptography Certificate"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.parentElement.style.transform = "translateY(-5px)";
              e.target.parentElement.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.parentElement.style.transform = "translateY(0)";
              e.target.parentElement.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.1)";
            }}
            onClick={() =>
              handleViewCertificate("/assets/Cryptography_viewer.html")
            }
          />
          <h3 style={{ margin: "15px 0 5px 0", color: "#2c3e50" }}>
            🔐 Cryptography
          </h3>
          <p style={{ color: "#666", margin: "0 0 15px 0" }}>
            Network Security Certificate
          </p>
          <button
            onClick={() =>
              handleViewCertificate("/assets/Cryptography_viewer.html")
            }
            style={{
              padding: "10px 20px",
              backgroundColor: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#5a67d4";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#667eea";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
            }}
          >
            📄 View Certificate
          </button>
        </div>

        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={Cyberops}
            alt="CyberOps Certificate"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.parentElement.style.transform = "translateY(-5px)";
              e.target.parentElement.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.parentElement.style.transform = "translateY(0)";
              e.target.parentElement.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.1)";
            }}
            onClick={() =>
              handleViewCertificate("/assets/CyberOps_viewer.html")
            }
          />
          <h3 style={{ margin: "15px 0 5px 0", color: "#2c3e50" }}>
            🔐 Cisco CyberOps
          </h3>
          <p style={{ color: "#666", margin: "0 0 15px 0" }}>
            Associate Certificate
          </p>
          <button
            onClick={() =>
              handleViewCertificate("/assets/CyberOps_viewer.html")
            }
            style={{
              padding: "10px 20px",
              backgroundColor: "#667eea",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(102, 126, 234, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#5a67d4";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(102, 126, 234, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#667eea";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(102, 126, 234, 0.3)";
            }}
          >
            📄 View Certificate
          </button>
        </div>

        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={Ccna}
            alt="CCNA Certificate"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.parentElement.style.transform = "translateY(-5px)";
              e.target.parentElement.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.parentElement.style.transform = "translateY(0)";
              e.target.parentElement.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.1)";
            }}
            onClick={() => handleViewCertificate("/assets/CCNA_viewer.html")}
          />
          <h3 style={{ margin: "15px 0 5px 0", color: "#2c3e50" }}>
            🌐 Cisco CCNA
          </h3>
          <p style={{ color: "#666", margin: "0 0 15px 0" }}>
            Routing & Switching
          </p>
          <button
            onClick={() => handleViewCertificate("/assets/CCNA_viewer.html")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#f093fb",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(240, 147, 251, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "#ee82e9";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(240, 147, 251, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "#f093fb";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(240, 147, 251, 0.3)";
            }}
          >
            📄 View Certificate
          </button>
        </div>

        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={Python}
            alt="Python Certificate"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.parentElement.style.transform = "translateY(-5px)";
              e.target.parentElement.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.parentElement.style.transform = "translateY(0)";
              e.target.parentElement.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.1)";
            }}
            onClick={() => handleViewCertificate("/assets/Python_viewer.html")}
          />
          <h3 style={{ margin: "15px 0 5px 0", color: "#2c3e50" }}>
            🐍 Python Programming
          </h3>
          <p style={{ color: "#666", margin: "0 0 15px 0" }}>Advanced Python</p>
          <button
            onClick={() => handleViewCertificate("/assets/Python_viewer.html")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ffecd2",
              background: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(252, 182, 159, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #fce4c1 0%, #faa688 100%)";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(252, 182, 159, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(252, 182, 159, 0.3)";
            }}
          >
            📄 View Certificate
          </button>
        </div>

        {/* ISC2 Certificate */}
        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={ISC2}
            alt="ISC2 Certificate"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.parentElement.style.transform = "translateY(-5px)";
              e.target.parentElement.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.parentElement.style.transform = "translateY(0)";
              e.target.parentElement.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.1)";
            }}
          />
          <h3 style={{ margin: "15px 0 10px 0", color: "#2c3e50" }}>
            🔐 ISC2 Certification
          </h3>
          <p style={{ color: "#666", margin: "0 0 15px 0" }}>
            Information Security
          </p>
          <button
            onClick={() => handleViewCertificate("/assets/ISC2_viewer.html")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#17a2b8",
              background: "linear-gradient(135deg, #20b2aa 0%, #ff69b4 100%)",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(32, 178, 170, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #1e9f99 0%, #ec4899 100%)";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(32, 178, 170, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #20b2aa 0%, #ff69b4 100%)";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(32, 178, 170, 0.3)";
            }}
          >
            📄 View Certificate
          </button>
        </div>

        {/* Java Certificate */}
        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={Java}
            alt="Java Certificate"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.parentElement.style.transform = "translateY(-5px)";
              e.target.parentElement.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.parentElement.style.transform = "translateY(0)";
              e.target.parentElement.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.1)";
            }}
          />
          <h3 style={{ margin: "15px 0 10px 0", color: "#2c3e50" }}>
            ☕ Java Programming
          </h3>
          <p style={{ color: "#666", margin: "0 0 15px 0" }}>
            Object-Oriented Programming
          </p>
          <button
            onClick={() => handleViewCertificate("/assets/Java_viewer.html")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff69b4",
              background: "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(255, 105, 180, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #ff1493 0%, #dc143c 100%)";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(255, 105, 180, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #ff69b4 0%, #ff1493 100%)";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(255, 105, 180, 0.3)";
            }}
          >
            📄 View Certificate
          </button>
        </div>

        {/* Python for Everybody Certificate */}
        <div
          style={{
            position: "relative",
            background: "white",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
          }}
        >
          <img
            src={PythonForEverybody}
            alt="Python for Everybody Certificate"
            style={{
              width: "100%",
              height: "250px",
              objectFit: "cover",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "scale(1.02)";
              e.target.parentElement.style.transform = "translateY(-5px)";
              e.target.parentElement.style.boxShadow =
                "0 8px 25px rgba(0,0,0,0.15)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.parentElement.style.transform = "translateY(0)";
              e.target.parentElement.style.boxShadow =
                "0 4px 15px rgba(0,0,0,0.1)";
            }}
          />
          <h3 style={{ margin: "15px 0 10px 0", color: "#2c3e50" }}>
            🐍 Python for Everybody
          </h3>
          <p style={{ color: "#666", margin: "0 0 15px 0" }}>
            Python Data Analysis
          </p>
          <button
            onClick={() =>
              handleViewCertificate("/assets/PythonForEverybody_viewer.html")
            }
            style={{
              padding: "10px 20px",
              backgroundColor: "#a8e6cf",
              background: "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)",
              color: "white",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              fontWeight: "500",
              transition: "all 0.3s ease",
              boxShadow: "0 4px 15px rgba(168, 230, 207, 0.3)",
            }}
            onMouseOver={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #98d8c8 0%, #c9e4b2 100%)";
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 20px rgba(168, 230, 207, 0.4)";
            }}
            onMouseOut={(e) => {
              e.target.style.background =
                "linear-gradient(135deg, #a8e6cf 0%, #dcedc1 100%)";
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 15px rgba(168, 230, 207, 0.3)";
            }}
          >
            📄 View Certificate
          </button>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
