export type ModalType = 'auth';

export interface ModalData {
   [key: string]: unknown; 
}

export interface ModalContextType {
    openModal: (type: ModalType, data?: ModalData) => void;
    closeModal: () => void;
    currentModal: ModalType | null;
    modalData: ModalData | null;
}