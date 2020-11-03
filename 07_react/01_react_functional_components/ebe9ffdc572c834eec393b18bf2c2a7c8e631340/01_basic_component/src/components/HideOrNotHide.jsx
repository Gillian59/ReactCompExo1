import React from "react";

export const HideOrNotHide = () => {
  // Code here

  const [text, setText] = React.useState("envoyé");
  return (
    <div>
      <p className="p"> balbla</p>
      <button onClick={() => setText("parti")}> {text}</button>
    </div>
  );
};
