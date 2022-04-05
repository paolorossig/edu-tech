import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Carousel({ courses }) {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      autoplay={true}
      modules={[Autoplay, Navigation, Pagination]}
      className="h-full w-full md:max-w-4xl"
    >
      {courses.map((course) => (
        <SwiperSlide key={course._id} className="relative cursor-grab">
          <img
            src={course.imageURL}
            className="h-full w-full rounded-lg object-cover"
          />
          <div className="absolute left-0 bottom-0 w-full rounded-b-lg bg-gradient-to-b from-transparent to-[rgba(0,0,0,.75)] px-4 pt-24 pb-6">
            <Link to={`/course/detail/${course._id}`}>
              <h1 className="text-white">{course.name}</h1>
              <p className="mt-2 hidden text-white opacity-70 md:block">
                {course.description}
              </p>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Carousel
