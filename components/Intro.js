import {useState, useEffect} from "react";

export default function Intro() {
  const [classes, setClasses] = useState('');

  useEffect(() => {
    setClasses(classes + ' visible');
  }, []);

  return (
    <section id="intro" className={classes}>
      <div>
        <p>I&apos;m <span>Juwan Holts</span> <br /> Graphic Designer,<br /> Artist, and Content Creator
        </p>
        <a href="#contact">Contact Me</a>
      </div>  
      <div>
        <img src="/img/me.png" alt=''></img>
      </div>
    </section>
  );
}






