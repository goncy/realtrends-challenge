import * as React from "react";
import SocketIO from "socket.io-client";

import logo from "~/assets/logo.svg";

import styles from "./Home.module.scss";

const socket = SocketIO.io("http://localhost:5000");

const Home: React.FC = () => {
  React.useEffect(() => {
    socket.on("ping", (message: string) => console.log(message));
  }, []);

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
