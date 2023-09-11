import ClientList from "../components/clientList"
import Hero from "../components/hero"
import Problems from "../components/problems"
import Benefits from "../components/benefits"
import Testimonials from "../components/testimonials"

function Index() {

  return (
    <main className="">
        <Hero />
        <ClientList />

        <Problems />

        <Benefits />

        <Testimonials />

    </main>
  )
}

export default Index
