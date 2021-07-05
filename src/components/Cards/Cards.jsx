import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Загружается...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Весь мир</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Зараженный"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Количество активных случаев COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Выздоровевший"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Количество выздоровевших от COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Летальные исходы"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Количество смертей от COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
