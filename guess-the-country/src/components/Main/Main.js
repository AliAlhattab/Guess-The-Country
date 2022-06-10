import React from "react";
import "./Main.scss";
import Counter from "../Counter/Counter";

function Main({ randomCountry, submit, count }) {
  return (
    <div className="main__container">
      <div className="main">
        <img className="main__flag" src={randomCountry?.flags?.png} alt="Country Flag" />
        <form className="main__form" onSubmit={submit}>
          <label className="main__form-label">This is the flag of what country?</label>
          <input
            className="main__form-input"
            type="text"
            name="name"
            id="name"
            placeholder="Guess the Country"
          />
          <button className="main__form-button">Submit</button>
        </form>
        
      </div>
      <Counter count={count} />
    </div>
  );
}

export default Main;
