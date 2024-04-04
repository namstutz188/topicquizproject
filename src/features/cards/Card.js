import React, { useState } from "react";
import { useSelector } from "react-redux";
// import selector
import { selectCards } from "./cardsSlice";
export default function Card({ id }) {
  const allCards = useSelector(selectCards);
  const card = allCards[id];
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
