import React from "react";

function Header() {
  const firstName = "Mika";
  const lastName = "Tiihonen";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 40,
    flex: 1,
    flexDirection: " row_space_between",
    justifyContent: "center"
  };

  if (hours < 12) {
    timeOfDay = "morning";
    styles.color = "olive";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
    styles.color = "green";
  } else {
    timeOfDay = "night";
    styles.color = "red";
  }

  return (
    <header style={styles} className="navbar">
      <h1 style={styles}>Good {timeOfDay}! </h1>
      <h1> {`${firstName} ${lastName}`} </h1>
      <h3 style={styles}>
        It is currently about {date.getHours() % 12} o'clock!
      </h3>
    </header>
  );
}

export default Header;
