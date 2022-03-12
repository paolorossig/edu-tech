import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Carousel({ cursos }) {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      autoplay={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="w-full md:max-w-4xl"
    >
      {cursos.map((curso, index) => (
        <SwiperSlide key={index} className="cursor-grab">
          <img
            src={curso.url}
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute left-0 bottom-0 rounded-b-lg bg-gradient-to-b from-transparent to-[rgba(0,0,0,.75)] px-4 pt-24 pb-6">
            <Link to={`/course/detail/${curso.id}`}>
              <h1 className="text-white">{curso.name}</h1>
              <p className="mt-2 hidden text-white opacity-70 md:block">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus ad vitae doloremque quas earum velit modi! Cumque
                reprehenderit animi odit?
              </p>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
