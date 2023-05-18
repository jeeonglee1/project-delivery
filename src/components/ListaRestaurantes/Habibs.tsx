import Image from "next/image";

export default function PizzaHut() {
  return (
    <div className="flex cursor-pointer">
      <Image
        src="/../public/images/habibs.avif"
        alt="habibs"
        width={140}
        height={100}
        className="rounded-2xl w-36 h-40"
      />
    </div>
  );
}
