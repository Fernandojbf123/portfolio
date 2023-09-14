import LinkToProjectDemo from '../components/linkToProjectDemo'
import AnimateComponent from '../components/animateComponent'
import ContactMe from '../components/contactMe'

const Projects = () => {
    return (
        <div id="projects" className='mx-auto w-full min-h-screen h-auto'>
            <header className="mt-32 py-14 mx-auto px-3 h-full md:min-h-[400px] text-slate-300 flex flex-row gap-4 bg-[url('/projects_hero.avif')] bg-cover bg-no-repeat">
                <div 
                    className='container mx-auto p-5 md:w-1/5 md:min-w-[350px] md:mx-60 rounded-lg '>
                    <h1 className='text-5xl font-bold text-slate-500'>{`Projects`}</h1>
                    <p className='text-3xl font-bold text-slate-500'>{`web page design`}</p>
                    <p className='text-3xl font-bold text-slate-500'>{`web applications`}</p>
                    <h2 className='text-[--quaternary] font-bold'>{`@bellodev`}</h2>
                </div>
            </header>


            <section className='w-full px-3 py-5 m-5 mx-auto border-b flex md:flex-row flex-col justify-center items-center'>
                <img className="md:w-1/5" src="bellodev_web_surfing.webp" alt="decoration image" />
                <div className='px-3 md:w-2/5 text-justify text-slate-200'> 
                    <p className=''>{`The following demos of web pages, web applications and games I've built show my versatility and love for coding. I love minimalistic designs where less is more; focusing in making the user experience navigation smooth and   enjoyable`}</p>
                    <p className=' mt-5'>{`My favorite frameworks this far are NextJS and Tailwind CSS because they make easy building all kind of web applications, particularly fullstack applications`}</p>
                </div>
            </section>

            <section className='container p-3 mt-5 mx-auto flex flex-co flex-wrap items-center justify-center gap-5 mb-10'>
                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"https://foodserviceapp-production.up.railway.app/"}
                        srcIcon={"food_service_icon.gif"}
                        title={"Food Service App:Customer"}
                        description={`Fullstack application for ordering food in a restaurant. If you want to check ADMIN side go foodserviceapp-production.up.railway.app/admin. Open both links and check realtime changes when placing orders`}
                        techTags={["nextjs", "tailwind css", "prisma", "mysql", "swr", "toastify", "customHooks", "axios"]}
                        srcImg={"food_service_customer_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"https://fantastic-torrone-ced0f5.netlify.app"}
                        srcIcon={"drink_receipt_icon.gif"}
                        title={"Drink receipts searcher"}
                        description={"Frontend application that connects to an API to search for receipts to prepare drinks according. Type a beverage name (i.e., Tekila, Whisky) and a category (i.e., shake, shot, cocktail) a let this app to do the rest"}
                        techTags={["react","bootstrap","axios","customHooks","contextAPI"]}
                        srcImg={"beverage_searcher.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"https://graceful-mandazi-ffe61f.netlify.app/"}
                        srcIcon={"crypto_quoter_icon.gif"}
                        title={"Crypto quoter"}
                        description={"Get realtime time crypto currency market prices for different currencies"}
                        techTags={["react", "tailwind css", "fetch api", "customHooks"]}
                        srcImg={"cryto_quoter_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"https://geomaya.com.mx"}
                        srcIcon={"web_page_icon.gif"}
                        title={"Client web site: Geomaya"}
                        description={"Enviromental consultant's web page with sobber, minimalistic and clean design"}
                        techTags={["wordpress", "cpanel"]}
                        srcImg={"geomaya_web_page_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"https://hypso.com.mx"}
                        srcIcon={"web_page_icon.gif"}
                        title={"Client web site: Hypso"}
                        description={"Web site of an Oceanographic Engineering company. I used blue, teal, white pallet color with a clean and minimalistic design to ensure a great experience that dive him into the ocean"}
                        techTags={["wordpress", "cpanel"]}
                        srcImg={"hypso_web_page_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"/notavailabe"}
                        srcIcon={"tesla_clone_icon.gif"}
                        title={"Tesla's web site clone"}
                        description={"A non pixel perfect clone of Tesla's web site. Made to show that a web site with several videos can have a great performance"}
                        techTags={["react", "tailwind css"]}
                        srcImg={"tesla_clone.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"https://guitar-la-remix-5303b54d7-fernandojbf123.vercel.app/index"}
                        srcIcon={"guitar_la_icon.gif"}
                        title={"GuitarLA: e-commerce"}
                        description={"This web site includes an index a blog section and an e-commerce. Contact me first to see it working since the backend server deletes all the data bases every 3 month and it also turns off when prolonged inactivity"}
                        techTags={["Remix-run", "tailwind", "strapi", "clodinary", "mongoDB"]}
                        srcImg={"guitarla_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"https://task-better-weigh.netlify.app/"}
                        srcIcon={"better_weight_icon.gif"}
                        title={"Better Weight web page"}
                        description={"You can have a healthy lifestyle and a proper diet. This is an open source project web site project I'm cooperating with. The owner of this project is @AnicMarko9 who's an engineer from Serbia"}
                        techTags={["react","tailwind css"]}
                        srcImg={"better_weight_web_page_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"https://splendorous-mochi-4a52eb.netlify.app/"}
                        srcIcon={"fitness_app_icon.gif"}
                        title={"wack a mole game"}
                        description={"Feeling with anger or anxiety? Just wack a mole for fun. Wack them all before time runs out. Bet that you cant hit more than 20 in pro level ;)"}
                        techTags={["React", "CSS"]}
                        srcImg={"wack_a_mole_game.avif"}
                    />
                </AnimateComponent>

            </section>

            <ContactMe />
        </div>
    )
}

export default Projects
