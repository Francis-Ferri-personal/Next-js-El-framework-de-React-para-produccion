import { CartCounter } from "@/app/shopping-cart";
import type { Metadata } from "next";


export const metadata: Metadata = {
 title: 'Shopping cart',
 description: 'Contador',
};

export default function CounterPage() {
  
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <span>Productos en el carrito de compras</span>
      <CartCounter value={20}/>
    </div>
  );
}