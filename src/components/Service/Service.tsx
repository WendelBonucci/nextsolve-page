import ContentServiceInitial from "./sections/ContentServiceInitial"
import CardsService from "./sections/CardsService"

export default function Service() {
    return (
        <main className='w-full h-auto bg-black'>
            <ContentServiceInitial />
            <CardsService />
        </main>
    )
}
