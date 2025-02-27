import React from "react";
import { Container } from "react-bootstrap";

const Guide = () => {
  return (
    <Container className="d-flex justify-content-center pb-4 px-3">
      <div
        style={{
          position: "relative",
          boxSizing: "content-box",
          maxHeight: "80svh",
          width: "80%", 
          aspectRatio: "1.929364278506559",
          padding: "40px 0",
        }}
      >
        <iframe
          src="https://app.supademo.com/embed/cm7k7g89101fq0p0if1x4lhq3?embed_v=2"
          loading="lazy"
          title="Product demo for SecuroSphere"
          allow="clipboard-write"
          frameBorder="0"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></iframe>
      </div>
    </Container>
  );
};

export default Guide;
