import { data } from "autoprefixer";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {

    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee;

    const handleDelete = (_id) => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            swalWithBootstrapButtons.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    return (
        <div className="card grid grid-rows-1 md:grid-cols-2 card-side bg-base-100 shadow-xl">
            <figure><img src={photo} className="w-full" alt={category} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-secondary btn-outline">Buy</button>
                    <button onClick={() => handleDelete(_id)} className="btn btn-secondary btn-outline">Delete</button>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="btn btn-secondary btn-outline">Edit</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;