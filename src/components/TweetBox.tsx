import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faHeart, faReply, faRetweet } from "@fortawesome/fontawesome-free-solid";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface ContentInterface {
  content: string;
  contentContainerRef: React.RefObject<any>;
}

export const TweetBox = (props: ContentInterface): JSX.Element => {
  return (
    <div className="tweet" ref={props.contentContainerRef}>
      <div className="tweet-head">
        <div className="tweet-image">
          <img
            src="https://pbs.twimg.com/profile_images/1194659082000572416/X2Xo7kAI_400x400.png"
            width={40}
            height={40}
            alt="10DowningStreet Twitter avatar"
            className="is-rounded"
          />
        </div>
        <div className="tweet-author">
          <span className="name">UK Prime Minister</span>&nbsp;<span className="handle">@10DowningStreet</span>
        </div>
      </div>
      <div className="tweet-body">{props.content}</div>
      <div className="tweet-footer">
        <div className="icons">
          <FontAwesomeIcon className="fas fa-reply" icon={faReply as IconProp} />
          &nbsp;
          <FontAwesomeIcon className="fas fa-retweet" icon={faRetweet as IconProp} />
          &nbsp;
          <FontAwesomeIcon className="fas fa-heart" icon={faHeart as IconProp} />
          &nbsp;
          <FontAwesomeIcon className="fas fa-arrow-up" icon={faArrowUp as IconProp} />
        </div>
      </div>
    </div>
  );
};
