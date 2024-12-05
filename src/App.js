import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import ApiSection from "./components/ApiSection";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Features Slider */}
        <section className="my-10">
          <Slider />
        </section>

        {/* API Section */}
        <section className="my-10">
          <ApiSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
