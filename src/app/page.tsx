import * as React from "react";
import Container from "@mui/material/Container";
import { Header } from "@/components/header/header";
import Sidenav from "@/components/sidenav/sidenav";
import Salaries from "@/components/salaries/salaries";
import RightSidenav from "@/components/right-sidenav/right-sidenav";

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      style={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <Header />
      {/* <div className="pt-[32px] xl:container w-full px-5 xl:px-0 grid grid-cols-12 gap-8 bg-Neutral200 dark:bg-Black justify-center overflow-auto">
       */}
      <Container
        maxWidth="xl"
        className="pt-[32px] w-full xl:px-0 grid grid-cols-12 gap-8 bg-Neutral200 justify-center overflow-auto items-start"
        style={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        {/* <Sidenav /> */}
        <Salaries />
        <RightSidenav />
      </Container>
    </Container>
  );
}
