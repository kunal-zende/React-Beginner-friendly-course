const ProductInfo = () => {
    const products = [
        { id: 1, name : "laptop", price : 100000},
        { id: 2, name : "Iphone", price : 30000},
        { id: 3, name : "Charger", price : 2000},
    ]

    return (
        <div >
            {products.map((p) => (
                <div key={p.id}>
                    <h1>Name : {p.name}</h1>
                    <h2>Price : {p.price}</h2>
                </div>
            ))}
           
        </div>
    );
}

export default ProductInfo;