import React, { useEffect } from 'react';
import "./galleryimg.css"
import img1 from "../Assets/home-img-1.avif";
import $ from 'jquery';


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
            <div className="itembox HDRBLENDING"><img src={img1} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img src={img1} alt="" /></div>
            <div className="itembox DAYNIGHT"><img src={img1} alt="" /></div>
            <div className="itembox TWILIGHT"><img src={img1} alt="" /></div>
            <div className="itembox VIRTUAL"><img src={img1} alt="" /></div>
            {/* gallery */}
            <div className="itembox HDRBLENDING"><img src={img1} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img src={img1} alt="" /></div>
            <div className="itembox DAYNIGHT"><img src={img1} alt="" /></div>
            <div className="itembox TWILIGHT"><img src={img1} alt="" /></div>
            <div className="itembox VIRTUAL"><img src={img1} alt="" /></div>
            {/* gallery */}
            <div className="itembox HDRBLENDING"><img src={img1} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img src={img1} alt="" /></div>
            <div className="itembox DAYNIGHT"><img src={img1} alt="" /></div>
            <div className="itembox TWILIGHT"><img src={img1} alt="" /></div>
            <div className="itembox VIRTUAL"><img src={img1} alt="" /></div>
            {/* gallery */}
            <div className="itembox HDRBLENDING"><img src={img1} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img src={img1} alt="" /></div>
            <div className="itembox DAYNIGHT"><img src={img1} alt="" /></div>
            <div className="itembox TWILIGHT"><img src={img1} alt="" /></div>
            <div className="itembox VIRTUAL"><img src={img1} alt="" /></div>
            {/* gallery */}
            <div className="itembox HDRBLENDING"><img src={img1} alt="" /></div>
            <div className="itembox FLASHAMBIENT"><img src={img1} alt="" /></div>
            <div className="itembox DAYNIGHT"><img src={img1} alt="" /></div>
            <div className="itembox TWILIGHT"><img src={img1} alt="" /></div>
            <div className="itembox VIRTUAL"><img src={img1} alt="" /></div>

        </div>
        <div className="popup-img">
            <span>&times;</span>
        <img src={img1} alt="" />

        </div>
    </section>
    
  )
}

export default Galleryimg