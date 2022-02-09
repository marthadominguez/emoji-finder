import React from "react";

const EmojiItem = ({ emoji }) => {
  return (
    <li className="emoji-item">
      <span>{emoji.symbol}</span>
      <h2>{emoji.title}</h2>
      <p>Clickea para copiar</p>
    </li>
  );
};

export default EmojiItem;
