import React from "react";
import Image from 'next/image'
import pic from '@/public/pic.jpg'

function Dialogue() {
  return (
    
    <div className="flex justify-center items-center w-[600px] h-[300px] px-[48px] mt-8 ml-[30%]">
    <div className="rounded-3xl p-1 bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800">
      <div className="rounded-[calc(1.5rem-1px)] p-10 bg-white dark:bg-gray-900">
        <p className="text-gray-700 dark:text-gray-300 text-justify">
          Using NextJS with Tailwind CSS is really amazing. The Component Blocks are beautifully designed, which makes it easier to create awesome web-pages!
        </p>
        <div className="mt-8 flex gap-0 items-center">
          <Image className="h-16 w-16 rounded-full" src={pic} alt="picture" />
        </div>
        <h3 className="text-lg font-medium text-gray-700 dark:text-white">AmjadCreations</h3>
        <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Full Stack Developer</span>
      </div>
    </div>
  </div>
  
   
  );
}

export default Dialogue;
