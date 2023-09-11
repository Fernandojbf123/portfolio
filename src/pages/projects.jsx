import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share'
import LinkToProjectDemo from '../components/linkToProjectDemo'
import AnimateComponent from '../components/animateComponent'

const Projects = () => {
    return (
        <div id="top" className='mx-auto w-full min-h-screen h-auto'>
            <header className="mt-32 py-14 mx-auto px-3 h-full text-slate-300 flex flex-row gap-4 bg-[url('projects_hero.avif')] bg-cover bg-no-repeat">
                <div className='container mx-auto p-5 md:w-1/5 md:min-w-[350px] md:mx-60 rounded-lg '>
                    <h1 className='text-5xl font-bold text-slate-500'>{`Projects`}</h1>
                    <p className='text-3xl font-bold text-slate-500'>{`web page design`}</p>
                    <p className='text-3xl font-bold text-slate-500'>{`web applications`}</p>
                    <h2 className='text-[--quaternary] font-bold'>{`@bellodev`}</h2>
                    <div className='mt-3 flex flex-row gap-2'>
                        <div className='hover:scale-110 active:scale-[98%]'>
                            <FacebookShareButton url='https://www.bellodev.com' quote="This web page is awesome">
                                {<FacebookIcon size={50} round="true" />}
                            </FacebookShareButton>
                        </div>
                        <div className='hover:scale-110 active:scale-[98%]'>
                            <TwitterShareButton url='https://www.bellodev.com
Hey, this is a great developer we should be working with :D ' >
                                {<TwitterIcon size={50} round="true" />}
                            </TwitterShareButton>
                        </div>
                        <div className='hover:scale-110 active:scale-[98%]'>
                            <WhatsappShareButton url='https://www.bellodev.com 
Hey, this is a great developer we should be working with :D ' >
                                {<WhatsappIcon size={50} round="true" />}
                            </WhatsappShareButton>
                        </div>
                    </div>
                    <p className="text-sm animate-pulse">{`Thanks for sharing`}</p>
                </div>
            </header>


            <section className='w-full px-3 py-5 m-5 mx-auto border-b flex md:flex-row flex-col justify-center items-center'>
                <img className="md:w-1/5" src="bellodev_web_surfing.webp" alt="decoration image" />
                <p className='px-3 md:w-2/5 text-justify text-slate-200 '>{`The following demos of web pages, web applications and games I've built show my versatility and love for coding. I try to use minimalistic designs where less is more; focusing in making the user experience a smooth and enjoyable navigation`}</p>
            </section>

            <section className='container p-3 mt-5 mx-auto flex flex-co flex-wrap items-center justify-center gap-5 mb-10'>
                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"/notavailabe"}
                        srcIcon={"food_service_icon.gif"}
                        title={"Food Service App:Customer"}
                        description={"Fullstack application for ordering food in a restaurant. This is the CUSTOMER SIDE of this project. You can run both, customer and admin (↓ link), to experience realtime updates in food orders"}
                        techTags={["nextjs", "tailwind css", "prisma", "mysql", "swr", "toastify", "customHooks", "axios"]}
                        srcImg={"food_service_customer_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"/notavailabe"}
                        srcIcon={"food_service_icon.gif"}
                        title={"Food Service App:Admin"}
                        description={"Fullstack application for ordering food in a restaurant. This is the ADMIN SIDE of this project. You can run both, customer (↑ link) and admin, to experience realtime updates in food orders"}
                        techTags={["nextjs", "tailwind css", "prisma", "mysql", "swr", "toastify", "customHooks", "axios"]}
                        srcImg={"guitarla_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"/notavailabe"}
                        srcIcon={"crypto_quoter_icon.gif"}
                        title={"Crypto quoter"}
                        description={"Get realtime time crypto currency market prices for different currencies"}
                        techTags={["react", "tailwind css", "fetch api", "customHooks"]}
                        srcImg={"cryto_quoter_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"/notavailabe"}
                        srcIcon={"web_page_icon.gif"}
                        title={"Client web site: Geomaya"}
                        description={"Enviromental consultant's web page with sobber, minimalistic and clean design"}
                        techTags={["wordpress", "cpanel"]}
                        srcImg={"geomaya_web_page_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"/notavailabe"}
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
                        href={"/notavailabe"}
                        srcIcon={"guitar_la_icon.gif"}
                        title={"GuitarLA web site, blog & e-commerce"}
                        description={"This web site includes an index a blog section and an e-commerce. In order to see it fully working, please contact me first. The free backend server deletes all the data base (i.e., blog post and products) every 3 month and it also turns off when prolonged inactivity"}
                        techTags={["Remix-run", "tailwind", "strapi", "clodinary", "mongoDB"]}
                        srcImg={"guitarla_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"/notavailabe"}
                        srcIcon={"better_weight_icon.gif"}
                        title={"Better Weight web page"}
                        description={"This web site includes an index a blog section and an e-commerce. In order to see it fully working, please contact me first. The free backend server deletes all the data base (i.e., blog post and products) every 3 month and it also turns off when prolonged inactivity"}
                        techTags={["react","tailwind css"]}
                        srcImg={"better_weight_web_page_demo.avif"}
                    />
                </AnimateComponent>

                <AnimateComponent>
                    <LinkToProjectDemo
                        href={"/notavailabe"}
                        srcIcon={"fitness_app_icon.gif"}
                        title={"wack a mole game"}
                        description={"Feeling with anger or anxiety? Just wack a mole for fun. Wack them all before time runs out."}
                        techTags={["React", "CSS"]}
                        srcImg={"wack_a_mole_game.avif"}
                    />
                </AnimateComponent>



            </section>
        </div>
    )
}

export default Projects
