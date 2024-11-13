
// import Image from "next/image"
// import Logo from "@/assets/logo/logo-na 1.png"
// import Button from "./Button"
// import HeroImage from "@/assets/banners/background-hero.png"
import Button from "../common/Button"


const HeroSection : React.FC = () => {
    return <div className="min-h-[643px] w-full bg-hero-background bg-no-repeat bg-contain bg-bottom pt-[87px]">
        <div className="w-full text-[40px] leading-[60px] flex flex-col items-center">
            {/* text */}
            <h2 className="text-center pb-[34px] font-[700]">Elevate Your <span className="bg-black text-white">Business</span> With Our Premium Solutions <br />
            For Web - Mobile - Backend</h2>

                        {/* button about us  */}
            <Button content="ABOUT US"></Button>
        </div>

    </div>
}
export default HeroSection
