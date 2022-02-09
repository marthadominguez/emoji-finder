import React from "react";
import "../styles/main.css";
import "../styles/footer.css";
import SearchBar from "../components/SearchBar";
import EmojiResult from "../components/EmojiResult";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="">
      <div className="main">
        <h1>Emoji Finder</h1>
        <p>Find your favorite emoji</p>
        <SearchBar />
        <EmojiResult />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
