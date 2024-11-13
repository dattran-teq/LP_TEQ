import { ReactNode } from "react"
import Features from "../Features"
import ColorButton from "../ColorButton"


type Props = {
    title : string
    content : ReactNode 

} 


const AboutUs : React.FC = () => {
    return (
        <section className="app-container">
      <Features title="About Us" content={<>Confident and passionate in our capabilities to engineer extraordinary products</>} />

<section className="flex gap-4 pt-[43px] justify-center">
<ColorButton content="Creativity" color="pink"></ColorButton>
<ColorButton content="Intellect" color="blue"></ColorButton>
<ColorButton content="Dedication" color="orange"></ColorButton>
</section>

        </section>

    )
}
export default AboutUs
