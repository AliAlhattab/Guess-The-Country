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
    count: 0
}

componentDidMount() {
    axios
        .get(`${API_URL}/all`)
        .then(response=> {
            this.setState({
                countries: response.data,
            })
        })
        .catch(e=> console.log("error in component mounting", e))
}

componentDidUpdate(prevProps) {
    // const previousRandomFlag = prevProps.match.params.id;
    // const currentRandomFlag = this.props.match.params.id;

    if (SUBMIT.toLowerCase() === currentRandomFlag.toLowerCase()) {
        //MAKE IT SAY CONGRATS
        //MAKE THE COUNTER GO UP
        this.getRandomFlag(this.state.countries);
    }  else {
        //GO TO GAME OVER PAGE
    }
}

getRandomFlag = (array) => {
    array = this.state.countries;
    const randomCountry = array[Math.floor(Math.random() * Array.length)];
    this.setState({
        randomCountry: randomCountry,
    })
}

  render() {
    return (
      <div className="App">
        <Header />
        <Main randomCountry={this.state.randomCountry}/>
        <Counter count={this.state.count}/>
      </div>
    );
  }
}

export default App;
