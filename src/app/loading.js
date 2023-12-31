import Image from "next/image";
import Spinner from "../../public/spinner.webp";

export default async function Loading() {
    return (
        <div className="bg-black-5 flex flex-col items-center align-middle justify-center p-128 h-[100%]">
            <Image
                src={Spinner}
                alt={"loading spinner"}
                width={300}
                height={300}
                priority={true}
            />
        </div>
    );
}
