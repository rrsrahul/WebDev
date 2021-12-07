import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";



const Users = (props) => {

    const [enteredUserName, setEnteredUserName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();


    const addUserHandler = (event) => {
        event.preventDefault()
        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            
            setError({
                title: 'Invalid input',
                message: 'Please enter a valid name and age (non-empty values).',
            });
            return;
        }
        if (+enteredAge < 1) {
            
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age (> 0).',
            });
            return;
        }

        props.onAddUser(enteredUserName, enteredAge)
        setEnteredAge('')
        setEnteredUserName('')
    }

    const userNameChangedHandler = (event) => {
        setEnteredUserName(prevState => {
            console.log(prevState)
            return event.target.value
        })
    }

    const ageChangedHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        console.log('ClearError being called')
        setError(null);
    };



    return (<>
        {error && (
            <ErrorModal
                title={error.title}
                message={error.message}
                onConfirm={errorHandler}
            />
        )}
        <form onSubmit={addUserHandler}>
            <Card className={classes.input}>
                <label htmlFor='username'>Username</label>
                <input type='text' id='username' value={enteredUserName} onChange={userNameChangedHandler} />
                <label htmlFor='age'>Age</label>
                <input type='number' id='age' value={enteredAge} onChange={ageChangedHandler} />
                <Button type='submit'> Submit</Button>
            </Card>
        </form>

    </>)
}

export default Users