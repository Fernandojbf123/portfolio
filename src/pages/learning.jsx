
const Learning = () => {
  return (
    <div id="learning" className='mx-auto w-full min-h-screen h-auto'>
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
                <img className="md:w-1/5" src="bellodev_learning.webp" alt="decoration image" />
                <div className='px-3 md:w-2/5 text-justify text-slate-200'> 
                    <p className=''>{`Hey there! Si llegaste hasta acá seguro es porque quieres aprender un poco. Así que esta sección la hice en español para que le saques el máximo provecho`}</p>
                    <p className=' mt-5'>{`Estaré publicando un par de videos semanales donde resuelvo pruebas técnicas de React o Javascript de diferentes niveles de dificultad. La gran mayoría de estas pruebas ténicas son reales y me las han hecho a  mi o a alguno de mis amigos`}</p>
                    <p className=' mt-5'>{`Si tienes alguna duda sobre cómo resolví algún ejercicio, puedes enviarme un whatsapp o ubicarme por linkedIn.`}</p>
                </div>
            </section>

            <section className='container p-3 mt-5 mx-auto flex flex-co flex-wrap items-center justify-center gap-5 mb-10 [&>iframe]:border-slate-200 [&>iframe]:border-2  [&>iframe]:w-[600px] [&>iframe]:aspect-video'>
                
                {/* Certificación HackerRank Js intermediate */}
                <iframe src="https://www.youtube.com/embed/weUxxI6HprA?si=29aLsYss-8Kld1QA" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>

                {/* Certificación HackerRank React basic */}
                <iframe src="https://www.youtube.com/embed/cSaqYuIDIdY?si=xgY0FJV9EwcJJ1Tu" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                
                {/* hacer un canvas */}
                <iframe src="https://www.youtube.com/embed/F-ykl1ZK6b0?si=jQfHk_9ONQdIQKPh" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>
                
                {/* jest */}
                <iframe 
                    src="https://www.youtube.com/embed/14ad7H8TrJs?si=zY8nct1u8YdVupOy" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen
                ></iframe>
                
                {/* hacer circulos */}
                <iframe src="https://www.youtube.com/embed/XeHV3aOpQhY?si=uWAv9f9T0eJfLTL2" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen>
                </iframe>

                
            </section>
    </div>
  )
}

export default Learning
