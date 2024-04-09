import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h2>{props.meaning.partOfSpeech}</h2>
      <p>{props.meaning.definition}</p>
      <p>{props.meaning.example}</p>
    </div>
  );
}
