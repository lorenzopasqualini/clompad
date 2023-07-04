'use client';
import { Modal } from '@/components/ui/modal';
import { useStoreModal } from '@/hooks/use-store-modal';

export const StoreModal = () => {
	const storeModal = useStoreModal();

	return (
		<Modal
			title="Create Store"
			description="Add brand new store to manage products"
			isOpen={storeModal.isOpen}
			onClose={storeModal.onClose}
		>
			create
		</Modal>
	);
};
