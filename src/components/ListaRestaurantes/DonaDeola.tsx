import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

export default function Habibs() {
  return (
    <Link href="">
      <div className="hover:-translate-y-0.5 transition p-2 flex items-center">
        <span>
          <Image
            src="/../public/images/donadeola.png"
            alt="habibs"
            width={130}
            height={100}
            className="rounded-2xl w-28 h-28"
            />
        </span>
        <div>
        <Card 
          titleLocal="Dona Deôla • Higienópolis" 
          typeDistance="Coreana • 0.9km" 
          minFreight="15 - 20 min • Grátis"
          />
        </div>
      </div>
    </Link>
  )
}
