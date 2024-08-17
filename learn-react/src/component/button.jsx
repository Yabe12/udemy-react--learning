import React from "react";
import styles from "./button.module.css"; // Assuming you have a CSS module named "button.module.css"

function Button(props) {
  return (
    <div>
      <button className={styles.button}>{props.text}</button>{" "}
      {/* Assuming you want to style the button using a class from the CSS module */}
    </div>
  );
}

export default Button;
