import Image from "next/image";

export default function HomeImages() {
  return (
    <div className="pt-20">
      <div className="mt-5 pl-[180px]">
        <h2 className="font-bold text-2xl">Mais Pedidos</h2>
      </div>
      <div className="flex items-center justify-center gap-4 w-full px-10 py-5">
        <Image
          className="rounded-2xl hover:-translate-y-0.5 transition shadow-cinza-200 shadow-md cursor-pointer"
          src="/../public/images/frango.avif"
          alt="frango"
          width={445}
          height={100}
        />
        <Image
          className="rounded-2xl hover:-translate-y-0.5 transition shadow-cinza-200 shadow-md cursor-pointer"
          src="/../public/images/sanduiche.avif"
          alt="sanduiche"
          width={452}
          height={100}
        />
        <Image
          className="rounded-2xl hover:-translate-y-0.5 transition shadow-cinza-200 shadow-md cursor-pointer"
          src="/../public/images/macarrao.jpg"
          alt="macarrao"
          width={226}
          height={100}
        />
      </div>
    </div>
  );
}
