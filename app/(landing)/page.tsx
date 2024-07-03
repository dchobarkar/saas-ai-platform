import React from "react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const LandingPage = () => {
  return (
    <div>
      Landing Page:
      <Link href="sign-in">
        <Button>Log in</Button>
      </Link>
      <Link href="sign-up">
        <Button>Register</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
