import React from 'react';
import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import {fetchData} from './api';

import style from './App.module.css';

class App extends React.Component{

    state = {
        data: {}
    };

    async componentDidMount(){
        const fetchedData = await fetchData();
        this.setState({data: fetchedData});
    }

    render(){
        return (
            <div className={style.container}>
                <h1>Stuff</h1>
                <Cards data={this.state.data}/>
                <CountryPicker/>
                <Chart/>
            </div>
        );
    }
}

export default App;