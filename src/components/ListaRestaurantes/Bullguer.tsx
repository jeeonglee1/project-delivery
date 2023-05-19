import Image from "next/image"
import Card from "./Card";
import Link from "next/link";

export default function Bullguer() {
  return (
    <Link href="">      
      <div className="hover:-translate-y-0.5 transition p-2 flex items-center">
        <span>
          <Image
            src="/../public/images/bullguer.png"
            alt="bullguer"
            width={130}
            height={100}
            className="rounded-2xl w-28 h-28"
          />
        </span>
        <div>
          <Card
            titleLocal={"Bullguer • Barra Funda"}
            typeDistance={"Lanche • 2.4km"}
            minFreight={"20 - 30 min • R$14,99"}
            />
        </div>
      </div>
    </Link>
  );
}
