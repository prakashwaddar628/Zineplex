import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <Navbar />
      <main className="flex-grow">
        <h1>Welcome to Zineplex</h1>
      </main>
      <Footer />
    </div>
  );
}
