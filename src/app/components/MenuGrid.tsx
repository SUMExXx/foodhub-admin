'use client';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import MenuItem, { MenuItemPlaceHolder } from './MenuItem';

interface ResponseDataObject{
    _id: string,
    name: string,
    desc: string,
    price: number,
    imageUrl: string,
    type: string,
    pid: string,
    __v: number
}

const MenuGrid = () => {

    const [menuItemsLoaded, setMenuItemsLoaded] = useState(false)

    const [chineseData, setChineseData] = useState<ResponseDataObject[]>([])
    const [indianData, setIndianData] = useState<ResponseDataObject[]>([])
    const [japaneseData, setJapaneseData] = useState<ResponseDataObject[]>([])
    const [italianData, setItalianData] = useState<ResponseDataObject[]>([])
    const [mexicanData, setMexicanData] = useState<ResponseDataObject[]>([])
    const [breakfastData, setBreakfastData] = useState<ResponseDataObject[]>([])
    const [drinkData, setDrinkData] = useState<ResponseDataObject[]>([])
    const [starterData, setStarterData] = useState<ResponseDataObject[]>([])
    const [dessertData, setDessertData] = useState<ResponseDataObject[]>([])

    const loadChineseItems = async () =>{
        const chineseResponse = await fetch('http://localhost:8080/products/chinese');
        if (!chineseResponse.ok) {
            throw new Error('Failed to fetch Chinese items data');
        }
        return await chineseResponse.json();
    }

    const loadIndianItems = async () =>{
        const indianResponse = await fetch('http://localhost:8080/products/indian');
        if (!indianResponse.ok) {
            throw new Error('Failed to fetch Indian items data');
        }
        return await indianResponse.json();
    }


    const loadJapaneseItems = async () =>{
        const japaneseResponse = await fetch('http://localhost:8080/products/japanese');
        if (!japaneseResponse.ok) {
            throw new Error('Failed to fetch Japanese items data');
        }
        return await japaneseResponse.json();
    }


    const loadItalianItems = async () =>{
        const italianResponse = await fetch('http://localhost:8080/products/italian');
        if (!italianResponse.ok) {
            throw new Error('Failed to fetch Italian items data');
        }
        return await italianResponse.json();
    }

    const loadMexicanItems = async () =>{
        const mexicanResponse = await fetch('http://localhost:8080/products/mexican');
        if (!mexicanResponse.ok) {
            throw new Error('Failed to fetch Mexican items data');
        }
        return await mexicanResponse.json();
    }


    const loadBreakfastItems = async () =>{
        const breakfastResponse = await fetch('http://localhost:8080/products/breakfast');
        if (!breakfastResponse.ok) {
            throw new Error('Failed to fetch Breakfast items data');
        }
        return await breakfastResponse.json();
    }


    const loadStarterItems = async () =>{
        const starterResponse = await fetch('http://localhost:8080/products/starter');
        if (!starterResponse.ok) {
            throw new Error('Failed to fetch Starter items data');
        }
        return await starterResponse.json();
    }


    const loadDessertItems = async () =>{
        const starterResponse = await fetch('http://localhost:8080/products/starter');
        if (!starterResponse.ok) {
            throw new Error('Failed to fetch Starter items data');
        }
        return await starterResponse.json();
    }

    const loadDrinkItems = async () =>{
        const drinkResponse = await fetch('http://localhost:8080/products/drink');
        if (!drinkResponse.ok) {
            throw new Error('Failed to fetch Drink items data');
        }
        return await drinkResponse.json();
    }

    useEffect(() => {
        const loadData = async () => {
            try {
                await loadChineseItems().then((result) => {
                    setChineseData(result)
                })
                await loadIndianItems().then((result) => {
                    setIndianData(result)
                })
                await loadJapaneseItems().then((result) => {
                    setJapaneseData(result)
                })
                await loadItalianItems().then((result) => {
                    setItalianData(result)
                })
                await loadMexicanItems().then((result) => {
                    setMexicanData(result)
                })
                await loadBreakfastItems().then((result) => {
                    setBreakfastData(result)
                })
                await loadDrinkItems().then((result) => {
                    setDrinkData(result)
                })
                await loadDessertItems().then((result) => {
                    setDessertData(result)
                })
                await loadStarterItems().then((result) => {
                    setStarterData(result)
                })
            } catch (err: any) {
                throw new Error(err.message);
            } finally {
                setMenuItemsLoaded(true);
            }
        };

        loadData();
    }, []);

    const placeholderItems = [0,1,2,3,4,5,6,7,8,9,10,11]

  return (
        menuItemsLoaded? (
            <div className='flex flex-col w-full md:gap-8 md:mt-8'>
                {
                    starterData.length == 0? <></> : 
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Starters</h1>
                        <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                            {
                                starterData.map((foodItem) => (<MenuItem key={foodItem.pid} name={foodItem.name} desc={foodItem.desc} price={foodItem.price} type={foodItem.type} imgUrl={foodItem.imageUrl}/>))
                            }
                        </div>
                    </section>
                }
                {
                    chineseData.length == 0? <></> : 
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Chinese</h1>
                        <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                            {
                                chineseData.map((foodItem) => (<MenuItem key={foodItem.pid} name={foodItem.name} desc={foodItem.desc} price={foodItem.price} type={foodItem.type} imgUrl={foodItem.imageUrl}/>))
                            }
                        </div>
                    </section>
                }
                {
                    indianData.length == 0? <></> : 
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Indian</h1>
                        <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                            {
                                indianData.map((foodItem) => (<MenuItem key={foodItem.pid} name={foodItem.name} desc={foodItem.desc} price={foodItem.price} type={foodItem.type} imgUrl={foodItem.imageUrl}/>))
                            }
                        </div>
                    </section>
                }
                {
                    japaneseData.length == 0? <></> : 
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Japanese</h1>
                        <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                            {
                                japaneseData.map((foodItem) => (<MenuItem key={foodItem.pid} name={foodItem.name} desc={foodItem.desc} price={foodItem.price} type={foodItem.type} imgUrl={foodItem.imageUrl}/>))
                            }
                        </div>
                    </section>
                }
                {
                    italianData.length == 0? <></> : 
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Italian</h1>
                        <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                            {
                                italianData.map((foodItem) => (<MenuItem key={foodItem.pid} name={foodItem.name} desc={foodItem.desc} price={foodItem.price} type={foodItem.type} imgUrl={foodItem.imageUrl}/>))
                            }
                        </div>
                    </section>
                }
                {
                    mexicanData.length == 0? <></> : 
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Mexican</h1>
                        <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                            {
                                mexicanData.map((foodItem) => (<MenuItem key={foodItem.pid} name={foodItem.name} desc={foodItem.desc} price={foodItem.price} type={foodItem.type} imgUrl={foodItem.imageUrl}/>))
                            }
                        </div>
                    </section>
                }
                {
                    breakfastData.length == 0? <></> : 
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Breakfast</h1>
                        <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                            {
                                breakfastData.map((foodItem) => (<MenuItem key={foodItem.pid} name={foodItem.name} desc={foodItem.desc} price={foodItem.price} type={foodItem.type} imgUrl={foodItem.imageUrl}/>))
                            }
                        </div>
                    </section>
                }
                {
                    dessertData.length == 0? <></> : 
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Desserts</h1>
                        <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                            {
                                dessertData.map((foodItem) => (<MenuItem key={foodItem.pid} name={foodItem.name} desc={foodItem.desc} price={foodItem.price} type={foodItem.type} imgUrl={foodItem.imageUrl}/>))
                            }
                        </div>
                    </section>
                }
                {
                    drinkData.length == 0? <></> : 
                    <section className='flex flex-col justify-center items-center'>
                        <h1 className='text-4xl font-semibold'>Drinks</h1>
                        <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                            {
                                drinkData.map((foodItem) => (<MenuItem key={foodItem.pid} name={foodItem.name} desc={foodItem.desc} price={foodItem.price} type={foodItem.type} imgUrl={foodItem.imageUrl}/>))
                            }
                        </div>
                    </section>
                }
            </div>
        ): (
            <div className="flex w-full flex-wrap items-start justify-center md:p-8 md:gap-4">
                {
                    placeholderItems.map((item) => (<MenuItemPlaceHolder key={item}/>))
                }
            </div>
        )
  )
}

export default MenuGrid