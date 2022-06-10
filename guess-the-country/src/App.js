import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./App.scss";
import { Component } from "react";
import axios from "axios";

const API_URL = 'https://restcountries.com/v3.1'

class App extends Component {
  state = {
    countries: [],
    randomCountry: {},
    count: 0,
  };

  componentDidMount() {
    axios
      .get(`${API_URL}/all`)
      .then((response) => {
        this.setState({
          countries: response.data,
          randomCountry: response.data[Math.floor(Math.random() * response.data.length)]
        });
      })
      .catch((e) => console.log("error in component mounting", e));
  }

  getRandomFlag = (array) => {
    const randomCountry = array[Math.floor(Math.random() * array.length)];
    this.setState({
      randomCountry: randomCountry
    });
  };

  submitAnswer = (e) => {
    e.preventDefault();

    const currentRandomFlag = this.state.randomCountry.name.common;
    if (e.target.name.value.toLowerCase() === currentRandomFlag.toLowerCase()) { console.log(this.state.countries)
      this.setState({
        count: ++this.state.count
      });
      this.getRandomFlag(this.state.countries)
      e.target.name.value = "";
    } else {
      alert(`Good Try! Your Score is: ${this.state.count}`)
      window.location.reload();
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main randomCountry={this.state.randomCountry} submit={this.submitAnswer} count={this.state.count} />
      </div>
    );
  }
}

export default App;
