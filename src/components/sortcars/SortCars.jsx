// import "./sortCars.css";

// const SortCars = ({
//   handleMakeChange,
//   handleColorChange,

//   selectedInput,
// }) => {
//   return (
//     <div className="input">
//       <form action="">
//         <div className="input-container">
//           <div className="input-wrapper">
//             <h2>Sort by Make</h2>
//             <div className="inputItems">
//               <label htmlFor="all">All</label>
//               <input
//                 type="radio"
//                 value=""
//                 id="all"
//                 name="all"
//                 checked={selectedInput === ""}
//                 onChange={handleMakeChange}
//               />
//             </div>
//             <div className="inputItems">
//               <label htmlFor="benz"> benz</label>
//               <input
//                 type="radio"
//                 value="benz"
//                 id="benz"
//                 name="benz"
//                 checked={selectedInput === "benz"}
//                 onChange={handleMakeChange}
//               />
//             </div>

//             <div className="inputItems">
//               <label htmlFor="toyota">toyota</label>
//               <input
//                 type="radio"
//                 value="toyota"
//                 id="toyota"
//                 name="toyota"
//                 checked={selectedInput === "toyota"}
//                 onChange={handleMakeChange}
//               />
//             </div>
//             <div className="inputItems">
//               <label htmlFor="nissan">nissan</label>
//               <input
//                 type="radio"
//                 value="nissan"
//                 id="nissan"
//                 name="nissan"
//                 checked={selectedInput === "nissan"}
//                 onChange={handleMakeChange}
//               />
//             </div>
//             <div className="inputItems">
//               <label htmlFor="bmw">bmw</label>
//               <input
//                 type="radio"
//                 value="bmw"
//                 id="bmw"
//                 name="bmw"
//                 checked={selectedInput === "bmw"}
//                 onChange={handleMakeChange}
//               />
//             </div>
//           </div>

//           <div className="input-wrapper">
//             <h2>sort by color</h2>
//             <div className="inputItems">
//               <label htmlFor="allColors">All</label>
//               <input
//                 type="radio"
//                 id="allColors"
//                 value=""
//                 checked={selectedInput === ""}
//                 onChange={handleColorChange}
//               />
//             </div>
//             <div className="inputItems">
//               <label htmlFor="white">white</label>
//               <input
//                 type="radio"
//                 id="white"
//                 value="white"
//                 checked={selectedInput === "white"}
//                 onChange={handleColorChange}
//               />
//             </div>
//             <div className="inputItems">
//               <label htmlFor="ash">ash</label>
//               <input
//                 type="radio"
//                 id="ash"
//                 name="ash"
//                 value="ash"
//                 checked={selectedInput === "ash"}
//                 onChange={handleColorChange}
//               />
//             </div>
//             <div className="inputItems">
//               <label htmlFor="black">black</label>
//               <input
//                 type="radio"
//                 id="black"
//                 name="black"
//                 value="black"
//                 checked={selectedInput === "black"}
//                 onChange={handleColorChange}
//               />
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SortCars;
