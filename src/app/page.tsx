import Hero from "@/components/Hero";
import ParentsInfo from "@/components/ParentsInfo";
import WeddingDate from "@/components/WeddingDate";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import Venue from "@/components/Venue";
import GiftMoney from "@/components/GiftMoney";
import RSVP from "@/components/RSVP";
import KakaoShare from "@/components/KakaoShare";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen mx-auto" style={{ maxWidth: "480px", backgroundColor: "var(--color-warm-beige)", overflow: "hidden" }}>
      <Hero />
      <ParentsInfo />
      <WeddingDate />
      <OurStory />
      <Gallery />
      <Venue />
      <GiftMoney />
      <RSVP />
      <KakaoShare />
      <Footer />
    </div>
  );
}
