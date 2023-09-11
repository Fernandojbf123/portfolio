import SmallTransparentCard from "./smallTransparentCard"

const Benefits = () => {
    return (
        <div id="benefits" className="w-full my-10 mx-auto flex flex-col 
                 md:w-5/6 md:mx-auto">
            <header className="w-full">
                <h2 className="p-2 md:p-5 text-4xl md:text-6xl text-slate-50 text-center">WHY HIRING ME?</h2>
            </header>
            
            <div className="container mt-5 p-5 flex md:flex-row flex-wrap justify-center xs:justify-normal gap-2">          
                
                <div className="mt-16">
                <SmallTransparentCard 
                    title={"Assertive & Effective Communication"}
                    benefit={"I ensure a straight communication to understand your needs and explain you alternatives to solve your problem."}
                    srcImg={"/bellodev_ok.webp"}
                />
                </div>

                <div className="mt-16">
                <SmallTransparentCard
                    title={"Fast and Efficient delivery"}
                    benefit={"I plan all activities before starting to code so I can ensure how long will it take to deliver the solution you are requesting"}
                    srcImg={"/bellodev_effort.webp"}
                />
                </div>

                <div className="mt-16">
                <SmallTransparentCard
                    title={"Problem solver"}
                    benefit={"I usually think in different ways to approach and solve problems. As an Engineer I use structural thinking on how to solve problems and get cost-efficient results"}
                    srcImg={"/bellodev_engineer.webp"}
                />
                </div>
                <div className="mt-16">
                <SmallTransparentCard
                    title={"Clean code"}
                    benefit={"I focus a lot in good coding practices so my code can be understandable and easily readable to all levels of seniorities"}
                    srcImg={"/bellodev_clean_code.webp"}
                />
                </div>
                <div className="mt-16">
                <SmallTransparentCard
                    title={"Great designs"}
                    benefit={"I keep an eye on new digital trends to deliver you a marvelous UX/UI experience"}
                    srcImg={"/bellodev_web_surfing.webp"}
                />
                </div>
                <div className="mt-16">
                <SmallTransparentCard
                    title={"Top Tier Techs"}
                    benefit={"Knowledge of top tier & popular tech stacks that are revolutionizing the internet and web development"}
                    srcImg={"/bellodev_top_tier.webp"}
                />
                </div>

            </div>

        </div>
    )
}

export default Benefits
