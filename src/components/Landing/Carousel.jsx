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
      className="h-[500px] w-[800px]"
    >
      {cursos.map((curso, index) => (
        <SwiperSlide key={index} className="relative">
          <div className="h-full cursor-grab">
            <img
              src={curso.url}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="absolute left-0 bottom-0 rounded-b-lg bg-gradient-to-b from-transparent to-[rgba(0,0,0,.75)] px-4 pt-24 pb-6">
              <Link to={`/course/detail/${curso.id}`}>
                <h1 className="text-white">{curso.name}</h1>
                <p className="mt-2 text-white opacity-70">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus ad vitae doloremque quas earum velit modi! Cumque
                  reprehenderit animi odit?
                </p>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
