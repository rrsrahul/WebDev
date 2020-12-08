import React,{Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import string from '../../Endpoints';



const INGREDIENT_PRICES = {
    salad: 1,
    cheese: 2,
    meat: 3,
    bacon: 2.5
};


class BurgerBuilder extends Component
{
    state = {
        ingredients: null,
        totalPrice: 4,
        canPurchase: false,
        loading:false,
        purchasing: false,
        error:false
    }

    
    componentDidMount()

    {
        /*axios.get(string+'Ingredients.json')
        .then(response =>
        {
            this.setState({ingredients:response.data})
        })
        .catch(err=>
            {
                console.log(err);
                this.setState({error:true});
            })
            */
    }


    updatePurchaseState = (ingredients)=>
    {
     
        const sum = Object.keys(ingredients).map(igKey=>
            {
                return ingredients[igKey];
            }).reduce((sum,el)=>
            {
                return sum+el;
            },0)

            this.setState({canPurchase:sum>0});

    }
    addIngredientHandler = (type)=>
    {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type]= updatedCount;
        const newPrice = INGREDIENT_PRICES[type] + this.state.totalPrice;
        this.setState({totalPrice: newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }

    removeIngredientHandler = (type)=>
    {

        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedCount = oldCount-1;

        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type]= updatedCount;
        const newPrice =  this.state.totalPrice - INGREDIENT_PRICES[type] ;
        this.setState({totalPrice: newPrice,ingredients:updatedIngredients})
        this.updatePurchaseState(updatedIngredients);

    }

    purchaseHandler = ()=>
    {
        this.setState({purchasing: true})
    }
    purchaseCancelHandler = ()=>
    {
        this.setState({purchasing: false})
    }

    purchaseContinueHandler = ()=>
    {
        /*alert('You can Continue');
        this.setState({loading:true});
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer:{
                name:'Rahul',
                adress:'Bangalore',
                email:'rahulrsgoku'
            },
            delivery:'fastest'
        }


        axios.post('/orders.json',order)
        .then(response=>
            {
                //console.log(response);
                this.setState({loading:false,purchasing:false});
            })
        .catch(err=>
            {
                console.log(err);
                this.setState({loading:false,purchasing:false});
            })*/
            const queryParams=[];
            for(let i in this.state.ingredients)
            {
                queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredients[i]));
            }
            queryParams.push('price='+this.state.totalPrice)
            const queryString = queryParams.join('&');
            this.props.history.push({
                pathname:'/checkout',
                search:'?'+ queryString
            });
    }

    render()
    {
        const disabledInfo = {...this.state.ingredients};

        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key]<=0
        }
        let orderSummary = null;
       

        let burger = <Spinner/>
        if(this.state.ingredients)
        {
            burger =<React.Fragment>
            <Burger ingredients={this.state.ingredients}/>
           <BuildControls 
           ingredientAdded = {this.addIngredientHandler}
           ingredientRemoved={this.removeIngredientHandler}
           canPurchase={this.state.canPurchase}
           disabled={disabledInfo}
           onOrder = {this.purchaseHandler}/>
           </React.Fragment>;

           orderSummary = <OrderSummary ingredients={this.state.ingredients} continue={this.purchaseContinueHandler}
           cancel={this.purchaseCancelHandler}
           price={this.state.totalPrice}/>;
        }


        if(this.state.loading)
        {
            orderSummary= <Spinner/>
        }
        if(this.state.error)
        {
            burger = <p>Ingredients can't be loaded</p>
        }
       
        return(<Auxiliary>
            <Modal show={this.state.purchasing}
            modalClosed={this.purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
            
            
        </Auxiliary>

        )
    }
}

export default withErrorHandler(BurgerBuilder,axios);