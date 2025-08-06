"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Loader2 } from 'lucide-react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
      setIsLoading(true);
      // Simulate a network request
      setTimeout(() => {
          setIsLoading(false);
      }, 2000);
  };

  return (
      <Button disabled={isLoading} onClick={handleClick}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        Click me
      </Button>
  );
}