import Image from "next/image";
import { AddToMenu, UpdateItemForm } from "../components/buttons";
import { StateProvider, UpdateStateProvider, useUpdateStateContext } from "../components/stateContext";
import MenuGrid from "../components/MenuGrid";
import { UpdateItemFormWrapper } from "../components/UpdateItemFormWrapper";

export default async function Menu() {

  return (
    <UpdateStateProvider>
      <StateProvider>
        <main className="flex w-full flex-col items-center bg-customGrey">
          {
            <UpdateItemFormWrapper/>
          }
        </main>
      </StateProvider>
    </UpdateStateProvider>
  );
}
