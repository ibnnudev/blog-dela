import React, { useState } from 'react';

import DashbordLayout from '../components/dashboard-layout';
import { Button, Label, Modal, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput } from "flowbite-react";
import TableHeader from '../components/table-header';

export default function Index() {
    const menu = [
        {
            name: 'Dashboard',
            route: '/dashboard',
        },
        {
            name: 'Kategori',
            route: '/dashboard/kategori',
        }
    ]

    const [openModal, setOpenModal] = useState(false)

    return (
        <DashbordLayout breadcrumbList={menu}>
            <TableHeader title={'Daftar Kategori'} description={'Daftar kategori yang tersedia'}>
                <button type="button" onClick={() => setOpenModal(true)}
                    className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 outline-none">
                    Tambah Kategori
                </button>
            </TableHeader>
            <div className="overflow-x-auto">
                <Table hoverable>
                    <TableHead>
                        <TableHeadCell>No</TableHeadCell>
                        <TableHeadCell>Nama Kategori</TableHeadCell>
                        <TableHeadCell>Aksi</TableHeadCell>
                        <TableHeadCell>
                            <span className="sr-only">Edit</span>
                        </TableHeadCell>
                    </TableHead>
                    <TableBody className="divide-y">
                        <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                1
                            </TableCell>
                            <TableCell>Sliver</TableCell>
                            <TableCell>
                                <a href="#_" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Edit
                                </a>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>

            <Modal show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Header>
                    <span className='text-base font-medium'>Tambah Kategori</span>
                </Modal.Header>
                <Modal.Body>
                    <form className="space-y-6">
                        <div>
                            <div className="mb-2 block">
                                <Label htmlFor="kategori" value="Kategori" />
                            </div>
                            <TextInput id="kategori" type="text" autoComplete={false} required />
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => setOpenModal(false)} color="blue">Simpan</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Batal
                    </Button>
                </Modal.Footer>
            </Modal>
        </DashbordLayout>
    )
}
