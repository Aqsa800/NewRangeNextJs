"use client";
import React, { useEffect, useRef, useState } from "react";
import { SWRProvider } from "@/app/swr-provider";
import "@/public/css/teams-style.css";
import Link from "next/link";
import TeamPage from "../components/Team/TeamPage";
// import  NewPage from "../components/Team/NewPage";
function Teams() {
  return (
    <>
      <SWRProvider>
      <TeamPage></TeamPage>
      {/* <NewPage /> */}
    </SWRProvider>
    </>
  );
}
export default Teams;
