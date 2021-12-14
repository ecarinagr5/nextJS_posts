import Image from "next/image";
import styles from "../styles/Home.module.css";

//import Components MUI
import Container from "@mui/material/Container";

//import Core Components
import AppLayout from "../components/AppLayout";

export default function Card() {
  return (
    <div className={styles.container}>
      <AppLayout>
        <div>Card</div>
      </AppLayout>
    </div>
  );
}
