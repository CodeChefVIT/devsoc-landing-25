"use client";
import Card from "@/components/Card";
import { useState } from "react";

interface Sponsor {
    name: string;
    image: string;
}

export default function Sponsors() {
    const [sponsors,] = useState<Sponsor[]>([
        { name: "sponsor 1", image: "" },
        { name: "sponsor 2", image: "" },
        { name: "sponsor 3", image: "" },
    ]);

    return (
            <div className="bg-cover bg-no-repeat min-h-screen">
            <h1 className="font-yerk text-[35px] sm:text-[75px] lg:text-left p-10 text-black text-center">
                Sponsors
            </h1>
            <div className="flex flex-wrap justify-center gap-10">
                {sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className="w-[50%] flex justify-center sm:w-[32%] mb-8"
                    >
                        <Card name={sponsor.name} image={sponsor.image} />
                    </div>
                ))}
            </div>
        </div>
    );
}
