
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SwiperSlider.css';

import bg from '../../../public/bg.jpg'
import bg1 from '../../../public/bg1.jpg'
// import bgforsm from '../../../public/bgforsm.jpg'
import bgforsm1 from '../../../public/bgforsm1.jpg'

import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const SwiperSlider = () => {


    return (

        <div className='h-[80vh]'>
            <div className='relative'>
                <img src={bgforsm1} className='min-h-[80vh] w-full' alt="" />
                <div>
                    <h1 className='absolute'>Welcome To Our React Phone Hunter API</h1>
                </div>
            </div>

            <div className='md:block hidden'>
                <Swiper
                    spaceBetween={10}
                    effect={'fade'}
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[EffectFade, Navigation, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='relative'>
                        <img src={bg} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src={bg1} />
                    </SwiperSlide>

                    <SwiperSlide>
                        <img src="https://png.pngtree.com/background/20211215/original/pngtree-mobile-phone-technology-line-blue-gradient-business-picture-image_1502180.jpg" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default SwiperSlider