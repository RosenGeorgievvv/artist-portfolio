import React from "react";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Songs from './components/Songs';
import Bio from './components/Bio';
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex flex-col items-center p-4 space-y-8 container mx-auto">
          <Profile />
          <Navbar />
          <Bio />
          <Songs />
          <Footer />
      </div>
    </div>
  );
};

export default App;