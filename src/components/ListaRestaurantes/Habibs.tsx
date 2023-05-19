import Image from "next/image";
import Card from "./Card";
import Link from "next/link";

export default function Habibs() {
  return (
    <Link href="">
      <div className="hover:-translate-y-0.5 transition p-2 flex items-center">
        <span>
          <Image
            src="/../public/images/habibs.avif"
            alt="habibs"
            width={140}
            height={100}
            className="rounded-2xl w-28 h-28"
          />
        </span>
        <div>
        <Card 
          titleLocal={"Habib's  • Bom Retiro"} 
          typeDistance={"Esfiha • 0.4km"} 
          minFreight={"20 - 30 min • Grátis"} 
        />
      </div>
    </div>
  </Link>
  )
}
