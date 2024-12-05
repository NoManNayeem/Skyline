import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const Slider = () => {
  const slides = [
    {
      id: 1,
      content: 'Explore Our Features',
      img: 'https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      content: 'Tailored for Your Needs',
      img: 'https://images.unsplash.com/photo-1604175246901-47caa4f038c8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      content: 'Fully Responsive Design',
      img: 'https://images.unsplash.com/photo-1621999776876-14a95d3314c5?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-8">Our Features</h2>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="h-auto"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="flex flex-col items-center">
              <img
                src={slide.img}
                alt={slide.content}
                className="rounded-lg mb-4 shadow-lg w-full max-h-60 object-cover"
              />
              <h3 className="text-lg font-medium text-center">{slide.content}</h3>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;
