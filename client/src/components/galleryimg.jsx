import React, { useEffect } from 'react';
import "./galleryimg.css"
import $ from 'jquery';
import flash1 from "../Assets/FLASH-s/Flash.jpg";
import flash2 from "../Assets/FLASH-s/IMG_1077.jpg";
import flash3 from "../Assets/FLASH-s/IMG_1081.jpg";
import flash4 from "../Assets/FLASH-s/IMG_1089.jpg";
import flash5 from "../Assets/FLASH-s/IMG_1125.jpg";
import flash6 from "../Assets/FLASH-s/IMG_1128.jpg";
import flash7 from "../Assets/FLASH-s/nith.jpg";
//
import hdr1 from "../Assets/HDR-s/DJI_0006.jpg";
import hdr2 from "../Assets/HDR-s/DJI_0018.jpg";
import hdr3 from "../Assets/HDR-s/DJI_0054.jpg";
import hdr4 from "../Assets/HDR-s/IMG_0624.jpg";
import hdr5 from "../Assets/HDR-s/IMG_0666.jpg";
import hdr6 from "../Assets/HDR-s/IMG_0672.jpg";
//
import single1 from "../Assets/SINGLE-s/IMG_0979.jpg";
import single2 from "../Assets/SINGLE-s/IMG_1009.jpg";
import single3 from "../Assets/SINGLE-s/IMG_0919.jpg";
import single4 from "../Assets/SINGLE-s/IMG_0937.jpg";
import single5 from "../Assets/SINGLE-s/IMG_0976.jpg";
//
import staging1 from "../Assets/STAGING-s/1J8A5315.jpg";
import staging2 from "../Assets/STAGING-s/1J8A5318.jpg";
//
import twilight1 from "../Assets/TWILIGHT-s/164 Brush Creek Drive 00138t.jpg";
import twilight2 from "../Assets/TWILIGHT-s/164 Brush Creek Drive 00012t.jpg";
import twilight3 from "../Assets/TWILIGHT-s/164 Brush Creek Drive 00110t.jpg";
import twilight4 from "../Assets/TWILIGHT-s/FB_IMG_1673001470852.jpg";
import twilight5 from "../Assets/TWILIGHT-s/FB_IMG_1673001476189.jpg";







const Galleryimg = () => {
    useEffect(()=>{
        document.querySelectorAll('.product img').forEach(image =>{
            image.onclick = () => {
          
                document.querySelector('.popup-img').style.display='block';
                document.querySelector('.popup-img img').src = image.getAttribute('src');
            }
        });
        document.querySelector('.popup-img span').onclick =() =>{
            document.querySelector('.popup-img').style.display='none';
        }
    },[]);
    useEffect(() => {
        // jQuery code to handle the click event and filtering
        $(document).ready(function() {
            $('.list').click(function() {
                const value = $(this).attr('data-filter');
                if (value === 'All') {
                    $('.itembox').show('2000');
                } else {
                    $('.itembox').not('.' + value).hide('2000');
                    $('.itembox').filter('.' + value).show('2000');
                }
            });
        });
       
            
        // Cleanup function to remove the jQuery handlers when the component unmounts
        return () => {
            $('.list').off('click');
        };
    },[]); 
    
  return (
    <section className='gallerysection'>
        <ul>
            <li className="list active" data-filter="All">All</li>
            <li className="list" data-filter="HDRBLENDING">HDR BLENDING</li>
            <li className="list" data-filter="FLASHAMBIENT">FLASH AMBIENT</li>
            <li className="list" data-filter="DAYNIGHT"> DAY TO DUSK & NIGHT</li>
            <li className="list" data-filter="TWILIGHT">TWILIGHT</li>
            <li className="list" data-filter="VIRTUAL">VIRTUAL STAGING</li>
           
        </ul>
        <div className="product">
            <div className="itembox HDRBLENDING"><img loading='lazy' src={hdr1} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img loading='lazy' src={flash1} alt="" /></div>
            <div className="itembox DAYNIGHT"><img loading='lazy' src={single1} alt="" /></div>
            <div className="itembox TWILIGHT"><img loading='lazy' src={twilight1} alt="" /></div>
            <div className="itembox VIRTUAL"><img loading='lazy' src={staging1} alt="" /></div>
            {/* gallery */}
            <div className="itembox HDRBLENDING"><img loading='lazy' src={hdr2} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img loading='lazy' src={flash2} alt="" /></div>
            <div className="itembox DAYNIGHT"><img loading='lazy' src={single2} alt="" /></div>
            <div className="itembox TWILIGHT"><img loading='lazy' src={twilight2} alt="" /></div>
            <div className="itembox VIRTUAL"><img loading='lazy' src={staging2} alt="" /></div>
            {/* gallery */}
            <div className="itembox HDRBLENDING"><img loading='lazy' src={hdr3} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img loading='lazy' src={flash3} alt="" /></div>
            <div className="itembox DAYNIGHT"><img loading='lazy' src={single3} alt="" /></div>
            <div className="itembox TWILIGHT"><img loading='lazy' src={twilight3} alt="" /></div>
            {/* gallery */}
            <div className="itembox HDRBLENDING"><img loading='lazy' src={hdr4} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img loading='lazy' src={flash4} alt="" /></div>
            <div className="itembox DAYNIGHT"><img loading='lazy' src={single4} alt="" /></div>
            <div className="itembox TWILIGHT"><img loading='lazy' src={twilight4} alt="" /></div>
            {/* gallery */}
            <div className="itembox HDRBLENDING"><img loading='lazy' src={hdr5} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img loading='lazy' src={flash5} alt="" /></div>
            <div className="itembox DAYNIGHT"><img loading='lazy' src={single5} alt="" /></div>
            <div className="itembox TWILIGHT"><img loading='lazy' src={twilight5} alt="" /></div>
            //
            <div className="itembox FLASHAMBIENT"><img loading='lazy' src={flash6} alt="" /></div>
            <div className="itembox HDRBLENDING"><img loading='lazy' src={hdr6} alt="" /></div>
            //

            <div className="itembox FLASHAMBIENT"><img loading='lazy' src={flash7} alt="" /></div>


        </div>
        <div className="popup-img">
            <span>&times;</span>
        <img src={img1} alt="" />

        </div>
    </section>
    
  )
}

export default Galleryimg