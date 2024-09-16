import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function CategoryTable({ categories, listSelected, handleSelect, handleSelectAll, openEditModal, openDeleteModal }) {
    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <TableHead>
                    <TableHeadCell>
                        <Checkbox onChange={handleSelectAll} checked={listSelected.length > 0} />
                    </TableHeadCell>
                    <TableHeadCell>No</TableHeadCell>
                    <TableHeadCell>Nama Kategori</TableHeadCell>
                    <TableHeadCell>Aksi</TableHeadCell>
                </TableHead>
                <TableBody>
                    {categories.length === 0 ? (
                        <TableRow className="bg-white dark:bg-gray-800" key={0}>
                            <TableCell colSpan={4} className="text-center h-80 text-gray-400 dark:text-white">
                                Belum ada kategori
                            </TableCell>
                        </TableRow>
                    ) : (
                        categories.map((category, index) => (
                            <TableRow key={index} className="bg-white dark:bg-gray-800 cursor-pointer" onClick={() => handleSelect(category.id)}>
                                <TableCell width={50}>
                                    <Checkbox
                                        checked={listSelected.includes(category.id)}
                                        onChange={() => handleSelect(category.id)}
                                    />
                                </TableCell>
                                <TableCell width={50} className="font-medium text-gray-900 dark:text-white">
                                    {index + 1}
                                </TableCell>
                                <TableCell>{category.nama}</TableCell>
                                <TableCell className='flex gap-2' width={10}>
                                    <button
                                        type="button"
                                        onClick={() => openEditModal(category)}
                                        className="text-sm font-medium text-white bg-yellow-400 hover:bg-yellow-500 px-4 py-2 rounded-lg"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => openDeleteModal(category)}
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
    );
}