import { auth, signOut } from "../../auth";
import { Session } from "next-auth";
import Image from "next/image";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default async function Home() {
  const session = await auth();
  
  if (!session?.user) {
    redirect("/login");
  } else {
    console.log("session", session.user);
    redirect("/inspection-requests");
  }
}
