'use client';
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { contents } from "@/data/website";
import { useStateContext, useUpdateStateContext } from "./stateContext";

import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

interface EditUpdateButtonProps{
    pid: string
    name: string,
    type: string,
    price: number,
    desc: string,
    imgUrl: string
}

export const EditUpdateButton= ({pid, name, type, price, desc, imgUrl}: EditUpdateButtonProps) =>{

    const router = useRouter()

    const { updateButtonClicked, setUpdateButtonStatus, setPid, setName, setType, setPrice, setDesc, setImgUrl } = useUpdateStateContext()

    const editItem = () => {
        setPid(pid)
        setName(name)
        setType(type)
        setPrice(price)
        setDesc(desc)
        setImgUrl(imgUrl)
        setUpdateButtonStatus(true)
    }

    return(
        <button className='w-[20px] h-[20px] rounded-md flex justify-center items-center bg-white hover:bg-[#C27A29] ease-in-out duration-300 hover:text-white' onClick={editItem}>
            {<EditRoundedIcon sx={{fontSize: 16, color: '#C27A29'}} className='ease-in-out duration-300 hover:text-white'/>}
        </button>
    )
}

export const DeleteUpdateButton= ({pid, name, type, price, desc, imgUrl}: EditUpdateButtonProps) =>{

    const router = useRouter()

    const [warning, setWarning] = useState(false)

    const deleteItem = () => {
        setWarning(true)
    }

    const confirmDeleteItem = async () => {
        const formData = new FormData()
        formData.append('pid', pid)

        await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/delete`, {
            method: 'DELETE',
            body: formData
        }).then((result) => {
            if(result.ok){
                alert('Item has been deleted')
                window.location.reload()
            }else {
                alert("failed to delete")
                window.location.reload()
            }
            setWarning(false)
        }); 
    }

    const cancelDeleteItem = () => {
        setWarning(false)
        window.location.reload()
    }

    return(
        <button className='w-[20px] h-[20px] rounded-md flex justify-center items-center bg-white hover:bg-red-600 ease-in-out duration-300 hover:text-white' onClick={deleteItem}>
            {<DeleteRoundedIcon sx={{fontSize: 16, color: 'red'}} className='ease-in-out duration-300 hover:text-white'/>}
            {
                warning? (
                    <div className="absolute w-full h-full top-0 left-0 z-20 flex flex-col justify-center items-center md:gap-4 bg-black text-white bg-opacity-50">
                        <div className="w-[600px] h-[200px] flex flex-col md:gap-4 items-center justify-center rounded-3xl bg-black bg-opacity-60">
                            <h1>{`Are you sure to delete ${name} from the menu?`}</h1>
                            <div className="flex md:gap-4 justify-between">
                                <button className="z-50 rounded-xl px-6 py-2 bg-green-700 text-white" onClick={cancelDeleteItem}>Cancel</button>
                                <button className="z-50 rounded-xl px-6 py-2 bg-red-700 text-white" onClick={confirmDeleteItem}>Confirm</button>
                            </div>
                        </div>
                    </div>
                ): <></>
            }
        </button>
    )
}