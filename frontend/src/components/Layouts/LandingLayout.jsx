import Header from '../Landing/Header'
import Footer from '../Landing/Footer'

function LandingLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full flex-col items-center gap-10 p-4 md:gap-20 xl:w-[1280px]">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default LandingLayout
