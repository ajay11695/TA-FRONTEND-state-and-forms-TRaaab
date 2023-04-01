import React from "react"
import data from '../data/data.json'
import Sidevar from "./Sidevar"
import Products from "./Products"
import Carts from "./Cart"

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'Select',
            size: '',
            cart: []
        }
    }

    handleclickbtn = (size) => {
        this.setState({
            size: size
        })
    }

    handleChange = (event) => {
        this.setState({
            value: event.target.value
        })
    }

    handleOrderProducts = (value, size, allproduct) => {
        let sortedProducts = allproduct

        if (size) {
            sortedProducts = sortedProducts.filter((p) => {
                return p.availableSizes.includes(size)
            })
        }

        if (value === 'Highest To Lowest') {
            sortedProducts = sortedProducts.sort((a, b) => b.price - a.price)
        }

        if (value === 'Lowest To Highest') {
            sortedProducts = sortedProducts.sort((a, b) => a.price - b.price)
        }

        return sortedProducts
    }

    handleaddCart = (p) => {
        console.log(p)
        let isPresent = this.state.cart.findIndex((product) => product.id === p.id)

        if (isPresent !== -1) {
            return this.incrementQuantity(p.id)
        } else {
            p.quantity = 1
            console.log(p)
            this.setState((preState) => ({
                cart: preState.cart.concat([p])
            }))
        }
    }

    incrementQuantity = (id) => {
        this.setState((preState) => {
            let updatedCart = preState.cart.map((p) => {
                console.log(p)
                if (p.id === id) {
                    return {
                        ...p, quantity: p.quantity + 1
                    }
                } else {
                    return p
                }
            })
            return {
                cart: updatedCart
            }
        })
    }

    decrementQuantity = (id) => {
        this.setState((preState) => {
            let updatedCart = preState.cart.map((p) => {
                if (p.id === id) {
                    if (p.quantity > 1) {
                        return {
                            ...p, quantity: p.quantity - 1
                        }
                    }
                    return p
                }
                return p

            })

            return {
                cart: updatedCart
            }
        })
    }

    deletetcart = (id) => {
        this.setState((preState) => {
            let updatedCart = preState.cart.filter((p) => {
                return p.id !== id
            })

            return {
                cart: updatedCart
            }
        })
    }


    render() {
        let { value, size, cart,isopen } = this.state
        let allproduct = (JSON.parse(JSON.stringify(data))).products
        // console.log(cart)

        return (
            <>
                <div className="container flex space-between">
                    <Sidevar allproduct={allproduct} size={size} handleclickbtn={this.handleclickbtn} />
                    <Products allproduct={this.handleOrderProducts(value, size, allproduct)} value={value} handleChange={this.handleChange} addCart={this.handleaddCart} />
                </div>
                <div className="cartItem">
                    <Carts carts={cart} increment={this.incrementQuantity} decrement={this.decrementQuantity} deletecart={this.deletetcart} />
                </div>
            </>
        )
    }
}

export default Main