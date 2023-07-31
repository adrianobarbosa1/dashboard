import HeaderPage from "../HeaderPage";

type CardProps = {
  children: React.ReactNode;
  category: string;
  title: string;
};

const Card = ({ children, category, title }: CardProps) => {
  return (
    <div className="m-2 p-5 mt-20 md:mt-5 md:p-5 md:ml-6 bg-white rounded-3xl">
      <HeaderPage category={category} title={title} />
      {children}
    </div>
  );
};

export default Card;
