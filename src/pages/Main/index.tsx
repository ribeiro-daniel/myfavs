import axios from "axios";
import React, { FormEvent } from "react";
import { useEffect } from "react";
import { useState } from "react";
import logoWhiteImg from "../../assets/logo-white.svg";
import "../../styles/main.scss";

type ArtistModel = {
  _id: string;
  _name: string;
  _picture: string;
  _type: string;
};

export default function Main() {
  const [search, setSearch] = useState("");
  const [artist, setArtist] = useState<ArtistModel>();
  const [topSongs, setTopSongs] = useState([]);

  async function handleSearch(event: FormEvent) {
    event.preventDefault();

    if (search === "") {
      return;
    }

    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${search}`
    );

    const { id, name, picture_big, type } = response.data;

    setArtist({
      _id: id,
      _name: name,
      _picture: picture_big,
      _type: type,
    });
  }

  async function handleTopSongs() {
    const response = await axios.get(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/${artist?._id}/top`
    );

    const results = response.data.data;
    setTopSongs(results);
  }

  return (
    <div id="main-page">
      <header className="header">
        <img src={logoWhiteImg} alt="logo" width="128px" height="64px" />

        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search | For compound names use the character - (Eg. Linkin-Park)"
            name="search"
            onChange={(event) => {
              setSearch(event?.target.value);
            }}
            value={search}
          />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-search"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
          </button>
        </form>
      </header>

      <main>
        <h2>Here it's</h2>
        <div className="content">
          {artist !== undefined && artist._type === "artist" ? (
            <div className="result-card">
              <header>
                <h3>
                  <em>{artist._name}</em>
                </h3>
              </header>

              <div className="card-content">
                <img
                  src={artist?._picture}
                  alt="result card"
                  width="300px"
                  height="250px"
                />
                <div>
                  {topSongs.map(({ id, preview }) => {
                    return (
                      <ul key={id}>
                        <li>
                          <audio controls>
                            <source src={preview} type="audio/mpeg" />
                          </audio>
                        </li>
                      </ul>
                    );
                  })}
                </div>
              </div>

              <footer>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-heart"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                  </svg>
                </button>

                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-share"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="6" r="3"></circle>
                    <circle cx="18" cy="18" r="3"></circle>
                    <line x1="8.7" y1="10.7" x2="15.3" y2="7.3"></line>
                    <line x1="8.7" y1="13.3" x2="15.3" y2="16.7"></line>
                  </svg>
                </button>

                <button onClick={handleTopSongs}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-caret-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path
                      d="M18 15l-6 -6l-6 6h12"
                      transform="rotate(90 12 12)"
                    ></path>
                  </svg>
                </button>
              </footer>
            </div>
          ) : (
            <div>No results found.</div>
          )}
        </div>
      </main>
    </div>
  );
}
