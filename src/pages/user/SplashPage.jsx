import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'

const SplashPage = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col bg-white min-h-screen items-center justify-center px-4'>
      <img src={logo} alt="logo image" className='w-20 h-20' />
      <h1 className='text-black text-3xl md:text-4xl font-bold pt-10 text-center'>Campus Navigator</h1>
      <p className='text-[#5F6368] mt-3 text-center'>Your guide to covenant university</p>
      <button
        onClick={() => navigate('/home')}
        className='bg-[#137FEC] px-10 md:px-30 py-2 rounded-md text-white my-10 whitespace-nowrap cursor-pointer hover:bg-[#116ecf] transition-colors'
      >
        Get Started
      </button>
      <p className='text-center'>
        Are you an admin?
        <span
          onClick={() => navigate('/admin/login')}
          className='text-[#137FEC] ml-2 cursor-pointer hover:underline'
        >
          Login here
        </span>
      </p>
    </div>

  )
}

export default SplashPage