import styles from './style.module.css'

const AddNewTaskBtn = () => {

    const handleClick = () => {
        console.log('Add New Task Button clicked');
    }

    return (
        <button 
            className={styles.button} 
            type='button'
            onClick={handleClick}>
            + Add New Task
        </button>
    );
}

export default AddNewTaskBtn;