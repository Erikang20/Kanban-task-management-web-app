
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
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './Modals.module.css';
import { Button } from '../Button';
import { useState } from 'react';
import Image from "next/image";
import cross from "@assets/icon-cross.svg";

const AddNewBoardModal = ({ addNewBoardModalOpen, setAddNewBoardModalOpen }) => {
    const [inputValue, setInputValue] = useState('');
    const [boardName, setBoardName] = useState('');
    const [boardColumns, setBoardColumns] = useState(['Todo', 'Doing']);
    const [newBoard, setNewBoard] = useState({boardName: boardName, boardColumns: boardColumns});

    const handleBoardNameChange = (e) => {
        setInputValue(e.target.value);
        const newBoardName = e.target.value;
        setBoardName(newBoardName);
        console.log(boardName)
    };

    const handleBoardColumnChange = (e) => {
        setInputValue(e.target.value);
        boardColumns[e.target.id] = e.target.value;
        setBoardColumns(boardColumns);
        console.log(boardColumns)
    };

    const handleAddNewColumnBtnClick = () => {
        setBoardColumns([...boardColumns, ""])
        console.log(boardColumns)
    }

    const handleXBtnClick = (e) => {
        const newBoardColumns = [...boardColumns];
        newBoardColumns.splice(e.target.id, 1);
        setBoardColumns(newBoardColumns);
        console.log(boardColumns)
    }

    const handleCreateNewBoardSubmit = (e) => {
        // e.preventDefault();
        console.log(boardName)
        const newBoardName = boardName;
        console.log(newBoardName);
        setNewBoard({boardName: newBoardName, boardColumns: boardColumns})
        console.log(newBoard);
        setAddNewBoardModalOpen(false);
    }

    return (
        <>
            <Modal className={styles.modalDiv} isOpen={addNewBoardModalOpen}>
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
                                onChange={handleBoardNameChange}
                            />
                        </FormGroup>

                        <FormGroup >
                            <Label className={styles.modalLabel} htmlFor='boardColumns'>
                                Board Columns
                            </Label>
                            <div>
                                {boardColumns.map((item, index) => {
                                    return (
                                        <div className={styles.boardColumnItemContainer}>
                                            <Input
                                                id={index}
                                                name='boardColumns'
                                                className={styles.modalInput}
                                                value={item}
                                                onChange={handleBoardColumnChange}
                                            />
                                            <button
                                                id={index}
                                                type='button'
                                                className={styles.xBtn}
                                                onClick={handleXBtnClick}

                                            >
                                                <Image
                                                    id={index}
                                                    className={styles.cross}
                                                    src={cross}
                                                    alt="X"
                                                />
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>

                            <Button
                                className={styles.modalBtnNewCol}
                                variant='secondary'
                                onClick={handleAddNewColumnBtnClick}
                            >
                                + Add New Column
                            </Button>
                        </FormGroup>

                        <Button onClick={handleCreateNewBoardSubmit}>Create New Board</Button>

                    </Form>
                </ModalBody>
            </Modal>
        </>
    )
}

export default AddNewBoardModal;