import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PatternFormat } from "react-number-format";
import LoginButton from "./loginButton";

export default function LoginCard() {
  return (
    <Card className="max-w-sm absolute top-0 bottom-0 left-0 right-0 m-auto max-h-fit">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl text-center">LOGIN</CardTitle>
        <CardDescription className="text-center">
          Utilize seu cpf para acessar o sistema
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase"></div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">CPF</Label>
          <PatternFormat
            format="###.###.###-##"
            customInput={Input}
            id="cpf"
            placeholder="___.___.___-__"
            mask="_"
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">SENHA</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <LoginButton />
      </CardFooter>
    </Card>
  );
}
