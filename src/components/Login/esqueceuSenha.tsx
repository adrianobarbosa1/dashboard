import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function EsqueceuSenha() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <a className="text-sm text-muted-foreground cursor-pointer">
          Esqueceu sua senha?
        </a>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Recuperar Senha</DialogTitle>
          <DialogDescription>
            Digite seu endereço de email, se ele estiver cadastrado você
            receberá um link para recuperar sua senha
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              E-mail
            </Label>
            <Input
              id="email"
              type="email"
              className="col-span-3"
              placeholder="email@provedor.com"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Enviar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
