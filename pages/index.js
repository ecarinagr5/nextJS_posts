import React, { useState } from "react";

import styles from "../styles/Home.module.css";

//import Components MUI
import Container from "@mui/material/Container";

//import Core Components
import AppLayout from "../components/AppLayout";

const title = "Home";

export default function Home({ data }) {
  const [post, setPost] = useState();

  console.log("home", data);

  return (
    <div className={styles.container}>
      <AppLayout title={title}>
        <Container>
          <div>Home</div>
          <div>{post}</div>
        </Container>
      </AppLayout>
    </div>
  );
}

Home.getInitialProps = async () => {
  return fetch("http://localhost:3000/api/getData")
    .then((res) => res.json())
    .then((response) => {
      console.log(response);
      const { data } = response;
      return { data };
    });
};
