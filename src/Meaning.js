import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h2>{props.meaning.partOfSpeech}</h2>

      <div className="definition">{props.meaning.definition}</div>

      <div className="exemple">{props.meaning.example}</div>

      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
