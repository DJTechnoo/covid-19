import React, {useEffect, useState} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';
import styles from './CountryPicker.module.css';
import {fetchCountries} from '../../api/';

const CountryPicker = () => {

    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setCountries(["global", ...await fetchCountries()])
        }

        fetchAPI();
    }, [])



    return (
        <FormControl className={styles.container}>
            <NativeSelect>
                {
                    countries.map((country)=>(<option key={country} value={country}>{country}</option>))    
                }
            </NativeSelect>
        </FormControl>
    );
}

export default CountryPicker;