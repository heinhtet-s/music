import img1 from '../assets/1.jpg' 


import React from 'react'
import  classes from './Music.module.css'
import MusicSlider from './MusicSlider'
import Data from './MusicData'
import { useNavigate } from 'react-router-dom'
import ReactAudioPlayer from 'react-audio-player'
import video6 from "../assets/video6.mp4";
function Music() {
  const navigate=useNavigate();

  return (
    <div className={classes.container}>
        <div className={classes.banner}>
            <MusicSlider></MusicSlider>
        </div>
        <div style={{ padding: "5px"}}>
          <h3 style={{fontSize: "30px",}}>WAFB</h3>
          <p>
          We left the city and were in the jungle over a year ago, which is when the album "We Are Fine Bro" (WAFB) got its name. Even though I was experiencing pressure and hardships in the jungle, I made the decision not to share them when my buddies questioned me "Are you alright there?". Regardless of facing the difficulties and struggles during chaotic times, my brothers and I are able to handle them. .We continue to do our best to navigate these difficulties. And these events inspired the album's name. The six tracks that made up the mini album support revolution and mental fortitude. As an unusual memory, the playlist has two songs that were recorded in jungle. The main goal of selling this mini album is to support the majority of the revolutionary groups.The 80% of the profits will go toward the Spring Revolution.lll
          </p>
          <p>
          "We Are Fine Bro" WAFB album နာမည်ကတော့ ကျွန်တော် မြို့ပြကို စွန့်ခွာပြီး တောထဲမှာ နေထိုင်ခဲ့တဲ့ တစ်နှစ်ကျော်ကာလအတွင်းမှာ မွေးဖွားလာတာပါ။ 
ကျွန်တော့် သူငယ်ချင်း၊ မိတ်ဆွေတွေက "မင်း အဲ့မှာ အဆင်ပြေရဲ့လား" လို့ မေးခွန်းထုတ်လာတဲ့အခါ ကျွန်တော့်မှာ ပင်ပန်း ဆင်းရဲမှုတွေ ရှိနေပေမယ့်လည်း သူတို့ကို ငြီးငြူပြီး ပိုပင်ပန်းရအောင် မလုပ်ချင်ခဲ့ပါဘူးဗျာ။
ဒီခေတ်ပျက်ကြီးထဲမှာ ဘဝငရဲကို ကြုံတွေ့ရပေမယ့် ကျွန်တော်တို့ ညီအစ်ကိုတွေ အတူတူ ဖြတ်သန်းနိုင်ခဲ့တယ်။ ဒီအကြပ်တည်းကနေ တူတူ ကျော်လွှားနိုင်ခဲ့တယ်။
ကျွန်တော်တို့ဒီအခက်အခဲတွေ ပြဿနာတွေကိုအကောင်းဆုံးကျော်လွှားနိုင်အောင်လည်းကြိုးစားနေကြပါတယ်။
ဒါကြောင့် မိတ်ဆွေတွေရဲ့ မေးခွန်းကို "ပြန်ဖြေတဲ့အနေနဲ့ ဒီTitle ပေးဖြစ်ခဲ့တယ်။
album ထဲ မှာ တော်လှန်ရေးအတွက် စိတ်ဓာတ်ခွန်အား ဖြစ်စေမဲ့ သီချင်း 6 ပုဒ်ပါဝင်မှာ ဖြစ်ပါတယ်၊၊ 
အမှတ်တရအဖြစ်နဲ့ထူးခြားတာ တစ်ခုကတော့ ဒီ album ထဲက သီချင်း နှစ်ပုဒ်ဟာ တောထဲမှာ ခက်ခက်ခဲခဲ အသံသွင်းထားခဲ့တာ ဖြစ်ပါတယ်၊၊  WAFB ကို ထုတ်လုပ်ရောင်းချရတဲ့ အဓိက ရည်ရွယ်ချက်ကတော့ ဒီကရတဲ့ 80% သော ဝင်ငွေသည် တော်လှန်ရေး ရဲဘော်ရဲဘက်တွေဆီ ပြန်လည် စီးဆင်းသွားမှာ ဖြစ်ပါတယ်၊၊
          </p>
        </div>
        <div className={classes.music_container}>
        {/* Imgages */}
        {
          Data.map((item)=>{
           return (
            <div className={classes.music_collection}>
            <div>
            <video controls style={{width: "100%"}}>
    <source src={item.video} type="video/mp4" />
      </video>
            </div>
            <div style={{paddingLeft: "10px",paddingRight: "10px" }} >
            <p className={classes.song}>{item.title}</p>
          
              <ReactAudioPlayer
      src={item.song}
  style={{width: '100%'}}
  controls
/>
            <div className={classes.details}>
              <p>
              </p>
              <a href="https://www.facebook.com/profile.php?id=100087630447354&mibextid=ZbWKwL" target="_blank" className={classes.music_btn} style={{    marginLeft: "auto", 
    display: "block",}}>
    Buy
</a>
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