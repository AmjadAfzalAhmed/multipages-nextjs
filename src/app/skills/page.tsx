import SkillSets from '@/components/SkillSets'
import React from 'react'

function Skills() {
  return (
    <div className='flex items-center text-purple-600 text-4xl font-bold text-center border-1 mt-4 ml-8'>
      <div className='bg-green-200 border-2 rounded-md ml-8 w-[40px]'>
        <p>S</p>
        <p>K</p>
        <p>I</p>
        <p>L</p>
        <p>L</p>
        <p>S</p>
        <p>E</p>
        <p>T</p>
        <p>S</p>
      </div>
      <SkillSets />
    </div>
  )
}

export default Skills
