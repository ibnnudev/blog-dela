import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import ModalComponent from './components/modal';
import TableHeader from '../components/table-header';
import fetchCategories from './hooks/fetch-category';
import DashbordLayout from '../components/dashboard-layout';
import DeleteModalComponent from './components/delete-modal';

export default function Index() {
    const menu = [
        { name: 'Dashboard', route: '/dashboard' },
        { name: 'Kategori', route: '/dashboard/kategori' }
    ];

    const [openModal, setOpenModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [categories, setCategories] = useState([]);
    const [selectedData, setSelectedData] = useState(null);

    useEffect(() => {
        fetchCategories().then(data => setCategories(data.sort((a, b) => a.nama.localeCompare(b.nama))));
    }, []);

    const handleModal = (data = null) => {
        setSelectedData(data);
        setOpenModal(true);
    };

    const handleDeleteModal = (data = null) => {
        setSelectedData(data);
        setOpenDeleteModal(true);
    }

    return (
        <DashbordLayout breadcrumbList={menu}>
            <TableHeader title="Daftar Kategori" description="Daftar kategori yang tersedia">
                <button
                    type="button"
                    onClick={() => handleModal()}
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                >
                    Tambah Kategori
                </button>
            </TableHeader>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>No</TableHeadCell>
                        <TableHeadCell>Nama Kategori</TableHeadCell>
                        <TableHeadCell>Aksi</TableHeadCell>
                    </TableHead>
                    <TableBody>
                        {categories.length === 0 ? (
                            <TableRow className="bg-white dark:bg-gray-800">
                                <TableCell colSpan={3} className="text-center h-80 text-gray-400 dark:text-white">
                                    Belum ada kategori
                                </TableCell>
                            </TableRow>
                        ) : (
                            categories.map((category, index) => (
                                <TableRow key={index} className="bg-white dark:bg-gray-800">
                                    <TableCell className="font-medium text-gray-900 dark:text-white">
                                        {index + 1}
                                    </TableCell>
                                    <TableCell>{category.nama} {category.id}</TableCell>
                                    <TableCell className='flex gap-2'>
                                        <button
                                            type="button"
                                            onClick={() => handleModal(category)}
                                            className="text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => handleDeleteModal(category)}
                                            className="text-sm font-medium text-white bg-red-400 hover:bg-red-500 px-4 py-2 rounded-lg"
                                        >
                                            Hapus
                                        </button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
            <ModalComponent
                openModal={openModal}
                setOpenModal={setOpenModal}
                setCategories={setCategories}
                selectedData={selectedData}
                setSelectedData={setSelectedData}
            />

            <DeleteModalComponent
                openDeleteModal={openDeleteModal}
                setOpenDeleteModal={setOpenDeleteModal}
                selectedData={selectedData}
                setCategories={setCategories}
                setSelectedData={setSelectedData}
            />
        </DashbordLayout>
    );
}
