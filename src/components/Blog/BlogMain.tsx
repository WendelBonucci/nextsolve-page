
import ContentBlog from "./ContentBlog"
import Messenger from "@/utils/Loanding/Messeger"
import Loading from "@/utils/Loanding/Loanding"

export default function BlogMain() {
    return (
        <>
            <Loading />
            <main className="">
                <ContentBlog />
                <Messenger />
            </main>
        </>
    )
}