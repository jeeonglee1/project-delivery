import Image from "next/image";

export default function ListaPratos() {
  return (
    <div className="mt-5 pl-[180px]">
      <h2 className="font-bold text-2xl">Frete Grátis</h2>
      <div className="pt-4 pb-4 flex w-ful gap-4">
        <div className="flex flex-col hover:-translate-y-0.5 transition">
          <Image
            className="rounded-xl w-[220px] h-[147px] shadow-cinza-200 shadow-md"
            src="/../public/images/salada.avif"
            alt="salada"
            width={215}
            height={100}
          />
          <p className="flex justify-center items-center pt-2 font-medium">Salada Especial</p>
        </div>

        <div className="flex flex-col rounded-xl hover:-translate-y-0.5 transition">
          <Image
            className="rounded-lg w-[220px] h-[147px] shadow-cinza-200 shadow-md"
            src="/../public/images/salmao.avif"
            alt="salmao"
            width={220}
            height={100}
          />
          <p className="flex justify-center items-center p-2 font-medium">Salmão Grelhado</p>
        </div>

        <div className="flex flex-col rounded-xl hover:-translate-y-0.5 transition">
          <Image
            className="rounded-lg w-[220px] h-[147px] shadow-cinza-200 shadow-md"
            src="/../public/images/bibimbap.avif"
            alt="risoto oriental"
            width={220}
            height={100}
          />
          <p className="flex justify-center items-center p-2 font-medium">Risoto Oriental</p>
        </div>

        <div className="flex flex-col rounded-xl hover:-translate-y-0.5 transition">
          <Image
            className="rounded-lg w-[220px] h-[147px] shadow-cinza-200 shadow-md"
            src="/../public/images/sanduiche2.avif"
            alt="risoto oriental"
            width={220}
            height={100}
          />
          <p className="flex justify-center items-center p-2 font-medium">Sanduiche</p>
        </div>

        <div className="flex flex-col rounded-xl hover:-translate-y-0.5 transition">
          <Image
            className="rounded-lg w-[220px] h-[147px] shadow-cinza-200 shadow-md"
            src="/../public/images/espetinho.avif"
            alt="risoto oriental"
            width={220}
            height={100}
          />
          <p className="flex justify-center items-center p-2 font-medium">Espetinho</p>
        </div>

      </div>
    </div>
  );
}
