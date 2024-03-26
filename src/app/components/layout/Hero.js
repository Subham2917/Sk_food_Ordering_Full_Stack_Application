import Image from "next/image"
import Right from "./icon/Right"

export default function Hero() {
    return(
        <section className="grid grid-cols-2">
            <div className="py-12">
                <h1 className="text-4xl font-semibold">Everything <br /> is better<br /> with a&nbsp;<span className="text-primary">Pizza</span></h1>
                <p className="my-4 text-gray-500">
                  A slice of pure joy, where flavors waltz on taste buds, making every pizza a delicious sonnet to the art of indulgence.
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="bg-primary uppercase flex gap-2 text-white px-4 py-2 rounded-full">Order Now
                      <Right />
                    </button>
                    <button className="flex gap-2 py-2 text-gray-600 border-0 font-semibold">Learn more
                        <Right />
                    </button>
                </div>
            </div>            
            <div className="relative hidden md:block">
                <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
            </div>
            
        </section>
    )
}