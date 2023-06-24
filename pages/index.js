import Head from "next/head";
import { Heading, Link, Text, Code, Flex, Box } from "@chakra-ui/react";
import styles from "../styles/Home.module.css";
import { DarkModeSwitch } from "../components/ui/DarkModeSwitch";
import { Nav } from "../components/Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Nav />
      
    </div>
  );
}
//<DarkModeSwitch />