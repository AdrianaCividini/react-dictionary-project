import React, { useState } from "react";
import Results from "./Results";
import Photos from "./Photos";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleKeyWorldChange(event) {
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResults(response.data);
    setPhotos(response.data.photos);
  }

  function handlePictureResponse(response) {
    console.log(response);
    setPhotos(response.data.photos);
  }

  function search() {
    let apiKey = "be4f04372f126ocaa2t8a5df316fc3ab";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let pictureApiKey = "be4f04372f126ocaa2t8a5df316fc3ab";
    let pictureApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${pictureApiKey}`;
    axios.get(pictureApiUrl).then(handlePictureResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //alert(`Searching for ${keyword}`);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeyWorldChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">i.e. coffee, yoga, travel...</div>
        </section>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
