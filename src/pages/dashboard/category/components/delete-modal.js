import { Modal } from 'flowbite-react'
import React, { useEffect } from 'react'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import CategoryAPI from '../../../../api/category-api'
import { toast } from 'react-toastify'

export default function DeleteModalComponent({
    openDeleteModal,
    setOpenDeleteModal,
    selectedData,
    setSelectedData,
    setCategories,
}) {
    const handleAction = async () => {
        const { message } = await CategoryAPI.remove(selectedData.id);

        toast.success(message);
        const { data } = await CategoryAPI.getAll();
        setCategories(data);
        onClose();
    }

    const onClose = () => {
        setOpenDeleteModal(false);
        setSelectedData(null);
    }

    return (
        <Modal dismissible show={openDeleteModal} size="md" onClose={onClose} popup>
            <Modal.Header />
            <Modal.Body>
                <div className="text-center">
                    <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                    <h3 className="mb-5 text-sm font-normal text-gray-500 dark:text-gray-400">
                        Apakah anda yakin ingin menghapus kategori <span className="font-medium text-gray-600">{selectedData?.nama}</span>?
                    </h3>
                    <div className="flex justify-center gap-2">
                        <button
                            type="button"
                            onClick={handleAction}
                            className="px-4 py-2 text-sm font-medium text-white bg-red-700 rounded-lg hover:bg-red-800"
                        >
                            Hapus
                        </button>
                        <button
                            type="button"
                            onClick={() => onClose()}
                            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
                        >
                            Batal
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
