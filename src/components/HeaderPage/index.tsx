type HeaderPageProps = {
  category: string;
  title: string;
};

const HeaderPage = ({ category, title }: HeaderPageProps) => {
  return (
    <div className=" mb-10">
      <p className="text-lg text-gray-400">{category}</p>
      <p className="text-3xl font-extrabold tracking-tight text-slate-900">
        {title}
      </p>
    </div>
  );
};

export default HeaderPage;
