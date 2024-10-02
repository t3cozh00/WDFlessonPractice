import { useState, useEffect } from "react";

export default function Ex101QuoteFetcher() {
  const [quote, setQuote] = useState("");

  useEffect(getQuote, []); // this empty array is important to run the effect only once when the component mounts/renders

  //   const dataPlaceholder = {
  //     _id: "rOYMBDb5kb",
  //     content:
  //       "Friendship is a strong and habitual inclination in two persons to promote the good and happiness of one another.",
  //     author: "Eustace Budgell",
  //     tags: ["Friendship"],
  //     authorSlug: "eustace-budgell",
  //     length: 112,
  //     dateAdded: "2019-02-21",
  //     dateModified: "2023-04-14",
  //   };
  //const quote = dataPlaceholder.content;

  function getQuote() {
    console.log("Fetching quote...");
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        // your data is ready to use at data.content, do something with it
        console.log(data.content);
        setQuote(data.content);
      });
    //setQuote(dataPlaceholder.content);
  }

  return (
    <div>
      <h2>Ex101 QuoteFetcher</h2>
      {/* <button onClick={getQuote}>Click to load a quote</button> */}
      <div>
        <strong>Here is the quote:</strong> <i>{quote}</i>
      </div>
    </div>
  );
}
