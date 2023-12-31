"use client";

import { Elsie_Swash_Caps, Vesper_Libre, Sevillana } from "next/font/google";
import { quotedb } from "./db";

const quote_font = Elsie_Swash_Caps({
  weight: "900",
  subsets: ["latin"],
});

const character_font = Vesper_Libre({
  weight: "500",
  subsets: ["latin"],
});

const anime_font = Sevillana({
  weight: "400",
  subsets: ["latin"],
});

function fetchQuote() {
  let num = Math.floor(Math.random() * 121);
  let quote = quotedb[num];
  return quote;
}

export default function Home() {
  let quote = fetchQuote();
  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center items-center">
      <div className="w-4/5">
        <div className="text-indigo-500 text-xl sm:text-2xl md:text-4xl lg:text-6xl text-justify quote-font">
          <h1 className={quote_font.className}>&#34; {quote.quote} &#34;</h1>
        </div>
        <div className="text-indigo-700 text-based sm:text-xl md:text-2xl lg:text-4xl text-right mt-1 sm:mt-2 md:mt-3 lg:mt-4 character-font">
          <h2 className={character_font.className}>-{quote.character}-</h2>
        </div>
        <div className="text-indigo-800 text-sm  sm:text-based md:text-lg lg:text-3xl text-right mr-2 md:mr-3 lg:mr-5 anime-font">
          <h3 className={anime_font.className}>{quote.anime}</h3>
        </div>
      </div>
    </div>
  );
}
