"use client";
import React, { useEffect, useRef, useState } from "react";
import { SWRProvider } from "@/app/swr-provider";
import "@/public/css/teams-style.css";
import Link from "next/link";
import  NewPage from "../components/Team/NewPage";
function Teams() {
  return (
    <>
      <SWRProvider>
      <NewPage />
    </SWRProvider>
    </>
  );
}
export default Teams;
