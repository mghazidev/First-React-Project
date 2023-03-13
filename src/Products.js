function Products({arr}) {
    return (
        <>
        {arr.map((value) => (
            <div>   
                    <h1>{value.name}</h1>
                    <img src={value.image} alt={value.name} style={{width: "28%"}}></img>
                    <h2>{`${value.price} Rs`}</h2>
            </div>
            ))
        }
        </>
    );
}
export default Products