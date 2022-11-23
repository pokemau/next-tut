import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

// component imports

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
      </Head>
      <div className="container">
        <h1>dogg</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni,
          accusamus doloremque non blanditiis provident dignissimos sequi
          sapiente quisquam voluptatum numquam culpa necessitatibus impedit
          iusto expedita magnam. Repellat, voluptates accusamus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque magni,
          accusamus doloremque non blanditiis provident dignissimos sequi
          sapiente quisquam voluptatum numquam culpa necessitatibus impedit
          iusto expedita magnam. Repellat, voluptates accusamus.
        </p>
      </div>
    </>
  );
}
