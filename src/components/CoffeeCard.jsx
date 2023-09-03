import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;
    return (
        <div className="card grid grid-rows-1 md:grid-cols-2 card-side bg-base-100 shadow-xl">
            <figure><img src={photo} className="w-full" alt={category} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-secondary btn-outline">Buy</button>
                    <button className="btn btn-secondary btn-outline">Delete</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn btn-secondary btn-outline">Edit</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;