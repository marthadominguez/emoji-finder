import React from "react";
import Clipboard from "clipboard";

new Clipboard(".copy-to-clipboard");

const EmojiItem = ({ emoji }) => {
  return (
    <li className="emoji-item copy-to-clipboard" data-clipboard-text={emoji.symbol}>
      <span>{emoji.symbol}</span>
      <h2>{emoji.title}</h2>
      <p>Click to copy</p>
    </li>
  );
};

export default EmojiItem;
