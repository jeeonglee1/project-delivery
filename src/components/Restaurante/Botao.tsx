interface IBotao{
    priceModal?: number;
    label: string
    currency?: string;
}

export default function Botao({priceModal, label, currency}: IBotao) {


    return(
        <div className="flex ">
            <button className=" flex justify-between items-center bg-vermelho px-5 h-12 w-60 text-branco font-medium rounded-md">
                    {label}
                <span>{currency}<span>{priceModal}</span></span>
            </button>
        </div>
    )
}