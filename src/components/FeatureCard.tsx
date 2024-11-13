import { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"

type Props = {
    image : StaticImageData
    title : string
    content : ReactNode 

} 


const FeatureCard : React.FC<Props> = ({
    image, title,content}) => {
    return (
    <div className="flex flex-col flex-1 items-center border border-[#EAEAEA] hover:border-[#222222]">
        <div>
            {/* image */}
            <Image src={image} width={389.33} height={282} alt="card default" />
        </div>
        <div className="px-[24px] pb-6">
            {/* content */}
            <h4 className="font-bold text-[20px] leading-[32px]"> {title}</h4>
            <p className="font-normal text-[14px] leading-[21px]">{content}</p>
        </div>


    </div>
    )
}
export default FeatureCard
