import ContentServiceInitial from "./sections/ContentServiceInitial"
import CardsService from "./sections/CardsService"
import FAQSession from "../FAQ/FAQ"

export default function Service() {
    return (
        <main className='w-full h-auto bg-black'>
            <ContentServiceInitial />
            <CardsService />
            <FAQSession />
        </main>
    )
}
