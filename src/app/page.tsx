'use client'
import LayoutStandardSidebar from '@/layout/LayoutStandardSidebar'
import { useState } from 'react'

type Props = {}

const Home = ({}: Props) => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false)

    return (
        <LayoutStandardSidebar
            openSidebar={openSidebar}
            setOpenSidebar={setOpenSidebar}
        >
            <div className={``}>
                <h1>Helllo World</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
                    incidunt inventore placeat dolor officia impedit unde
                </p>
            </div>
        </LayoutStandardSidebar>
    )
}

export default Home
