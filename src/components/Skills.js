import skill1 from "../assets/python.jpeg";
import skill2 from "../assets/pytorch.png";
import skill3 from "../assets/tensorflow.png";
import skill4 from "../assets/laravel.png";
import skill5 from "../assets/office.png";
import skill6 from "../assets/design.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import arrow1 from "../assets/arrow1.svg";
// import arrow2 from "../assets/arrow2.svg";
import colorSharp from "../assets/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>I am enthusiastic about Intelligent Systems, Website Development, and Graphic Design, with a focus on creating innovative data-driven solutions. In intelligent systems, I apply machine learning and computer vision to develop adaptive models such as image classifiers. My website development expertise spans front-end and back-end technologies, building responsive and functional sites using modern frameworks such as React and Laravel. In addition, I excel in graphic design, producing visually appealing and purposeful designs that effectively communicate the desired message.</p>
                        <Carousel 
                            responsive={responsive} 
                            infinite={true} 
                            autoPlay={true}        // Mengaktifkan geser otomatis
                            autoPlaySpeed={2000}   // Interval geser otomatis (2000 ms atau 2 detik)
                            className="owl-carousel owl-theme skill-slider"
                        >
                            <div className="item">
                                <img src={skill1} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={skill2} alt="Image" />
                                <h5>Pytorch</h5>
                            </div>
                            <div className="item">
                                <img src={skill3} alt="Image" />
                                <h5>Tensorflow</h5>
                            </div>
                            <div className="item">
                                <img src={skill4} alt="Image" />
                                <h5>Laravel</h5>
                            </div>
                            <div className="item">
                                <img src={skill5} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={skill6} alt="Image" />
                                <h5>Design Grafis & Website</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}