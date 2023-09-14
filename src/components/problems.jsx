import SmallSlateCard from "./smallSlateCard"

const Problems = () => {
  return (
    <div id="problems" className="w-full my-10 mx-auto flex flex-col 
                                 md:w-3/5 md:mx-auto">
        <header className="w-full">
            <h2 className="p-2 md:p-5 text-6xl text-slate-50 text-center">PROBLEMS?</h2>
        </header>

        <div className="container mt-5 p-5 flex md:flex-row flex-wrap justify-center xs:justify-normal  gap-6">          
        
        <SmallSlateCard 
            title={"Need more sales"}
            srcImg={"/solutions/increase_sales.gif"}
            altText={"need more sales"}
            caption={`Your business is not growing as you want because you don't have online presence with a web page`}
          />

          <SmallSlateCard 
            title={"Bugs in your web page"}
            srcImg={"/solutions/web_debugging.gif"}
            altText={"Bugs in your web page"}
            caption={`First impressions are important and the bugs in your web page are making you lose potential clients`}
          />

          <SmallSlateCard 
            title={"Custom software needs"}
            srcImg={"/solutions/custom_software.gif"}
            altText={"Custom software needs"}
            caption={`You want to be different from other companies and want to give your clients or employees a great experience of working with you`}
          />
        

        <SmallSlateCard 
            title={"IT support expensive or inefficient"}
            srcImg={"/solutions/bad_customer_support.avif"}
            altText={"IT support expensive or inefficient"}
            caption={`Requesting changes in your web page has become expensive or requested changes are late or never arrive`}
          />
      
      </div>
    </div>
  )
}

export default Problems
