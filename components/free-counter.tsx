"use client";

import { useEffect, useState } from "react";
import { Zap } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { useProModal } from "@/hooks/use-pro-modal";
import { MAX_FREE_COUNTS } from "@/constants";

type FreeCounterProps = {
  apiLimitCount: number;
  isPro: boolean;
};

export const FreeCounter = ({
  apiLimitCount = 0,
  isPro = false,
}: FreeCounterProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const proModal = useProModal();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted || isPro) return null;

  return (
    <div className="px-3">
      <Card className="bg-white/10 border-0">
        <CardContent className="py-6">
          <div className="text-center text-sm text-white mb-4 space-y-2">
            <p>
              {apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
            </p>

            <Progress
              className="h-3 text-white"
              value={(apiLimitCount / MAX_FREE_COUNTS) * 100}
            />
          </div>

          <Button
            variant="premium"
            className="w-full"
            onClick={proModal.onOpen}
          >
            Upgrade <Zap className="w-4 h-4 ml-2 fill-white" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
