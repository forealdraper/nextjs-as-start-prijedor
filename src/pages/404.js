import Wrap from "@/components/Wrap"
import Link from "next/link"

export default function Custom404() {
    return (
        <>
        <div className="border-t-2 border-secondary w-full"></div>
        <Wrap extendClassName={"flex flex-col justify-center items-center text-center"}>
            <h1 className="text-[50px] lg:text-[100px] my-8 lg:mt-12 text-red-900 font-bold">ERROR 404</h1>
            <p className="text-[20px] lg:text-[50px] text-red-900 font-bold">Desila se greška. Kontaktirajte administratora</p>
            <Link href="/" className="text-[20px] lg:text-[50px] underline my-8 lg:my-12 text-blue-900 font-bold">NAZAD NA POČETNU</Link>
        </Wrap>
        </>
    )
}