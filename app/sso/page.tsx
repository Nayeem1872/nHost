"use client";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, Suspense } from "react";

const NiamSSO = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const queryParams = new URLSearchParams(searchParams.toString());
    let token = queryParams.get("token");

    if (token) {
      // Remove surrounding quotes if present
      token = token.replace(/^"|"$/g, '');
      
      // Check if token exists
      console.log("token", token);

      post(token);
    }
  }, [searchParams, pathname]);

  const post = async (token:any) => {
    try {
      const postData = {
        token: token,
      };

      console.log("postData", postData);

      const response = await axios.post("/api/niamsso", postData);

      console.log(response.data);
      if(response?.data?.success === true){
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error while posting token:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="wrapper relative w-52 h-16 z-10">
        <div className="circle-animation"></div>
        <div className="circle-animation"></div>
        <div className="circle-animation"></div>
        <div className="shadow-animation"></div>
        <div className="shadow-animation"></div>
        <div className="shadow-animation"></div>
      </div>
    </div>
  );
};

const SSOPage = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <NiamSSO />
  </Suspense>
);

export default SSOPage;
