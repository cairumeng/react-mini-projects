const Sizes = ({ selectedSizes, setSelectedSizes }) => {
  return (
    <div className="w-full sizes">
      <div className="font-bold mb-3"> Sizes:</div>
      <div className="flex flex-wrap">
        {Object.keys(selectedSizes).map((size, index) => (
          <div
            key={index}
            className={
              'm-2  h-8 w-8 border rounded-full flex justify-center items-center cursor-pointer hover:border-black' +
              (selectedSizes[size] ? ' bg-black text-white' : ' bg-gray-100 text-black')
            }
            onClick={() => setSelectedSizes({ ...selectedSizes, [size]: !selectedSizes[size] })}
          >
            <div className="text-xs font-light">{size}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sizes
