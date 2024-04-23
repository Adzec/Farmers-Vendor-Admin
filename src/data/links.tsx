import { Gauge, Layers3, Mail, ShoppingCart, Users, UsersRound } from 'lucide-react';

const navItems = [
    {
        label: 'Dashboard',
        icon: Gauge,
        link: '/',
    },
    {
        label: 'Products',
        icon: Mail,
        link: '#',
        children: [
            { label: 'All', link: '#' },
            { label: 'Approved', link: '#' },
            { label: 'Pending', link: '#' },
            // { label: '', link: '#' },
        ],
    },

    {
        label: 'Orders',
        icon: ShoppingCart,
        link: '#',
        children: [
            { label: 'Completed', link: '#' },
            { label: 'Pending', link: '#' },
            { label: 'unpaid', link: '#' },
        ],
    },

    {
        label: 'Sellers',
        icon: Users,
        link: '/sellers',
        children: [
            { label: 'Approved', link: '/sellers/approved' },
            { label: 'Pending', link: '#' },
            { label: 'Rejected', link: '#' },
            // { label: '', link: '#' },
        ],
    },

    {
        label: 'Users',
        icon: UsersRound,
        link: '#',
        children: [
            { label: 'Verified', link: '#' },
            { label: 'Unverified', link: '#' },
        ],
    },

    {
        label: 'Categories',
        icon: Layers3,
        link: '/',
    },

    {
        label: 'Messages',
        icon: Mail,
        link: '#',
    },
];

export default navItems;
