const FacultyDetail = ({ teacher }) => {
    const { name, designation, email, phone, image, biography, education, officeHours } = teacher;

    return (
        <div className="border p-6 rounded-lg shadow-md bg-white space-y-4 animate-fade-in">
            <div className="flex items-center space-x-4">
                <img
                    src={image}
                    alt={name}
                    className="w-20 h-20 rounded-full object-cover border"
                />
                <div>
                    <h2 className="text-xl font-bold">{name}</h2>
                    <p>{designation}</p>
                </div>
            </div>
            <div>
                <h3 className="font-semibold">Contact</h3>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Office Hours: {officeHours}</p>
            </div>
            <div>
                <h3 className="font-semibold">Biography</h3>
                <p>{biography}</p>
            </div>
            <div>
                <h3 className="font-semibold">Education</h3>
                <ul className="list-disc list-inside">
                    {education?.map((edu, i) => <li key={i}>{edu}</li>)}
                </ul>
            </div>
        </div>
    );
};

export default FacultyDetail;
