import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from './AddUser.module.css'


const Users = ()=>{
    const addUserHandler =(event)=>{
        event.preventDefault();

    }
return (<form onSubmit={addUserHandler}>
    <Card className={classes.input}>
    <label htmlFor='username'>Username</label>
    <input type='text' id='username'/>
    <label htmlFor='age'>Age</label>
    <input type='number' id='age'/>
    <Button type='submit'> Submit</Button>
    </Card>
</form>)
}

export default Users