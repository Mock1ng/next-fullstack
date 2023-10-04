const Label = ({ title }: { title: string }) => {
  return (
    <div className="px-4 py-1 border-2 border-gray-200 rounded-lg text-sm hover:bg-black hover:text-white hover:border-black transition-all cursor-pointer">
      <p className="font-bold">{title}</p>
    </div>
  );
};

export default Label;
