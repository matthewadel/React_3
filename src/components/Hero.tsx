"use client";
import React from 'react'
import { CustomButton } from '@/components'
import Image from 'next/image';

const Hero = () => {

    const handleScroll = () => { }
    return (
        <div className='hero'>
            <div className='flex-1 pt-36 padding-x'>
                <h1 className='hero__title'>
                    Find, book, or rent a car – quickly and easily!
                </h1>

                <p className='hero__subtitle'>
                    streamline your car rental experience with our effortless online booking process.
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll} />
            </div>

            <div className='hero__image-container'>
                <div className='hero__image'>
                    <Image fill className='object-contain' src={'/hero.png'} alt="hero" />

                </div>
                <div className='hero__image-overlay' />
            </div>
        </div>
    )
}

export default Hero