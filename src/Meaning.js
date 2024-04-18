import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      <p>
        <strong>Definition: </strong>
        {props.meaning.definition}
      </p>
      <p>
        <em>Example: </em>
        {props.meaning.example}
      </p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
