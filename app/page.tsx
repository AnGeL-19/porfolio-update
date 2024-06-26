
import { Header } from "./components/header/Header";
import { Banner } from "./components/banner/Banner";
import { MyHistory } from "./components/history/MyHistory";

import { MyProjects } from "./components/proyect/MyProjects";
import { MySkills } from "./components/skill/MySkills";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";

export default function Home() {



  return (
    <main className="min-h-screen max-w-screen-profolio mx-auto px-5">
     
      <div className="flex flex-col gap-8">

        <Header />

        <Banner />

        <MyHistory/>

        <MyProjects />

        <MySkills />

        <Contact />

        <Footer />

      </div>

    </main>
  );
}
