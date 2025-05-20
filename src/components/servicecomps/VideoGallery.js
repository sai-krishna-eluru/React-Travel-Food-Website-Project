import React from "react";
// import videosdata from "./ServiceVideo";
// import "./VideoGallery.css";

// function VideoGallery({url}) {
//   return (
//     <div id="app">
//       <div className="Names-container">
//         <div class="vd">
//           {/* <video width="200px" controls>
//           <source
//             src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
//             type="video/mp4"
//           />
//         </video> */}
//           <h2 className="h1">Video Gallery</h2>
//           <video
//             src="/videos/video-1.mp4"
//             muted
//             autoplay
//             loop
//             playsinline
//           ></video>
//         </div>
//       </div>
//     </div>
//   );
// }

const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";

const VideoGallery = () => {
  return (
    <video controls width="100%">
      <source src={src} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
};

export default VideoGallery;
