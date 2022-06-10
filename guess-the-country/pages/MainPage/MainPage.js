import './MainPage.scss';
import axios from 'axios';
import { Component } from 'react';

const API_URL = "https://restcountries.com/v3.1";

class MainPage extends  Component {
    state = {
        countries: []
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
        const previousRandomFlag = prevProps.match.params.id;
        const currentRandomFlag = this.props.match.params.id;

        if (SUBMIT.toLowerCase() === currentRandomFlag.toLowerCase()) {
            //MAKE IT SAY CONGRATS
            //MAKE THE COUNTER GO UP
            this.getRandomFlag(this.state.countries);
        }  else {
            //GO TO GAME OVER PAGE
        }
    }

    getRandomFlag = (array) => {
        const randomFlag = array[Math.floor(Math.random() * Array.length)];
        return randomFlag;
    }
    
    render() {
        return (
            <>
                currentCountry={this.state.countries.name.common}
                currentFlag={this.state.countries.flags.png}
            </>
        )
    }
}

export default HomePage;