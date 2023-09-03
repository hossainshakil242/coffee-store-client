import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();

    return (
        <div>
            <h1 className="text-blue-400 font-bold text-3xl">Update of {loadedCoffee.name}</h1>

            
        </div>
    );
};

export default UpdateCoffee;