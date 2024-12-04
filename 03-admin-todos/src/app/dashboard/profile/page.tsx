
'use client';

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {

    const {data: session} = useSession();

    useEffect(() => {
      console.log("CLient side");
    
      
    }, [])
    
  return (
    <div>
      <h1>Profile Page</h1>
      <hr />
      <div className="flex flex-col">
        <span>{session?.user?.name ?? "No Name"}</span>
        <span>{session?.user?.email ?? "No email"}</span>
        <span>{session?.user?.id ?? "No uuid"}</span>
        <span>{session?.user?.roles?.join(", ") ?? ["no-roles"]}</span>
      </div>
    </div>
  );
}