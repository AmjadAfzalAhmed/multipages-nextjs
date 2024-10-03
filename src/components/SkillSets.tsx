import React from "react";
import Image from 'next/image'
import ts from '@/public/ts.png'
import tw from '@/public/tailwind.png'
import htm from '@/public/html.png'
import nxj from '@/public/nextjs.png'


const SkillSets = () => {
  return (
    
    <div className='ml-[10%]'>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto text-lg text-black">
        <div className='item-1 bg-sky-200 mb-8 w-[600px] h-[300px] grid place-items-center rounded-md'>
          <span className="bg-yellow-200 ring ring-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>1</span>
          </span>
          <h3 className='text-2xl text-yellow-300'>Typescript</h3>
          <Image
          src={ts}
          alt='ts-icon'
          width={100}
          height={100}
          className='rounded-md'
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eligendi?</p>
        </div>

        <div className='item-2 bg-yellow-200 mb-8 w-[600px] h-[300px] grid place-items-center rounded-md'>
          <span className="bg-blue-300 ring ring-blue-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>2</span>
          </span>
          <h3 className='text-2xl text-blue-300'>HTML / CSS</h3>
          <Image
          src={htm}
          alt='html-icon'
          width={100}
          height={100}
          className='rounded-md'
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eligendi?</p>
        </div>

        <div className='item-3 bg-red-200 mb-8 w-[600px] h-[300px] grid place-items-center rounded-md'>
          <span className="bg-green-300 ring ring-green-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>3</span>
          </span>
          <h3 className='text-2xl text-green-400'>Tailwind CSS</h3>
          <Image
          src={tw}
          alt='tailwind'
          width={100}
          height={100}
          className='rounded-md'
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eligendi?</p>
        </div>

        <div className='item-4 bg-green-200 mb-8 w-[600px] h-[300px] grid place-items-center rounded-md'>
          <span className="bg-red-300 ring ring-red-100 rounded-full w-12 h-12 flex items-center justify-center">
            <span>4</span>
          </span>
          <h3 className='text-2xl text-red-400'>Next JS</h3>
          <Image
          src={nxj}
          alt='nextjs'
          width={100}
          height={100}
          className='rounded-md'
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, eligendi?</p>
        </div>
      </div>
    </div>
  );
};

export default SkillSets
