
import Product from "../Product/Product";
function ProductList(){
    return(
        <>
            <div className="section4">
                <h2 className="heading">Hottest headphones of the month</h2>
                <div className="cards">
                    <Product/>
                    <Product/>
                    <Product/>
                </div>
            </div>
        </>
    )
}

export default ProductList;