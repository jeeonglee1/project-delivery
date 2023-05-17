import Image from "next/image";

export default function Salada() {
  return (
    <div className="flex flex-col hover:-translate-y-0.5 transition cursor-pointer">
      <Image
        className="rounded-xl w-[220px] h-[147px] shadow-cinza-200 shadow-md"
        src="/../public/images/salada.avif"
        alt="salada"
        width={215}
        height={100}
      />
      <p className="flex justify-center items-center pt-2 font-medium">
        Salada Especial
      </p>
    </div>
  );
}
