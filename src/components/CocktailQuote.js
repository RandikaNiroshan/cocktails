import React, { useEffect, useState } from "react";
import { Quotes } from "../utils/constants";

const CocktailQuote = () => {
  const [quoteId, setQuoteId] = useState(0);
  const quotes = Quotes;

  useEffect(() => {
    const len = quotes.length;
    setQuoteId(Math.floor(Math.random() * len));
  }, [quotes.length]);

  return (
    <div className="sm:px-16 md:px-28 relative">
      <blockquote>{quotes[quoteId].quote}</blockquote>
      <cite className="absolute before:block before:absolute before:top-1/2 before:w-[25px] before:h-[2.5px] before:-left-8 before:bg-app-cadet before:content-['']">
        {quotes[quoteId].author}
      </cite>
    </div>
  );
};

export default CocktailQuote;
