import { DatePickerWithPresets } from '@/app/components/ui/DatePicker';
import Dropdown from '@/app/components/ui/Dropdown';
import Modal from '@/app/components/ui/Modal';
import { RadioGroupDemo } from '@/app/components/ui/RadioButton/radioButton';
import { DOCTOR_PROFILE } from '@/config';
import usdcLogo from '../../../../../public/assets/usdcLogo.png';
import Image from 'next/image';
import Doctor from '../../../../../public/assets/doctor.jpg';
import { GraduationCap, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DoctorProfile = () => {
    const reason = [
        { id: 1, name: 'Wound Care' },
        { id: 2, name: 'Hypertension' },
        { id: 3, name: 'Injury' },
        { id: 4, name: 'Orthopedic' },
    ];

    return (
        <div className='p-5 md:px-20'>
            <h2 className='font-bold text-[22px]'>Details</h2>
            <div className="grid grid-cols-1">
                {DOCTOR_PROFILE.map(
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
                    ) => (
                        <>
                            <div
                                key={index}
                                className="col-span-3 grid grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-lg"
                            >
                                {/* Doctor Image */}
                                <div className="flex items-center gap-x-4">
                                    <Image 
                                        src={Doctor}
                                        width={200}
                                        height={200}
                                        alt='doctor-image'
                                        className='rounded-lg w-full h-[280px] object-cover'
                                    />
                                    {/*avatar*/}
                                    {/*<div className="text-sm text-gray-600">
                                        <div className="text-xl font-semibold">
                                            {name}
                                        </div>
                                        <p>{short_desc}</p>
                                        <div>{language}</div>
                                    </div>*/}
                                </div>

                                {/* Doctor info */}
                                <div className='col-span-2 mt-5 md:px-10 flex flex-col gap-3 items-baseline'>
                                    <h2 className='font-bold text-2xl'>{name}</h2>
                                    <h2 className='flex gap-2 text-gray-500 text-md'>
                                        <GraduationCap />
                                        <span>{education}</span>
                                    </h2>
                                    <h2 className='text-md flex gap-2 text-gray-500'>
                                        <MapPin />
                                        <span>{hospitals}</span>
                                    </h2>

                                    <div className="text-md text-bold text-gray-600">
                                        Fees
                                        <p className="text-sm font-normal flex gap-1">
                                            {fees}
                                            <Image
                                                src={usdcLogo}
                                                alt="usdclogo"
                                                width={20}
                                                height={10}
                                            />
                                        </p>
                                    </div>

                                    <h2 className='text-[10px] bg-blue-100 p-1 rounded-full px-2 text-[#0A6EFF]'>
                                        {language}
                                    </h2>
                                    <Button className=' bg-[#0A6EFF] mt-3 rounded-full '>Book Appointment</Button>
                                </div>
                                
                                
                            </div>

                            {/* About Doctor */}
                            <div className='p-3 border-[1px] rounded-lg mt-5'>
                                <h2 className='font-bold text-[20px]'>About Me</h2>
                                <p className='text-gray-500 tracking-wide mt-2'>{desc}</p>
                            </div>
                                
                            {/*<div className="pt-10 font-semibold">
                                <div className="border-b border-gray-300">
                                    About
                                </div>
                                <div className="pt-5 text-md text-gray-600">
                                    About {name}
                                    <p className="text-sm font-normal pt-5">
                                        {desc}
                                    </p>
                                </div>
                                <div className="py-5 text-md text-gray-600">
                                    Education
                                    <p className="text-sm font-normal">
                                        {education}
                                    </p>
                                </div>
                                <div className="text-md text-gray-600">
                                    Hospital Affiliations
                                    <p className="text-sm font-normal">
                                        {hospitals}
                                    </p>
                                </div>
                                <div className="text-md  text-gray-600 pt-5">
                                    Fees
                                    <p className="text-sm font-normal flex gap-1">
                                        {fees}
                                        <Image
                                            src={usdcLogo}
                                            alt="usdclogo"
                                            width={20}
                                            height={10}
                                        />
                                    </p>
                                </div>
                            </div>*/}
                        </>
                    )
                )}


            </div>

            <div className="col-span-2 mt-5">
                    <div className="text-2xl font-semibold">
                        Book an Appointment
                    </div>
                    <div className="mt-5 p-10 shadow-xl rounded-xl">
                        <div className="flex items-center justify-between text-gray-600 text-sm">
                            <div className="">
                                Have you visited this provider/practice before? *
                                <RadioGroupDemo />
                            </div>
                            <div>
                                Appointment reason*
                                <div className="pt-5">
                                    <Dropdown data={reason} />
                                </div>
                            </div>
                        </div>
                        <div className=" p-5 my-5 rounded-xl border-2">
                            <div className="flex">
                                <DatePickerWithPresets />
                            </div>
                        </div>
                        <div className="ml-auto w-fit">
                            <Modal />
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default DoctorProfile;