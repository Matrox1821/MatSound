"use client";
import {Button} from "@/shared/types";

const Button = ({styles, onClick, icon, title, titleStyles}: Button) => {
  return (
    <button className={styles} onClick={onClick}>
      {icon}
      <h3 className={titleStyles}>{title}</h3>
    </button>
  );
};
export default Button;
