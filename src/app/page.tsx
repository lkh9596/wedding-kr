import Hero from "@/components/Hero";
import ParentsInfo from "@/components/ParentsInfo";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import Venue from "@/components/Venue";
import GiftMoney from "@/components/GiftMoney";
import RSVP from "@/components/RSVP";
import Contact from "@/components/Contact";
import KakaoShare from "@/components/KakaoShare";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", maxWidth: "480px", width: "100%", margin: "0 auto", backgroundColor: "var(--color-warm-beige)", overflow: "hidden", boxSizing: "border-box" }}>
      <Hero />
      <ParentsInfo />
      <OurStory />
      <Gallery />
      <Venue />
      <GiftMoney />
      <RSVP />
      <Contact />
      <KakaoShare />
      <Footer />
    </div>
  );
}
