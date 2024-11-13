type Props = {
    content : string 
    
} 


const Title : React.FC<Props> = (props) => {
    return <h2 className="bg-black text-white rounded text-base py-[14px] px-7 font-normal"> {props.content}</h2>
}
export default Title
