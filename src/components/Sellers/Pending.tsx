import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import type { InputRef, TableColumnsType, TableColumnType } from 'antd';
import { Button, Card, Input, Space, Table } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { Avatar } from 'antd';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { FiMoreVertical } from 'react-icons/fi';
import { FaRegTrashCan } from 'react-icons/fa6';

interface DataType {
    key?: string;
    name?: string;
    age?: number;
    address?: string;
    photo?: string;
    email?: string;
    role?: string;
    active?: boolean;
    createdAt?: string;
    phone?: string;
}

type DataIndex = keyof DataType;

const data: DataType[] = [
    {
        key: '1',
        photo: 'https://example.com/avatar1.jpg',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'seller',
        active: true,
        createdAt: '2022-01-01T12:00:00Z',
        phone: '0791039923',
    },
    {
        key: '2',
        photo: 'https://example.com/avatar2.jpg',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'seller',
        active: false,
        createdAt: '2022-01-02T12:00:00Z',
        phone: '0791039923',
    },
    {
        key: '3',
        photo: 'https://example.com/avatar1.jpg',
        name: 'John Doe',
        email: 'john@example.com',
        role: 'seller',
        active: true,
        createdAt: '2022-01-01T12:00:00Z',
        phone: '0791039923',
    },
    {
        key: '4',
        photo: 'https://example.com/avatar2.jpg',
        name: 'Jane Smith',
        email: 'jane@example.com',
        role: 'seller',
        active: false,
        createdAt: '2022-01-02T12:00:00Z',
        phone: '0791039923',
    },
];

const App: React.FC = () => {
    const navigate = useNavigate();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: FilterDropdownProps['confirm'],
        dataIndex: DataIndex
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: DataIndex): TableColumnType<DataType> => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div style={{ padding: 8 }} onKeyDown={(e) => e.stopPropagation()}>
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1677ff' : undefined }} />
        ),
        onFilter: (value, record) => {
            const recordValue = record[dataIndex];
            // Check if recordValue is not undefined and is a string, then proceed
            if (recordValue !== undefined && recordValue !== null) {
                return recordValue
                    .toString()
                    .toLowerCase()
                    .includes(value.toString().toLowerCase());
            }
            // Return false if recordValue is undefined or null
            return false;
        },

        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });

    const columns: TableColumnsType<DataType> = [
        {
            title: 'Image',
            dataIndex: 'photo',
            key: 'photo',
            render: (photo: string) => <Avatar src={photo} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            // width: '30%',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            ...getColumnSearchProps('email'),
            sorter: (a, b) => (a.email?.length ?? 0) - (b.email?.length ?? 0),
            sortDirections: ['descend', 'ascend'],
        },
        {
            title: 'Created At',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (createdAt: string) => moment(createdAt).format('YY-MM-DD HH:MM'),
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            render: (_text: any, _record: any) => (
                <div className="flex mr-2 gap-4 ">
                    <button className="hover:underline ">Approve</button>
                    <FaRegTrashCan
                        className="text-red-500"
                        onClick={() => {
                            console.log('clicked');
                        }}
                    />
                    <FiMoreVertical
                        className="text-green-500"
                        onClick={() => {
                            console.log('clicked');
                        }}
                    />
                </div>
            ),
        },
    ];

    return (
        <Card>
            <Table columns={columns} dataSource={data} className="overflow-x-scroll" />
        </Card>
    );
};

export default App;
