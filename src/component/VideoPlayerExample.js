import ReactPlayer from "react-player/youtube";

export default function VideoPlayerExample() {
  return (
    <div>
      <h1>Video Player Using video tag</h1>
      <video width="320" height="240" controls>
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />    
        </video>

        <h1>Video Player Using react-player</h1>
        <ReactPlayer url="https://www.youtube.com/watch?v=L5nOk5gQvCo" />
        </div>
        );      
    }