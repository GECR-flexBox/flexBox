import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Login from './Login/Login'
import Groups from "./pages/Groups";
import Forums from "./pages/Forums";
import Dashboard from "./pages/Dashboard";
import Members from "./pages/Members";
import Social from "./pages/Social";

import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import "./App.css";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div id="app" className="row">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Home />
          <Dashboard />
          <Groups />
          <Forums />
          <Members />
          <Social />
        </main>
      </div>
      {/* <Login /> */}
    </>
  );
}
