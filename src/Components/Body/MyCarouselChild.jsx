// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// export const MyCarouselChild = () => {
//   const [carouselImg, setCarouselImg] = useState();
//   const [carouselTitle, setCarouselTitle] = useState();
//   const [carouselDescription, setCarouselDescription] = useState();
//   const myDispatch = useDispatch();
//   const handleAddLink = () => {
//     if (carouselImg ==undefined&& 
//       carouselTitle==undefined&&
//        carouselDescription==undefined
//        )
//        {
//          alert("please fill ")
//        }
//     {


//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="dispatch image url here"
//         className="m-2"
//         onChange={(e) => setCarouselImg(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="dispatch title here"
//         className="m-2"
//         onChange={(e) => setCarouselTitle(e.target.value)}
//       />
//       <input
//         type="text"
//         placeholder="dispatch desc "
//         className="m-2"
//         onChange={(e) => setCarouselDescription(e.target.value)}
//       />
//       <button
//         onClick={() =>
//           myDispatch({
//             type: "ADD_CAROUSEL",
//             data: { carouselImg, carouselTitle, carouselDescription },
//           })
//         }
//       >
//         Dispatch Carousel Data
//       </button>
//     </div>
//   );
// };

