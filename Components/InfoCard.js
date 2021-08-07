import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({ img, location, desc, star, title, price, total }) {
    return (
        <div className="block items-center lg:flex py-7 px-2 border-b cursor-pointer rounded-lg hover:bg-gray-100 transform duration-300 ease-out transition hover:shadow-3xl">
            <div className="relative justify-center sm:items-center overflow-hidden h-48 w-72 md:h-52 md:w-80 flex-shrink-0">
                <Image 
                    src={img}
                    layout="fill"
                    objectFit="cover"
                    className=" rounded-lg md:mx-auto justify-center"
                />
            </div>

            <div className="flex flex-col flex-grow pl-5">
                <div className="flex justify-content justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer text-red-400"/>
                </div>

                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-12 pt-2"></div>

                <p className="pt-2 text-sm text-gray-500 flex-grow">{desc}</p>

                <div className="felx items-end justify-between pt-5">
                    <p className="flex items-center">
                        <StarIcon  className="h-5 text-red-400"/>
                    </p>

                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InfoCard
