import React from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const VideoBackground = () => {
  return (
    <div className="relative">
      <ReactPlayer
        url="https://firebasestorage.googleapis.com/v0/b/mern-estate-38c4b.appspot.com/o/video%20(2160p).mp4?alt=media&token=086a7488-3bb0-42ec-ae9a-81ccaca5ca6f&_gl=1*11zjvvi*_ga*MTAzNTE1MzcwNC4xNjk3OTQxODcy*_ga_CW55HF8NVT*MTY5OTExODc0MC4zMC4xLjE2OTkxMTg3OTQuNi4wLjA."
        playing={true}
        loop={true}
        muted={true}
        controls={false}
        width="100%"
        height="100%"
      />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-col gap-6 py-60 px-15 max-w-6xl mx-auto">
          <h1 className="bg-gradient-to-r from-lime-700 to-emerald-500 text-transparent bg-clip-text font-extrabold text-3xl lg:text-6xl">
            Find your next{" "}
            <span className="bg-gradient-to-l from-orange-600 to-lime-600 text-transparent bg-clip-text">
              perfect
            </span>
            <br />
            place with ease
          </h1>
          <div className="text-white text-xs sm:text-xl">
            Future Realty is the best place to find your next perfect place to
            live.
            <br />
            We have a wide range of properties for you to choose from.
          </div>
          <Link
            to={"/search"}
            className="text-white hover:underline text-xs sm:text-xl font-bold"
          >
            <ScrollLink
              activeClass="active"
              to="show_listing"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              {" "}
              <p className="hover:underline cursor-pointer">
                Let's get started...
              </p>
            </ScrollLink>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoBackground;
