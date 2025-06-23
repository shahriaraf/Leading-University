import React from "react";

const FacultyCard = ({teacher}) => {

    const {name,designation,image} = teacher
  return (
    <div
      
      className="cursor-pointer w-3/4 rounded-lg p-4 border shadow-md bg-[#F0FDF4] border-b-[#023020] flex items-center space-x-4"
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-gray-300 "
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{designation}</p>
        <p className="text-xs italic">department</p>
      </div>
    </div>
  );
};

export default FacultyCard;
