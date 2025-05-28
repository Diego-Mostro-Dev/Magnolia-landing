import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Trabajo1 from "../Assets/statics/FotosMangnolia/Trabajo1.webp";
import Trabajo2 from "../Assets/statics/FotosMangnolia/Trabajo2.webp";
import Trabajo3 from "../Assets/statics/FotosMangnolia/Trabajo3.webp";
import Trabajo4 from "../Assets/statics/FotosMangnolia/Trabajo4.webp";
import Trabajo5 from "../Assets/statics/FotosMangnolia/Trabajo5.webp";


function CenterMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 1,
        speed: 150,
    };

    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img
                            src={Trabajo1}
                            alt="Descripción de la imagen"
                            loading='lazy'
                        />
                    </div>
                    <div>
                        <img
                            src={Trabajo2}
                            alt="Descripción de la imagen"
                            loading='lazy'
                        />
                    </div>
                    <div>
                        <img
                            src={Trabajo3}
                            alt="Descripción de la imagen"
                            loading='lazy'
                        />
                    </div>
                    <div>
                        <img
                            src={Trabajo4}
                            alt="Descripción de la imagen"
                            loading='lazy'
                        />
                    </div>
                    <div>
                        <img
                            src={Trabajo5}
                            alt="Descripción de la imagen"
                            loading='lazy'
                        />
                    </div>
                </Slider>
            </div>
            <section className="imagenes-trabajo">
                <img loading='lazy' height={100} width={50} src={Trabajo1} alt="" />
                <img loading='lazy' height={100} width={50} src={Trabajo2} alt="" />
                <img loading='lazy' height={100} width={50} src={Trabajo3} alt="" />
                <img loading='lazy' height={100} width={50} src={Trabajo4} alt="" />
                <img loading='lazy' height={100} width={50} src={Trabajo5} alt="" />
            </section>
        </>
    );
}

export default CenterMode;
