import React from 'react'

function Footer1({...props}) {
  return (
    <footer {...props} className={`${props.className} flex self-stretch`}>
      <ul className='relative !mb-2 h-[740px] w-full bg-black-900 px-[110px] py-4 md:px-5'>
        <li>
            <div className='absolute bottom-[21%] right-[12%] m-auto flex w-[32%] flex-col gap-14 sm:gap-7'>
  
            </div>
        </li>
      </ul>
    </footer>
  )
}

export default Footer1