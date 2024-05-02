import React, { useRef, useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Card, Input, InputRef, Space, Table, TableColumnType } from 'antd';
import type { FilterDropdownProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import { Avatar } from 'antd';
import { FiMoreVertical } from 'react-icons/fi';
import { FaRegTrashAlt } from 'react-icons/fa';
import { products } from '../../Data/Data';

interface DataType {
    key?: React.Key;
    name?: string;
    price?: number;
    image?: string;
    description?: string;
    category?: string;
    inStock?: boolean;
    Status?: string;
}

type DataIndex = keyof DataType;

const ProductTable: React.FC = () => {
    const [searchText, setSearchText] = useState<string>('');
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

    const columns = [
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: (image: string) => <Avatar src={image} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },

        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'In Stock',
            dataIndex: 'inStock',
            key: 'inStock',
            render: (inStock: boolean) => (inStock ? 'Yes' : 'No'),
        },
        {
            title: 'Status',
            dataIndex: 'Status',
            key: 'Status',
        },
        {
            title: 'Actions',
            dataIndex: 'action',
            render: (_text: any, _record: any) => (
                <div className="flex mr-2 gap-4 ">
                    <button className="hover:underline ">Approve</button>
                    <button className="hover:underline ">Decline</button>
                    <FaRegTrashAlt
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
            <Table columns={columns} dataSource={products} />
        </Card>
    );
};

export default ProductTable;