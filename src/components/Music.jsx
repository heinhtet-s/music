import img1 from '../assets/1.jpg' 
import img2 from '../assets/2.jpg' 
import img3 from '../assets/3.jpg' 
import img4 from '../assets/4.jpg' 
import img5 from '../assets/5.jpg' 
import img6 from '../assets/6.jpg' 
import img7 from '../assets/7.jpg' 
import img8 from '../assets/3.jpg' 
import music1 from '../assets/1.wav'
import music2 from '../assets/22.wav'
import music3 from '../assets/3.wav'
import music4 from '../assets/4.wav'
import music5 from '../assets/5.wav'
import music6 from '../assets/6.wav'
import React from 'react'
import  classes from './Music.module.css'
import MusicSlider from './MusicSlider'
import Data from './MusicData'
import { useNavigate } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'


function Music() {
  const navigate=useNavigate();
  const detailHandler = (id) => {
  
    switch (id) {
      case "music1":
          return music1;
          break;
      case "music2":
          return music2;
          break;
      case "music3":
          return music3;
          break;
      case "music4":
          return music4;
          break;
      case "music5":
          return music5;
          break;
      case "music6":
          return music6;
          break;
      default:
          return music1;
  }
  }
  return (
    <div className={classes.container}>
        <div className={classes.banner}>
            <MusicSlider></MusicSlider>
        </div>
        <div className={classes.music_container}>
        {/* Imgages */}
        {
          Data.map((item)=>{
           return (
            <div className={classes.music_collection}>
            <div>
            <img src={img1} />
            </div>
            <div style={{width: "97%",paddingLeft: "10px",paddingRight: "10px" }} >
            <p className={classes.song}>{item.title}</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita facilis molestias, quas neque porro necessitatibus ipsam eius illo distinctio esse, beatae recusandae. Cumque natus optio at nesciunt id. Esse, sint!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, 
              </p>
              <ReactAudioPlayer
      src={detailHandler(item.song)}
  style={{width: '100%'}}
  controls
/>
            <div className={classes.details}>
              <p>
              </p>
              <button className={classes.music_btn} style={{    marginLeft: "auto", 
    display: "block",}}>
    Buy
</button>
            </div>
            
            </div>
          </div>
           )

        }
        )
        }
           
         
   
            {/* <div className={classes.music_collection}>
              <div>
              <img src={img2}></img>
              </div>
              <p className={classes.song}>Song Name</p>
              <div className={classes.details}>
                <p>Details</p>
                <p>Prices</p>
              </div>
            </div>
            <div className={classes.music_collection}>
              <div>
              <img src={img3}></img>
              </div>
              <p className={classes.song}>Song Name</p>
              <div className={classes.details}>
                <p>Details</p>
                <p>Prices</p>
              </div>
            </div>
            <div className={classes.music_collection}>
              <div>
              <img src={img4} />
              </div>
              <p className={classes.song}>Song Name</p>
              <div className={classes.details}>
                <p>Details</p>
                <p>Prices</p>
              </div>
            </div>
            <div className={classes.music_collection}>
              <div>
              <img src={img5} />
              </div>
              <p className={classes.song}>Song Name</p>
              <div className={classes.details}>
                <p>Details</p>
                <p>Prices</p>
              </div>
            </div>
            <div className={classes.music_collection}>
              <div>
              <img src={img6}></img>
              </div>
              <p className={classes.song}>Song Name</p>
              <div className={classes.details}>
                <p>Details</p>
                <p>Prices</p>
              </div>
            </div>
            <div className={classes.music_collection}>
              <div>
              <img src={img7}></img>
              </div>
              <p className={classes.song}>Song Name</p>
              <div className={classes.details}>
                <p>Details</p>
                <p>Prices</p>
              </div>
            </div>
            <div className={classes.music_collection}>
              <div>
              <img src={img8}></img>
              </div>
              <p className={classes.song}>Song Name</p>
              <div className={classes.details}>
                <p>Details</p>
                <p>Prices</p>
              </div>
            </div> */}
         {/* Images */}
        </div>
    </div>
  )
}

export default Music