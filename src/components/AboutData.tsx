
import Image from "next/image"
import pic from '@/public/pic.jpg'


const AboutCircle = () => {
  return (
    <div>
      
    <div className="flex flex-col items-center justify-center w-[300px] h-[300px] rounded-xl border-2 border-blue-500 bg-transparent shadow-xl p-6">
      <div className="mb-4">
        <Image
          className="rounded-xl"
          src={pic} 
          alt="Amjad"
          width={150}
          height={150}
        />
      </div>
      <h3 className="text-xl font-medium text-white dark:text-yellow-500">Amjad Afzal Ahmed</h3>
      <p className="text-lg text-black dark:text-gray-400">Full Stack Developer</p>
      
    </div>
    
    </div>
  );
};

export default AboutCircle;
