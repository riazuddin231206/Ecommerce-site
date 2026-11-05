

const ProductData = ({ item }) => {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm mx-auto">
                <figure>
                    <img
                        className="w-80 h-70 rounded-3xl"
                        src={item.image_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{item.name}</h2>
                    <p>{item.description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductData;