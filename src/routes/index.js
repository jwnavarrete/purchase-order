import { MdHome, MdAddBusiness, MdOutlineChecklistRtl } from "react-icons/md";

export const routes = [
    {
        id: 1,
        label: 'Inicio',
        path: '/',
        icon: MdHome
    },
    {
        id: 2,
        label: 'Nueva Orden',
        path: '/purchase/new-order',
        icon: MdAddBusiness
    },
    {
        id: 2,
        label: 'Consultar Orden',
        path: '/purchase/list-order',
        icon: MdOutlineChecklistRtl
    },
    // {
    //     id: 3,
    //     label: 'Minimal',
    //     path: '/minimal',
    //     icon: MdHome
    // },
]