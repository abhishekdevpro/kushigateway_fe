"use client";
import Navbar from "../Home/Navbar";
import HomeFirst from "../Home/HomeFirst";
import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";
import HomeFourth from "./HomeFourth";
import HomeFive from "./HomeFive";
import ContactSection from "./HomeContact";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HomeFirst/>
      <HomeSecond/>
      <HomeThird/>
      <HomeFourth/>
      <HomeFive/>
      <ContactSection/>
    </div>
  );
}
