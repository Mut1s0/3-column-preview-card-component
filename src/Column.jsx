import Sedans from "./images/icon-sedans.svg";
import SUVS from "./images/icon-suvs.svg";
import Luxury from "./images/icon-luxury.svg";
import React from 'react'

function Column() {

    return(

        <main className='h-screen flex justify-center items-center'>

            <div>

                <section>

                    <header>

                        <img src={Sedans} alt="Sedans" />

                    </header>

                    <div>

                        <h1>Sedans</h1>

                        <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.</p>

                    </div>

                    <footer>

                        <button>Learn More</button>

                    </footer>

                </section>

                <section>

                    <header>

                        <img src={SUVS} alt="SUVS" />

                    </header>

                    <div>

                        <h1>SUVs</h1>

                        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.</p>

                    </div>

                    <footer>

                        <button>Learn More</button>

                    </footer>

                </section>

                <section>

                    <header>

                        <img src={Luxury} alt="Luxury" />

                    </header>

                    <div>

                        <h1>Luxury</h1>

                        <p>Cruise in the best car brands without the bloated prices Enjoy the enhanced comfort of a luxury rental and arrive in style.</p>

                    </div>

                    <footer>

                        <button>Learn More</button>

                    </footer>

                </section>

            </div>

        </main>

    )
}

export default Column;