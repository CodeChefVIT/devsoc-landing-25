interface Cards {
    name: string;
    image: string;
}

export default function Card({ name, image }: Cards) {
    return (
        <div className="lg:w-[350px] w-[200px] xs:w-[200px] h-[300px] xs:h-[210px] bg-[#FFEAD8] rounded-xl flex flex-col items-center justify-between p-5 text-center">
            <h3 className="text-[36px] font-mono text-black xs:text-[18px]">{name}</h3>
            <div
                className="w-full h-[60%] bg-black rounded-lg bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}></div>
            <button className="bg-[#FF7657] text-white text-[18px] font-yerk font-bold py-2 px-6 rounded-md hover:bg-[#ff5630] transition duration-300">
                VISIT
            </button>
        </div>
    );
}
