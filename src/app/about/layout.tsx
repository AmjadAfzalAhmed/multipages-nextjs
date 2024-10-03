import Image from 'next/image'
import bgPic from '@/public/bg.png'

const Layout = ({ children }) => {
  return (
    <div className="relative min-h-screen bg-gray-800">
      
      <Image
        src={bgPic}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen bg-opacity-50 space-x-4">
        {children}
      </div>
    </div>
  )
}

export default Layout
