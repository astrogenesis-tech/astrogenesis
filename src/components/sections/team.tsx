import { Images } from 'lucide-react';
import React from 'react';

interface TeamProps {
  name: string;
  imgSrc: string;

  post: string;
}

const Team = ({ name, imgSrc, post }: TeamProps) => {
  return (
    <div className=" flex max-w-sm cursor-pointer flex-col  rounded-lg p-4 shadow-sm transition-all  duration-500  ease-in-out hover:scale-110 hover:shadow-2xl ">
      <img
        src={imgSrc}
        alt="team"
        className="size-[250px] rounded-full border-2 border-emerald-600 object-cover
        "
      />

      <h1 className="pt-2 text-center text-2xl">{name}</h1>
      <p className="text-md pb-2 text-center">{post}</p>
    </div>
  );
};

export default Team;
