import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

//import Components MUI
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

//import Core Components
import AppLayout from "../src/components/AppLayout";
import homeImage from "../src/assets/images/home.png";

const title = "Home";
const spotifyURL = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTYFY_CLIENT_ID}&reponse_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&scope=user-read-private`;

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Home({ data }) {
  const router = useRouter();
  console.log("router", router);
  useEffect(() => {
    const urlParams = new URLSearchParams(router.query);
    const spotifyCode = urlParams.get("code");
    console.log(spotifyCode);
  }, [router.query]);

  const handleLoginClick = () => {
    window.location.replace(spotifyURL);
  };

  return (
    <div className={styles.container}>
      <AppLayout title={title}>
        <Container>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 0, sm: 0, md: 0 }}
            sx={{ m: "2rem" }}
          >
            <Grid item xs={6}>
              <Item sx={{ boxShadow: 0 }}>
                <Container>
                  <h1>Welcome </h1>
                  <p>Choose the favorite music</p>
                  <Button
                    variant="contained"
                    size="large"
                    className={styles.button}
                    onClick={handleLoginClick}
                  >
                    sign in
                  </Button>
                </Container>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item
                sx={{ boxShadow: 0 }}
                style={{ backgroundImage: `url(${homeImage.src})` }}
                className={styles.mainimg}
              ></Item>
            </Grid>
          </Grid>
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
