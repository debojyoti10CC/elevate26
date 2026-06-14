import React from 'react'
import Hero from '../../components/Hero/Hero'
import Welcome from '../../components/Welcome/Welcome'
import Choose from '../../components/Choose/Choose'
import StickyCols from '../../components/StickyCols/StickyCols'
import Gallery from '../../components/Gallery/Gallery'
import MarqueeText from '../../components/Marquee/MarqueeText'
import MarqueeSticky from '../../components/Layouts/MarqueeSticky'
import MapLink from '../../components/MapLink/MapLink'
import Activities from '../../components/Activities/Activities'
import Showcase from '../../components/Showcase/Showcase'
import Feedback from '../../components/Feedback/Feedback'
import FooterBanner from '../../components/FooterBanner/FooterBanner'
import TeamSection from '../../components/Team/TeamSection'
import { Timeline } from '../../components/Timeline/timeline'

const Home = () => {
    return (
        <div>
            <Hero />
            <Welcome />
            <Activities />
            <Showcase />
            <MarqueeSticky />
            <Timeline />
            <TeamSection />
            <FooterBanner />
        </div>
    )
}

export default Home