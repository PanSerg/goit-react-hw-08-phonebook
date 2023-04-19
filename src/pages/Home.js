import React from 'react';

export const Home = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>
      Welcome to the contact book
      <span role="img" aria-label="Welcome icon"></span>
    </h1>
  </div>
);

const styles = {
    container: {
        minHeight: 'calc(100vh - 50px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 500,
        fontSize: 48,
        textAlign: 'center',
    },
};