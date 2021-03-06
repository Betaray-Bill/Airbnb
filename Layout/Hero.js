import Header from "../Components/Header";

function Hero() {
    return (
        <div className="relative h-[600px] sm:h-[450px] lg:h-[500px] xl:h-[600px] 2xl:h-[750px]"
            style={{
                backgroundImage:"url('https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560')",
                backgroundRepeat:"no-repeat",
                position:"realtive",
                backgroundSize:"cover",
                backgroundPosition:"center",
                width: "100vw",
                height: "80vh"
                }}
            >
            <Header />

            <div className="z-30 -top-4 ">
                <div className="absolute items-center -top-4 left-12 md:top-24 md:left-32 pt-2">
                    <h2 className="text-white w-72 text-4xl">
                        Olympian & 
                        Paralympian 
                        Online 
                        Experiences
                    </h2>
                    <button className="text-md text-gray-900 font-bold py-3 px-4 text-sm mt-4 bg-white md:px-4 md:py-4 rounded-lg md:mt-8 hover:bg-gray-900 hover:scale-105 hover:text-white transition tranform duration-200 ease-out">Explore now</button>
                </div>
            </div>

        </div>
    )
}

// https://a0.muscache.com/im/pictures/a915ff27-6062-436d-a7a9-007685423f7b.jpg?im_w=720
// https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=960
// https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560 -- Big
export default Hero
