import { Avatar, Card, Table } from 'antd';

import moment from 'moment';
import { useState, useEffect } from 'react';

interface User {
    _id: string;
    photoURL: string;
    name: string;
    email: string;
    role: string;
    active: boolean;
    createdAt: string;
}

const Users = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        // Dummy data for demonstration
        const dummyUsers: User[] = [
            {
                _id: '1',
                photoURL: 'https://example.com/avatar1.jpg',
                name: 'John Doe',
                email: 'john@example.com',
                role: 'seller',
                active: true,
                createdAt: '2022-01-01T12:00:00Z',
            },
            {
                _id: '2',
                photoURL: 'https://example.com/avatar2.jpg',
                name: 'Jane Smith',
                email: 'jane@example.com',
                role: 'seller',
                active: false,
                createdAt: '2022-01-02T12:00:00Z',
            },
            {
                _id: '1',
                photoURL: 'https://example.com/avatar1.jpg',
                name: 'John Doe',
                email: 'john@example.com',
                role: 'seller',
                active: true,
                createdAt: '2022-01-01T12:00:00Z',
            },
            {
                _id: '2',
                photoURL: 'https://example.com/avatar2.jpg',
                name: 'Jane Smith',
                email: 'jane@example.com',
                role: 'editor',
                active: false,
                createdAt: '2022-01-02T12:00:00Z',
            },
            {
                _id: '1',
                photoURL: 'https://example.com/avatar1.jpg',
                name: 'John Doe',
                email: 'john@example.com',
                role: 'seller',
                active: true,
                createdAt: '2022-01-01T12:00:00Z',
            },
            {
                _id: '2',
                photoURL: 'https://example.com/avatar2.jpg',
                name: 'Jane Smith',
                email: 'jane@example.com',
                role: 'Seller',
                active: false,
                createdAt: '2022-01-02T12:00:00Z',
            },
            // Add more dummy users as needed
        ];
        setUsers(dummyUsers);
    }, []);

    const columns = [
        {
            title: 'Avatar',
            dataIndex: 'photoURL',
            key: 'photoURL',
            render: (photoURL: string) => <Avatar src={photoURL} />,
        },
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Email', dataIndex: 'email', key: 'email' },
        { title: 'Role', dataIndex: 'role', key: 'role' },
        {
            title: 'Active',
            dataIndex: 'active',
            key: 'active',
            render: (active: boolean) => (active ? 'Yes' : 'No'),
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: string) => moment(createdAt).format('YY-MM-DD HH:MM'),
        },
        { title: 'Id', dataIndex: '_id', key: '_id' },
    ];

    return (
        <div>
            <h1
                style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}
                className="text-gray-light text-2xl font-bold"
            >
                Manage Approved Sellers
            </h1>
            <Card>
                <Table
                    columns={columns}
                    dataSource={users}
                    rowKey="_id"
                    // pagination={{ pageSize: 5, pageSizeOptions: ['5', '10', '20'] }}
                    // rowClassName={() => 'custom-row-style'}
                    className="overflow-x-scroll"
                />
            </Card>
        </div>
    );
};

export default Users;
