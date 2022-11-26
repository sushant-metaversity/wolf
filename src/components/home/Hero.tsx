import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import { HeroImage, HeroImageContainer } from './styledComponents';

const Hero = () => {
  return (
    <div>
      {" "}
      <Carousel infiniteLoop autoPlay interval={3000} showThumbs={false} showIndicators={false} showStatus={false} >
        <HeroImageContainer>
          <HeroImage src="https://sitethemedata.com/sitethemes/wolf777.com/front/banners/1669215251653.jpg" />
          {/* <p className="legend">Legend 1</p> */}
        </HeroImageContainer>
        <HeroImageContainer>
          <HeroImage src="https://images.dog.ceo/breeds/spaniel-cocker/n02102318_14111.jpg" />
          {/* <p className="legend">Legend 2</p> */}
        </HeroImageContainer>
        <HeroImageContainer>
          <HeroImage src="https://images.dog.ceo/breeds/terrier-tibetan/n02097474_3147.jpg" />
          {/* <p className="legend">Legend 3</p> */}
        </HeroImageContainer>
      </Carousel>
    </div>
  );
}

export default Hero