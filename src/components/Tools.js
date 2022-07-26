import meter1 from "../assets/img/jmeter.png";
import meter2 from "../assets/img/allure.png";
import meter3 from "../assets/img/postman.png";
import meter4 from "../assets/img/webdriverio.png";
import meter5 from "../assets/img/lighthouse.svg";
import meter6 from "../assets/img/contrastchecker.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Tools = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="tools">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Tools</h2>
              <p>
                In this section you will find the tools we use to test the
                application in an efficient way.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Allure Report</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="Image" />
                  <h5>WebdriverIo</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Postman</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>jMeter</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="Image" />
                  <h5>Google Lighthouse</h5>
                </div>
                <div className="item">
                  <img src={meter6} alt="Image" />
                  <h5>Contrast Checker</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
