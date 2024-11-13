type Props = {
    content : string;
    color? : "pink" | "blue" | "orange" ;
} 


const ColorButton : React.FC<Props> = ({
    content,color="pink"
}) => {


    let colorClass = "";

    if(color === "pink"){
        // logic xử lý màu hồng
        colorClass = "bg-[#FFF8FB]  border-fuchsia-300 text-pink-300";

    }
    if(color === "blue"){
        // logic xử lým màu xanh
        colorClass = "bg-[#F5F9FD]  border-cyan-300 text-blue-300";

    }
    if(color === "orange"){
        // logic xử lý màu cam
        colorClass = "bg-[#FDF8F2]  border-x-orange-300 text-orange-300";
    }
    

    return <button className= {`w-[250px] h-[88px] text-[32px] leading-10 text-center border ${colorClass}` }  > {content}</button>
}

export default ColorButton
