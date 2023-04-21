import React from "react";

function About({ image, about }) {
  const imageUrl = image || "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={imageUrl} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
}

export default About;

