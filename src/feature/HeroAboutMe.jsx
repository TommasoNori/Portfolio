import { div } from "framer-motion/client";

function HeroAboutMe() {
    return (
      <section>
        <div className="heroAboutme">
          <div className="about me style">// ABOUT_ME.JSX</div>
          <h1 className="aboutmetitle">About Me</h1>
          <div>Tommaso Nori • </div>
        </div>
      </section>
    );
}

function line(lable){

    let count = 0
    
    
    return (
      <div>
        <span>{label}</span>
        <span>•</span>
      </div>
    );
}

export default HeroAboutMe;