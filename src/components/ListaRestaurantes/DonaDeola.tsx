import Image from "next/image";

export default function DonaDeola() {
  return (
    <div className="flex hover:translate-y-0.5 transition cursor-pointer">
      <Image
        src="/../public/images/donadeola.png"
        alt="bullguer"
        width={130}
        height={100}
        className="rounded-2xl w-30"
      />
      <div className="flex flex-col p-2">
        <h4 className="font-semibold text-preto pt-4">Dona Deôla - Higienópolis</h4>
        <p className="text-sm text-cinza-200 pt-0.5">Padaria • 2.2km</p>
        <p className="text-cinza-200 text-sm pt-0.5">39-45 min • R$15,99</p>
      </div>
    </div>
  );
}
