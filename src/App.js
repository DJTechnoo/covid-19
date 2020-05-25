import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import {fetchData, fetchCountryData} from './api';

import style from './App.module.css';

class App extends React.Component{

    state = {
        data: {},
        country: "global"
    };

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }


    countryhandler = async country =>{
        // 1 Fetch
        let fetchedData = null;
        if(country == "global")
            fetchedData = await fetchData();
        else 
            fetchedData = await fetchCountryData(country);
        this.setState({data: fetchedData})
    }

    render(){
        return (
            <div className={style.container}>
                <h1>Stuff</h1>
                <Cards data={this.state.data}/>
                <CountryPicker countryHandler={this.countryhandler}/>
                <Chart/>
            </div>
        );
    }
}

export default App;