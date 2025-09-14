import React from 'react'

const hero = () => {
    return (
        <div className="justify-center items-center flex  flex-col gap-4">
            <img src="./hero.png" alt="hero image" className="w-170 object-cover rounded-md" />
            <div>
                <h1 className="text-3xl font-bold text-gray-800">
                    Step into the{" "}
                    <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                        World
                    </span>{" "}
                    of unlimited movies & shows
                </h1>
               

            </div>

        </div>
    )
}

export default hero