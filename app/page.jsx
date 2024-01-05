import "./page.scss";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <main className="main">
      <Hero />
      <Skills />
    </main>
  );
}
