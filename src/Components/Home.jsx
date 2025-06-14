import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";

const Home = () => {
  const clientCount = useRef(null);
  const projectCount = useRef(null);

  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };
  const animationProjectsCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (projectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Priyanshu saini
          </motion.h1>

          <Typewriter
            options={{
              strings: ["A Developer", "A Designer", "A Front-end engineer"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />

          <div>
            <a href="mailto:sainipriyanshu324@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>

          <article>
            <p>
              +

              <motion.span
                whileInView={animationClientsCount}
                ref={clientCount}
              > </motion.span>

            </p>
            <span>Clients Worldwide</span>
          </article>

          <aside>
            <article>
              <p>
                +

                <motion.span
                  ref={projectCount}
                  whileInView={animationProjectsCount}
                >

                </motion.span>

              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>sainipriyanshu324@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={"https://res.cloudinary.com/ddisedbxn/image/upload/v1747471749/logo_eozn2a.png"} alt="priyanshu" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;