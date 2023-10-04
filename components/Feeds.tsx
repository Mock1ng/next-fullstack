import Label from "./atoms/Label";
import Image, { StaticImageData } from "next/image";
import ShirtImage from "../app/images/shirt.jpeg";
import Card from "./atoms/Card";

export type dataType = {
  title: string;
  price: number;
  image: StaticImageData;
  isLiked: boolean;
  star: number;
  sold: string;
};

const Feeds = () => {
  const labels = [
    "Best Seller",
    "Keep Stylish",
    "Special Discount",
    "Official Store",
    "Coveted Product"
  ];

  const products: dataType[] = [
    {
      title: "essentials mens' long sleeve oxford shirt",
      price: 179000,
      image: ShirtImage,
      isLiked: false,
      star: 4.9,
      sold: "10k"
    },
    {
      title: "essentials mens' long sleeve oxford shirt",
      price: 179000,
      image: ShirtImage,
      isLiked: false,
      star: 4.9,
      sold: "10k"
    },
    {
      title: "essentials mens' long sleeve oxford shirt",
      price: 179000,
      image: ShirtImage,
      isLiked: false,
      star: 4.9,
      sold: "10k"
    },
    {
      title: "essentials mens' long sleeve oxford shirt",
      price: 179000,
      image: ShirtImage,
      isLiked: false,
      star: 4.9,
      sold: "10k"
    },
    {
      title: "essentials mens' long sleeve oxford shirt",
      price: 179000,
      image: ShirtImage,
      isLiked: false,
      star: 4.9,
      sold: "10k"
    }
  ];

  return (
    <div className="container">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-2xl font-bold">Todays For You!</h3>

        <div className="flex gap-4">
          {labels.map((label) => (
            <Label title={label} key={label} />
          ))}
        </div>
      </div>

      <div className="products-wrapper">
        {products.map((product) => (
          <Card key={product.title} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Feeds;
