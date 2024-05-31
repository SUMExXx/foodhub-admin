'use client';
import { AddToMenu, UpdateItemForm } from "./buttons";
import MenuGrid from "./MenuGrid";
import { useUpdateStateContext } from "./stateContext";

export const UpdateItemFormWrapper = () =>{

    const { updateButtonClicked, pid, name, type, price, desc, imgUrl, setUpdateButtonStatus, setPid, setName, setType, setPrice, setDesc, setImgUrl } = useUpdateStateContext()

    return(
        <div className="w-full">
            {
                updateButtonClicked? (
                    <UpdateItemForm pid={pid} name={name} type={type} price={price} desc={desc} imgUrl={imgUrl}/>
                ) : (
                <>
                    <AddToMenu/>
                    <MenuGrid/>
                </>
            )
            }
        </div>
    )
}