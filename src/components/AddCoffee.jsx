import Swal from 'sweetalert2'

const AddCoffee = () => {

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

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);

        // send data to the server
        fetch('http://localhost:5000/coffee',{
            method: 'POST',
            headers: {
                'content-Type' : 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.acknowledged){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee added successfully.',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })

    }

    return (
        <div className="bg-[#F4F3F0] p-24 ">
            <h2 className="text-2xl font-bold">Add Coffee</h2>

            <form onSubmit={handleAddCoffee}>
                {/* form name and quantity row */}
                <div className="md:flex gap-5">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="coffee-name" name="name" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="available-quantity" name="quantity" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="supplier" name="supplier" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="taste" name="taste" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="category" name="category" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="details" name="details" className="input input-bordered w-full" />
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
                            <input type="text" placeholder="photo url" name="photo" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Coffee" className="btn  btn-block mt-5" />

            </form>

        </div>
    );
};

export default AddCoffee;