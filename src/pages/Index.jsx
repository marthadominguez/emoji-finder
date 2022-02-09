import React from "react";
import "../styles/main.css";
import "../styles/footer.css";
import SearchBar from "../components/SearchBar";
import EmojiResult from "../components/EmojiResult";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="layout">
      <div className="main">
        <h1>Emoji Finder<span>🔎</span></h1>
        <p>Encuentra tu emoji favorito en segundos</p>
        <SearchBar />
        <EmojiResult />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
