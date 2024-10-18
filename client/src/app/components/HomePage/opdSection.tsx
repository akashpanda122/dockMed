import React from 'react';
import {
    cardiologyImg,
    dentalImg,
    stomach,
    generalImg,
    neurologyImg,
    orthopedicImg,
    otologyImg,
} from '../../../../public/assets/index';
import Image from 'next/image';
import Link from 'next/link';

const opds = [
    {
        id: 1,
        opdName: 'General Doctor',
        image: generalImg,
    },
    {
        id: 2,
        opdName: 'Cardiologist',
        image: cardiologyImg,
    },
    {
        id: 3,
        opdName: 'Dentist',
        image: dentalImg,
    },
    {
        id: 4,
        opdName: 'Orthopedic',
        image: orthopedicImg,
    },
    {
        id: 5,
        opdName: 'Neurologist',
        image: neurologyImg,
    },
    {
        id: 6,
        opdName: 'Otology',
        image: otologyImg,
    },
    {
        id: 7,
        opdName: 'Gastrology',
        image: stomach,
    },
];

const OpdSelection = () => {
    return (
        <div className=" w-full  flex flex-col gap-10">
            <div className="flex  justify-between items-center">
                <div className="space-y-2">
                    <h1 className="text-xl font-bold sm:text-2xl">
                        Get expert medical advice from top doctors, anytime,
                        anywhere.
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Secure online sessions with verified doctors in every
                        specialty.
                    </p>
                </div>{' '}
                <Link href="/doctors">
                    <button className="group/button  relative overflow-hidden rounded-full border border-[#0A6EFF] bg-white px-4 py-1 text-sm font-medium text-[#0A6FEE] transition-all duration-150 hover:bg-[#0A6EFF] hover:text-white active:scale-95">
                        <span className="absolute bottom-0 left-0 z-0 h-0 w-full bg-gradient-to-t from-[#0A6EFF] to-[#0A6EFF] transition-all duration-500 group-hover/button:h-full" />
                        <span className="relative z-10 transition-all duration-500 group-hover/button:text-white">
                            Explore All Specialties
                        </span>
                    </button>
                </Link>
            </div>
            <div className="grid grid-cols-3 mt-5 md:grid-cols-4 lg:grid-cols-4">
                {opds.map((opd) => {
                    return (
                        <div
                            key={opd.id}
                            className="flex flex-col text-center items-center p-5 bg-blue-50 m-2 rounded-lg cursor-pointer gap-2 hover:scale-110 transition-all ease-in-out"
                        >
                            <Image
                                src={opd.image}
                                alt={opd.opdName}
                                className=""
                                width={100}
                                height={100}
                            />
                            <label className="text-blue-600 text-sm">{opd.opdName}</label>
                            <Link href="/doctors">
                                <h2 className="p-2 px-3 border-[1px] border-[#0A6EFF] text-[#0A6FEE] rounded-full w-full text-center text-[11px] mt-2 cursor-pointer hover:bg-[#0A6EFF] hover:text-white">
                                        BOOK NOW
                                </h2>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default OpdSelection;