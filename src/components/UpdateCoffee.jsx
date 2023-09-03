import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const loadedCoffee = useLoaderData();


    const handleAddCoffee = e => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const UpdateCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(UpdateCoffee);

        // send data to the server
        fetch(`http://localhost:5000/coffee/${loadedCoffee._id}`, {
            method: 'PUT',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(UpdateCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount>0) {
                    Swal.fire({
                        title: 'Congratulation!',
                        text: 'Updated successfully.',
                        icon: 'success',
                        confirmButtonText: 'Done'
                    })
                }
            })

    }

    return (
        <div className="bg-[#F4F3F0] px-24 pb-24">
            <h2 className="text-blue-400 font-bold text-3xl p-10">Update of {loadedCoffee.name}</h2>

            {/* updatting Data */}
            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="coffee-name" defaultValue={loadedCoffee.name} name="name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="available-quantity" defaultValue={loadedCoffee.quantity} name="quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form supplier row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="supplier" defaultValue={loadedCoffee.supplier} name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="taste" defaultValue={loadedCoffee.taste} name="taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form category and details row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="category" defaultValue={loadedCoffee.category} name="category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="details" defaultValue={loadedCoffee.details} name="details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                {/* form photourl */}
                <div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="photo url" defaultValue={loadedCoffee.photo} name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn  btn-block mt-5" />

            </form>
        </div>
    );
};

export default UpdateCoffee;