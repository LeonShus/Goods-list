import React from "react"
import Modal from '@mui/material/Modal'
import styles from "./modal.module.scss"

type BuyModalPropsType = {
    isOpen: boolean
    close: () => void
}


export const ModalCustom: React.FC<BuyModalPropsType> = ({isOpen, close, children}) => {
    return (
        <Modal
            open={isOpen}
            onClose={close}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={styles.container}>
                {children}
            </div>
        </Modal>
    )
}