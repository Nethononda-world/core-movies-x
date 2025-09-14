
const search = ({setSearch}) => {
  return (
    <>
    <div className=" flex h-15 w-282 gap-4 border pt-4 pl-3 pb-4 pr-3 rounded-md mt-3 focus-within:border-purple-500  bg-white  items-center">
        <img src="./search.svg" alt="search-icon" className="aboslute w-9 focus:border-purple-500 bg-white "/>
        <input type="text" placeholder="Search for movies or TV series" className="outline-none border-none h-full w-full text-left placeholder:font-Montserrat placeholder:text-gray-400 placeholder:text-md"
           onChange={(e) => setSearch(e.target.value)}
        />
     
    </div>
    
    </>

  )
}

export default search