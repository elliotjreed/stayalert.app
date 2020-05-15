import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import { animated, useSpring } from "react-spring";
import domtoimage from "dom-to-image-more";
import * as ReactGA from "react-ga";

import { TweetBox } from "./TweetBox";
import "./../assets/scss/App.scss";

const Twitter = (): JSX.Element => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } });

  const [tweet, setTweet] = useState("Stay alert by making your own Government tweet.\n\n#StayAlert.");
  const [downloadUrl, setDownloadUrl] = useState("");

  const contentContainerRef = useRef<HTMLElement | null>(null);

  const handleMemeGeneration = (): void => {
    domtoimage.toPng(contentContainerRef.current).then((dataUrl) => {
      setDownloadUrl(dataUrl);
    });
  };

  useEffect((): void => {
    ReactGA.pageview(window.location.pathname + location.search);
    handleMemeGeneration();
  }, []);

  return (
    <>
      <Helmet>
        <title>#StayAlert @10DowningStreet | Coronavirus Meme Generator</title>
        <meta
          name="description"
          content="Generate your own &ldquo;Stay alert. Control the virus. Save lives.&rdquo; meme or poster."
        />
      </Helmet>

      <animated.main className="main-content" style={props}>
        <div className="columns is-multiline">
          <div className="column is-12">
            <h2 className="title has-text-centered section-title">#StayAlert</h2>
            <h3 className="subtitle has-text-centered">Create your own &ldquo;@10DowningStreet&rdquo; tweet</h3>
            <p className="has-text-centered">
              Generate your own &ldquo;<em>@10DowningStreet</em>&rdquo; UK Government tweet by filling in the box below,
              and click the <strong>download</strong> button when you&apos;re done.
            </p>
          </div>
          <div className="column is-7-tablet is-4-fullhd is-offset-2-fullhd">
            <TweetBox content={tweet} contentContainerRef={contentContainerRef} />
          </div>
          <div className="column is-5-tablet is-4-fullhd">
            <div className="field">
              <div className="control">
                <textarea
                  className="textarea"
                  placeholder="Stay alert by making your own government tweet."
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void => setTweet(event.target.value)}
                  title="Stay alert by making your own government tweet."
                  onKeyUp={handleMemeGeneration}
                />
              </div>
            </div>
            <a download="stayalert.png" className="button is-medium submit-button" href={downloadUrl}>
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
            </a>
          </div>
        </div>
      </animated.main>
    </>
  );
};

export default Twitter;
