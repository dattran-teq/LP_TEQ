
import Image, { StaticImageData } from "next/image"

type Props = {
    image : StaticImageData 
    product : string
    description : string
    imageTotal : StaticImageData
} 

const ProductDes : React.FC<Props> = (props) => {
    return (
        <section className="app-container pt-[36px] w-[784px] flex flex-col justify-center items-center ">

                <div className="flex pb-6">
                    <div className="flex items-center">
                        <Image src={props.image} width={28} height={21} alt="mock" />
                        <span className="font-bold text-[20px] leading-[24.2px] pl-[10px] pr-4">{props.product}</span>
                    </div>
                    <div className="h-[30px] border-[#666666] border-[1px] "></div>
                    <div className="font-normal text-[16px] leading-[36px] w-[597px] pl-4 ">{props.description}</div>
                </div>


                <div className="border-[2px] border-[#EEEEEE]">
                    <Image src={props.imageTotal} width={945} height={520} alt="mock" />
                </div>
        </section>


    )
}
export default ProductDes
