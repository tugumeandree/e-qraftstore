import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Navbar from './Navbar/navbar'
import Shop from '../Layouts/Shop/Shop'
import Artwork from '../Layouts/Shop/Artwork'
import Clothing from '../Layouts/Shop/Clothing'
import Ceramic from '../Layouts/Shop/Ceramic'
import Auth from '../Layouts/Auth/Auth'
import Product from '../Layouts/ProductDetails/Product'

const routes = () => {
    return (
        <BrowserRouter>
        <Navbar/>
            <Switch>
                <Route exact path="/" component={Shop}/>
                <Route path="/account" component={Auth}/>
                <Route path="/product-details" component={Product}/>
                <Route path="/artwork" component={Artwork}/>
                <Route path="/clothing" component={Clothing}/>
                <Route path="/ceramic-art" component={Ceramic}/>
            </Switch>
        </BrowserRouter>
    )
}

export default routes
