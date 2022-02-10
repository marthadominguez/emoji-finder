import React from "react";

const EmojiItem = ({ emoji }) => {
  return (
    <li className="emoji-item copy-to-clipboard" data-clipboard-text={emoji.symbol}>
      <span>{emoji.symbol}</span>
      <h2>{emoji.title}</h2>
      <p>Click para copiar</p>
    </li>
  );
};

export default EmojiItem;
