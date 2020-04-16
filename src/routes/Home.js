import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Services from '../components/Services'
import { Link } from 'react-router-dom'
import FeaturedRooms from '../components/FeaturedRooms'

export default function Home() {
    return (
        <div>
            <React.Fragment>
            <Hero>
                <Banner title="Luxurious Rooms" subtitle="deluxe rooms starting at $299">
                <Link to="/rooms" className="btn-primary">
                    Our Rooms
                </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
            </React.Fragment>
        </div>
    )
}
