import fina from "@/assets/logo/image-fina.png"
import nowcast from "@/assets/logo/image-now.png"
import smartplus from "@/assets/logo/image-smartplus.png"
import Image from "next/image"


const OurPartners : React.FC = () => {
    return (
        <section className=" app-container flex flex-col items-center pt-[47px] ">
            <div className=" font-bold text-[32px] leading-[38.73px] text-[#616161] pb-[47px]" > our partner </div>
            <div className="flex gap-3 justify-center">
                <div className="w-[252px] h-[116px] flex justify-center items-center bg-[#F5F5F5] border-black">
                    <Image src={fina} width={180} height={92} alt="abc" className=""/>
                </div>
                <div className="w-[252px] h-[116px] flex items-center justify-center bg-[#F6F9FD]">
                    <Image src={nowcast} width={180} height={92} alt="abc" />
                </div>
                <div className="w-[252px] h-[116px] flex items-center justify-center bg-[#FDF8F2]">
                    <Image src={smartplus} width={180} height={92} alt="abc" />
                </div>

            </div>

        </section>

    )
}
export default OurPartners
