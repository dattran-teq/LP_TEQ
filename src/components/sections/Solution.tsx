import { ReactNode } from "react"
import FeatureCard from "../FeatureCard"
import CardBe from "@/assets/cards/BE.png"
import CardFe from "@/assets/cards/FE.png"
import CardMb from "@/assets/cards/MB.png"
import bacham from "@/assets/Navigation.png"
import Image from "next/image";
import Features from "../Features"


type Props = {
    title : string
    content : ReactNode 

} 


const Solution : React.FC = () => {
    return (
        <section className="app-container">
        <Features title="Our Solutions" content={<>We have more than 5 years of expertise offering financial service solutions,<br/> and assisting customers in approaching circumstances flexibly and proactively.</>} />


<section className="flex gap-[16px] pt-[42px]">
<FeatureCard image={CardBe} title="Backend" content="Design database, develop API and other backend Services"/>
<FeatureCard image={CardFe} title="Frontend" content="Apply new state-in-the-art Technologies including ReactJS, VueJS, etc. for the best UI/UX"/>
<FeatureCard image={CardMb} title="Mobile" content="Building Android, iOS, and MacOS apps with Kotlin, Swift, Flutter"/>

</section>

<Image src={bacham} width={1200} height={33} alt="ba cham" className="mx-auto pt-[42px] pb-[72px]"/>


        </section>

    )
}
export default Solution
