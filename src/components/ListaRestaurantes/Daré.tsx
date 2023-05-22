import Card from "./Card";
import Link from "next/link";

export default function Dare() {
  return (
    <Link href={""}>
      <div className="hover:-translate-y-0.5 transition flex items-center">
        <div>
        <Card 
            titleLocal={"Daré  • Bom Retiro"}
            typeDistance={"Coreana • 0.4km"}
            minFreight={"20 - 30 min • R$6,99"}
            imageURL={"/../public/images/dare.jpg"}
        />
      </div>
    </div>
  </Link>
  )
}