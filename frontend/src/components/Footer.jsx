import logo from '@/assets/svg/logo.svg'
import { GoMarkGithub } from 'react-icons/go'
import { FaInstagram, FaLinkedin } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="z-20 mt-10 grid grid-rows-3 items-center justify-items-center gap-2 rounded-t-3xl bg-white p-4 shadow-md sm:grid-cols-3 sm:grid-rows-1">
      <img src={logo} alt="logo" className="h-full cursor-pointer" />
      <div>edutech.vercel.app © {new Date().getFullYear()}</div>
      <div className="flex gap-6">
        <a
          href="https://github.com/paolorossig/edu-tech"
          target="_blank"
          aria-label="Github"
          rel="noopener noreferrer"
        >
          <GoMarkGithub className="text-3xl" />
        </a>
        <a href="" aria-label="Instagram">
          <FaInstagram className="text-3xl" />
        </a>
        <a href="" aria-label="LinkedIn">
          <FaLinkedin className="text-3xl" />
        </a>
      </div>
    </footer>
  )
}

export default Footer
