import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { Label, Modal, TextInput } from 'flowbite-react';
import CategoryAPI from '../../../../api/category-api';

export default function ModalComponent({ openModal, setOpenModal, setCategories, selectedData, setSelectedData }) {
    const [categoryName, setCategoryName] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        if (selectedData?.nama) setCategoryName(selectedData.nama);

        return () => {
            setCategoryName('');
            setError('');
        };
    }, [selectedData]);

    const handleChange = (e) => setCategoryName(e.target.value);

    const handleAction = async (type = 'save') => {
        if (!categoryName) {
            setError('Nama kategori harus diisi');
            return;
        }

        const apiCall = selectedData?.id ? CategoryAPI.update : CategoryAPI.add;
        const payload = selectedData?.id ? [selectedData.id, { nama: categoryName }] : [{ nama: categoryName }];
        const { data, message } = await apiCall(...payload);

        if (data) {
            if (type === 'save & add') {
                setCategoryName('');
                setError('');
                toast.success(message);

                const { data: categories } = await CategoryAPI.getAll();
                setCategories(categories);

                setSelectedData(null);
                return;
            }

            setOpenModal(false);
            toast.success(message);
            setCategoryName('');
            setError('');

            const { data: categories } = await CategoryAPI.getAll();
            setCategories(categories);

            setSelectedData(null);
        } else {
            toast.error(message);
            setError(message);
        }
    };

    const closeModal = () => {
        setOpenModal(false);
        setCategoryName('');
        setError('');
        setSelectedData(null);
    };

    return (
        <Modal dismissible show={openModal} onClose={closeModal}>
            <Modal.Header>
                <span className='text-base font-medium'>
                    {selectedData?.id ? 'Edit Kategori' : 'Tambah Kategori'}
                </span>
            </Modal.Header>
            <Modal.Body>
                <div>
                    <Label htmlFor="kategori" className="mb-2 text-sm font-medium text-gray-700">
                        Nama Kategori <span className="text-red-500">*</span>
                    </Label>
                    <TextInput
                        id="kategori"
                        type="text"
                        value={categoryName}
                        onChange={handleChange}
                        required
                    />
                    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <button
                    type="button"
                    onClick={() => handleAction('save')}
                    className="px-4 py-2 text-sm font-medium text-white bg-primary-700 rounded-lg hover:bg-primary-800"
                >
                    {selectedData?.id ? 'Simpan Perubahan' : 'Tambah Kategori'}
                </button>
                {
                    !selectedData?.id && (
                        <button
                            type="button"
                            onClick={() => handleAction('save & add')}
                            className="px-4 py-2 text-sm font-medium text-white bg-gray-700 rounded-lg hover:bg-gray-800"
                        >
                            Tambah & Tambah Lagi
                        </button>
                    )
                }

                <button
                    type="button"
                    onClick={closeModal}
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                >
                    Batal
                </button>
            </Modal.Footer>
        </Modal>
    );
}
