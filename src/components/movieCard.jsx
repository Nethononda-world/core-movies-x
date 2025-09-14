

const movieCard = ({ name, pic, ratings, date ,genre}) => {
    const p = 'https://image.tmdb.org/t/p/w500/' + pic;
    const x = ratings.toFixed(2);
    return (
        <div className="w-60 flex flex-col h-110 rounded-lg p-1 shadow-lg m-5 hover:bg-gray-200 focus:outline-2 focus:outline-offset-2 focus:outline-violet-500">
            <img src={p} alt="pc" className="rounded-lg" />

            <div className="flex flex-col  p-2 justify-between" >
                <div className="flex justify-between items-center">
                    <p className="font-bold text-sm truncate">{name}</p>
                    <div className="flex gap-1 justify-center items-center mr-2">
                        <img src="./star.svg" alt="" className="w-3 mb-1" />
                        <p className="text-sm">{x}</p>

                    </div>

                </div>
                <div className="flex items-center justify-between mt-2">
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
                        {genre}
                    </span>
                    <span className="px-3 py-1 text-sm font-medium rounded-full bg-gray-100 text-gray-700">
                        {date}
                    </span>
                </div>


            </div>


        </div>
    )
}

export default movieCard