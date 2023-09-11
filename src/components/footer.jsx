import ImgGmail from "/gmail-logo.png"
import ImgLinked from "/linkedin-logo.png"
import ImgTikTok from "/tiktok-logo.png"


const Footer = () => {
    return (

        <footer
            id="contact"
            className="w-full bg-gradient-to-r from-gray-600 to-slate-400 border-white border-t">

            <div className="container py-10 px-5 h-auto flex md:flex-row flex-col justify-evenly items-center">
                <div className="">
                    <h2 className="text-white text1 md:text-4xl text-2xl font-bold">Fernando Bello Fuentes</h2>
                    <p className="text-white text1 md:text-2xl text-base">Cellphone: +526461979027</p>
                    <p className="text-white text1 md:text-2xl text-base" >email: fernandojbf123@gmail.com</p>
                </div>

                <div className="mt-5 md:mt-0">
                    <div className='flex flex-row justify-center items-center gap-2'>
                        <a
                            href="mailto:fernandojbf123@gmail.com"
                            className="w-[32px]">
                            <img
                                src={ImgGmail}
                                alt="emailtofernando"
                                id="gmail" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/fernando-bello-6b5160250/"
                            className="w-[50px]">
                            <img
                                src={ImgLinked}
                                alt="Linkedin"
                                id="linkedin" />
                        </a>
                        <a
                            href="https://www.tiktok.com/@soyfernandobello"
                            className="w-[32px]">
                            <img
                                src={ImgTikTok}
                                alt="Tiktok"
                                id="tiktok" />
                        </a>
                    </div>
                    <p className='text-white text1 text-sm text-center animate-pulse'>Improving is the key to success</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
