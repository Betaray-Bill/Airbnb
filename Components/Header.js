import Image from 'next/image'
import { useState, useEffect } from 'react'
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';

function Header() {

    const router = useRouter()
    const [showSearch, setshowSearch] = useState(false)

    const [searchInput, setsearchInput] = useState("")
    const [startDate, setstartDate] = useState("")
    const [endDate, setendDate] = useState("")
    const [noGuest, setnoGuest] = useState(1)
    
    const resetInput = () => {
        setsearchInput("")
    }
    
    const Search = () => {
        router.push({
            pathname:"/Search",
            query:{
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noGuest
            }
        })
    }

    const selectionRange = {
        startDate:startDate,
        endDate:endDate,
        key:"Selection"
    }

    const handleRange = (range) => {
        setstartDate(range.Selection.startDate)
        setendDate(range.Selection.endDate)
    }

    const transition = () => {
        if(window.scrollY > 100){
            setshowSearch(true)

        }else{
            setshowSearch(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transition)
        return () => window.removeEventListener("scroll", transition)
    }, [])

    return (
    <header className="z-50 h-72">
        <div className="sticky top-0 z-40 grid grid-cols-2 md:grid-cols-3 grid-gap-2 p-5 align-middle md:px-10" class="div">
                
                {/* Left */}
                <div className="relative flex items-center h-10 cursor-pointer my-auto" onClick={() => router.push('/')}>
                    <Image
                        src="https://links.papareact.com/qd3"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                </div>

                {/* Middle */}
                <div className="hidden md:flex items-center justify-between space-x-4">
                    <p className="relative text-white font-medium  hover:text-red-500 cursor-pointer hover:scale-105 transition tranform duration-200 ease-out hover:font-semibold ">Places to stay</p>
                    <p className="relative text-white font-medium hover:text-red-500 cursor-pointer hover:scale-105 transition tranform duration-200 ease-out hover:font-semibold ">Experiences</p>
                    <p className="relative text-white font-medium hover:text-red-500 cursor-pointer hover:scale-105 transition tranform duration-200 ease-out hover:font-semibold ">Online Experiences</p>
                </div>

                {/* Right */}
                <div className="flex items-center justify-end space-x-4">
                    <p className="hidden md:block text-white font-semibold cursor-pointer">Become a host</p>
                    <GlobeAltIcon className="h-6 text-white cursor-pointer" />
                    <div className="flex items-center p-2 bg-white rounded-full">
                        <MenuIcon className="h-6 text-gray-900 px-1 cursor-pointer" />
                        <UserCircleIcon className="h-7 text-gray-900 px-1 cursor-pointer" />
                    </div>
                </div>

        </div>

        {/* Search Field */}
        <div className="flex justify-center items-center">
            <div className="flex items-center md:border-2 rounded-full bg-white p-1">
                
                <div className="hidden lg:flex" id="search_items bg-white">
                    <div className="rounded-full  hover:bg-gray-200 hover:transition-all cursor-pointer p-1 px-4">
                        <p className="px-2 font-bold text-lg">Location ?</p>
                        <p className="px-2 text-gray-500 font-medium">Where are u going?</p>
                    </div>

                    <div className="rounded-full  hover:bg-gray-200 hover:transition-all cursor-pointer p-1 px-4">
                        <p className="px-2 font-bold text-lg">Check In</p>
                        <p className="px-2 text-gray-500 font-medium">Add dates</p>
                    </div>

                    <div className="rounded-full  hover:bg-gray-200 hover:transition-all cursor-pointer p-1 px-4">
                        <p className="px-2 font-bold text-lg">Check Out</p>
                        <p className="px-2 text-gray-500 font-medium">Add dates</p>
                    </div>
                </div>

                <div className="px-4">
                    <input 
                        type="text" placeholder="Start your search..." 
                        className="pl-2 bg-transparent text-black font-medium text-sm focus:outline-none placeholder-gray-700"
                        value={searchInput}
                        onChange={(e) => {setsearchInput(e.target.value)}}
                    />
                    <SearchIcon className="inline h-12 rounded-full p-2 font-semibold text-white bg-red-500 hover:bg-red-600 cursor-pointer transition:all"/>
                </div>
            </div>
        </div>


        {/* Date Picker */}
        
        {
            searchInput && (
                <div className="flex mx-auto z-50 justify-center items-center mt-2 ">
                    <div className="bg-white p-2 rounded-lg shadow-3xl">
                        <DateRangePicker 
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#FD5B61"]}
                            onChange={handleRange}
                            className="w-72 block md:w-auto"
                        />
                        <div className="flex justify-between items-center border-b mb-4 p-2">
                            <h2 className="text-xl font-semibold ">Number of Guests</h2>
                            <UserIcon className="h-6"/>
                            <input type="number" 
                                value={noGuest} 
                                min={1}
                                onChange={(e) => {setnoGuest(e.target.value)}}  
                                className="w-16 pl-2 text-xl outline-none bg-gray-200 rounded-lg text-red-400"                                 
                            />
                        </div>
                        <div className="flex">
                            <button className="flex-grow text-gray-400" onClick={resetInput}>Cancel</button>
                            <button className="flex-grow text-red-400" onClick={Search}>Submit</button>
                        </div>
                    </div>
                </div>
            )
        }

    </header>
    )
}

export default Header
 