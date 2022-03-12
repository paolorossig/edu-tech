import ReactPlayer from 'react-player'
import { Link } from 'react-scroll'
import { BsCheck2Square } from 'react-icons/bs'
import heroVideo from '@/assets/video/hero-video.mp4'

const scrollProps = {
  spy: true,
  smooth: true,
  offset: -80,
  duration: 500,
  activeClass: 'active'
}

function Hero() {
  return (
    <section className="flex w-full flex-col-reverse items-center md:my-14 md:flex-row">
      <div className="w-full items-center pr-4">
        <h1 className="mb-6 text-3xl text-black md:text-5xl">
          Inicia tu carrera tech y aprende a tu ritmo
        </h1>
        <p className="mb-5 flex max-w-lg gap-2 pr-8 text-sm leading-tight md:text-base">
          <BsCheck2Square className="text-3xl" />
          Contamos con mentores disponibles 24/7 para consultas personalizadas
        </p>
        <Link
          to="cursos"
          {...scrollProps}
          className="bg-primary cursor-pointer rounded-xl px-8 py-2 text-white"
        >
          Ver más
        </Link>
      </div>
      <ReactPlayer
        url={heroVideo}
        playing
        loop
        muted
        width={'100%'}
        height={'100%'}
      />
    </section>
  )
}

export default Hero
