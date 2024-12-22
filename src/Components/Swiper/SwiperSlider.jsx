
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './SwiperSlider.css';

import { EffectCoverflow } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';



const SwiperSlider = () => {

    const phonesList = useLoaderData()
    const phones = phonesList.data;
    console.log(phones);


    return (
        <div className='m-10'>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
                className="mySwiper"
            >

                {
                    phones.map((phone, idx) =>
                        <SwiperSlide key={idx}>
                            <div className=''>
                                <img className='w-5/6' src={phone.image} />
                            </div>
                            <h1>{phone.name}</h1>

                        </SwiperSlide>)
                }


            </Swiper>






            {/* 
            <SwiperSlide key={idx}>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
            </SwiperSlide> */}
        </div>
    )
}

export default SwiperSlider