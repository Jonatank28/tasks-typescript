'use client'
import ButtonOpenSidebar from '@/components/ButtonOpenSidebar'
import SideBar from '@/components/Sidebar'
import { useState } from 'react'

type Props = {}

const Home = ({}: Props) => {
    const [openSidebar, setOpenSidebar] = useState<boolean>(false)

    return (
        <main className="flex">
            <SideBar open={openSidebar} onClick={() => setOpenSidebar(false)} />
            <ButtonOpenSidebar
                open={openSidebar}
                onClick={() => setOpenSidebar(true)}
            />
        </main>
    )
}

export default Home
