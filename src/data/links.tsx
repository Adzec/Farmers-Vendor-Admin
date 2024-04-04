import { Gauge, Layers3, Mail } from 'lucide-react';

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
        label: 'Users',
        icon: Mail,
        link: '#',
        children: [
            { label: 'Vendors', link: '#' },
            { label: 'Clients', link: '#' },
            { label: 'Pending Vendors', link: '#' },
            // { label: '', link: '#' },
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
