import TestimonyCard from "./testimonyCard"

const Testimonials = () => {
    return (
        <div id="testimonials" className="w-full my-10 mx-auto flex flex-col 
                 md:w-5/6 md:mx-auto">
            <header className="w-full">
                <h2 className="p-2 md:p-5 text-5xl text-slate-50 text-center">TESTIMONIALS</h2>
            </header>

            <div className="w-full mt-5 p-5 flex md:flex-row flex-wrap justify-center xs:justify-normal  gap-6">

                <TestimonyCard
                    name={"Nestor Ramirez"}
                    position={"CEO GeoMaya"}
                    srcImg={"/clients/nestor_ramirez.avif"}
                    testimony={`"... Since we have our web site our sales have increased over 26% regarding previous years. Besides, having it provides confidence to potential customers ..."`}
                    link={"https://geomaya.com.mx"}
                />

                <TestimonyCard
                    name={"Alejandra Moreno"}
                    position={"FincaMex Supervisor"}
                    srcImg={"/clients/alejandra_moreno.avif"}
                    testimony={`"... We used to handle payments using excel spread sheets. The new software displayed a reminder of those clients whose payment was delayed. It is just AMAZING! ..."`}
                    link={"https://fincamex.com.mx"}
                />

                <TestimonyCard
                    name={"Cesar Coronado"}
                    position={"CEO Hypso Oceanography"}
                    srcImg={"/clients/cesar_coronado.avif"}
                    testimony={`"... I used to had several problems with my previous web developer. I met Fernando through his work with the Autonomous University of Baja California and never had a web page issue again ... "`}
                    link={"https://hypso.com.mx"}
                />

                <TestimonyCard
                    name={"Hector Garcia"}
                    position={"Physical oceanography coord"}
                    srcImg={"/clients/hector_garcia.avif"}
                    testimony={`" ... Fernando provided us with an amazing code during several years. Not knowing something wasn't a problem for him, he is a YES kind of person ..."`}
                    link={"http://iio.ens.uabc.mx/investigacion/oceanografia-fisica"}
                />
            </div>

        </div>
    )
}

export default Testimonials
