import { useRef } from "react";
import moon from "../Images/moon.png";
import land from "../Images/land.png";
import cat from "../Images/cat.gif";
import stars from "../Images/stars.jpg";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";

function App() {
  const ref = useRef();

  return (
    <div>
      <Parallax pages={4} ref={ref}>
        <ParallaxLayer
          offset={0}
          speed={1}
          factor={2}
          style={{ backgroundImage: `url(${moon})`, backgroundSize: "cover" }}
        />
        <ParallaxLayer
          offset={1}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${stars})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer
          offset={2}
          speed={1}
          factor={4}
          style={{
            backgroundImage: `url(${land})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <ParallaxLayer offset={0.2} speed={0.05}>
          <h2 className="white text-center large decoration-1 underline decoration-lime">
            Falling from moon!
          </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={0.05}>
          <p className="white text-center medium-1">Scroll Down 👇</p>
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0.7, end: 3 }}
          style={{ textAlign: "center" }}
        >
          <img src={cat} />
        </ParallaxLayer>

        <ParallaxLayer offset={1.5} speed={0.2}>
          <div className="half padded float-left">
            <span className="white decoration-1 underline decoration-lime medium-1">
              Parallax Effect
            </span>
            <span></span>
            <p className="white decoration-1 medium">
              Parallax scrolling👇 is a web design technique that is used to
              enhance user experience. The idea behind the parallax effect is to
              create an illusion of depth as the background scrolls slower than
              the foreground. The different scrolling speed of the elements
              gives the 2D📃 scene an effect similar to 3D📦.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1.98} speed={0.2}>
          <div className="half padded float-right">
            <span className="white decoration-1 underline decoration-lime medium-1">
              How did I do?
            </span>
            <p className="white decoration-1 medium">
              This is a simple parallax effect that I created using React
              Spring♨️. It was bit tricky to get it to work, but I managed to
              get it to work.
              <br />
              I created 4 layers, one for each page, and then I used the
              ParallaxLayer component to create a sticky layer that would be
              visible on the first page.
              <br />I also used the Parallax component to create a scroll
              effect📜. So far, it works better on desktop.
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.5} speed={0.2}>
          <div className="half padded float-left">
            <span className="white decoration-1 underline decoration-lime medium-1">
              Pros and Cons
            </span>
            <p className="white decoration-1 medium">
              ✅ It has the ability to create a dynamic, interactive user
              experience that is visually appealing.
              <br />
              ✅ It is easy to use(just to scroll down😂).
              <br />
              <br />
              ❌ Parallax scrolling is heavy animation it can take pages longer
              to load and it will not function smoothly across all browsers.
              <br />❌ Desktop and mobile devices require two different
              rendering(two diffrent websites😔).
            </p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={2}>
          <h2 className="white large text-center decoration-1 underline decoration-lime">
            Reached Earth!
          </h2>
        </ParallaxLayer>
        <ParallaxLayer offset={3.8} speed={2}>
          <div className="float-right padded white text-center">
            <span className="meduim-1">-</span>
            <span className="medium-1 underline decoration-lime">
              Hari Om Swarup S A
            </span>
            <br />
            <span className="medium">Hope you liked it!💖</span>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
