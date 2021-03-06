import axios from 'axios';



const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () => {
    try {
        const {
            data: {
                deaths, 
                confirmed, 
                recovered, 
                lastUpdate
            }
        } = await axios.get(url);

        return {deaths, confirmed, recovered, lastUpdate};

    } catch (err) {
        
    }
}


export const fetchDailyData = async () => {
    try {
        const {data} = await axios.get(`${url}/daily`);
        const modData = data.map(daily => ({
            confirmed: daily.confirmed.total,
            deaths: daily.deaths.total,
            date: daily.reportDate
        }));

        return modData;
    } catch (err) {
        
    }
}

export const fetchCountryData = async country => {
    try {
        const {
            data: {
                deaths, 
                confirmed, 
                recovered, 
                lastUpdate
            }
        } = await axios.get(`${url}/countries/${country}`);
        

        return {deaths, confirmed, recovered, lastUpdate};

    } catch (err) {
        
    }
}

export const fetchCountries = async () => {
    const {data: {countries}} = await axios.get(`${url}/countries`);
    return countries.map(country => (country.name));
}