import React from "react";
import "./style.css";

function RuleItem({ name, img, des }) {
  return (
    <div className="ruleitem">
      <img src={img} alt="" className="ruleitem__img" />
      <p className="ruleitem__name">{name}</p>
      <p className="ruleitem__des">{des}</p>
    </div>
  );
}

export default RuleItem;
