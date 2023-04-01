function Products(props){
    let {allproduct,value,handleChange,addCart}=props

    return (
        <>
          <section className="flex-70">
            <div className="flex space-between">
                <p className="p-count">{allproduct.length} Producd Found</p>
                <div>
                    <label>OrderBy</label>
                    <select name="Select" value={value} onChange={handleChange}>
                        <option value='Select'>Select</option>
                        <option value='Lowest To Highest'>Lowest To Highest</option>
                        <option value='Highest To Lowest'>Highest To Lowest</option>
                    </select>
                </div>
            </div>
            <div className="flex wrap  space between">
                {allproduct.map(product=><Product key={product.id} product={product} addCart={addCart}/>)}
            </div>
          </section>
        </>
    )

}

function Product(props){
    let {product,addCart}=props
    return (
        <div className="flex-24 product flex column justify-center align">
            <figure>
                <span className="btn3">{product.isFreeShipping?'Free Shipping':'paid Shipping'}</span>
                <img src={`static/products/${product.sku}_1.jpg`} alt={product.title}/>
            </figure>
            <h2>{product.title}</h2>
            <h3>{product.currencyFormat}{product.price}</h3>
            <button className="btn2" onClick={()=>{addCart(product)}}>Add To Cart</button>
        </div>
    )
}

export default Products