'use client'
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

export default function Home() {
  return (
    <>
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
    </>
  )
}
