'use client';
import {
    AuthCard,
    useAccount,
    useSmartAccountClient,
} from '@account-kit/react';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperImage1 from '../../public/assets/swiper-1.png';
import SwiperImage2 from '../../public/assets/swiper-2.png';
import SwiperImage3 from '../../public/assets/swiper-3.png';
import SlightFlip from './components/ui/SlightFlip';
export default function Home() {
    const searchParams = useSearchParams();
    const searchId = searchParams?.get('orgId');
    const router = useRouter();

    const { address } = useSmartAccountClient({
        type: 'LightAccount',
    });
    const { isLoadingAccount } = useAccount({
        type: 'LightAccount',
    });
    React.useLayoutEffect(() => {
        if (address && searchId) {
            router.replace('/home');
        }
    }, [address, searchId]);
    const swiperConfig = [
        {
            title: 'Customizable Health Records',
            desc: 'Supports comprehensive patient records, including medical history, prescriptions, diagnostics, and treatment plans, all customizable to individual healthcare provider needs.',
            image: SwiperImage1,
        },
        {
            title: 'Real-Time Updates',
            desc: 'Facilitates real-time updates on patient data, allowing healthcare teams to collaborate seamlessly, improving patient outcomes.',
            image: SwiperImage2,
        },
        {
            title: 'Analytics & Reporting',
            desc: 'Provides detailed analytics on patient data and care trends, helping healthcare providers make informed decisions.',
            image: SwiperImage3,
        },
        {
            title: 'Multi-Layered Security',
            desc: 'Employs encryption, role-based access, and secure login protocols to protect sensitive patient information.',
            image: SwiperImage3,
        },
    ];

    return (
        <main className="grid grid-cols-2 h-full py-10 px-2">
            <Swiper
                modules={[Autoplay]}
                className="h-full w-full "
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                loop={true}
            >
                {swiperConfig.map((elem, index) => (
                    <SwiperSlide key={index}>
                        <div className="">
                            <Image
                                src={elem.image}
                                alt="images"
                                height={500}
                                width={500}
                                className="mx-auto"
                            />
                            <div className="font-bold pt-8 pb-4 text-xl">
                                {elem.title}
                            </div>
                            <p className="text-sm w-4/6">{elem.desc}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="bg-background shadow-xl rounded-xl p-5 text-primary-foreground w-5/6 ml-auto">
                {isLoadingAccount ? (
                    <SlightFlip
                        className="text-4xl font-bold tracking-[-0.1em] text-black md:leading-[5rem]"
                        word="Welcome to DocMed"
                    />
                ) : (
                    <AuthCard />
                )}
            </div>

        </main>
    );
}