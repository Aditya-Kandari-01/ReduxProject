import {fetchGif, fetchPhotos, fetchVideos} from "./api/mediaApi"

const App = () => {
  return (
    <div className="min-h-screen text-white w-full bg-gray-950">
      <button className="bg bg-green-400 px-4 py-2 m-5"
       onClick={async() =>{
        const data = await fetchPhotos('cats')
        console.log(data)
      }}>Get Photos</button>
      <button className="bg bg-green-400 px-4 py-2 m-5" onClick={async() =>{
        const data = await fetchVideos('dogs')
        console.log(data)
      }}>Get Videos</button>
      <button className="bg bg-green-400 px-4 py-2 m-5" onClick={async() =>{
        const data = await fetchGif('cats')
        console.log(data)
      }}>Get Gif's</button>
    </div>

  )
}

export default App
 