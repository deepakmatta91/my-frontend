import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"; // ✅ Import the Slider component
import Sports from "./slidespage.module.css"; // ✅ CSS module import

const Slidespages = () => {
    const settings = {
        dots: true,             // Navigation dots below the slider
        infinite: true,         // 🔁 Allows infinite looping
        slidesToShow: 1,        // Show one slide at a time
        slidesToScroll: 1,      // Scroll one slide at a time
        autoplay: true,         // ✅ Automatically play the slides
        speed: 1000,            // Transition speed (2 seconds)
        autoplaySpeed: 2000,    // Delay between transitions (2 seconds)
        cssEase: "linear",      // Smooth, linear easing (no acceleration)
      };
      

  return (

    <div className={Sports.d1}>
    <Slider {...settings}>
        <img src="\public\343570.jpg" alt="sports"  className={Sports.img1} />
        <img src="\public\cc1.jpg" alt="sports"  className={Sports.img2} />
        <img src="\public\ccc4.jpg" alt="sports"  className={Sports.img3} />
        <img src="\public\slide1.jpg" alt="sports"  className={Sports.img4}/>
        
    </Slider>
    </div>
  );
};

export default Slidespages;
