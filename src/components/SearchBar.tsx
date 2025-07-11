"use client"
import React, { useState } from 'react'
import { SearchManufacturer } from '@/components'

const SearchBar = () => {

    const [manufacturer, setManufacturer] = useState('')
    const handleSearch = () => { }
    return (
        <form onSubmit={handleSearch} className='searchbar'>
            <div className='searchbar__item'>
                <SearchManufacturer
                    manufacturer={manufacturer}
                    setManufacturer={setManufacturer} />
            </div>
        </form>
    )
}

export default SearchBar