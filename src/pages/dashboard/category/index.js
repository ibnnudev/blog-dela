import React, { useEffect, useState } from 'react';
import ModalComponent from './components/modal';
import HeaderTable from './components/header-table';
import CategoryTable from './components/category-table';
import fetchCategories from './hooks/fetch-category';
import DashbordLayout from '../components/dashboard-layout';
import DeleteModalComponent from './components/delete-modal';
import CategoryAPI from '../../../api/category-api';
import { toast } from 'react-toastify';

// Utility for modals to DRY
const useModal = () => {
    const [modalState, setModalState] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const openModal = (data = null) => {
        setSelectedData(data);
        setModalState(true);
    };

    const closeModal = () => {
        setSelectedData(null);
        setModalState(false);
    };

    return { modalState, selectedData, openModal, closeModal, setSelectedData };
};

export default function Index() {
    const menu = [
        { name: 'Dashboard', route: '/dashboard' },
        { name: 'Kategori', route: '/dashboard/kategori' }
    ];

    const [categories, setCategories] = useState([]);
    const [listSelected, setListSelected] = useState([]);

    const categoryModal = useModal();
    const deleteModal = useModal();

    useEffect(() => {
        fetchCategories().then(data =>
            setCategories(data.sort((a, b) => a.nama.localeCompare(b.nama)))
        );
    }, []);

    const handleSelect = (id) => {
        setListSelected((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const handleSelectAll = (e) => {
        setListSelected(e.target.checked ? categories.map(category => category.id) : []);
    };

    const handleDeleteListSelected = async () => {
        try {
            await Promise.all(listSelected.map(async (id) => {
                const { message } = await CategoryAPI.remove(id);
                toast.success(message);

                const { data } = await CategoryAPI.getAll();
                setCategories(data);
                if (!toast.isActive('delete-category')) toast.success('Berhasil menghapus kategori', { toastId: 'delete-category' });
            }));

            setListSelected([]);
        } catch (error) {
            toast.error('Gagal menghapus kategori');
        } finally {
            setListSelected([]);
        }
    };

    return (
        <DashbordLayout breadcrumbList={menu}>
            <HeaderTable listSelected={listSelected} handleDeleteListSelected={handleDeleteListSelected} openModal={categoryModal.openModal} />
            <CategoryTable
                categories={categories}
                listSelected={listSelected}
                handleSelect={handleSelect}
                handleSelectAll={handleSelectAll}
                openEditModal={categoryModal.openModal}
                openDeleteModal={deleteModal.openModal}
            />
            <ModalComponent
                openModal={categoryModal.modalState}
                setOpenModal={categoryModal.closeModal}
                setCategories={setCategories}
                selectedData={categoryModal.selectedData}
                setSelectedData={categoryModal.setSelectedData}
            />
            <DeleteModalComponent
                openDeleteModal={deleteModal.modalState}
                setOpenDeleteModal={deleteModal.closeModal}
                selectedData={deleteModal.selectedData}
                setCategories={setCategories}
                setSelectedData={deleteModal.setSelectedData}
            />
        </DashbordLayout>
    );
}
