const Shimmer=() =>{
    return (
       <div className="flex flex-wrap justify-center  p-5 mt-[75px]">
  {Array(20)
    .fill("")
    .map((_, index) => (
      <div
        key={index}
        className="relative w-[220px] mb-10  h-[300px] bg-[#d1d5db] rounded-[12px] overflow-hidden ml-10 shimmer"
      ></div>
    ))}
</div>


    )
}
export default Shimmer