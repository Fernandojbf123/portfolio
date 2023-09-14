import ClientList from "../components/clientList"
import Hero from "../components/hero"
import Problems from "../components/problems"
import Benefits from "../components/benefits"
import Testimonials from "../components/testimonials"
import ContactMe from "../components/contactMe"

function Index() {

  return (
    <main className="">
        <Hero />
        <ClientList />

        <Problems />

        <Benefits />

        <Testimonials />

        <ContactMe />

    </main>
  )
}

export default Index
