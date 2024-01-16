import React from 'react'
import 'react-slideshow-image/dist/styles.css'
import { Slide} from 'react-slideshow-image'

const slideImages = [
    {
      url: '/images/banner3.jpg',
    },
    {
       url: '/images/banner2.jpg'
    } ,
    {
      url:  '/images/banner1.jpg'
    },
    {
      url:  '/images/banner5.jpg'
    },
    {
      url:  '/images/banner4.jpg'
    },
    
];
// const delay = 1000;
const divStyle = {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center',
    backgroundSize:'cover',
    margin: "0px",
    height:"350px"
}
 const ImageSlider = () => {
 

  
  return (
    <div className='slide-container' >
       <Slide>
          {slideImages.map((image,index) => (
            <div key={index}>
                <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>

                </div>
            </div>
          ))}
       </Slide>
      
    </div>
  )
}
export default ImageSlider
