import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black overflow-y-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
