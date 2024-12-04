import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DSC03595r from "../Assets/statics/FotosMangnolia/DSC03595r.webp";

function CenterMode() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 200,

    };

    return (
        <>
            <div className="slider-container">
                <Slider {...settings}>
                    <div>
                        <img
                            src={DSC03595r}
                            alt="Descripción de la imagen"
                        />
                    </div>
                    <div>
                        <img
                            src={DSC03595r}
                            alt="Descripción de la imagen"
                        />
                    </div>
                    <div>
                        <img
                            src={DSC03595r}
                            alt="Descripción de la imagen"
                        />
                    </div>
                    <div>
                        <img
                            src={DSC03595r}
                            alt="Descripción de la imagen"
                        />
                    </div>
                    <div>
                        <img
                            src={DSC03595r}
                            alt="Descripción de la imagen"
                        />
                    </div>
                </Slider>
            </div>
            <section className="imagenes-trabajo">
                <img height={100} width={50} src={DSC03595r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
                <img height={100} width={50} src={DSC03595r} alt="" />
            </section>
        </>
    );
}

export default CenterMode;
