import React from 'react';
import {Card, CardContent, Grid, Typography} from '@material-ui/core';
import CountUp from 'react-countup'; 
import styles from './Cards.module.css';
import cx from 'classnames';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {

    const getDate = str => {
        return new Date(str).toDateString();
    }


    if(!confirmed || !recovered || !deaths || !lastUpdate){
        return <h1>LOADING...</h1>;
    }

    return (    
        <div className={styles.container}>
            <Grid container spacing={3}>
                <Grid item component={Card} xs={12} md={3} 
                className={cx(styles.card, styles.confirmed)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Confirmed</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={1} separator=','>
                                {confirmed.value}
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{getDate(lastUpdate)}</Typography>
                        <Typography variant="body2">Number of confirmed cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} 
                className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={recovered.value} duration={1} separator=','>
                                {recovered.value}
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{getDate(lastUpdate)}</Typography>
                        <Typography variant="body2">Number of recovered people</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} 
                className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={1} separator=','>
                                {deaths.value}
                            </CountUp>
                        </Typography>
                        <Typography color="textSecondary">{getDate(lastUpdate)}</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;