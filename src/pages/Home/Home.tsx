import { Link } from "react-router-dom"

type Props = {}

const Home = (props: Props) => {

  return (
  <div className="App w-full min-h-screen h-full flex items-center justify-center">
  <Link className='p-4 bg-gray-700 text-white' to={'/form-filling'} >Create Note</Link>
  </div>
  )
}

export default Home
