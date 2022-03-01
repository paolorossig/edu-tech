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
    <section className="my-14 flex items-end">
      <div className="flex-grow items-center pr-10">
        <h1 className="mb-6 max-w-lg text-[48px] leading-tight text-black">
          Inicia tu carrera tech y aprende a tu ritmo
        </h1>
        <p className="mb-5 flex max-w-lg gap-2 pr-8 leading-tight">
          <BsCheck2Square className="text-[24px]" />
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
      <ReactPlayer url={heroVideo} playing loop muted />
    </section>
  )
}

export default Hero
