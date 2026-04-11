import InitialContact from "./InitialContact"
import FormContact from "./FormContact"
import Loading from "@/utils/Loanding/Loanding";
import Messenger from "@/utils/Loanding/Messeger"


export default function ContactMain() {
  return (
    <>
      <Loading />
      <section className="w-full min-h-screen bg-[#050505] flex flex-col items-center justify-center">
        <InitialContact />
        <FormContact />
        <Messenger />
      </section>
    </>
  )
}
