"use client";
import Navbar from "../Home/Navbar";
import HomeFirst from "../Home/HomeFirst";
import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";
import HomeFourth from "./HomeFourth";
import HomeFive from "./HomeFive";
import ContactSection from "./HomeContact";
import Footer from "./HomeFooter";
import HomeMobileFirst from "./HomeMobileFirst";
import ServicePathways from "./ServicePathwaysSection";
import GetInvolved from "./GetInvolvedSection";

export default function Homepage() {
  return (
    <div>
      <Navbar />
      <HomeFirst/>
      <HomeMobileFirst/>
      <HomeSecond/>
      <HomeThird/>
      <ServicePathways/>
      <GetInvolved/>
      <HomeFourth/>
      <HomeFive/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
