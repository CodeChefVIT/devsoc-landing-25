// src/app/sponsors/page.tsx
"use client";
import Card from "@/components/Card";
import { useState } from "react";
import orkesImage from "@/assets/images/Orkes.png";  // Import the image
import talentImage from "@/assets/images/Talent.png";
import beyosImage from "@/assets/images/beyos.png";
import { StaticImageData } from "next/image";

interface Sponsor {

    image: StaticImageData | string;
    url: string;
}

export default function Sponsors() {
    const [sponsors,] = useState<Sponsor[]>([
        { image: orkesImage, url: "https://www.orkes.io/" },
        { image: talentImage, url: "https://www.talentrecruit.com/" },
        {  image: beyosImage, url: "https://beyondsustainability.in/" },
    ]);

    return (
        <div className="mt-8 bg-cover bg-no-repeat min-h-screen">
            <h1 className="font-yerk text-[35px] sm:text-[75px] lg:text-left sm:p-14 pb-12 pt-4 text-black text-center">
                Sponsors
            </h1>
            <div className="flex flex-wrap justify-center gap-10 pb-8">
                {sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className="w-[50%] flex justify-center sm:w-[32%] "
                    >
                        <Card  image={sponsor.image} url={sponsor.url} />
                    </div>
                ))}
            </div>
        </div>
    );
}