import Modal from 'react-modal';
import { Container } from './styled';
interface NewItemModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}


export function ModalCart({ isOpen, onRequestClose }: NewItemModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>

                <h2>Meu carrinho</h2>
                <ul>

                </ul>
                <button
                    type='button'
                    onClick={onRequestClose}
                >Finalizar Compra</button>

            </Container>

        </Modal>

    )

}