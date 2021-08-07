import { useRouter } from "next/dist/client/router";
import Header from "../Components/Header";
import Footer from "../Layout/Footer";
import { format } from "date-fns"
import InfoCard from "../Components/InfoCard";
import Map from "../Components/Map";


function Search({ searchResult }) {
    console.log("res",searchResult)

    const router = useRouter()

    console.log(router.query)

    const { location, startDate, endDate , noGuest } = router.query

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")

    const rangeOfDays = `${formattedStartDate} - ${formattedEndDate}`

    
    return (
        <div className="overflow-x-hidden">
            <div style={{
                backgroundImage:"url('https://a0.muscache.com/4ea/air/r:w3100-h1200-sfit,e:fjpg-c70/pictures/e9bdd1d2-2cb9-48cd-9aaf-919573046e8c.jpg')",
                backgroundRepeat:"no-repeat",
                position:"realtive",
                backgroundSize:"cover",
                backgroundPosition:"center",
                width: "100vw",
                height: "30vh"
                }}>
                <Header />
            </div>

            <main className="flex flex-col mt-8">
                <section className="flex-grow flex-row pt-4 px-4">
                    <p className="text-lg font-medium">300+ Stays - {rangeOfDays} for {noGuest} guests</p>
                    <h2 className="text-4xl py-3 font-semibold">Stays in {location}</h2>
                    <div className="hidden mt-4  space-x-4 lg:inline-flex">
                        <p className="p-1 px-2 rounded-3xl border border-gray-400 hover:border-gray-700 cursor-pointer hover:hover:scale-105 transform duration-300 ease-out transition">Instant Book</p>
                        <p className="p-1 px-2 rounded-3xl border border-gray-400 hover:border-gray-700 cursor-pointer hover:hover:scale-105 transform duration-300 ease-out transition">Price</p>
                        <p className="p-1 px-2 rounded-3xl border border-gray-400 hover:border-gray-700 cursor-pointer hover:hover:scale-105 transform duration-300 ease-out transition">Type of place</p>
                        <p className="p-1 px-2 rounded-3xl border border-gray-400 cursor-pointer hover:hover:scale-105 transform duration-300 ease-out transition">Free cancellation</p>
                        <p className="p-1 px-2 rounded-3xl border border-gray-400 hover:border-gray-700 cursor-pointer hover:hover:scale-105 transform duration-300 ease-out transition">More filters</p>
                    </div>
                    <p className="hidden text-lg mt-4 text-gray-600 lg:flex">Review COVID-19 travel restrictions before you book.
                     <a href="https://www.un.org/en/coronavirus" className="text-blue-600 px-2">Learn More</a></p>
                    <hr className="my-4 w- "/>
                

                    <div className="flex flex-col m-2">
                        {
                            searchResult?.map(item => (
                                <InfoCard 
                                    img={item.img}
                                    location={item.location}
                                    title={item.title}
                                    desc={item.description}
                                    star = {item.star}
                                    price={item.price}
                                    total={item.total}
                                />
                            ))
                        }

                    </div>
                </section>

                <section className="hidden lg:inline-flex lg:min-w-[600px]">
                    <Map />
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps(){
    const searchResult = await fetch("https://links.papareact.com/isz")
                                    .then(res => res.json())

    return {
        props: {
            searchResult,
        }
    }
}
