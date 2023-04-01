import React from 'react'

class Carts extends React.Component{
    constructor() {
        super()
        this.state = {
            isopen: false
        }
    }

    open = () => {
        this.setState({ isopen: true })
    }

    close = () => {
        this.setState({ isopen: false })
    }

    render(){
        let {isopen}=this.state
        let { carts, increment, decrement, deletecart } = this.props
        console.log(carts)
        let totalQuantity = carts.reduce((acc, cv) => {
            acc = acc + cv.quantity
            return acc
        }, 0)
    
        let totalAmount = carts.reduce((acc, cv) => {
            acc = acc + cv.price * cv.quantity
            return acc
        }, 0)
    
        if (!isopen) {
            return (
                <>
                    <ClosedCart open={this.open} totalQuantity={totalQuantity} />
                </>
            )
        }

        return (
            <>
                <div className=" cartBox">
                    <button className="btn2" onClick={this.close}>❌</button>
                    <span className="basket">🛒</span>
                    <span className="white">{totalQuantity}</span>
                    <hr/>
                    {carts.map((product) =>
                        <div className=" product flex align space-between">
                            <figure>
                                <img src={`static/products/${product.sku}_2.jpg`} alt={product.title} />
                            </figure>
                            <div>
                                <h2 className="white">{product.title}</h2>
                                <p className="gray">{product.style}</p>
                                <p className="gray">Quantity:{product.quantity}</p>
                            </div>
                            <div>
                                <small onClick={()=>{deletecart(product.id)}}>❌</small>
                                <h3 className="yellow">{product.currencyFormat}{product.price}</h3>
                                <small onClick={()=>{increment(product.id)}}>➕</small>
                                <small onClick={()=>{decrement(product.id)}}>➖</small>
                            </div>
                        </div>
                    )}
                    <div className="flex space-between">
                        <h2 className="white">SUBTOTAL</h2>
                        <h2 className="white">${totalAmount}</h2>
                    </div>
                    <div className="checkbox btn2">CHECKBOX</div>
                </div>
    
            </>
        )

    }
}

function ClosedCart(props) {
    return (
        <>
            <div className=''>
                <figure onClick={()=>{props.open()}} className="bag">
                    <img src='static/bag-icon.png' alt='hh' />
                    <span >{props.totalQuantity}</span>
                </figure>
            </div>
        </>
    )
}


export default Carts