import Image from "next/image";

interface HotelCardProps {
  name: string;
  rating: number;
  reviews: number;
  image: string;
}

const HotelCard: React.FC<HotelCardProps> = ({
  name,
  rating,
  reviews,
  image,
}) => (
  <div className="px-2">
    <div className="cursor-pointer group">
      <div className="relative overflow-hidden rounded-2xl h-64 shadow-sm">
        <Image
          src={image}
          alt={name}
          width={600}
          height={256}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          unoptimized
        />
      </div>

      <div className="pt-3 pb-1 px-1">
        <p className="font-medium text-gray-800 text-md leading-snug line-clamp-1">
          {name}
        </p>
        <div className="flex items-center gap-1.5 mt-1.5">
          <svg
            width="16"
            height="16"
            viewBox="0 0 14 14"
            fill="#F59E0B"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-[2px]"
          >
            <path d="M7 1l1.545 3.13L12 4.635l-2.5 2.435.59 3.44L7 8.885l-3.09 1.625L4.5 7.07 2 4.635l3.455-.505L7 1z" />
          </svg>
          <span className="text-sm font-bold text-gray-800">{rating}</span>
          <span className="text-sm text-gray-500">({reviews} reviews)</span>
        </div>
      </div>
    </div>
  </div>
);

export default HotelCard;
