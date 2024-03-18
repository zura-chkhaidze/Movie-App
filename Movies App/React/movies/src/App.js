import React from "react";
import AppRoutes from "./AppRoutes";
import Navbar from "../src/components/navbar/Navbar";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Footer />
      <AppRoutes />
    </div>
  );
}

export default App;
