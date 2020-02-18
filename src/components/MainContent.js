import React from "react";

function MainContent() {
  const styles = {
    color: "#FF8C00",
    backgroundColor: "white",
    fontSize: "40px"
  };

  return (
    <main>
      <h1 style={styles}>Make your choice !</h1>

      <p>
        I'm datanome and 47 years old man from Helsinki Finland. Places i would
        like to visit are:
      </p>
      <ul>
        <li>Rome</li>
        <li>Tokio</li>
        <li>Gran Canaria</li>
      </ul>
      <hr />
    </main>
  );
}

export default MainContent;
