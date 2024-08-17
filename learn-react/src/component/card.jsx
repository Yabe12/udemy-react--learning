import React from "react";
import styles from "./Card.module.css"; // Assuming you are using a CSS module
import Button from "./button";

function Card(props) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.image}>
          <img src={props.image} alt={props.alt} />
        </div>
        <h2>{props.name}</h2>
        <p>{props.paragraph}</p>
        <div className={styles.buttons}>
          <Button text="Html+css" />
          <Button text="web design" />
          <Button text="javascript" />
          <Button text="react" />
          <Button text="node.js" />
          <Button text="mongodb" />
        </div>
      </div>
    </div>
  );
}

export default Card;
