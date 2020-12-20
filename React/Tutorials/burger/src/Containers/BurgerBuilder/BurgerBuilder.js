import React,{Component } from 'react';
import {connect} from 'react-redux'

import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../Components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
//import string from '../../Endpoints';
//import * as actionTypes from '../../store/actions/actionTypes'

import * as burgerBuilderActions from '../../store/actions/index';



class BurgerBuilder extends Component
{
    state = {
        loading:false,
        purchasing: false,
       
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
           this.props.onInitIngredients();
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

            return sum>0;

    }
    
    purchaseHandler = ()=>
    {
        if(this.props.isAuthenticated)
        {
            this.setState({purchasing: true})
        }
        else{
            this.props.onSetAuthRedirectPath('/checkout')
            this.props.history.push('/auth');
        }
        
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
            ingredients: this.props.ings,
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
            console.log('onInitPurchase')
            this.props.onInitPurchase();
            this.props.history.push({
                pathname:'/checkout'
            });
    }

    render()
    {
        const disabledInfo = {...this.props.ings};

        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key]<=0
        }
        let orderSummary = null;
       

        let burger = <Spinner/>
        if(this.props.ings)
        {
            burger =<React.Fragment>
            <Burger ingredients={this.props.ings}/>
           <BuildControls 
           ingredientAdded = {this.props.onIngredientAdded}
           ingredientRemoved={this.props.onIngredientRemoved}
           canPurchase={this.updatePurchaseState(this.props.ings)}
           disabled={disabledInfo}
           onOrder = {this.purchaseHandler}
           price={this.props.price}
           isAuth = {this.props.isAuthenticated}/>
           </React.Fragment>;

           orderSummary = <OrderSummary ingredients={this.props.ings} continue={this.purchaseContinueHandler}
           cancel={this.purchaseCancelHandler}
           price={this.props.price}/>;
        }


        if(this.state.loading)
        {
            orderSummary= <Spinner/>
        }
        if(this.props.error)
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

const mapDisaptchToProps = (dispatch)=>
{
    return {
        onIngredientAdded: (name)=>{ dispatch(burgerBuilderActions.addIngredient(name))},
        onIngredientRemoved: (name)=>{ dispatch(burgerBuilderActions.removeIngredient(name))},
        onInitIngredients: ()=>{dispatch(burgerBuilderActions.initIngredients())},
        onInitPurchase: ()=>{dispatch(burgerBuilderActions.purchaseInit())},
        onSetAuthRedirectPath: (path)=>{dispatch(burgerBuilderActions.setAuthRedirectPath(path))}
    }
}

const mapStateToProps = (state)=>
{
    return {
        ings:state.burgerBuilder.ingredients,
        price:state.burgerBuilder.totalPrice,
        error:state.burgerBuilder.error,
        isAuthenticated: state.auth.token!=null
    }
}
//
export default connect( mapStateToProps , mapDisaptchToProps )(withErrorHandler(BurgerBuilder,axios));