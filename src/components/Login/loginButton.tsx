import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../Icons";

export default function LoginButton() {
  return (
    <Button className="w-full">
      <Icons.spinner className="h-4 w-4 animate-spin" />
    </Button>
  );
}
