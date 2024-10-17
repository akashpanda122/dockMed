import Image from 'next/image';
import { RxAvatar } from 'react-icons/rx';
//import MedxApp from '../../../public/assets/MedxApp.png';
import Link from 'next/link';

const doctorDetails = [
    {
        avatar: <RxAvatar size={100} />,
        name: 'Dr. Emily Watson',
        short_desc: 'Cardiologist with 10+ years of experience in treating heart-related conditions',
        desc: 'Dr. Emily Watson is a board-certified cardiologist specializing in heart disease prevention, diagnosis, and treatment. She has successfully managed complex cases of hypertension, arrhythmia, and heart failure. Dr. Watson is known for her compassionate patient care and uses the latest diagnostic tools to ensure effective treatment.',
        language: 'English',
        education: 'MD - Cardiology, Harvard Medical School',
        fees: '$150',
        hospitals: 'Mercy General Hospital, Heart Care Clinic',
    },
    {
        avatar: <RxAvatar size={100} />,
        name: 'Dr. John Mitchell',
        short_desc: 'Orthopedic Surgeon with expertise in joint replacement and sports injuries',
        desc: 'Dr. John Mitchell is a leading orthopedic surgeon with over 12 years of experience in joint reconstruction, trauma surgery, and sports injury management. His patients commend his meticulous surgical approach and comprehensive post-operative care. Dr. Mitchell is committed to helping patients regain mobility and improve their quality of life.',
        language: 'English',
        education: 'MS - Orthopedics, Johns Hopkins University',
        fees: '$200',
        hospitals: 'City Orthopedic Center, Sports Medicine Institute',
    },
    {
        avatar: <RxAvatar size={100} />,
        name: 'Dr. Priya Sharma',
        short_desc: 'Pediatrician focused on child health and development. Specialized in the physical, mental and emotional well-being of children from infancy to adolescence',
        desc: 'Dr. Priya Sharma is a highly experienced pediatrician who has dedicated her career to improving children’s health and well-being. With over 8 years of experience, she specializes in treating childhood illnesses, monitoring developmental milestones, and providing preventive healthcare. Parents appreciate her warm and patient approach to caring for their children.',
        language: 'English, Hindi',
        education: 'MBBS, AIIMS Delhi',
        fees: '$100',
        hospitals: 'Sunshine Children’s Hospital, Kids Care Clinic',
    },
    {
        avatar: <RxAvatar size={100} />,
        name: 'Dr. Richard Lee',
        short_desc: 'Dermatologist with specialization in cosmetic and medical dermatology.',
        desc: 'Dr. Richard Lee is an expert in both medical and cosmetic dermatology, treating conditions such as acne, eczema, and skin cancer. He also offers cosmetic services, including laser treatments, anti-aging therapies, and chemical peels. With over 15 years of practice, Dr. Lee is known for personalized treatments and exceptional results.',
        language: 'English',
        education: 'MD - Dermatology, Stanford University',
        fees: '$180',
        hospitals: 'Skin Health Center, Aesthetic Dermatology Clinic',
    },
];

const page = () => {
    return (
        <div className="flex ">
            <div className="w-[70%] ">
                {doctorDetails.map(
                    (
                        {
                            avatar,
                            name,
                            short_desc,
                            language,
                            desc,
                            education,
                            hospitals,
                            fees,
                        },
                        index
                    ) => {
                        return (
                            <div
                                key={index}
                                className="border-y py-9 flex items-center justify-center gap-10"
                            >
                                {avatar}
                                <div>
                                    <div className="text-blue-500 text-lg">
                                        {name}
                                    </div>
                                    <div className="text-sm text-slate-500 font-light">
                                        {education}
                                    </div>
                                    <div className="font-light">
                                        {short_desc}
                                    </div>
                                    <div className="font-light">
                                        {hospitals}
                                    </div>
                                    <div className="font-light">
                                        {fees} Consultation fee at clinic
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2 items-center justify-center">
                                    <div className="text-sm font-light flex items-center justify-center">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="size-6"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                                            />
                                        </svg>
                                        Available Tomorrow
                                    </div>
                                    <div>
                                        {' '}
                                        <Link
                                            href={'/doctor/shikha'}
                                            className="group/button relative inline-flex flex-col items-center justify-center overflow-hidden rounded-md bg-[#52D2CF] px-4 py-1.5 text-xs font-normal text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#7cc2c1] "
                                        >
                                            <span className="text-sm">
                                                Book CLinic Visit
                                            </span>
                                            <span className="">
                                                No Booking Fee
                                            </span>
                                            <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                                                <div className="relative h-full w-8 bg-white/20" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div>
                                        <button className="group/button  relative overflow-hidden rounded-md border border-[#52D2CF] bg-white px-4 py-1 text-xs font-medium text-[#157D7A] transition-all duration-150 hover:border-[#1a3d3c] active:scale-95">
                                            <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-[#4ab7b3] to-[#19d5cf] transition-all duration-500 group-hover/button:h-full" />
                                            <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
                                                Book Video Consult
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
            <div className="flex flex-col w-[30%] items-center p-8 m-2">
                <h1 className="text-lg font-medium">
                    Connect with doctors online, available 24/7,
                    <br /> from the comfort of your home.
                </h1>
                {/*<Image src={MedxApp} alt="medxApp" width={800} />*/}
            </div>
        </div>
    );
};

export default page;