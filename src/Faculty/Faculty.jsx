import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const FacultyCard = ({ teacher, onClick }) => {
    const { name, designation, image, department } = teacher;
    const cardRef = useRef(null);

    useEffect(() => {
        const card = cardRef.current;
        if (card) {
            const handleMouseEnter = () => {
                card.style.transform = 'translateY(-8px) scale(1.02)';
                card.style.boxShadow = '0 20px 40px rgba(2, 48, 32, 0.15)';
                card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            };

            const handleMouseLeave = () => {
                card.style.transform = 'translateY(0) scale(1)';
                card.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
                card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
            };

            card.addEventListener('mouseenter', handleMouseEnter);
            card.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                card.removeEventListener('mouseenter', handleMouseEnter);
                card.removeEventListener('mouseleave', handleMouseLeave);
            };
        }
    }, []);

    return (
        <div
            ref={cardRef}
            onClick={onClick}
            className="cursor-pointer rounded-xl p-6 border-2 border-transparent bg-gradient-to-br from-[#F0FDF4] to-white shadow-lg hover:border-[#023020]/20 flex items-center space-x-4 w-full transition-all duration-300 group backdrop-blur-sm"
        >
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-md group-hover:border-[#023020]/30 transition-all duration-300"
                />
                <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#023020] to-[#034830] rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white text-xs font-bold">👨‍🏫</span>
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-800 mb-1 group-hover:text-[#023020] transition-colors duration-300">{name}</h3>
                <p className="text-sm text-gray-600 mb-1 font-medium">{designation}</p>
                <div className="flex items-center gap-2">
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-[#023020] to-[#034830] text-white text-xs font-semibold rounded-full shadow-sm">
                        {department}
                    </span>
                    <span className="text-[#023020] text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        View Details →
                    </span>
                </div>
            </div>
        </div>
    );
};

const FacultyDetail = ({ teacher, onClose }) => {
    const { name, designation, email, department, image } = teacher;
    const detailRef = useRef(null);

    useEffect(() => {
        const detail = detailRef.current;
        if (detail) {
            detail.style.opacity = '0';
            detail.style.transform = 'translateY(30px) scale(0.95)';

            setTimeout(() => {
                detail.style.opacity = '1';
                detail.style.transform = 'translateY(0) scale(1)';
                detail.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
            }, 100);
        }
    }, [teacher]);

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div
                ref={detailRef}
                className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border-2 border-gray-100"
            >
                {/* Header */}
                <div className="relative bg-gradient-to-r from-[#023020] via-[#034830] to-[#455A64] text-white p-8 rounded-t-3xl">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    >
                        <span className="text-white text-xl">×</span>
                    </button>

                    <div className="flex items-center space-x-6">
                        <div className="relative">
                            <img
                                src={image}
                                alt={name}
                                className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                                <span className="text-[#023020] text-sm">🎓</span>
                            </div>
                        </div>
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold mb-2">{name}</h2>
                            <p className="text-white/90 text-lg mb-3">{designation}</p>
                            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full border border-white/30">
                                {department}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-8">
                    {/* Contact Information */}
                    <div className="bg-gradient-to-r from-[#F0FDF4] to-green-50 rounded-2xl p-6 border border-green-200">
                        <h3 className="font-bold text-[#023020] text-lg mb-4 flex items-center gap-2">
                            <span className="text-xl">📞</span>
                            Contact Information
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-[#023020] rounded-full flex items-center justify-center text-white text-sm">📧</span>
                                <div>
                                    <span className="font-semibold text-gray-700">Email:</span>
                                    <p className="text-[#023020] font-medium">{email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-[#023020] rounded-full flex items-center justify-center text-white text-sm">📱</span>
                                <div>
                                    <span className="font-semibold text-gray-700">Phone:</span>
                                    <p className="text-gray-600">017********</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-[#023020] rounded-full flex items-center justify-center text-white text-sm">🕐</span>
                                <div>
                                    <span className="font-semibold text-gray-700">Office Hours:</span>
                                    <p className="text-gray-600">9am - 5pm</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Biography */}
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                        <h3 className="font-bold text-[#023020] text-lg mb-4 flex items-center gap-2">
                            <span className="text-xl">📚</span>
                            Biography
                        </h3>
                        <p className="text-gray-700 leading-relaxed">
                            {name} is a seasoned academic with over 15 years of experience in teaching and research in {department}.
                            Currently serving as {designation}, focusing on cutting-edge research, innovative teaching methodologies,
                            and curriculum development to prepare students for the challenges of tomorrow.
                        </p>
                    </div>

                    {/* Education */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
                        <h3 className="font-bold text-[#023020] text-lg mb-4 flex items-center gap-2">
                            <span className="text-xl">🎓</span>
                            Education
                        </h3>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-r from-[#023020] to-[#034830] rounded-full flex items-center justify-center text-white text-sm">PhD</span>
                                <p className="text-gray-700">Ph.D in {department}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-8 bg-gradient-to-r from-[#455A64] to-[#546E7A] rounded-full flex items-center justify-center text-white text-sm">MS</span>
                                <p className="text-gray-700">MS in {department}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Faculty = () => {
    const [activeTab, setActiveTab] = useState('cse');
    const [selectedTeacher, setSelectedTeacher] = useState(null);
    const headerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const homeIconRef = useRef(null);
    const sidebarRef = useRef(null);
    const navLinksRef = useRef([]);
    const contentRef = useRef(null);

    // Sample faculty data
    const facultyData = {
        cse: [
            {
                "name": "Dr. Mohammod Kamruj Jaman Bhuiyan",
                "designation": "Professor",
                "profileLink": "https://www.lus.ac.bd/author/bhuiyan/",
                "email": "dean_ms@lus.ac.bd",
                "phone": "",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/Dr.-Md.-Kamruj-Jaman-Bhuiyan.jpg?fit=505%2C610&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Sabia Akter Bhuiyan",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/sabia/",
                "email": "aktersabia@yahoo.com",
                "phone": "01714506159",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2019/11/sabia_akter.jpg?fit=300%2C370&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Dr. Shafkat Kibria",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/shafkat/",
                "email": "shafkat@lus.ac.bd",
                "phone": "01972601050",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/03/shafkat060320.jpg?fit=532%2C748&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Ebrahim Hossain",
                "designation": "Assistant ProfessorCoordinator, M. Sc. in CSE, Co-advisor, Leading University Computer Club (LUCC)",
                "profileLink": "https://www.lus.ac.bd/author/ebrahim/",
                "email": "ebrahim.cse@lus.ac.bd",
                "phone": "01733688612",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2020/01/Ebrahim-Hossain.jpg?fit=100%2C105&ssl=1",
                "qualifications": "",
                "areas": "Educational Background:",
                "publications": ""
            },
            {
                "name": "Kazi Md. Jahid Hasan",
                "designation": "Assistant Professor & Head (Acting)Advisor, Leading University Computer Club (LUCC),  Assistant Proctor, LU",
                "profileLink": "https://www.lus.ac.bd/author/jahid/",
                "email": "head_cse@lus.ac.bd",
                "phone": "01676480060",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/IMG-20250219-WA0027.jpg?fit=690%2C762&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Arafat Habib Quraishi",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/quraishi/",
                "email": "arafat@lus.ac.bd",
                "phone": "+8801914487146",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/02/217A8685-scaled.jpg?fit=690%2C690&ssl=1",
                "qualifications": "",
                "areas": "Educational Background:",
                "publications": ""
            },
            {
                "name": "Md. Saiful Ambia Chowdhury",
                "designation": "Lecturer (On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/saiful/",
                "email": "sas2505@lus.ac.bd",
                "phone": "+8801718377269",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2017/01/12489314_218201151851644_3803346472606839500_o.jpg?fit=690%2C690&ssl=1",
                "qualifications": "",
                "areas": "Responsibilities:",
                "publications": ""
            },
            {
                "name": "Debojyoti Biswas",
                "designation": "Lecturer(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/biswas/",
                "email": "bishaldebojyoti@gmail.com",
                "phone": "01861888162",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/07/kk.jpg?fit=690%2C691&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Tonni Das Jui",
                "designation": "Lecturer(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/tonni/",
                "email": "tonnijuicse@gmail.com",
                "phone": "",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2019/01/31855767_942633539250930_2611705570440249344_n.jpg?fit=690%2C863&ssl=1",
                "qualifications": "",
                "areas": "Conducted courses:",
                "publications": ""
            },
            {
                "name": "Mohammad Jaber Hossain",
                "designation": "Lecturer(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/jaber/",
                "email": "jhsarzil120@gmail.com",
                "phone": "01711091906",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/11/IMG_20200109_012240_599.jpg?fit=690%2C690&ssl=1",
                "qualifications": "",
                "areas": "ON STUDY LEAVE",
                "publications": ""
            },
            {
                "name": "Md. Saidur Rahman Kohinoor [SRK]",
                "designation": "Lecturer(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/saidur/",
                "email": "kohinoor_cse@lus.ac.bd",
                "phone": "01732477046",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/09/IMG_9750-300-into-300-.jpg?fit=690%2C690&ssl=1",
                "qualifications": "",
                "areas": "Teaching Area:",
                "publications": ""
            },
            {
                "name": "Syeda Tamanna Alam Monisha",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/monisha/",
                "email": "monisha_cse@lus.ac.bd",
                "phone": "01712953999",
                "image": "https://secure.gravatar.com/avatar/45ad871cd1f00ad5c90bb0ce209ea48e?s=1024&d=mm&r=g",
                "qualifications": "",
                "areas": "Research Interests:",
                "publications": ""
            },
            {
                "name": "Mohammad Shoaib Rahman",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/shoaib/",
                "email": "shoaib_cse@lus.ac.bd",
                "phone": "01717001333",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2020/03/Shoaib-Rahman.jpg?fit=475%2C596&ssl=1",
                "qualifications": "",
                "areas": "M. Sc. in Software Engineering, Blekinge Institute of Technology (BTH), Karlskrona, Sweden.",
                "publications": ""
            },
            {
                "name": "Prithwiraj Bhattacharjee",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/prithwiraj/",
                "email": "prithwiraj_cse@lus.ac.bd",
                "phone": "",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/12/38085581_1784924881590904_6481784263086702592_n.jpg?fit=690%2C460&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Arifuzzaman",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/arifuzzaman/",
                "email": "arif_cse@lus.ac.bd",
                "phone": "01998740789",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/02/FB_IMG_1612329485526.jpg?fit=450%2C570&ssl=1",
                "qualifications": "",
                "areas": "Subject Conducted By Me:",
                "publications": ""
            },
            {
                "name": "Md. Jamaner Rahaman",
                "designation": "LecturerAdvisor, Leading University Debating Club (LUDC)",
                "profileLink": "https://www.lus.ac.bd/author/jamaner/",
                "email": "jamaner_cse@lus.ac.bd",
                "phone": "01310817573",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/02/Capture.png?fit=230%2C232&ssl=1",
                "qualifications": "",
                "areas": "Research Interests:",
                "publications": ""
            },
            {
                "name": "Md. Jehadul Islam Mony",
                "designation": "LecturerAdvisor, IEEE Computer Society LU SB Chapter. Coordinator, ACM Community, LU",
                "profileLink": "https://www.lus.ac.bd/author/mony/",
                "email": "mony_cse@lus.ac.bd",
                "phone": "01686749128",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/jim-1.jpg?fit=690%2C976&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Dipta Chandra Paul",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/dipta/",
                "email": "dipta@lus.ac.bd",
                "phone": "+8801744-420273",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/08/Dipta-Paul.png?fit=634%2C634&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Shahriar Arefin Zummon",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/shahriar/",
                "email": "shahriar.arefin_cse@lus.ac.bd",
                "phone": "01623573213",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/08/zummon.jpg?fit=225%2C224&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Somapika Das",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/somapika/",
                "email": "somapika_cse@lus.ac.bd",
                "phone": "01772355879",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/Pi7_Passport_Photo-1.jpeg?fit=413%2C531&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Sadekur Rahman Roni",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/roni/",
                "email": "r.sadekur93@gmail.com",
                "phone": "01737466765",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/07/Sadekur-Rahman.jpg?fit=300%2C300&ssl=1",
                "qualifications": "",
                "areas": "Publications",
                "publications": ""
            },
            {
                "name": "Aushtmi Deb",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/aushtmi/",
                "email": "aushtmi_cse@lus.ac.bd",
                "phone": "01785633171",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/IMG_20250226_220238.jpg?fit=690%2C607&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Jalal Uddin Chowdhury",
                "designation": "LecturerCo-Advisor, IEEE Computer Society LU SB Chapter",
                "profileLink": "https://www.lus.ac.bd/author/jalal/",
                "email": "jalal_cse@lus.ac.bd",
                "phone": "+8801646-705394",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/04/JAC9.jpg?fit=690%2C814&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Naeem Ahsan Chowdhury",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/naeem/",
                "email": "naeemahsan_cse@lus.ac.bd",
                "phone": "01994900475",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/07/Naeem-.jpg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Zumana Islam Mou",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/mou/",
                "email": "zumana_cse@lus.ac.bd",
                "phone": "01636365931",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/07/Zumana.png?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "Conducted Courses:",
                "publications": ""
            },
            {
                "name": "Rezwana Afrin",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/afrin/",
                "email": "rezwanaridi18@gmail.com",
                "phone": "01797432758",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/10/Rezowana_CSE.jpg?fit=425%2C543&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Amranul Haque",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/amranul/",
                "email": "amranhq018@gmail.com",
                "phone": "01815091979",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/08/Amranul-Haque.jpg?fit=300%2C300&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Nahidul Islam Rupom",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/rupom/",
                "email": "nahid_cse@lus.ac.bd",
                "phone": "01641214872",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/11/IMG-20241009-WA0002.jpg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Puroby Roy Puja",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/puja/",
                "email": "pujapuroby02090@gmail.com",
                "phone": "01878070499",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/07/Puroby-Roy.jpg?fit=600%2C600&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Nargish Jahan",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/nargish/",
                "email": "njlisa25@gmail.com",
                "phone": "01759-486292",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/08/Nargish-Jahan.jpg?fit=686%2C605&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Mst. Shamima Nasrin",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/shamima/",
                "email": "shamimanarrin.mat@gmail.com",
                "phone": "01795780508",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/08/shamima-nasrin.jpg?fit=459%2C579&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Mahdi Hossain Hira",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/mahdi/",
                "email": "bdmahdihira53@gmail.com",
                "phone": "01772757936",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/07/Mahdi-Hossain-Hira.jpg?fit=690%2C863&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Sudipta Banik Trisha",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/sudipta/",
                "email": "sudiptatrisha.19@gmail.com",
                "phone": "01700835172",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/07/Sudipta_Banik_Trisha.png?fit=446%2C559&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Ashfakur Rahman",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/ashfakur/",
                "email": "ashfakurrahman79@gmail.com",
                "phone": "01779693679",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/10/Ashfakur-Rahman-Formal-DP.png?fit=511%2C526&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Soumik Paul Jisun",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/soumik/",
                "email": "soumikpaul240499@gmail.com",
                "phone": "01742332335",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/10/soumik-paul.jpg?fit=525%2C532&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Ameya Debnath",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/ameya/",
                "email": "ameyadebnath@gmail.com",
                "phone": "01716202230",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/Ameya-Debnath.jpeg?fit=690%2C690&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Nilavro Das Kabya",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/kabya/",
                "email": "kabyodas@gmail.com",
                "phone": "01608623737",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/Nilavro-Das-Kabya.jpeg?fit=690%2C690&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Abid Ashraf",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/abid/",
                "email": "abidash03@gmail.com",
                "phone": "01620807971",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/Abid-Ashraf.jpeg?fit=667%2C842&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Nuzhat Madeha Chowdhury",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/nuzhat/",
                "email": "nmchy01@gmail.com",
                "phone": "01725986299",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/Nuzhat-Madeha-Chy-scaled.jpeg?fit=690%2C704&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Tonima Akther Pinki",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/pinki/",
                "email": "tonimanextgenai@gmail.com",
                "phone": "01521553828",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/Tonima-Akter-Pinki.jpeg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Rahin Miah",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/rahin/",
                "email": "rahin582@gmail.com",
                "phone": "01713453544",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/Rahin-Miah_cse.jpeg?fit=690%2C863&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Shahriar Hossain Apu",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/apu/",
                "email": "shahriarhossainapun@gmail.com",
                "phone": "01715209438",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/shahriar-hossain-apu_cse.jpeg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Alian Ahmed Ferdous",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/alian/",
                "email": "alinahmedferdous00@gmail.com",
                "phone": "01793454408",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/Alian-Ahmed-Ferdous.jpeg?fit=690%2C866&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Sirazul Islam Sobuj",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/sobuj/",
                "email": "sirazcse116@gmail.com",
                "phone": "01631903266",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/Sirazul-Islam-Sobuj.jpeg?fit=300%2C300&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Danbir Rashid",
                "designation": "Adjunct Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/rashid/",
                "email": "danbirrashid54@gmail.com",
                "phone": "01784888335",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/06/Danbir-Rashid.jpeg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            }
        ],
        bba: [
            {
                "name": "Professor Dr. Bashir Ahmed Bhuiyan",
                "designation": "Dean, Faculty of Business Administration",
                "profileLink": "https://www.lus.ac.bd/author/bashir/",
                "email": "bashirbhuiyan_bua@lus.ac.bd",
                "phone": "+8801871333355",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/02/B-A-Bhuiyan.jpg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "Entrepreneurship Development, Human Resource Management, Organizational Behavior, Organization Development and Change Management, Strategic Management.",
                "publications": ""
            },
            {
                "name": "Dr. Mohammad Shahansha Molla",
                "designation": "Additional Director, IQAC andAssociate Professor & Head",
                "profileLink": "https://www.lus.ac.bd/author/shahansha/",
                "email": "shahansha@lus.ac.bd",
                "phone": "+8801619610017, Whatsapp Number+8801619610017",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2017/03/17554973_10154367726921500_939996541_n.jpg?fit=675%2C672&ssl=1",
                "qualifications": "",
                "areas": "Corporate Sustainability Practices, Corporate Governance and Corporate Finance",
                "publications": ""
            },
            {
                "name": "Wahida Akther",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/wahida/",
                "email": "wahidaala@lus.ac.bd",
                "phone": "01819538975",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/02/WA-picture.jpg?fit=690%2C874&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Anwar Ahmad Arif",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/anwar/",
                "email": "aaarif@lus.ac.bd",
                "phone": "01712661446",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/06/AAA-_-PP-_-PhD-_-12.06.2021-.jpg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Shamimul Islam",
                "designation": "Assistant Professor(HRM)",
                "profileLink": "https://www.lus.ac.bd/author/shamimul/",
                "email": "mshamim09@lus.ac.bd",
                "phone": "01918942572",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/11/pp-e1636296709437.jpg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "Human Resource Management, Performance Management, Leadership Development, Training and Development.",
                "publications": ""
            },
            {
                "name": "Mohammad Zahed Hossain",
                "designation": "Assistant Professor(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/zahed/",
                "email": "zahed@lus.ac.bd",
                "phone": "",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2016/03/DSC_1013.jpg?fit=456%2C576&ssl=1",
                "qualifications": "",
                "areas": "Financial Markets and Institutions, Corporate Finance, Security Analysis and Portfolio Management.",
                "publications": ""
            },
            {
                "name": "Tahmina Khanom",
                "designation": "Assistant Professor(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/tahmina/",
                "email": "tmm87@lus.ac.bd",
                "phone": "01715610930",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/02/scan-pic_1-1.jpg?fit=555%2C685&ssl=1",
                "qualifications": "",
                "areas": "Accounting Theory, Principles of Accounting, Financial Accounting, Management Accounting, Accounting for Corporate Decisions, Company Law, Taxation, and Entrepreneurship.",
                "publications": ""
            },
            {
                "name": "Md. Hafizur Rahman Khan",
                "designation": "Assistant Professor (Finance)Coordinator, MBA/EMBA Program",
                "profileLink": "https://www.lus.ac.bd/author/hafizur/",
                "email": "hrk5700@gmail.com",
                "phone": "01737401135",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2020/09/Passport-Size-Pic-Copy.JPG-Paint-3D.jpg?fit=690%2C613&ssl=1",
                "qualifications": "",
                "areas": "Academic Qualifications:",
                "publications": ""
            },
            {
                "name": "Md. Abdul Muhith Chowdhury",
                "designation": "Assistant Professor(HRM)",
                "profileLink": "https://www.lus.ac.bd/author/muhith/",
                "email": "muhith@lus.ac.bd",
                "phone": "+8801911528681",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2015/12/Abdul-Muhit-Chy.jpg?fit=236%2C302&ssl=1",
                "qualifications": "",
                "areas": "Human Resource Planning, Graduate Employability, Organization Development, Quality of Work Life, Labour Relations, and Comparative Employment Law.",
                "publications": ""
            },
            {
                "name": "Farhad Hossain",
                "designation": "Assistant Professor(HRM)",
                "profileLink": "https://www.lus.ac.bd/author/farhad/",
                "email": "farhad@lus.ac.bd",
                "phone": "01611504166",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2017/02/IMG_20170119_101518-1-1.jpg?fit=690%2C792&ssl=1",
                "qualifications": "",
                "areas": "MBA from University of Dhaka (Major on HRM)",
                "publications": ""
            },
            {
                "name": "Shahedul Alam Khan",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/shahedul/",
                "email": "shahed@lus.ac.bd",
                "phone": "+8801670565548",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/11/rsz_anm04515.jpg?fit=557%2C524&ssl=1",
                "qualifications": "",
                "areas": "Management; International Management and Strategy",
                "publications": ""
            },
            {
                "name": "Chowdhury Tabassum Shakila",
                "designation": "Assistant Professor (Accounting)(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/tabassum/",
                "email": "tabassum.shakila@lus.ac.bd",
                "phone": "01717567346",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/03/Chowdhury-Tabassum-Shakila.jpg?fit=100%2C105&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Jaynob Sarker",
                "designation": "Assistant Professor (AIS)",
                "profileLink": "https://www.lus.ac.bd/author/jaynob/",
                "email": "jaynobsarker@lus.ac.bd",
                "phone": "01683931272",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/01/pp.jpg?fit=690%2C863&ssl=1",
                "qualifications": "",
                "areas": "Corporate governance, financial disclosure and reporting, forensic accounting and human resource accounting, Accounting Information System, Cost & Management Accounting, Accounting for Corporate Decision",
                "publications": ""
            },
            {
                "name": "Riju Ahmed",
                "designation": "Lecturer (MIS)",
                "profileLink": "https://www.lus.ac.bd/author/riju/",
                "email": "riju_bua@lus.ac.bd",
                "phone": "+8801643480168",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/12/Riju-Ahmed_BuA.jpeg?fit=300%2C300&ssl=1",
                "qualifications": "",
                "areas": "Decision Support Systems, Management Information Systems, Artificial Intelligence, Data Communications, Networking, E-Commerce, Web development, Python, C++, Blockchain, MySQL, HTML, Spreadsheet Analysis (Excel, Access), Data Analysis, System Design, Big data etc.",
                "publications": ""
            }
        ],
        architecture: [
            {
                "name": "Tanjima Siddika Chandni",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/tanjima/"
            },
            {
                "name": "Syed Mohsin Ali",
                "designation": "Assistant Professor & Head (Acting)",
                "profileLink": "https://www.lus.ac.bd/author/mohsin/"
            },
            {
                "name": "Sayed Ahmed",
                "designation": "Assistant Professor(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/sayedahmed/",
                "email": "sayed_arch@lus.ac.bd",
                "phone": "+88-01707219556",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/08/Sayed-Ahmed-scaled.jpg?fit=690%2C920&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Salina Akther",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/salina/",
                "email": "sumi-arcbk@yahoo.com",
                "phone": "01918774428",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2015/11/Salina-Akther.jpg?fit=476%2C566&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md Imtiaz Ahmad",
                "designation": "Lecturer(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/imtiaz/",
                "email": "imtiaz_arch@lus.ac.bd",
                "phone": "+8801683754887",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/02/Edited.jpg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "Spatial Planning, Transit-oriented Development (TOD), and Nature-based Solutions (NbS), with a particular focus on Rethinking the Built Environment and Community-based Planning to enhance Urban Resilience.",
                "publications": ""
            },
            {
                "name": "Farhana Hoque",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/farhana/",
                "email": "farhanahoque_arch@lus.ac.bd",
                "phone": "+8801675972839",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2020/12/Farhana.jpg?fit=681%2C1024&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Burhan Uddin",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/burhan_arch/",
                "email": "burhan_arch@lus.ac.bd",
                "phone": "+8801740994597",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/03/IMG_3664_burhan_arch.jpg?fit=690%2C690&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Arpan Shil",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/arpan/",
                "email": "arpan_arch@lus.ac.bd",
                "phone": "01827879188",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/09/Arpan-Shil.jpg?fit=690%2C827&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            }
        ],
        civil: [
            {
                "name": "Dr. Syeda Zehan Farzana",
                "designation": "Associate Professor, Former Head(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/zehan_farzana/",
                "email": "zehan_farzana@lus.ac.bd",
                "phone": "01911017626",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/09/293056525_5417691724960784_2820053107101837098_n.jpg?fit=690%2C687&ssl=1",
                "qualifications": "",
                "areas": "Exploring and analyzing problems related to probabilistic modelling, complex environmental and climate systems.",
                "publications": ""
            },
            {
                "name": "Sheikh Hefzul Bari",
                "designation": "Assistant Professor(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/bari/",
                "email": "shbari@lus.ac.bd",
                "phone": "01711188073",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/12/Sheikh.jpg?fit=690%2C373&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Amit Chakraborty",
                "designation": "Assistant Professor & Head (Acting)",
                "profileLink": "https://www.lus.ac.bd/author/amit/",
                "email": "amitjoy.ce12@gmail.com",
                "phone": "01719232497",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/03/Amit-Chakraborty.jpg?fit=100%2C105&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Dr. Shabbir Ahmed Osmani",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/osmani/",
                "email": "osmani@lus.ac.bd",
                "phone": "01751-232-163",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/05/Photograph_JPG.jpg?fit=690%2C688&ssl=1",
                "qualifications": "",
                "areas": "Hydrometeorology, Machine Learning, Climate science, Remote Sensing",
                "publications": ""
            },
            {
                "name": "Jafor Ahmed Limon",
                "designation": "Assistant ProfessorAdvisor, Rover Scouts (LU)",
                "profileLink": "https://www.lus.ac.bd/author/limon/",
                "email": "jaforlimon@gmail.com",
                "phone": "+8801737401051",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2018/10/IMG_20181003_062237.jpg?fit=690%2C475&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Nazmun Nahar Papri",
                "designation": "Lecturer (Mathematics)",
                "profileLink": "https://www.lus.ac.bd/author/papri/",
                "email": "npapri21@gmail.com",
                "phone": "01762912958",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2015/11/Nazmun-Nahar-Papri.jpg?fit=459%2C555&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Mominul Islam",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/mominul/",
                "email": "mominul_ce@lus.ac.bd",
                "phone": "+88-01788405033",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/10/17362931_1305950352815683_1380927347827867575_n.jpg?fit=690%2C518&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Golam Shahria Bhuyain",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/golam/",
                "email": "shahria_ce@lus.ac.bd",
                "phone": "01719706550",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/07/MD-Golam-Shahria-Bhuyain.jpg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Naimul Islam",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/naimul/",
                "email": "naimulislam_ce@lus.ac.bd",
                "phone": "01774455922",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/09/1286D787-262F-46D9-94BA-830B63A59983.jpeg?fit=690%2C961&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Tanjila Jahan Khan",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/tanjila/",
                "email": "tanjilajahankhan@gmail.com",
                "phone": "01734804420",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/12/1db03fe8-ebde-438b-8ad2-2baf3ddd9e3a.jpg?fit=690%2C920&ssl=1",
                "qualifications": "",
                "areas": "Conducted courses:",
                "publications": ""
            },
            {
                "name": "A R M Kamruzzaman",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/kamruzzaman/",
                "email": "armkamruzzaman_ce@lus.ac.bd",
                "phone": "01758534638",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/05/01758534638_093713.jpg?fit=690%2C845&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            }
        ],
        eee: [
            {
                "name": "Mrinal Kanti Dhar",
                "designation": "Assistant Professor(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/mrinal/",
                "email": "mrinal054@lus.ac.bd",
                "phone": "+8801719447739",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2016/09/Mrinal-Kanti-Dhar.jpg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "Computer Vision and Image Processing, Medical Image Computing, Pattern Recognition, Application of Artificial Intelligence, Biometric identification system, vision guided robotic system, Embedded System, Electronic Drivers and Controllers.",
                "publications": ""
            },
            {
                "name": "Rafiqul Islam",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/islam/",
                "email": "rafiqulzyl@lus.ac.bd",
                "phone": "+880 1716 446071 (WhatsApp)",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/03/MRI.png?fit=484%2C488&ssl=1",
                "qualifications": "",
                "areas": "Nanostructure Physics and electronics, Optoelectronics, Photovoltaic Materials, Solar cell device simulation",
                "publications": ""
            },
            {
                "name": "Nafis Subhani",
                "designation": "Assistant Professor(On Study Leave)",
                "profileLink": "https://www.lus.ac.bd/author/subhani/",
                "email": "nafis_eee@lus.ac.bd",
                "phone": "+8801679635510",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/01/20241205_113023.jpg?fit=690%2C604&ssl=1",
                "qualifications": "",
                "areas": "Academic Background",
                "publications": ""
            },
            {
                "name": "Md. Niaz Morshedul Haque",
                "designation": "Assistant Professor & Head (Acting)",
                "profileLink": "https://www.lus.ac.bd/author/niaz/",
                "email": "head_eee@lus.ac.bd",
                "phone": "+88-01717255769",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/11/Md.-Niaz-Morshedul-Haque.jpg?fit=100%2C105&ssl=1",
                "qualifications": "",
                "areas": "Educational Details:",
                "publications": ""
            },
            {
                "name": "Md. Tanjimuddin",
                "designation": "Lecturer(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/tanjim/",
                "email": "tanjim0023@gmail.com",
                "phone": "",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2019/05/Md.-Tajimuddin.jpg?fit=407%2C490&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Gulam Mahfuz Chowdhury",
                "designation": "Lecturer(On Study Leave)",
                "profileLink": "https://www.lus.ac.bd/author/gulam/",
                "email": "mahfuz_eee@lus.ac.bd",
                "phone": "",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/11/20230909_120419-scaled.jpg?fit=690%2C690&ssl=1",
                "qualifications": "",
                "areas": "Research Interest:",
                "publications": ""
            },
            {
                "name": "Ishmam Ahmed Chowdhury",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/ishmamahmed/",
                "email": "ishmamahmed_eee@lus.ac.bd",
                "phone": "+88 01723000891",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/11/Passport-Size-Photo-scaled.jpg?fit=690%2C863&ssl=1",
                "qualifications": "",
                "areas": "Education:",
                "publications": ""
            },
            {
                "name": "Shahrin Iqbal",
                "designation": "Lecturer(On Study Leave)",
                "profileLink": "https://www.lus.ac.bd/author/shahrin_eee/",
                "email": "shahrin_eee@lus.ac.bd",
                "phone": "01515231785",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/02/Shahrin-Iqbal.jpeg?fit=690%2C773&ssl=1",
                "qualifications": "",
                "areas": "Optical properties of semiconductor, Photonics , Robotics , Biomedical Engineering",
                "publications": ""
            },
            {
                "name": "Dipayon Kumar Sikder",
                "designation": "Lecturer(On Study Leave)",
                "profileLink": "https://www.lus.ac.bd/author/dipayon/",
                "email": "dipayon_eee@lus.ac.bd",
                "phone": "01521460068",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/02/dipayon-003.jpg?fit=690%2C666&ssl=1",
                "qualifications": "",
                "areas": "Academic Background:",
                "publications": ""
            },
            {
                "name": "Mirza Md. Mahbubur Rahman",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/mirza/",
                "email": "mahbub_eee@lus.ac.bd",
                "phone": "01300996401",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/01/Mirza-Mahbub_eee.jpg?fit=690%2C565&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Kulsuma Khanum",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/kulsuma/",
                "email": "kulsuma_eee@lus.ac.bd",
                "phone": "01632691527",
                "image": "https://secure.gravatar.com/avatar/f07ff43335ef85945e0b3597c5c6ab25?s=1024&d=mm&r=g",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "S. M. Tanbinul Hoque",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/hoque/",
                "email": "tanbin_eee@lus.ac.bd",
                "phone": "01821015189",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/08/Tanbirul-Haque.jpg?fit=690%2C827&ssl=1",
                "qualifications": "",
                "areas": "Academic Background",
                "publications": ""
            },
            {
                "name": "Sanzida Ahmed Shorna",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/sanzida/",
                "email": "sanzidasharna_eee@lus.ac.bd",
                "phone": "01747303957",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/10/Sanjida-Akter.jpg?fit=505%2C610&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Milon Khan",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/milon/",
                "email": "milon_eee@lus.ac.bd",
                "phone": "01749432717",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/10/Milon-Khan.jpg?fit=505%2C610&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Faiyaj Ahmed Limon",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/faiyaj/",
                "email": "faiyaj_eee@lus.ac.bd",
                "phone": "01787152214",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/10/Faiyaj-Ahmed-Limon.jpg?fit=505%2C610&ssl=1",
                "qualifications": "",
                "areas": "Academic Background",
                "publications": ""
            },
            {
                "name": "Md. Salauddin",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/salauddin/",
                "email": "salauddin_eee@lus.ac.bd",
                "phone": "01779907946",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/10/Md.-Salauddin.jpg?fit=505%2C610&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            }
        ],
        english: [
            {
                "name": "Dr. Md. Rezaul Karim",
                "designation": "Associate Professor & Director, IQAC, LU",
                "profileLink": "https://www.lus.ac.bd/author/tahrez2005/",
                "email": "reza@lus.ac.bd",
                "phone": "01711467396",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/07/R-1.1.1.jpg?fit=690%2C936&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Rumpa Sharmin",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/rushmin-bd/",
                "email": "rumpasharmin@lus.ac.bd",
                "phone": "01711147833",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2020/05/IMG-20190214-WA0027-e1589411683362.jpg?fit=690%2C460&ssl=1",
                "qualifications": "",
                "areas": "William Shakespeare",
                "publications": ""
            },
            {
                "name": "Mrs. Manfath Jabin Haque",
                "designation": "Assistant Professor(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/manfath/",
                "email": "manfath@gmail.com",
                "phone": "01916100250",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2015/11/manfath-jabin-hauqe0005.jpg?fit=122%2C149&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Shammi Akter",
                "designation": "Assistant Professor & Head (Acting)",
                "profileLink": "https://www.lus.ac.bd/author/shammi/",
                "email": "shammiakter@lus.ac.bd",
                "phone": "01674764323",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/12/IMG_20211216_205627.jpg?fit=690%2C855&ssl=1",
                "qualifications": "",
                "areas": "Post Colonial Literature Contemporary English Literature",
                "publications": ""
            },
            {
                "name": "Ms. Touhida Sultana",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/touhida/",
                "email": "touhida@lus.ac.bd",
                "phone": "01911243565",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2015/11/Touhida-Sultana.jpg?fit=446%2C531&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Ashfaque Ahmad Shovon",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/ashfaque/",
                "email": "ashfaqueshovon_eng@lus.ac.bd",
                "phone": "01619835466",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/11/Ashfaque-Ahmad-Shovon.jpg?fit=690%2C827&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Anam Ahmed",
                "designation": "Lecturer(On study leave)",
                "profileLink": "https://www.lus.ac.bd/author/anam/",
                "email": "anam_eng@lus.ac.bd",
                "phone": "01625141600",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2020/01/Anam-Ahmed.jpg?fit=462%2C588&ssl=1",
                "qualifications": "",
                "areas": "Anam Ahmed received his M. A. in English Literature from English Discipline, Khulna University and a B. A. (Hon’s) in English Language and Literature from Jatiya Kabi Kazi Nazrul Islam University. His research interests include Technology, Business Communication, Professional English, Phonetics, Classic Literature, Bangla Literature, Environmental Literacy, Psychology, Anthropology, ELT, TESOL, SLA, Applied Linguistics and Social Emotional Learning (SEL).",
                "publications": ""
            },
            {
                "name": "Nadia Sultana Daijy",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/daijy/",
                "email": "nadia_eng@lus.ac.bd",
                "phone": "01785662971",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/08/IMG_20230817_222322.jpg?fit=648%2C485&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Ali Omar",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/ali/",
                "email": "aliomar_eng@lus.ac.bd",
                "phone": "01538203757",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/09/Ali-Omar.jpg?fit=690%2C827&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Syeda Nazia Mahbuba",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/syeda/",
                "email": "snazia_eng@lus.ac.bd",
                "phone": "01790301830",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/20250213_210027.jpg?fit=690%2C863&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Omme Kulsum Mili",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/omme/",
                "email": "mili_eng@lus.ac.bd",
                "phone": "01776689260",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/09/Omme-Kulsum-Mili.jpg?fit=690%2C827&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Humaira Mizan",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/humaira/",
                "email": "humaira_eng@lus.ac.bd",
                "phone": "01685563318",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/FDC3AA0F-173A-49D8-8078-4431155498E3.jpeg?fit=690%2C920&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Sanjida Haq",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/sajida/",
                "email": "sanjida_eng@lus.ac.bd",
                "phone": "01867473283",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/05/Sanjida-Haq.jpeg?fit=690%2C709&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            }
        ],
        law: [
            {
                "name": "Abdullah Al- Mamun",
                "designation": "Assistant Professor & Head (Acting)Ex- Member of the Proctorial Body of LU, Ex- Advisor of the LU Cultural Club (LUCC)",
                "profileLink": "https://www.lus.ac.bd/author/mamundu201/",
                "email": "mamundu201@gmail.com",
                "phone": "+8801716604241",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2020/04/DSC_0007.jpg?fit=472%2C591&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Mr. Asraf Uddin",
                "designation": "LecturerAssistant Proctor, LU Undergraduate Program Coordinator.",
                "profileLink": "https://www.lus.ac.bd/author/asraf/",
                "email": "asrafuddin@lus.ac.bd",
                "phone": "015 2010 3242",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/IMG_20250206_200244.jpg?fit=638%2C723&ssl=1",
                "qualifications": "",
                "areas": "Labour Law, Land Law, Property Law and Criminal Law.",
                "publications": ""
            },
            {
                "name": "Ms. Sabera Sultana",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/lopa/",
                "email": "sabera@lus.ac.bd",
                "phone": "01314200330",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2018/05/image1-1.jpeg?fit=690%2C855&ssl=1",
                "qualifications": "",
                "areas": "Published Articles:",
                "publications": ""
            },
            {
                "name": "Md. Rezaul Karim",
                "designation": "LecturerFormer Assistant Proctor, LU",
                "profileLink": "https://www.lus.ac.bd/author/karim/",
                "email": "kazirezadu@gmail.com",
                "phone": "01734359534",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2019/07/IMG_1922.jpg?fit=205%2C256&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Ansar Uddin",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/ansaruddin/",
                "email": "ansaruddin_law@lus.ac.bd",
                "phone": "+8801843-684695",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/03/IMG_9164-scaled-e1742272453111.jpg?fit=690%2C787&ssl=1",
                "qualifications": "",
                "areas": "Conducted Courses:",
                "publications": ""
            },
            {
                "name": "Khandaker Shariful Islam",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/shariful/",
                "email": "shariful_law@lus.ac.bd",
                "phone": "01521205742",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/02/20250218_172536-scaled.jpg?fit=690%2C920&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Momin Hossain",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/momin/",
                "email": "momin_law@lus.ac.bd",
                "phone": "01833008031",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2024/10/IMG-20240902-WA0000.jpg?fit=300%2C300&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Promit Dipto Biswas",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/promit/",
                "email": "promitdeiptobiswas@gmail.com",
                "phone": "01636666333",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2025/03/Promit-Dipto-Biswas.jpg?fit=505%2C610&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            }
        ],
        islamicStudies: [
            {
                "name": "Dr. Fazly Ealahi Mamun",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/mamun/",
                "email": "fazlyealahimamun@lus.ac.bd",
                "phone": "01712153905/01612153905",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2015/11/Fazly-Ealahi-Mamun.jpg?fit=464%2C584&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Dr. Md. Ziaur Rahman",
                "designation": "Assistant ProfessorHead (Acting)",
                "profileLink": "https://www.lus.ac.bd/author/ziaur/",
                "email": "head_ist@lus.ac.bd",
                "phone": "01715610866",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2015/11/Ziaur-Rahman.jpg?fit=463%2C580&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Mamunor Rashid",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/mamunor/",
                "email": "mamun_ist@lus.ac.bd",
                "phone": "01728113929",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/03/Md.-Mamunor-Rashid.jpg?fit=690%2C827&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Abul Kalam Azad",
                "designation": "Lecturer",
                "profileLink": "https://www.lus.ac.bd/author/abul/",
                "email": "kalam_ist@lus.ac.bd",
                "phone": "01716847584",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2019/09/Abul-Kalam-Azad.jpg?fit=431%2C503&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            }
        ],
        publicHealth: [
            {
                "name": "Dr. Md. Abul Mozid Miah",
                "designation": "Professor & Head",
                "profileLink": "https://www.lus.ac.bd/author/mozid/",
                "email": "dr.amozid@gmail.com",
                "phone": "01712824341",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/11/Abul-Mozid-Miah.jpeg?fit=180%2C195&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Musa. Halima Begum",
                "designation": "Associate Professor",
                "profileLink": "https://www.lus.ac.bd/author/halima/",
                "email": "musa.halimabegum@yahoo.com",
                "phone": "01913946475",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/03/Musa.-Halima-Begum.jpg?fit=100%2C105&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Rashidul Hasan",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/rashidul/",
                "email": "rashidulhasan@lus.ac.bd",
                "phone": "01728885514",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/11/RH-Pic.jpg?fit=514%2C646&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Dr. Sabrina Farida Chowdhury",
                "designation": "LecturerTeam Leader,Emergency Medical Response Team",
                "profileLink": "https://www.lus.ac.bd/author/sabrina/",
                "email": "dr.sabrinachowdhury@lus.ac.bd",
                "phone": "",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2019/01/28958967_10204132639672759_7982324112640966656_n.jpg?fit=312%2C440&ssl=1",
                "qualifications": "",
                "areas": "Dentistry,Public Health",
                "publications": ""
            }
        ],
        thm: [
            {
                "name": "Md. Mahbubur Rahaman",
                "designation": "Associate ProfessorHead",
                "profileLink": "https://www.lus.ac.bd/author/mahbub9305/",
                "email": "mahbub9305@gmail.com",
                "phone": "01717019305",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2018/09/DSC00856-copy.jpg?fit=461%2C579&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Asraful Islam Chowdhury",
                "designation": "Assistant Professor(Management)",
                "profileLink": "https://www.lus.ac.bd/author/asraful/",
                "email": "ashrafulchowdhury@lus.ac.bd",
                "phone": "01823152929",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-03-at-9.10.36-PM-1.jpeg?fit=690%2C902&ssl=1",
                "qualifications": "",
                "areas": "Management, International Business Management, Total Quality Management, and Soft Skills & Leadership Development",
                "publications": ""
            },
            {
                "name": "Ms. Juhora Jamin Juha",
                "designation": "Assistant Professor",
                "profileLink": "https://www.lus.ac.bd/author/jaminjuha/",
                "email": "jamin_3011@lus.ac.bd",
                "phone": "01775099906",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2019/06/IMG_20190218_115557.jpg?fit=690%2C602&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Sajadul Islam Sarker",
                "designation": "Assistant Professor (Finance)",
                "profileLink": "https://www.lus.ac.bd/author/sajadul/",
                "email": "sajadul@lus.ac.bd",
                "phone": "01725356173",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/10/pic.jpg?fit=288%2C315&ssl=1",
                "qualifications": "",
                "areas": "Principles of Finance, Bank Management , Financial Management, Financial Market and Institution, Working Capital Management, Corporate Finance, Public Finance, Retailed and E-Banking, Small & Medium Enterprise and Micro –Financing, Financial Derivatives, Bank Fund Management, Islamic Banking and Finance .",
                "publications": ""
            },
            {
                "name": "Iehit Sharma",
                "designation": "Lecturer (Accounting)",
                "profileLink": "https://www.lus.ac.bd/author/iehit/",
                "email": "iehitnipu09@lus.ac.bd",
                "phone": "01819848464",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2021/03/Iehit-Sharma.jpg?fit=100%2C105&ssl=1",
                "qualifications": "",
                "areas": "",
                "publications": ""
            },
            {
                "name": "Md. Abdul Halim",
                "designation": "LecturerAdvisor, Leading University Tourist Club (LUTC)",
                "profileLink": "https://www.lus.ac.bd/author/abdul/",
                "email": "halim@lus.ac.bd",
                "phone": "01817184947",
                "image": "https://i0.wp.com/www.lus.ac.bd/wp-content/uploads/2022/06/Passport-size-photo.jpg?fit=591%2C709&ssl=1",
                "qualifications": "",
                "areas": "Tourism Fundamentals, Sustainable Tourism, Tourism Planning, Travel Agency Measurements.",
                "publications": ""
            }
        ]
    };

    useEffect(() => {
        // Animation setup similar to previous version
        const animateElement = (element, props, options = {}) => {
            if (!element) return;

            const keyframes = [];
            const fromProps = {};
            const toProps = {};

            Object.keys(props).forEach(key => {
                if (key === 'opacity') {
                    fromProps.opacity = element.style.opacity || 0;
                    toProps.opacity = props[key];
                } else if (key === 'y') {
                    fromProps.transform = `translateY(${props[key] < 0 ? props[key] : 50}px)`;
                    toProps.transform = 'translateY(0px)';
                } else if (key === 'x') {
                    fromProps.transform = `translateX(${props[key]}px)`;
                    toProps.transform = 'translateX(0px)';
                }
            });

            keyframes.push(fromProps, toProps);

            return element.animate(keyframes, {
                duration: options.duration || 600,
                easing: options.easing || 'ease-out',
                fill: 'forwards',
                delay: options.delay || 0
            });
        };

        // Initial animation sequence
        setTimeout(() => {
            animateElement(titleRef.current, { opacity: 1, y: 0 }, { duration: 800 });
        }, 100);

        setTimeout(() => {
            animateElement(subtitleRef.current, { opacity: 1, y: 0 }, { duration: 600 });
        }, 300);

        setTimeout(() => {
            animateElement(homeIconRef.current, { opacity: 1, y: 0 }, { duration: 600 });
        }, 500);

        setTimeout(() => {
            animateElement(sidebarRef.current, { opacity: 1, x: 0 }, { duration: 800 });
        }, 700);

        setTimeout(() => {
            animateElement(contentRef.current, { opacity: 1, y: 0 }, { duration: 600 });
        }, 1000);
    }, []);

    const departments = [
        { id: 'cse', name: "Computer Science and Engineering", icon: "💻" },
        { id: 'bba', name: "Business Administration", icon: "📊" },
        { id: 'eee', name: "Electrical and Electronics Engineering", icon: "⚡" },
        { id: 'civil', name: "Civil Engineering", icon: "🏗️" },
        { id: 'architecture', name: "Architecture", icon: "🏛️" },
        { id: 'thm', name: "Tourism and Hospitality Management", icon: "🏨" },
        { id: 'english', name: "English", icon: "📚" },
        { id: 'law', name: "Law", icon: "⚖️" },
        { id: 'islamicStudies', name: "Islamic Studies", icon: "🕌" },
        { id: 'publicHealth', name: "Public Health", icon: "🏥" }
    ];

    const handleNavClick = (deptId) => {
        setActiveTab(deptId);
        setSelectedTeacher(null);
    };

    const handleTeacherClick = (teacher) => {
        setSelectedTeacher(teacher);
    };

    const getCurrentFaculty = () => {
        return facultyData[activeTab] || [];
    };

    const getCurrentDepartment = () => {
        return departments.find(d => d.id === activeTab);
    };

    return (
        <div className='bg-white text-black min-h-screen relative'>
            {/* Enhanced Header */}
            <div ref={headerRef} className='bg-gradient-to-r from-[#023020] to-[#034830] text-white py-12 md:py-20 px-6 md:px-16 relative overflow-hidden'>
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-xl"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-xl"></div>
                </div>

                <div className='flex justify-between items-center relative z-10'>
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="text-4xl md:text-5xl text-white/80">🎓</div>
                            <div>
                                <h2 ref={titleRef} className='text-3xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent' style={{ opacity: 0, transform: 'translateY(50px)' }}>
                                    Faculty Directory
                                </h2>
                                <p ref={subtitleRef} className='text-lg md:text-xl font-light text-white/80 mt-2' style={{ opacity: 0, transform: 'translateY(50px)' }}>
                                    Meet our distinguished faculty members
                                </p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <Link to={'/'}>
                            <button>
                                <div ref={homeIconRef} className='bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20' style={{ opacity: 0, transform: 'translateY(50px)' }}>
                                    <div className='text-2xl md:text-3xl text-white'>🏠</div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Enhanced Layout */}
            <div className="flex bg-white">
                {/* Sidebar */}
                <div ref={sidebarRef} className="bg-white min-h-screen w-80 shadow-xl border-r border-gray-200 hidden lg:block" style={{ opacity: 0, transform: 'translateX(-100px)' }}>
                    <div className='bg-gradient-to-r from-[#455A64] to-[#546E7A] text-white text-center p-6 shadow-lg'>
                        <h6 className='text-xl font-bold flex items-center justify-center gap-2'>
                            <span className="text-2xl">🎓</span>
                            Departments
                        </h6>
                    </div>

                    <div className="p-4 space-y-2">
                        {departments.map((dept) => (
                            <button
                                key={dept.id}
                                onClick={() => handleNavClick(dept.id)}
                                className={`
                                    group flex items-center gap-4 p-4 rounded-xl transition-all duration-300 border-2 border-transparent w-full text-left
                                    ${activeTab === dept.id
                                        ? 'bg-gradient-to-r from-[#023020] to-[#034830] text-white shadow-lg transform scale-105'
                                        : 'bg-white text-gray-700 hover:bg-gray-50 hover:border-[#023020]/20 hover:shadow-md'
                                    }
                                `}
                            >
                                <span className="text-2xl">{dept.icon}</span>
                                <span className="font-medium text-sm leading-tight flex-1">{dept.name}</span>
                                <div className="transition-transform duration-300 group-hover:translate-x-1 text-sm">→</div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Main Content */}
                <div ref={contentRef} className="flex-1 bg-gradient-to-br from-gray-50 to-white min-h-screen" style={{ opacity: 0, transform: 'translateY(30px)' }}>
                    <div className="p-8 md:px-14">
                        {getCurrentDepartment() && (
                            <div className="mb-8">
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="text-6xl">{getCurrentDepartment().icon}</span>
                                    <div>
                                        <h1 className="text-4xl font-bold text-[#023020] mb-2">{getCurrentDepartment().name}</h1>
                                        <p className="text-gray-600">Faculty Members ({getCurrentFaculty().length})</p>
                                    </div>
                                </div>

                                <div className="grid gap-6">
                                    {getCurrentFaculty().length > 0 ? (
                                        getCurrentFaculty().map((teacher) => (
                                            <FacultyCard
                                                key={teacher.id}
                                                teacher={teacher}
                                                onClick={() => handleTeacherClick(teacher)}
                                            />
                                        ))
                                    ) : (
                                        <div className="text-center py-12">
                                            <div className="text-6xl mb-4">👨‍🏫</div>
                                            <p className="text-gray-500 text-lg">No faculty members available for this department</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Faculty Detail Modal */}
            {selectedTeacher && (
                <FacultyDetail
                    teacher={selectedTeacher}
                    onClose={() => setSelectedTeacher(null)}
                />
            )}
        </div>
    );
};

export default Faculty;