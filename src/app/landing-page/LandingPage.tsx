import Navbar from "@/components/navbar/Navbar";
import React from "react";
import MiddlePart from "./middlepart/MiddlePart";

type Props = {};

const LandingPage = (props: Props) => {
  return (
    <>
      <Navbar />
      <MiddlePart />
    </>
  );
};

export default LandingPage;
