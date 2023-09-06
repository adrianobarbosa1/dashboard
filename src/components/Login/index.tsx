import React, { useState } from "react";
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
import { EsqueceuSenha } from "./esqueceuSenha";
import { Icons } from "../Icons";
import { useDispatch, loginUser } from "@/lib/redux";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";

export default function LoginCard() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { toast } = useToast();
  const [showPassword, setShowPassword] = useState(false);
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = {
      username: cpf,
      password: senha,
    };
    dispatch(loginUser(loginData))
      .unwrap()
      .then((result) => {
        router.push("/dashboard");
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: "Erro no envio",
          description: error.result,
        });
      });
  };

  return (
    <Card className="max-w-sm absolute top-0 bottom-0 left-0 right-0 m-auto max-h-fit">
      <form onSubmit={(e) => handleSubmit(e)}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-4xl text-center">LOGIN</CardTitle>
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
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              customInput={Input}
              id="cpf"
              placeholder="___.___.___-__"
              mask="_"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">SENHA</Label>
            <Label className="relative">
              <Input
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                id="password"
                type={showPassword ? "text" : "password"}
              />
              <Icons.eye
                onClick={() => setShowPassword((prev) => !prev)}
                className="h-5 w-6 absolute top-1/2 right-1 transform -translate-y-1/2 cursor-pointer"
              />
            </Label>
            <EsqueceuSenha />
          </div>
        </CardContent>
        <CardFooter>
          <LoginButton />
        </CardFooter>
      </form>
    </Card>
  );
}
