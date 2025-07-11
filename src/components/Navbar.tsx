
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CustomButton from './CustomButton'

const Navbar = () => {
    return (
        <header className='w-full absolute z-10'>
            <nav className='max-w-[1440] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
                <Link href="/" className='flex justify-center items-center'>
                    <Image className="object-contain" src="/logo.svg" alt="car hub logo" width={118} height={18} />
                </Link>

                <CustomButton
                    title="Sign In"
                    btnType="button"
                    containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
                />

            </nav>
        </header>
    )
}

export default Navbar