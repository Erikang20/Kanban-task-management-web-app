
// This is with reactstrap and bootstrap
import {
    Modal,
    ModalHeader,
    ModalBody,
    FormGroup,
    Label,
    Form,
    FormData,
    Input
} from 'reactstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Forms.module.css';
import { Button } from '../Button';

const AddNewBoardModal = ({ addNewBoardModalOpen, setAddNewBoardModalOpen }) => {
    const showHideClassName = addNewBoardModalOpen ? '`${styles.showModal} ${styles.modal}`' : 'styles.hideModal'
    return (
        <>
            <div className={showHideClassName}>
                <div className={styles.modalDiv}>
                    <header className={styles.modalHeader}>Add New Board</header>
                </div>

            </div>
            {/* <Modal className={styles.modalDiv} isOpen={addNewBoardModalOpen}>
                <ModalBody>
                    <h5 className={styles.modalHeader}>Add New Board</h5>
                    <Form onSubmit={() => setAddNewBoardModalOpen(false)}>
                        <FormGroup>
                            <Label className={styles.modalLabel} htmlFor='boardName'>
                                Board Name
                            </Label>
                            <Input
                                name='boardName'
                                placeholder='e.g. Web Design'
                                className={styles.modalInput}
                            />
                        </FormGroup>

                        <FormGroup >
                            <Label className={styles.modalLabel} htmlFor='boardColumns'>
                                Board Columns
                            </Label>
                            <div >
                                <Input
                                    name='boardColumns'
                                    placeholder='Todo'
                                    className={styles.modalInput}
                                />
                                <Input
                                    name='boardColumns'
                                    placeholder='Doing'
                                    className={styles.modalInput}
                                />
                            </div>

                            <Button className={styles.modalBtn} type='button' variant='secondary'>+ Add New Column</Button>
                        </FormGroup>

                        <Button type='submit'>Create New Board</Button>

                    </Form>
                </ModalBody>
            </Modal> */}
        </>
    )
}

export default AddNewBoardModal;