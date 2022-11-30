import Head from "next/head";
import Image from "next/image";
import { Dashboard } from "../components/Dashboard/Dashboard";
import { Sidebar } from "../components/layout/DasktopNavbar/Sidebar";
import { Lullu } from "../components/Lullu";
import Demo from "../components/Demo";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
