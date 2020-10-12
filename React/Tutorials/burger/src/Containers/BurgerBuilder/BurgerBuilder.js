import React,{Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';
class BurgerBuilder extends Component
{
    state = {
        ingredients: {
            salad:0,
            cheese:0,
            meat:0,
            bacon:0,
        }
    }
    render()
    {
        return(<Auxiliary>
            <Burger ingredients={this.state.ingredients}/>
            <div>Build Controls</div>
        </Auxiliary>

        )
    }
}

export default BurgerBuilder;