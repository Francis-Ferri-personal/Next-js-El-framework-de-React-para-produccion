import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'SEO Title',
 description: 'Esta es la pagina de contacto de la empresa',
 keywords: ['Contact','contactame',  'information']
};

export default function AboutPage(){
    return (
        <>
            <span className="text-5xl">Contact Page</span>
        </>
    )
} 