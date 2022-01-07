import { Link } from 'react-router-dom'
function Home() {
  return (
    <div className="grid h-screen place-content-center text-center">
      <h1>EduTECH Homepage</h1>
      <Link to="/dashboard" className="btn mt-2">
        Dashboard
      </Link>
    </div>
  )
}

export default Home
