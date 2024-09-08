import { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'Pagina del precio de mi servicio',
 keywords: ["Pricig Page", 'Francis', 'Informacion']
};


export default function PricingPage(){
    return (
        <>
            <span className="text-5xl">Pricing Page</span>
        </>
    )
} 