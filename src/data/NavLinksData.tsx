export interface INavLink {
    src: string,
    name: string,
    icon?: React.ReactNode,
}

export const NavLinksData = [
    {
        src: '/',
        name: 'Главная',
    },
    {
        src: '/all-theory',
        name: 'Теория',
    },
    {
        src: '/calculator',
        name: 'Калькулятор',
    },
    {
        src: '/about',
        name: 'О нас',
    },
] as INavLink[]