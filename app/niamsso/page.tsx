"use client"
import { usePathname,useSearchParams } from 'next/navigation';
import React, { useEffect } from 'react';

const nIamSSO = () => {
  const searchParams = useSearchParams();
    const pathname = usePathname();

    
    
    useEffect(() => {
      const url = `${pathname}?token${searchParams}`;

    const queryParams = new URLSearchParams(searchParams);
    const token = queryParams.get("token");

    console.log(token);
    
      }, [pathname]); 
  return (
    <div>nIamSSO</div>
  );
};

export default nIamSSO;
