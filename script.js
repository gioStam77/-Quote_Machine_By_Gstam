import * as React from "https://esm.sh/react@18.2.0";
import * as ReactDOM from "https://esm.sh/react-dom@18.2.0";
import { FaQuoteLeft } from "https://cdn.skypack.dev/react-icons@4.1.0/fa";
import { FaQuoteRight } from "https://cdn.skypack.dev/react-icons@4.1.0/fa";
// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.

const greekQuotes = [
{
  text:
  "One thing i know, that i know nothing. This is the source of my wisdom.",
  author: "SOCRATES" },

{
  text:
  "Good people do not need law to tell them to act responsibly, while bad people will find a way around the laws.",
  author: "PLATO" },

{
  text:
  "Anybody can become angry - that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way - that is not within everybody's power and is not easy.",
  author: "ARISTOTLE" },

{
  text:
  "You don't develop courage by being happy in your relationships everyday. You develop it by surviving difficult times and challenging adversity.",
  author: "EPICURUS" },

{ text: "There is nothing permanent except change.", author: "HERACLITUS" },
{
  text:
  "I am indebted to my father for living, but to my teacher for living well",
  author: "ALEXANDER THE GREAT." },

{
  text:
  "The real destroyer of the liberties of the people is he who spreads among them bounties, donations and benefits.",
  author: "PLUTARCH" },

{
  text:
  "Nothing exists except atoms and empty space; everything else is just opinion.",
  author: "DEMOCRITUS" },

{
  text: "Love is composed of a single soul inhabiting two bodies.",
  author: "ARISTOTLE" },

{
  text:
  "He who steals a little steals with the same wish as he who steals much, but with less power.",
  author: "PLATO" },

{
  text:
  "Death does not concern us, because as long as we exist, death is not here. And when it does come, we no longer exist.",
  author: "EPICURUS" },

{
  text:
  "Let no man be called happy before his death. Till then, he is not happy, only lucky.",
  author: "SOLON" },

{
  text:
  "Excess of grief for the dead is madness; for it is an injury to the living, and the dead know it not.",
  author: "XENOPHON" }];


const QuoteBox = ({ quote, handleClick }) => /*#__PURE__*/
React.createElement("div", { id: "quote-box" }, /*#__PURE__*/
React.createElement(FaQuoteLeft, null), /*#__PURE__*/
React.createElement("p", { id: "text" }, quote.text), /*#__PURE__*/
React.createElement(FaQuoteRight, null), /*#__PURE__*/
React.createElement("h2", { id: "author" }, quote.author), /*#__PURE__*/
React.createElement("div", { className: "btn" }, /*#__PURE__*/
React.createElement("button", { id: "new-quote", onClick: handleClick }, "New Quote"), /*#__PURE__*/


React.createElement("a", { id: "tweet-quote", href: "https://twitter.com/intent/tweet" }, "Tweet")));





// Math.floor(Math.random()*(myMax-myMin+1))+myMin;
const randomIndex = () =>
Math.floor(Math.random() * (greekQuotes.length - 1 - 0 + 1) + 0);

const App = () => {
  const [quote, setQuote] = React.useState(greekQuotes[randomIndex()]);
  const handleClick = () => {
    setQuote(greekQuotes[randomIndex()]);
  };

  return /*#__PURE__*/(
    React.createElement("div", { className: "main" }, /*#__PURE__*/
    React.createElement(QuoteBox, { quote: quote, handleClick: handleClick })));


};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));