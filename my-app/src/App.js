import { useState } from "react";
import star from "./images/icon-star.svg";
import thank from "./images/illustration-thank-you.svg";

function App() {
  const [submit, setSubmit] = useState(false);
  const [items, setItems] = useState("");
  const Button = ({ number }) => {
    return (
      <button
        onClick={() => setItems(number)}
        className="number-btn text-gray-200 h-12 w-12 rounded-full pt-3 bg-gray-700 p-2 rounded-full focus:bg-gray-400 transition-all duration-200"
      >
        {number}
      </button>
    );
  };

  return (
    <>
      {!submit && (
        <div className="wrapper">
          <img src={star} alt="" className="bg-gray-700 p-2 rounded-full" />

          <h2 className="text-gray-100 text-3xl my-6">How did we do?</h2>
          <p className="text-gray-400 my-12">
            {" "}
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
          <ul className="grid grid-cols-5 gap-4 0 mb-12">
            <li>
              <Button number={1} />
            </li>
            <li>
              <Button number={2} />
            </li>
            <li>
              <Button number={3} />
            </li>
            <li>
              <Button number={4} />
            </li>
            <li>
              <Button number={5} />
            </li>
          </ul>

          <div className="text-center">
            <button
              onClick={() => setSubmit(true)}
              className="rating-btn w-full rounded-full text-white uppercase tracking-wide pt-3 pb-2 "
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {submit && <ThankYou items={items} setSubmit={setSubmit} />}
    </>
  );
}

const ThankYou = ({ items, setSubmit }) => {
  return (
    <div className="wrapper">
      <img src={thank} alt="" className="block mx-auto my-6" />
      <p className="ratingPara text-center bg-gray-700 pt-1 rounded-full">
        you selected {items} out of 5
      </p>
      <h2 className="text-gray-100 text-3xl my-6 text-center">Thank you!</h2>
      <p className="text-gray-400 my-12 text-center">
        {" "}
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
      <div className="text-center">
        <button
          onClick={() => setSubmit(false)}
          className="rating-btn w-full rounded-full text-white uppercase tracking-wide pt-3 pb-2 "
        >
          Rate again
        </button>
      </div>
    </div>
  );
};

export default App;
