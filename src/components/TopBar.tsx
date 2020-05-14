import * as React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import { Spring } from "react-spring/renderprops-universal.cjs";

export const TopBar = (): JSX.Element => {
  const [menuActive, toggleMenu] = useState(false);

  const menuClick = (): void => {
    toggleMenu(!menuActive);
  };

  const { x } = useSpring({ from: { x: 0 }, x: 1, config: { duration: 1000 } });

  return (
    <div className="header-wrapper" id="home">
      <section className="hero">
        <nav className="navbar is-transparent is-hidden-tablet">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <animated.h1
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
                Coronavirus Meme Generator
              </animated.h1>
            </Link>
            <div
              data-target="mobile-nav"
              role="button"
              className={"navbar-burger burger navbar" + (menuActive ? " is-active" : "")}
              aria-label="menu"
              aria-expanded="false"
              onClick={menuClick}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          {menuActive ? (
            <Spring
              from={{
                opacity: 0,
                marginTop: 51
              }}
              to={{
                opacity: 1,
                marginTop: 0
              }}
            >
              {(props): JSX.Element => (
                <div id="mobile-nav" className={"navbar-menu" + (menuActive ? " is-active" : "")} style={props}>
                  <div className="navbar-end">
                    <div className="navbar-item">
                      <Link to="/" className="navbar-item" onClick={(): void => toggleMenu(false)}>
                        Stay alert. Control the virus. Save lives.
                        <br />
                        <small className="has-text-grey-light">UK Government poster generator</small>
                      </Link>
                    </div>
                    <div className="navbar-item">
                      <Link to="/tweet" className="navbar-item" onClick={(): void => toggleMenu(false)}>
                        #StayAlert
                        <br />
                        <small className="has-text-grey-light">
                          <em>@10DowningStreet</em> UK Government tweet generator
                        </small>
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </Spring>
          ) : (
            false
          )}
        </nav>
        <div className="hero-foot is-hidden-mobile">
          <div className="hero-foot--wrapper">
            <div className="columns">
              <div className="column is-12 hero-menu-desktop has-text-centered">
                <ul>
                  <li>
                    <Link to="/">Poster Generator</Link>
                  </li>
                  <li>
                    <Link to="/tweet">Tweet Generator</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
