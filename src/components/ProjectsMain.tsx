import React, { useRef, useState } from "react";
import { getTheme } from "./hooks/theme";
import { useMotionValueEvent, useScroll, useSpring, useTransform } from "framer-motion";
import { md } from "../constants";
import { defineScreenMode } from "./CardsCarousel";
import ImageItem from "./elements/ImageItem";

export default function ProjectsMain() {

    const theme = getTheme();

    const loadingRef = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: loadingRef,
    });

    const dVar = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y = useSpring(dVar, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    })

    const imgSrc = [
      '/cards/rfresh-card.png',
      '/cards/rakutech-card.png',
      '/cards/web5d-card.png',
      '/cards/wangohan-card.png',
      '/cards/gvo-card.png',
      '/cards/jtb-card.png'
    ];

    const content = [
      {
        title: <h1 className="text-[#EF4C00] text-2xl">Rakuten Fresh</h1>,
        url: 'https://nifty-kare-5a278e.netlify.app/',
        description: `A project served as our final frontend project on our bootcamp. This project uses HTML, CSS, JS and SCSS. It takes on the challenges of session storage utilization, management of session, event listeners, and DOM manipulation. `
      },
      {
        title: <h1 className="text-white text-2xl">RAKU<span className="text-[#FD2E2E]">TECH</span></h1>,
        url: 'https://dasdasd443.github.io/final-frontend-exercise/',
        description: `A project served as our final frontend project on our bootcamp. This project uses HTML, CSS, JS and SCSS. It takes on the challenges of session storage utilization, management of session, event listeners, and DOM manipulation. `
      },
      {
        title: <h1 style={{
          background: 'linear-gradient(to right, #cd3600, #ff7a1a)',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }} className="text-transparent text-2xl">Web5D</h1>,
        url: 'https://nifty-kare-5a278e.netlify.app/',
        description: `Personal project to learn about 3D in web applications. This project utilizies the three.js library to animate 3d objects into a canvas. As I was interested in outer space, animating the solar system came into my mind. This project is also used as a portfolio of upcoming personal projects.`
      },
      {
        title: <h1 className="text-[#FFE9C9] text-2xl font-extralight">わんごはん <small className="font-extralight">Wangohan</small></h1>,
        url: 'https://wangohanjp.com/',
        description: `A project planned to turn into a big social media for pet lovers and those who loves to cook. It is an intermediately complex project using the technologies Next JS, Postgres, Kysely, and other Javascript libraries. This project also tackles on the challenge of secure authentication of the users, along with Google OAuth, hashing and salting, JWTs, etc. Very ambitious project to take on.`
      },
      {
        title: <h1 className="text-white text-2xl font-extralight">Good Vibes Only</h1>,
        url: 'https://goodvibesonly.jp/',
        description: 'Previous work that my team and I finished, the GVO corporate site. I learned utilizing CSS animations on this website and honed my JavaScript CSS skills.'
      },
      {
        title: <h1 style={{
          background: 'linear-gradient(to right, #d62838, #df6969)', 
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }} className="text-white bg-clip-text text-transparent text-2xl">JTB Australia</h1>,
        url: 'https://www.jtbtravel.com.au/',
        description: `Similarly a previous work that my team and I finished, JTB Australia website. I honed utilizing CSS animations on this website and at the same time honed my JavaScript CSS skills.`
      },
    ]

    const [scrollY, setScrollY] = useState(0);

    useMotionValueEvent(y, "change", (latest) => {
      setScrollY(latest);
    });

    return (
        <React.Fragment>
          <main ref={loadingRef} className="min-h-[400vh] w-full relative">
            <div className="sticky top-0 flex flex-wrap h-full justify-center w-screen">
              <div className="flex-[1_0_100%] flex justify-end relative">
                  <span style={{color: theme.primary}} className="text-8xl text-right w-full z-50"><span style={{color:theme.secondary}}>Pro</span>jects</span>
              </div>
              <div className="w-screen overflow-hidden">
                <div style={{transform: `translate(${scrollY * (defineScreenMode() >= 2 ? 2 : 4.5)}%, ${md(window.innerWidth) ? '0' : '10'}%)`}} className="flex-[1_0_100%] h-screen transform flex left-1/2 gap-[10vw] relative">
                {
                  imgSrc.map((img, idx) => {
                    return (
                      <ImageItem scrollY={scrollY} title={content[idx].title} url={content[idx].url} description={content[idx].description} img={img} />
                    )
                  })
                }
                </div>
              </div>
            </div>
          </main>
        </React.Fragment>
    )
}