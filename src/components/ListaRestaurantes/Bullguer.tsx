import Image from "next/image";

export default function Bullguer() {
  return (
    <div className="flex hover:translate-y-0.5 transition cursor-pointer">
      <Image
        src="/../public/images/bullguer.png"
        alt="bullguer"
        width={130}
        height={100}
        className="rounded-2xl w-30"
      />
      <div className="flex flex-col p-2">
        <h4 className="font-semibold text-preto pt-4">Bullguer - República</h4>
        <p className="text-sm text-cinza-200 pt-0.5">Lanches • 1.9km</p>
        <p className="text-cinza-200 text-sm pt-0.5">37-47 min • R$14,99</p>
      </div>
    </div>
  );
}
