import currencyRp from "@/utils/currency";
import { dataType } from "../Feeds";
import Image from "next/image";

const Card = ({ data }: { data: dataType }) => {
  return (
    <div className="cursor-pointer shadow-lg rounded-md overflow-hidden">
      <Image src={data.image} alt={data.title + " image"} />
      <div className="px-4 py-5">
        <h4 className="font-bold leading-5 mb-2">{data.title}</h4>
        <div className="flex gap-1 text-xs items-center mb-2">
          <p className="font-bold">&#9733; {data.star}</p>
          &#x2022;
          <p className="font-bold text-gray-300">{data.sold} Sold</p>
        </div>
        <p className="font-bold">{currencyRp(data.price)}</p>
      </div>
    </div>
  );
};

export default Card;
