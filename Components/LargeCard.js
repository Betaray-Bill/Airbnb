
function LargeCard({ img, desc, btn_desc, title }) {
    return (
        <section className="relative rounded-2xl mt-8 h-96">
            
            <div classname="relative h-48 min-w-[300px]">
                <img src={img} alt="" srcset=""  className="rounded-2xl w-full bg-contain h-72 md:col-span-full md:h-96"/>
            </div>

            <div className="absolute top-8 left-12 md:top-12 lg:top-32 lg:left-32">
                <h3 className="text-2xl lg:text-4xl mb-3 w-72 font-semibold">{title}</h3>
                <p className="text-xl w-56">{desc}</p>

                <button className="text-sm text-white bg-gray-900 px-4 py-4 rounded-lg mt-5 hover:bg-gray-700 hover:scale-105 transition tranform duration-200 ease-out">{btn_desc}</button>
            </div>
        </section>
    )
}

export default LargeCard
