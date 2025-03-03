import { faChevronDown, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface CardItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
  time: string;
  type: string;
}

const Card = ({
  image,
  title,
  description,
  price,
  time,
  type,
}: CardItemProps) => {
  return (
    <div className="flex flex-col gap-4 relative h-[400px] w-full px-[1em] py-[2em] rounded-4xl overflow-hidden cursor-pointer">
      <img
        src={image}
        alt="Card"
        className="w-full h-full object-cover absolute top-0 left-0"
      />
      <div className="flex flex-col gap-4 relative z-10 justify-between h-full">
        <div></div>
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-[2.5rem] font-bold text-white text-center">
            {title}
          </h1>
          <button className="bg-white text-black px-4 py-2 rounded-full max-w-[10rem] font-medium flex gap-2 items-center text-[0.9rem]">
            {type}
            <FontAwesomeIcon icon={faChevronDown} className="text-black h-3" />
          </button>
        </div>
        <div className="w-full bg-white rounded-lg p-[1em] flex gap-2 items-center">
          <div className="w-[2em] h-[2em] bg-[#a57843] rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faHome} className="text-white h-5 " />
          </div>
          <div className="flex gap-2 justify-between w-full">
            <div className="flex flex-col">
              <p className="text-[0.9rem] font-bold">{description}</p>
              <p className="text-[0.7rem] text-gray-400">{time}</p>
            </div>

            <p className="text-[0.9rem]">{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
export type { CardItemProps };

