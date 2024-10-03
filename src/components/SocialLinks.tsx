import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook, faTwitter, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons'

const SocialLinks = () => {
  return (
    <div className='w-[70%] rounded-2xl p-1 ml-[20%] mt-11 bg-gradient-to-b from-blue-400 to-green-400 shadow-lg'>
      <div className=' flex gap-8 justify-center w-full rounded-xl bg-slate-300 p-4 cursor-pointer'>
      <FontAwesomeIcon icon={faGoogle} className='text-blue-700 w-8 h-8' />
      <FontAwesomeIcon icon={faFacebook} className='text-blue-900 w-8 h-8' />
      <FontAwesomeIcon icon={faTwitter} className='text-blue-800 w-8 h-8' />
      <FontAwesomeIcon icon={faLinkedin} className='text-blue-700 w-8 h-8' />
      <FontAwesomeIcon icon={faInstagramSquare} className='text-red-500 w-8 h-8' />
    </div>    
    </div>
  )
}

export default SocialLinks
