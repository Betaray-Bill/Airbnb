import Head from 'next/head'
import LargeCard from '../Components/LargeCard'
import MediumCar from '../Components/MediumCar'
import SmallCard from '../Components/SmallCard'
import Hero from '../Layout/Hero'

export default function Home({ exploreData, CardData }) {
  return (
    <div className="overflow-x-hidden h-max bg-gray-100">
      <Head>
        <title>Airbnb-Clone Meow</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <Hero />
    
    <main className="max-w-7xl mx-auto mt-4 p-2 px-4 rounded-2xl shadow-2xl bg-white">

      <section className="pt-6">
        <h2 className="text-2xl md:text-4xl font-semibold pb-5 mt-2">Explore Nearby Paradise</h2> 
        {/* Pulling Data from Server - API end to end communication */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {
            exploreData?.map(item => (
              <SmallCard 
                key={item.img}
                img={item.img}
                distance={item.distance}
                location={item.location}
              />
            ))
          }
        </div>
      </section>

      <LargeCard 
        className="mt-4"
        title="The Greatest Out Door"
        img="https://a0.muscache.com/im/pictures/258b129d-d1cd-48b5-86d4-86206c13ebf7.jpg?im_w=1440"
        desc="Not sure where to go? Perfect"
        btn_desc="I'm Flexible"
      />

      <section>
        <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3" styl={{padding:"20px"}}>
            {
              CardData?.map(item => (
                <MediumCar 
                  key={item.img}
                  img={item.img}
                  title={item.title}

                />
              ))
            }
          </div>
      
      </section>

      <LargeCard 
        img="https://a0.muscache.com/im/pictures/2595054e-d1d9-4fde-8046-58d51fcb3164.jpg?im_w=1440"
        title="Try Hosting"
        desc="Earn extra income and unlock new opportunities by sharing your space"
        btn_desc="I'm Flexible"
      />

    </main>

    </div>
  )
}

export async function getStaticProps(){
  const exploreData = await fetch('https://links.papareact.com/pyp')
                            .then(res => res.json())

  const CardData = await fetch('https://links.papareact.com/zp1')
                            .then(res => res.json())                         
  return {  
    props: {
      exploreData,
      CardData
    }
  }
} 