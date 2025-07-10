"use client";
import { SearcManufactureProps } from '@/types'
import { Combobox, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment, useState } from 'react'
import { manufacturers } from '@/constants'
const SearchManufacturer = ({ manufacturer, setManufacturer }: SearcManufactureProps) => {

    const [query, setQuery] = useState('')

    const filteredmanufacturers = query === "" ? manufacturers : manufacturers.filter((item) => item.toLowerCase().includes(query.toLowerCase()))


    return (
        <div className='search-manufacturer'>
            <Combobox>
                <div className='relative w-full'>
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image src="/car-logo.svg" width={20} height={20} alt="car logo" className='ml-4' />
                    </Combobox.Button>

                    <Combobox.Input className={"search-manufacturer__input"} placeholder='volkswagen' displayValue={(manufacturer: string) => manufacturer} onChange={e => setQuery(e.target.value)} />

                    <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" afterLeave={() => setQuery('')} />
                    <Combobox.Options>

                    </Combobox.Options>
                </div>
            </Combobox>
        </div>
    )
}

export default SearchManufacturer