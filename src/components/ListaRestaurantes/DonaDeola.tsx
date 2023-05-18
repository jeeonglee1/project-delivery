import Image from "next/image";

export default function DonaDeola() {
  return (
    <div className="flex cursor-pointer">
      <Image
        src="/../public/images/donadeola.png"
        alt="dona deola"
        width={130}
        height={100}
        className="rounded-2xl w-36 h-40"
      />
    </div>
  );
}
