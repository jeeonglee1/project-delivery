interface IModal {
    isOpen: boolean;
    setOpen: (isOpen: boolean) => void;
}

export default function Modal({isOpen, setOpen}: IModal) {
    if (isOpen) {
        return(
            <div className="fixed inset-0 flex justify-center items-center shadow z-50 bg-modal">
                <div className=" fixed flex-columm justify-center w-[1200px] h-[580px] bg-branco p-4 rounded">
                    <h1 className="flex justify-center items-center">Título</h1>
                    <button onClick={()=> setOpen(!isOpen)} className="absolute top-2 right-2 p-1 rounded ">X</button>
                </div>
            </div>
        );
    } else {
        return(
            <></>
        )
    }
}