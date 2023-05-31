interface IBotao{
    priceModal: number
}

export default function Botao({priceModal}: IBotao) {
    return(
        <div className="flex ">
            <button className=" flex justify-between items-center bg-vermelho px-5 h-12 w-60 text-branco font-medium rounded-md">
                    Adicionar
                <span>R$ <span>{priceModal}</span></span>
            </button>
        </div>
    )
}