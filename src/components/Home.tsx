import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { animated, useSpring } from "react-spring";
import domtoimage from "dom-to-image-more";
import * as ReactGA from "react-ga";

import { YellowBox } from "./YellowBox";
import "./../assets/scss/App.scss";

const Home = (): JSX.Element => {
  useEffect((): void => {
    ReactGA.pageview(window.location.pathname + location.search);
  }, []);

  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } });

  const [lineOne, setLineOne] = useState("STAY ALERT.");
  const [lineTwo, setLineTwo] = useState("CONTROL THE VIRUS.");
  const [lineThree, setLineThree] = useState("SAVE LIVES.");

  const contentContainerRef = useRef<HTMLElement | null>(null);

  const handleMemeGeneration = (): void => {
    domtoimage.toPng(contentContainerRef.current).then((dataUrl) => {
      window.location.href = dataUrl;
    });
  };

  return (
    <>
      <Helmet>
        <title>{lineOne + " " + lineTwo + " " + lineThree}</title>
        <meta
          name="description"
          content="Generate your own &ldquo;Stay alert. Control the virus. Save lives.&rdquo; meme or poster."
        />
      </Helmet>

      <animated.main className="container" style={props}>
        <div className="columns is-multiline">
          <div className="column is-12 about-me">
            <h2 className="title has-text-centered section-title">Stay alert. Control the virus. Save lives.</h2>
            <h3 className="subtitle has-text-centered">Create your own &ldquo;Stay alert&rdquo; poster</h3>
            <p className="has-text-centered">
              Generate your own &ldquo;<em>Stay alert. Control the virus. Save lives.</em>&rdquo; poster by filling in
              the lines below, and click the <strong>download</strong> button when you&apos;re done.
            </p>
          </div>
        </div>
        <div className="columns">
          <div className="column is-7-tablet">
            <YellowBox
              lineOne={lineOne}
              lineTwo={lineTwo}
              lineThree={lineThree}
              contentContainerRef={contentContainerRef}
            />
          </div>
          <div className="column is-5-tablet">
            <div className="field">
              <label htmlFor="line1" className="label">
                Line 1
              </label>
              <div className="control">
                <textarea
                  id="line1"
                  className="textarea"
                  placeholder="Stay alert."
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setLineOne(event.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="line2" className="label">
                Line 2
              </label>
              <div className="control">
                <textarea
                  id="line2"
                  className="textarea"
                  placeholder="Control the virus."
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setLineTwo(event.target.value)}
                />
              </div>
            </div>
            <div className="field">
              <label htmlFor="line3" className="label">
                Line 3
              </label>
              <div className="control">
                <textarea
                  id="line3"
                  className="textarea"
                  placeholder="Save lives."
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setLineThree(event.target.value)}
                />
              </div>
            </div>
            <button className="button is-medium submit-button" onClick={handleMemeGeneration}>
              <animated.div
                style={{
                  opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                  transform: x
                    .interpolate({
                      range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                    })
                    .interpolate((x) => `scale(${x})`)
                }}
              >
                Download
              </animated.div>
            </button>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Home;
