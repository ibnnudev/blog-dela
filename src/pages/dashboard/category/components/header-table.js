import { Dropdown } from "flowbite-react";
import { TbTrash } from "react-icons/tb";

// Separate Header Component
export default function Header({ listSelected, handleDeleteListSelected, openModal }) {
    return (
        <div className='bg-white p-5 rounded-md shadow-none mb-4 md:flex flex-row justify-between items-center space-y-3 md:space-y-0'>
            <div>
                <h1 className='text-xl font-semibold text-gray-900 dark:text-white'>
                    Daftar Kategori
                </h1>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Kelola kategori blog anda disini
                </p>
            </div>
            <div className="flex gap-2">
                {listSelected.length > 0 && (
                    <Dropdown label="Aksi" placement='bottom-end' dismissOnClick={false}>
                        <Dropdown.Item icon={TbTrash} onClick={handleDeleteListSelected}>Hapus Terpilih</Dropdown.Item>
                    </Dropdown>
                )}
                <button
                    type="button"
                    onClick={() => openModal()}
                    className="w-full lg:w-fit flex items-center justify-center px-4 py-2 text-sm font-medium text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300"
                >
                    Tambah Kategori
                </button>
            </div>
        </div>
    );
}