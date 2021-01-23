import React from 'react';
import Hero from '../components/Hero';
import Carousel from '../components/Project';
// import VesselMastersLogo from '../../public/assets/VesselMastersLogo.png';

function HomePage(props) {

  return(
    <div class="justify-content-left py-5 row">
      <div class="col-md-8 col-sm-12"></div>
      <div>
          <Hero title={props.signin} subTitle={props.subTitle} text={props.text} />
          <Carousel />
      </div>
    </div>
  );

}
export default HomePage;