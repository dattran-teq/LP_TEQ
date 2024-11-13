
import Image from "next/image"
import Logo from "@/assets/logo/logo-na 1.png"
import Button from "./common/Button"

// type Props = {
//     content : string 
// } 


const Header : React.FC = () => {
    return <header className="w-full flex justify-between items-center h-[99px] px-12">
        <div>
            {/* logo */}
            <Image src={Logo} width={234} height={49} alt="logo"  />
        </div>

        <div className="flex items-center gap-[77px]">
            {/* menu  */}
            <div className="flex gap-[50px]">
                <div className="text-[#6C6C6C] hover:text-[#222222] cursor-pointer">HOME</div>
                <div className="text-[#6C6C6C] hover:text-[#222222] cursor-pointer">ABOUT US</div>
                <div className="text-[#6C6C6C] hover:text-[#222222] cursor-pointer">CARRERS</div>
                <div className="text-[#6C6C6C] hover:text-[#222222] cursor-pointer">NEWWS</div>
                <div className="text-[#6C6C6C] hover:text-[#222222] cursor-pointer">GALLERY</div>
            </div>
            <Button content="CONTACT US"/>
        </div>


    </header>
}
export default Header
