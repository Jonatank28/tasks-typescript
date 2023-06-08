import IconHome from '@/icon/IconHome'
import IconForm from '@/icon/IconForm'
import { ReactSVGElement } from 'react'

type ItemMenuSidebar = {
    id: number
    title: string
    icon: ReactSVGElement | any
}

const itensMenuSidebar: ItemMenuSidebar[] = [
    {
        id: 1,
        title: 'Home',
        icon: IconHome,
    },
    {
        id: 2,
        title: 'Cadastros',
        icon: IconForm,
    },
]

export default itensMenuSidebar
