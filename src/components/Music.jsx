import img1 from '../assets/1.jpg' 
import img2 from '../assets/2.jpg' 
import img3 from '../assets/3.jpg' 
import img4 from '../assets/4.jpg' 
import img5 from '../assets/5.jpg' 
import img6 from '../assets/6.jpg' 
import img7 from '../assets/7.jpg' 
import img8 from '../assets/3.jpg' 
import React from 'react'
import  classes from './Music.module.css'
import MusicSlider from './MusicSlider'
import Data from './MusicData'
import { useNavigate } from 'react-router-dom'


function Music() {
  const navigate=useNavigate();
  const detailHandler = (data) => {

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
            <p className={classes.song}>{item.title}</p>
            <div className={classes.details}>
              <p onClick={()=>navigate(`/detail/${item.song}`)}>Details</p>
              <p>Buy</p>
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