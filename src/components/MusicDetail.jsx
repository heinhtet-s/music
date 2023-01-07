import React from 'react'
import ReactAudioPlayer from 'react-audio-player';
import music1 from '../assets/1.wav'
import music2 from '../assets/22.wav'
import music3 from '../assets/3.wav'
import music4 from '../assets/4.wav'
import music5 from '../assets/5.wav'
import music6 from '../assets/6.wav'
import img1 from '../assets/1.jpg' 
import image1 from "../assets/Slider.jpg";
import classes from './Music.module.css';
import { useParams } from 'react-router-dom';
const MusicDetail = () => {
    let { id } = useParams();
    switch (id) {
        case "music1":
            id = music1;
            break;
        case "music2":
            id = music2;
            break;
        case "music3":
            id = music3;
            break;
        case "music4":
            id = music4;
            break;
        case "music5":
            id = music5;
            break;
        case "music6":
            id = music6;
            break;
        default:
            id = music1;
    }
  return (
  <div style={{display: "flex",justifyContent: "center", alignItems: "center",flexFlow: "column"}}>
  <img src={img1} style={{width: "80%",height: "400px", marginTop: "20px",borderRadius: "10px",marginBottom: "10px"}} alt="" />
           <ReactAudioPlayer
      src={`${id}`}
  style={{width: '80%'}}
  controls
/>
<div style={{ width: "80%" }}>
<button className={classes.music_btn} style={{    marginLeft: "auto", 
    display: "block",}}>
    Buy
</button>
</div>

    </div>
    
  )
}

export default MusicDetail