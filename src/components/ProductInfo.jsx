const ProductInfo = () => {
    const info = {
        name : "Laptop",
        price : 1000,
    }

    return (
        <div>
            <p>Name : {info.name}</p>
            <p>Price : {info.price}</p>
        </div>
    );
}

export default ProductInfo;