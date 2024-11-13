import { ReactNode } from "react"

type Props = {
    title : string
    content : ReactNode 

} 


const Features : React.FC<Props> = ({
    title,content
}) => {
    return (
    <div className="flex flex-col items-center">
           <h3 className="text-[36px] font-[700] leading-[43.57px]">
            {/* title */}
            {title}
            </h3> 
            <p className="text-[24px] font-[400] leading-[24px] text-center pt-[18px] text-[#646464]" >
                {/* description */}
                {content}
            </p>


    </div>
    )
}
export default Features
