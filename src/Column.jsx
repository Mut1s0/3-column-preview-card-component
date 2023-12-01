import Sedans from "./images/icon-sedans.svg";
import SUVS from "./images/icon-suvs.svg";
import Luxury from "./images/icon-luxury.svg";
import React from 'react'

function Column() {

    return(

        <main className='h-[1200px] flex justify-center items-center'>

            <div className="container max-w-[85%] w-[600px]">

                <section className="py-9 px-9 rounded-t-lg">

                    <header className="pb-8">

                        <img src={Sedans} alt="Sedans" />

                    </header>

                    <div>

                        <h1 className="text-[30px] uppercase pb-6">Sedans</h1>

                        <p className="text-[12px]">Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>

                    </div>

                    <footer className="pt-10">

                        <button className="py-2 px-5 rounded-full text-[12px]">Learn More</button>

                    </footer>

                </section>

                <section className="py-9 px-9">

                    <header className="pb-8">

                        <img src={SUVS} alt="SUVS" />

                    </header>

                    <div>

                        <h1 className="text-[38px] uppercase pb-6">SUVs</h1>

                        <p className="text-[12px]">Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

                    </div>

                    <footer className="pt-10">

                        <button className="py-2 px-5 rounded-full text-[12px]">Learn More</button>

                    </footer>

                </section>

                <section className="py-9 px-9 rounded-b-lg">

                    <header className="pb-8">

                        <img src={Luxury} alt="Luxury" />

                    </header>

                    <div>

                        <h1 className="text-[28px] uppercase pb-6">Luxury</h1>

                        <p className="text-[12px]">Cruise in the best car brands without the bloated prices Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

                    </div>

                    <footer className="pt-10">

                        <button className="py-2 px-5 rounded-full text-[12px]">Learn More</button>

                    </footer>

                </section>

            </div>

        </main>

    )
}

export default Column;