import React from 'react'
import Link from 'next/link'
import { Img } from '../Img'
import { Text } from '../Text'
import SelectBox from '../SelectBox'
import { Heading } from '../Heading'

const dropDownOptions = [
    {label:'Option 1', value:'opttion1'},
    {label:'Option 1', value:'opttion1'},
    {label:'Option 1', value:'opttion1'}
]

function Header({...props}) {
  return (
    <header {...props}>
       <div className='flex justify-center self-stretch border-b border-solid border-gray-300 bg-misc-white-0 py-6 sm:py-5'>
          <div className='container-xs mt-3 flex justify-center md:px-5'>
            <div className='flex w-full flex-col items-center gap=[60px] sm:gap-[30px]'>
                <div className='flex items-center justify-between gap-5 self-stretch md:flex-col'>
                    <div className='flex w-[54%] items-center justify-between gap-5 md:w-full'>
                        <Img
                          src='/logo.svg'
                          width={36}
                          height={36}
                          alt='header-logo'
                          className={'h-[36px] w-[36px] object-contain'}
                        />
                        
                       
                    </div>
                    <div className='flex w-[20%] items-center justify-between gap-5 md:w-full'>
                        <Link href='#'>
                            <Img
                              src='/search-normal.svg'
                              width={24}
                              height={24}
                              alt='search'
                              className={'h-[24px] w-[24px]'}
                            />
                        </Link>
                        <Link href='#'>
                            <Img
                              src='/heart.svg'
                              width={24}
                              height={24}
                              alt='Favorite'
                              className={'h-[24px] w-[24px]'}
                            />
                        </Link>
                        <Link href='#'>
                            <Img
                              src='/shopping-bag.svg'
                              width={24}
                              height={24}
                              alt='bg'
                              className={'h-[24px] w-[24px]'}
                            />
                        </Link>
                        <Link href='#'>
                            <Img
                              src='/profile.svg'
                              width={24}
                              height={24}
                              alt='profile'
                              className={'h-[24px] w-[24px]'}
                            />
                        </Link>
                        <SelectBox
                          shape='square'
                          indicator = {
                             <Img src='/arrow-left.svg' width={16} height={16} alt='checkmark' className={'h-[16px] w-[16px]'} />
                          }
                          name='language dropdown'
                          placeholder={`ENG`}
                          options={dropDownOptions}
                          className={'w-[20%] gap-1.5 font-bold tracking-[1.00px] text-text-text'}
                        />
                    </div>
                </div>
                <ul className='!mx-[306px] flex flex-wrap gap-[62px] md:mx-0 md:gap-5'>
                    <li>
                        <Link href='#'>
                            <Heading as='h5' className='tracking-[1.00px]'>
                                SHOP
                            </Heading>
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <Heading as='h5' className='tracking-[1.00px]'>
                                SKILLS
                            </Heading>
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <Heading as='h5' className='tracking-[1.00px]'>
                                STORIES
                            </Heading>
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <Heading as='h5' className='tracking-[1.00px]'>
                                ABOUT
                            </Heading>
                        </Link>
                    </li>
                    <li>
                        <Link href='#'>
                            <Heading as='h5' className='tracking-[1.00px]'>
                                CONTACT US
                            </Heading>
                        </Link>
                    </li>
                </ul>
            </div>
          </div>
       </div>
    </header>
  )
}

export default Header