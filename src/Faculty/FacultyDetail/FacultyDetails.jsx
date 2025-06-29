import { FaMessage } from "react-icons/fa6";

const FacultyDetail = ({ teacher }) => {
    const { name, designation, email, department ,phone, image, biography, education, officeHours } = teacher;

    return (
        <div className="border w-full mt-10  shadow-md text-gray-500 bg-[#F0FDF4] rounded-2xl space-y-4 animate-fade-in">
            <div className="flex  p-5 items-center space-x-4 border bg-gradient-to-r from-[#023020] to-[#455A64] text-white">
                <img
                    src={image}
                    alt={name}
                    className="w-20 h-20 rounded-full object-cover border"
                />
                <div>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{designation}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-white text-black text-xs font-semibold rounded-full">{department}</span>
                </div>
            </div>
            <div className="p-4">
                <h3 className="font-bold text-black">Contact Information</h3>
                <p className="text-gray-500">
                    <span className="font-semibold text-gray-500">Email:</span> {email}</p>
                <p className="text-gray-500">Phone: 017********  </p>
                <p className="text-gray-500">Office Hours: 9am - 5pm</p>
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-black">Biography</h3>
                <p>
                    {name} is a seasoned academic with over 15 years of experience in teaching and research in Computer Science. She currently serves as Professor and Head of the Department, focusing on AI, data science, and curriculum development.
                </p>
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-black">Education</h3>
                <ul className="list-disc list-inside">
                    <li>Ph.D in {department}</li>
                    <li>MS in {department}</li>
                </ul>
            </div>
        </div>
    );
};

export default FacultyDetail;
