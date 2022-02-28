import Header from '../Landing/Header'
import Footer from '../Footer'

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full flex-col items-center gap-20 p-4 xl:w-[1280px]">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
