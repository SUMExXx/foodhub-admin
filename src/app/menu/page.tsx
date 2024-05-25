import Image from "next/image";
import { AddToMenu } from "../components/buttons";
import { StateProvider } from "../components/stateContext";
import { MenuItemPlaceHolder } from "../components/MenuItem";
import MenuGrid from "../components/MenuGrid";

export default async function Menu() {

  const test = [1,2,3,4,5,6]

  return (
    <StateProvider>
      <main className="flex w-full flex-col items-center bg-customGrey">
        <AddToMenu/>
        <MenuGrid/>
      </main>
    </StateProvider>
  );
}
