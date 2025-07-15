import { useState } from "react";
import ItemList from "./ItemList";


const Rescatagory = ({ data, showItem,setshowIndex }) => {
    const handleclick=()=>{
        setshowIndex()
    }
  return (
    <div>
      <div className="w-6/11 bg-white mx-auto my-4 p-3 rounded-lg">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleclick}
        >
          <span className="font-semibold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span
            className={`transition-transform duration-300 text-xl ${
              showItem ? "rotate-180" : ""
            }`}
          >
            ˅
          </span>
        </div>

        {showItem && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};
export default Rescatagory;
