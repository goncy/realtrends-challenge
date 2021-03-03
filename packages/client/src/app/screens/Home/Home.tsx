import * as React from "react";

import logo from "~/assets/logo.svg";

import styles from "./Home.module.scss";

const Home: React.FC = () => {
  return (
    <main className={styles.container}>
      <header className={styles.header}>
        <h1>
          <img alt="RealTrends" src={logo} width={180} />
        </h1>
        <h3>Lets get this party started</h3>
      </header>
    </main>
  );
};

export default Home;
