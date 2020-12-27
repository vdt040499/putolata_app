import React from "react";
import "./style.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
function SideShare() {
  return (
    <div className="sideshare">
      <FacebookShareButton
        url={"https://putolata.netlify.app"}
        quote={"Putolata - bạn của mọi nhà"}
        hashtag="#mishasmaison"
      >
        <FacebookIcon size={36} />
      </FacebookShareButton>

      <TwitterShareButton
        url={"https://putolata.netlify.app"}
        quote={"Putolata - bạn của mọi nhà"}
        hashtag="#mishasmaison"
      >
        <TwitterIcon size={36} />
      </TwitterShareButton>
    </div>
  );
}

export default SideShare;
