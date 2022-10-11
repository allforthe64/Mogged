import Section1 from './home-section-1'
import Section2 from './home-section-2'
import Section3 from './home-section-3'
import Hero from './Hero'

export default function HomeMain () {
    return (
        <div>
            <Hero />
            <Section1 />
            <Section2 />
            <Section3 />
        </div>
    )
}