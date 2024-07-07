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
import { Button } from '../Button';

const AddNewBoard = ({ addNewBoardModalOpen, setAddNewBoardModalOpen }) => {

    return (
        // <Modal isOpen={loginModalOpen}>
        <>
            <Modal isOpen={addNewBoardModalOpen}>
                {/* <ModalHeader toggle={() => setLoginModalOpen(false)}>Login</ModalHeader> */}
                <ModalHeader toggle={() => setAddNewBoardModalOpen(false)}>Add New Board</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label htmlFor='boardName'>
                                Board Name
                            </Label>
                            <Input
                                name='boardName'
                                placeholder='e.g. Web Design'
                            />
                        </FormGroup>

                        <FormGroup>
                            <Label htmlFor='boardColumns'>
                                Board Columns
                            </Label>
                            <Input
                                name='boardColumns'
                                placeholder='Todo'
                            />
                             <Input
                                name='boardColumns'
                                placeholder='Doing'
                            />
                        </FormGroup>
                        <Button type='button' variant='secondary'>+ Add New Column</Button>
                        <Button type='submit'>Create New Board</Button>

                    </Form>

                    {/* 
                            <Button type='submit' color='primary'>Login</Button>
                        */}
                </ModalBody>
            </Modal>
        </>
    )
}

export default AddNewBoard