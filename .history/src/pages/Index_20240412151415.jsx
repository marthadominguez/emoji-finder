import React, { useState, useEffect } from "react";
import "../styles/main.css";
import "../styles/footer.css";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import EmojiItem from "../components/EmojiItem";
import emojiList from "../emojiList.json";

const Index = () => {
  const [busqueda, setBusqueda] = useState("");
  const [emojisFiltrados, setEmojisFiltrados] = useState([]);

  useEffect(() => {
    const filterEmoji = (searchText, maxResults) => {
      return emojiList
        .filter((emoji) => {
          if (emoji.title.toLowerCase().includes(searchText.toLowerCase())) {
            return true;
          }
          if (emoji.keywords.includes(searchText.toLowerCase())) {
            return true;
          }
          return false;
        })
        .slice(0, maxResults);
    };

    if (busqueda.length !== 0) {
      setEmojisFiltrados(filterEmoji(busqueda, 10));
    }
  }, [busqueda]);

  const handleSearch = (e) => {
    setBusqueda(e.target.value);
  };

  return (
    <div className="layout">
      <main className="main">
        <div className="main-info">
          <h1>
            Emoji Finder<span>🔎</span>
          </h1>
          <p>Encuentra el emoji que estás buscando</p>
        </div>
        <SearchBar handleSearch={handleSearch} busqueda={busqueda} />
          {emojisFiltrados.length === 0 && busqueda.length !== 0 ? (
            <>
              <div className="no-results">
                No se encontraron resultados para "{busqueda}"
              </div>
            </>
          ) : (
            <>
              <ul className="emoji-items-container">
                {emojisFiltrados.map((emoji, index) => {
                  return <EmojiItem key={index} emoji={emoji} />;
                })}
              </ul>
            </>
          )}
        <Footer />
      </main>
    </div>
  );
};

export default Index;
