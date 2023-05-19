interface CardProps {
  titleLocal: string;
  typeDistance: string;
  minFreight: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="flex flex-col p-2 h-28 w-56">
      <h4 className="font-semibold text-preto pt-4">
        {props.titleLocal}
      </h4>
      <p className="text-sm text-cinza-200 pt-0.5">
        {props.typeDistance}
      </p>
      <p className="text-cinza-200 text-sm pt-0.5">
        {props.minFreight}
      </p>
    </div>
  );
}
