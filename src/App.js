import { useEffect, useState } from 'react'
import bgImg from './assets/img/ANAL GAZERS SITE.png'
import { PreloadMedia, MediaType } from 'react-preload-media';

const App = () => {

  const [loading, setLoading] = useState(true);
  const [scrollable, setScrollable] = useState(false)

  const media = [
    {
      type: MediaType.Image,
      url: '/ANAL GAZERS SITE.png'
    }
  ]

  const playSound = name => {
    const audio = new Audio(`/sounds/${name}.mp3`);
    audio.play();
  }


  const handleScroll = (x,y) => {
    window.scrollTo({
      left: x,
      top: y,
      behavior: "smooth"
    });
  }

  const handleFinished = () => {
    setLoading(false);
    setTimeout(()=>{
      window.scrollTo({
        left: 250,
        top: 500,
        behavior: "auto"
      })
    },100)
  }


  return (
    <div className="Home">
    <PreloadMedia media={media} onFinished={handleFinished}>
      <div className='preload-wrap'>
        <img src={require("./assets/img/cursor.png")}/>
      </div>
    </PreloadMedia>
    {
      !loading
      &&
      <>
        <img src={bgImg} className="bgImg" useMap='#bgmap' />
        <map name="bgmap">
            <area 
              onClick={()=>{
                playSound("fart2");
                handleScroll(125,1390)
              }}
            alt="enter" title="Enter" coords="959,730,1225,497" shape="rect"/>
            <area onClick={()=> playSound("fart4")} id='imgone' alt="imgone" title="img one" coords="475,1706,165,1390" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="imgtwo" title="img two" coords="1386,1623,1692,1930" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="imgthree" title="img three" coords="228,2502,547,2853" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="imgfour" title="img four" coords="" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="imgfive" title="img five" coords="1412,2420,1693,2713" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="imgsix" title="img six" coords="1508,3534,1804,3793" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="imgseven" title="img seven" coords="1122,3661,1385,3866" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="eight" title="img eight" coords="431,3675,908,3957" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="imgnine" title="img nine" coords="1017,4669,715,4902" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="imgten" title="img ten" coords="1558,5134,1800,5312" shape="rect"/>
            <area onClick={()=> playSound("fart4")} alt="imgeleven" title="img eleven" coords="1734,6026,1804,5976,1697,5858,1602,5764,1473,5883,1383,5978,1493,6012" shape="poly"/>
        </map>
      </>
    }
    </div>
  );
}

export default App;
