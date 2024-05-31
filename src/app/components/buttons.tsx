'use client';
import Image from "next/image";
import { useRouter, usePathname } from 'next/navigation';
import { useState, ChangeEvent, FormEvent } from 'react';

import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

import { contents } from "@/data/website";
import { useStateContext, useUpdateStateContext } from "./stateContext";

interface RedirectButtonProps{
    text: string,
    icon: React.ReactNode,
    redirect: string
}

export const RedirectButton= ({text, icon, redirect}: RedirectButtonProps) =>{

    const router = useRouter();
    const pathname = usePathname();

    const redirectClick = () =>{
        router.push(redirect);
    }

    return(
        <button className="group flex items-center rounded-xl ease-in-out hover:bg-customRed duration-300 md:p-4 md:gap-4 w-[160px]" onClick={redirectClick} style={{backgroundColor: pathname==redirect? '#F00000' : '', color: pathname==redirect? '#FFFFFF' : '#000000'}}>
            {icon}
            <h4 className="font-bold text-inherit group-hover:text-customGrey ease-in-out duration-300">{text}</h4>
        </button>
    )
}

export const AddToMenu = () =>{

    const { buttonClicked, setButtonStatus } = useStateContext()
 
    const addNewForm = () =>{
        setButtonStatus(true)
    }

    const cancelForm = () =>{
        setButtonStatus(false)
    }

    return( 
        buttonClicked? (
            <div className="flex flex-col items-center justify-center w-full md:gap-4 p-8">
                <AddToMenuForm/>
                <button className="w-full px-3 py-2 border rounded-md bg-red-800 text-white" onClick={cancelForm}>Cancel</button>
            </div>
        ) : (
            <div className="flex w-full justify-center items-center p-2">
                <button className="group w-full flex justify-center items-center rounded-xl ease-in-out bg-customRed duration-300 hover:bg-[#CA1C15] md:p-4 md:gap-4" onClick={addNewForm}>
                    <AddRoundedIcon className="text-customGrey ease-in-out duration-300"/>
                    <h4 className="font-black text-customGrey ease-in-out duration-300">{`ADD`}</h4>
                </button>
            </div>
        )
    )
}

const AddToMenuForm = () =>{

    const router = useRouter()

    const [selImage, setSelImage] = useState<File | null>(null);

    const [selName, setSelName] = useState<string>('');

    const [selDesc, setSelDesc] = useState<string>('');

    const [selType, setSelType] = useState<string>('');

    const [selPrice, setSelPrice] = useState<string>('');

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setSelImage(file)
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setSelType(value)
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSelPrice(value)
    };

    const handleDescChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        setSelDesc(value)
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        setSelName(value)
    };

    const [spinnerActive, setSpinnerState] = useState(false)

    const { buttonClicked, setButtonStatus } = useStateContext()

    const showSuccess = () =>{
        setSpinnerState(false)
        setButtonStatus(false)
        window.location.reload();
    }
 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 

        if(selName.length >= 3 && selDesc.length >= 16 && parseInt(selPrice, 10) >= 5 && parseInt(selPrice, 10) <= 3000 && selType !='' && selImage != null){
            const formData = new FormData();
            formData.append('name', selName);
            formData.append('desc', selDesc);
            formData.append('price', selPrice);
            formData.append('type', selType);

            if(selImage){
                formData.append('image', selImage);
            }

            setSpinnerState(true)
            //${process.env.NEXT_PUBLIC_API_BASE_URL}
            await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/new`, {
                method: 'POST',
                body: formData
            }).then((result) => {
                if(result.ok){
                    showSuccess()
                }else {
                    alert("failed to add")
                    window.location.reload()
                }
            });  
        }else{
            alert(`fill all the fields properly`)
        }
    };

    return(
        <div className="w-full flex justify-center items-center">
            {
                spinnerActive? 
                    <div className="flex justify-center items-center w-full md:py-36 md:gap-4">
                        <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                        </div>
                        Adding to menu...
                    </div>
                
                : 
                
                    <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col justify-center items-center w-full">
                        <div className="flex w-full justify-center items-center md:gap-4">
                            <div className="mb-4 w-96">
                                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={selName}
                                    onChange={handleNameChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                    required
                                />
                            </div>
                            <div className="mb-4 w-32">
                                <label htmlFor="price" className="block text-gray-700 mb-2">Price</label>
                                <input
                                    type="number"
                                    id="price"
                                    name="price"
                                    value={selPrice}
                                    onChange={handlePriceChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                    required
                                />
                            </div>
                            <div className="mb-4 w-72">
                                <label htmlFor="selectInput" className="block text-gray-700 mb-2">Choose an option:</label>
                                <select
                                    id="selectInput"
                                    value={selType}
                                    onChange={handleTypeChange}
                                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                    required
                                >
                                    <option value="">Choose type of food</option>
                                    <option value="Indian">Indian</option>
                                    <option value="Chinese">Chinese</option>
                                    <option value="Japanese">Japanese</option>
                                    <option value="Italian">Italian</option>
                                    <option value="Mexican">Mexican</option>
                                    <option value="Drink">Drink</option>
                                    <option value="Starter">Starter</option>
                                    <option value="Breakfast">Breakfast</option>
                                    <option value="Dessert">Dessert</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col w-full justify-center items-center md:gap-4">
                            <div>
                                <label htmlFor="fileInput">Choose a file:</label>
                                <input
                                    type="file"
                                    id="fileInput"
                                    onChange={handleFileChange}
                                />
                                {selImage && (
                                    <div>
                                    <p>Selected file: {selImage?.name}</p>
                                    <p>File size: {selImage?.size} bytes</p>
                                    </div>
                                )}
                            </div>
                            <div className="mb-4 w-full">
                                <label htmlFor="desc" className="block text-gray-700 mb-2">Description</label>
                                <textarea
                                    id="desc"
                                    name="textArea"
                                    value={selDesc}
                                    onChange={handleDescChange}
                                    className="w-full px-3 py-2 max-h-36 min-h-36 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                    required
                                    rows={5}
                                    cols={40}
                                />
                            </div>
                            <button className="w-full px-3 py-2 border rounded-md bg-violet-800 text-white" type="submit">Add</button>
                        </div>

                    </form>
                
            }
            
        </div>
    )
}

interface UpdateItemFormProps{
    pid: string
    name: string,
    type: string,
    price: number,
    desc: string,
    imgUrl: string
}

export const UpdateItemForm = ({pid, name, type, price, desc, imgUrl} : UpdateItemFormProps) =>{

    const router = useRouter();

    const [selImage, setSelImage] = useState<File | null>(null);

    const [selName, setSelName] = useState<string>(name);

    const [selDesc, setSelDesc] = useState<string>(desc);

    const [selType, setSelType] = useState<string>(type);

    const [selPrice, setSelPrice] = useState<string>(price.toString());

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        setSelImage(file)
    };

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target
        setSelType(value)
    };

    const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target
        setSelPrice(value)
    };

    const handleDescChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target
        setSelDesc(value)
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value } = e.target;
        setSelName(value)
    };

    const [spinnerActive, setSpinnerState] = useState(false)

    const { buttonClicked, setButtonStatus } = useStateContext()

    const { updateButtonClicked, setUpdateButtonStatus } = useUpdateStateContext()

    const showSuccess = () =>{
        setSpinnerState(false)
        setButtonStatus(false)
        setUpdateButtonStatus(false)
        alert("Item has been updated")
        window.location.reload()
    }

    const cancelUpdate = () =>{
        setUpdateButtonStatus(false)
    }
 
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(selName.length >= 3 && selDesc.length >= 16 && parseInt(selPrice, 10) >= 5 && parseInt(selPrice, 10) <= 3000 && selType !=''){

            const formData = new FormData();

            formData.append('pid', pid)
            formData.append('name', selName);
            formData.append('desc', selDesc);
            formData.append('price', selPrice);
            formData.append('type', selType);

            if(selImage){
                formData.append('image', selImage);
            }else{
                formData.append('image', '')
            }

            setSpinnerState(true)

            await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products/edit`, {
                method: 'PUT',
                body: formData
            }).then((result) => {
                if(result.ok){
                    showSuccess()
                } else{
                    alert("failed to update")
                    setSpinnerState(false)
                    setButtonStatus(false)
                }
            });  
        } 
    };

    return(
        <div className="w-full flex justify-center items-center md:p-4">
            {
                spinnerActive? 
                    <div className="flex justify-center items-center w-full md:py-36 md:gap-4">
                        <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                        <span className="sr-only">Loading...</span>
                        </div>
                        Adding to menu...
                    </div>
                
                : 
                
                    <div className="flex flex-col justify-center items-center w-full md:gap-4">
                        <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col justify-center items-center w-full">
                            <div className="flex w-full justify-center items-center md:gap-4">
                                <div className="mb-4 w-96">
                                    <label htmlFor="nameUpdate" className="block text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="nameUpdate"
                                        name="nameUpdate"
                                        value={selName}
                                        onChange={handleNameChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                        required
                                    />
                                </div>
                                <div className="mb-4 w-32">
                                    <label htmlFor="priceUpdate" className="block text-gray-700 mb-2">Price</label>
                                    <input
                                        type="number"
                                        id="priceUpdate"
                                        name="priceUpdate"
                                        value={selPrice}
                                        onChange={handlePriceChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                        required
                                    />
                                </div>
                                <div className="mb-4 w-72">
                                    <label htmlFor="selectInputUpdate" className="block text-gray-700 mb-2">Choose an option:</label>
                                    <select
                                        id="selectInputUpdate"
                                        value={selType}
                                        onChange={handleTypeChange}
                                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                        required
                                    >
                                        <option value="">Choose type of food</option>
                                        <option value="Indian">Indian</option>
                                        <option value="Chinese">Chinese</option>
                                        <option value="Japanese">Japanese</option>
                                        <option value="Italian">Italian</option>
                                        <option value="Mexican">Mexican</option>
                                        <option value="Drink">Drink</option>
                                        <option value="Starter">Starter</option>
                                        <option value="Breakfast">Breakfast</option>
                                        <option value="Dessert">Dessert</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col w-full justify-center items-center md:gap-4">
                                <div className="flex flex-col justify-center items-center">
                                    <Image src={imgUrl} alt={name} height={100} width={100} className="rounded-md"/>
                                    <label htmlFor="fileInputUpdate">Choose new file:</label>
                                    <input
                                        type="file"
                                        id="fileInputUpdate"
                                        onChange={handleFileChange}
                                    />
                                    {selImage && (
                                        <div>
                                        <p>Selected file: {selImage?.name}</p>
                                        <p>File size: {selImage?.size} bytes</p>
                                        </div>
                                    )}
                                </div>
                                <div className="mb-4 w-full">
                                    <label htmlFor="descUpdate" className="block text-gray-700 mb-2">Description</label>
                                    <textarea
                                        id="descUpdate"
                                        name="textArea"
                                        value={selDesc}
                                        onChange={handleDescChange}
                                        className="w-full px-3 py-2 max-h-36 min-h-36 border rounded-md focus:outline-none focus:ring focus:ring-indigo-200"
                                        required
                                        rows={5}
                                        cols={40}
                                    />
                                </div>
                                <button className="w-full px-3 py-2 border rounded-md bg-[#C27A29] text-white" type="submit">Update</button>
                            </div>

                        </form>
                        <button className="w-full px-3 py-2 border rounded-md bg-[#F00000] text-white" onClick={cancelUpdate}>Cancel</button>
                    </div>
            }
            
        </div>
    )
}