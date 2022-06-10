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
          randomCountry: response.data[0]
        });
      })
      .catch((e) => console.log("error in component mounting", e));
  }

  componentDidUpdate(prevProps) {
    // const previousRandomFlag = prevProps.match.params.id;
    // const currentRandomFlag = this.props.match.params.id;
  }

  getRandomFlag = (array) => {
    array = this.state.countries;
    const randomCountry = array[Math.floor(Math.random() * array.length)];
    console.log(randomCountry)
    this.setState({
      randomCountry: randomCountry,
    });
  };

  submitAnswer = (e) => {
    e.preventDefault();

    const currentRandomFlag = this.state.randomCountry.name.common;
    if (e.target.name.value.toLowerCase() === currentRandomFlag.toLowerCase()) {
      this.setState({
        count: 1,
        randomCountry: this.getRandomFlag(this.state.countries)
      });
      
    } else {
      alert(`you suck! your score was ${this.state.count}`)
      window.location.reload();
    }
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main randomCountry={this.state.randomCountry} submit={this.submitAnswer} />
        <Counter count={this.state.count} />
      </div>
    );
  }
}

export default App;
