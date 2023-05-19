import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

export default function ChinaInBox() {
  return (
    <Link href="">
      <div className="hover:-translate-y-0.5 transition p-2 flex items-center">
        <span>
          <Image
            src="/../public/images/chinainbox.avif"
            alt="habibs"
            width={130}
            height={100}
            className="rounded-2xl w-28 h-28"
            />
        </span>
        <div>
          <Card 
            titleLocal={"China in Box • Santana"} 
            typeDistance={"Chinesa • 1.2km"} 
            minFreight={"25 - 35 min • R$9,99"} 
            />
        </div>
      </div>
    </Link>
  )
}