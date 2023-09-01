import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CardProps = {
  children: React.ReactNode;
  category: string;
  title?: string;
};

const CustomCard = ({ children, category, title }: CardProps) => {
  return (
    <Card className="m-2 p-5 mt-20 md:mt-5 md:p-5 md:ml-6">
      <CardHeader>
        <CardDescription className="text-lg text-gray-400 dark:text-darkTexto">
          {category}
        </CardDescription>
        <CardTitle className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-darkTextoTitulo">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default CustomCard;
