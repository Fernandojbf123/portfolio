import { useState } from "react"

const ContactMe = () => {


    const [msg,setMsg] = useState("Hi Fernando! I'm reaching out because I'd like to talk with you.")

    function handleSubmit (e) {
        e.preventDefault();
        if (msg.length<5){
            alert("You must write a real message in order to contact me")
            return
        }
        let text = msg.replaceAll(" ","%20")
        let whatsApp = `https://web.whatsapp.com/send?phone=526461979027&text=${text}&app_absent=1&send=1`
        window.open(whatsApp)
    }

  return (
      <section className="w-full px-3 mt-5 mb-10 mx-auto flex md:flex-row flex-col justify-center items-center">
          <img className="md:w-1/5" src="bellodev_celphone.webp" alt="decoration image" />
          <form
            className='px-3 md:w-2/5 flex flex-col justify-between text-slate-800'
            onSubmit={handleSubmit}>
                <textarea 
                    name="msg" 
                    id="msg" 
                    cols="30" 
                    rows="10"
                    className="p-2 max-h-[250px] max-w-[350px] md:max-w-[600px]"
                    onChange={e=>setMsg( () => e.target.value)}
                    value={msg}
                ></textarea>
                <button
                    type="submit"
                    className={`mt-3 px-5 py-2  max-w-[200px] font-bold text-[--quaternary] border-slate-400 border bg-slate-800 hover:bg-[--tertiary] active:bg-[--secondary] active:scale-95`}
                >{`send`}<span className="text-[--tertiary]">{`Message`}</span>

                </button>
                            
          </form>
      </section>
  )
}

export default ContactMe
