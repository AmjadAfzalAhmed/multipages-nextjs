import { AppBar,Toolbar } from "@mui/material";
import Link from "next/link";

export default function Header () {
  return (
    <div>
    <AppBar position='static'>
      <Toolbar>
        <h1 className='text-xl italic font-bold cursor-pointer hover:text-red-400'>AmjadCreations</h1>
        <ul className='flex text-xl gap-[100px] ml-auto mr-[100px]'>
          <li>
            <Link href='/' className='hover:text-red-400'>Home</Link>
          </li>
          <li>
            <Link href='/about' className='hover:text-red-400'>About</Link>
          </li>
          <li>
            <Link href='/skills' className='hover:text-red-400'>Skills</Link>
          </li>
        </ul>

      </Toolbar>
    </AppBar>
    </div>
  )
}