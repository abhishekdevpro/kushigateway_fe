"use client";
import Navbar from "../Home/Navbar";
import HomeFirst from "../Home/HomeFirst";
import HomeSecond from "./HomeSecond";
import HomeThird from "./HomeThird";
import HomeFourth from "./HomeFourth";
import HomeFive from "./HomeFive";
import ContactSection from "./HomeContact";
import Footer from "./HomeFooter";

export default function Homepage() {
  return (
    <div>
      <meta name="viewport" content="width=device-width" data-next-head=""></meta>
      <Navbar />
      <HomeFirst/>
      <HomeSecond/>
      <HomeThird/>
      <HomeFourth/>
      <HomeFive/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}
