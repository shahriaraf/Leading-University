const FacultyCard = ({ teacher, onClick }) => {
  const { name, designation, image, department } = teacher;

  return (
    <div
      onClick={onClick}
      className="cursor-pointer rounded-lg p-4 border shadow-md bg-[#F0FDF4] border-b-[#023020] flex items-center space-x-4 w-full hover:bg-green-50 transition duration-300"
    >
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
      />
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{designation}</p>
        <p className="text-xs italic">{department}</p>
      </div>
    </div>
  );
};

export default FacultyCard;
