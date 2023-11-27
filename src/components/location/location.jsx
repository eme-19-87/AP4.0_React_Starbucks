import React from "react";
import BannerTitle from '../bannerTitle/bannerTitle';
import './location.css';

function Location(){
    return(
        <>
       <BannerTitle title={"Ubicaciones De Tiendas"} />
        <div className="container">
        
        <div className="container d-flex justify-content-center mt-3">
            <iframe title="locales_mapa" className=" locales__mapa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.0492924291407!2d-58.837416713055575!3d-27.46312037632334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94456ca5895aa5bd%3A0x11b2ae5e29b46bd1!2zQ2Fmw6kgTWFydMOtbmV6!5e0!3m2!1ses!2sar!4v1701116559054!5m2!1ses!2sar"></iframe>
        </div>
        </div>
        </>
       
    )
}

export default Location;