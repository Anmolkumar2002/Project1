import React, { useState } from 'react'
import bgImg from "../../assets/vector3.png"
import food1 from "../../assets/biryani.png"
import food2 from "../../assets/biryani2.png"
import food3 from "../../assets/biryani3.png"

const ImageList = [
  {
    id: 1,
    img: food1
  },
  {
    id: 2,
    img: food2
  },
  {
    id: 3,
    img: food3
  }
];

const bgImage = {
  backgroundImage: `url(${bgImg})`,
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  width: "100%",
  height: "100%"
};

const Hero = () => {
  const [imageId, setImageId] = useState(food1);
  return (
    <>
      <div style={bgImage} className='min-h'>

      </div>
    </>
  )
}

export default Hero
