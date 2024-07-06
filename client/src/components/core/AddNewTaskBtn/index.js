import { useState } from 'react';
import styles from './style.module.css';

const AddNewTaskBtn = () => {

    const [buttonClicked, setButtonClicked] = useState(false);

    const handleClick = () => {
        setButtonClicked(true);
    }

    return (
       <button 
            className={styles.addNewTaskBtn} 
            type='button'
            onClick={handleClick}>
            + Add New Task
        </button>
 
    );
}

export default AddNewTaskBtn;