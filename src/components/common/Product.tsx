
import Image, { StaticImageData } from "next/image"

type Props = {
    image : StaticImageData 
    product : string
} 

const Product : React.FC<Props> = (props) => {
    return (
            <div className="w-[179px] h-[127px] ">
                <div className="h-[63px] pt-[32px] flex flex-col items-center">
                <Image src={props.image} width={37} height={27} alt="mock"/>
                <span className="font-bold text-[18px] leading-[21.78px] pt-[14px]">{props.product}</span>

                </div >
                </div>

    )
}
export default Product
