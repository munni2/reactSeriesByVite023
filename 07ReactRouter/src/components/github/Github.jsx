import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/munni2')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])
  return (
    // <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    // <img src={data.avatar_url} alt="Git picture" width={300} />
    // </div>

    <>
        <div className="relative h-[400px] w-[300px] rounded-md">
            <img
                src={data.avatar_url}
                alt={data.login}
                className="z-0 h-full w-full rounded-md object-cover"
                width={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold text-white">{data.name}</h1>
                <p className="mt-2 text-sm text-gray-300">
                {data.blog}
                </p>
                <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Profile →
                </button>
            </div>
        </div>
    </>
  )
}

export default Github
