import Sedans from "./images/icon-sedans.svg";
import SUVS from "./images/icon-suvs.svg";
import Luxury from "./images/icon-luxury.svg";
import React from 'react'

function Column() {

    return(

        <main className='h-[1200px] flex justify-center items-center md:h-screen'>

            <div className="container max-w-[85%] w-[950px] md:flex md:h-[600px]">

                <section className="py-9 px-9 rounded-t-lg md:rounded-tr-none md:rounded-bl-lg md:flex md:flex-col md:justify-between">

                    <header className="pb-8 md:pt-8">

                        <img src={Sedans} alt="Sedans" className="md:w-[90px]" />

                    </header>

                    <div>

                        <h1 className="text-[28px] md:text-[40px] uppercase pb-6">Sedans</h1>

                        <p className="text-[12px] md:text-[17px]">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>

                    </div>

                    <footer className="pt-10 md:pb-12">

                        <button className="py-2 md:py-4 px-5 md:px-8 rounded-full text-[12px] md:text-[14px]">Learn More</button>

                    </footer>

                </section>

                <section className="py-9 px-9 md:flex md:flex-col md:justify-between">

                    <header className="pb-8 md:pt-8">

                        <img src={SUVS} alt="SUVS" className="md:w-[90px]" />

                    </header>

                    <div>

                        <h1 className="text-[28px] md:text-[40px] uppercase pb-6">SUVs</h1>

                        <p className="text-[12px] md:text-[17px]">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

                    </div>

                    <footer className="pt-10 md:pb-12">

                        <button className="py-2 px-5 rounded-full text-[12px] md:py-4 md:px-8 md:text-[14px]">Learn More</button>

                    </footer>

                </section>

                <section className="py-9 px-9 rounded-b-lg md:rounded-bl-none md:rounded-tr-lg md:flex md:flex-col md:justify-between">

                    <header className="pb-8 md:pt-8">

                        <img src={Luxury} alt="Luxury" className="md:w-[90px]" />

                    </header>

                    <div>

                        <h1 className="text-[28px] md:text-[40px] uppercase pb-6">Luxury</h1>

                        <p className="text-[12px] md:text-[17px]">Cruise in the best car brands without the bloated prices Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

                    </div>

                    <footer className="pt-10 md:pb-12">

                        <button className="py-2 px-5 rounded-full text-[12px] md:py-4 md:px-8 md:text-[14px]">Learn More</button>

                    </footer>

                </section>

            </div>

        </main>

    )
}

export default Column;