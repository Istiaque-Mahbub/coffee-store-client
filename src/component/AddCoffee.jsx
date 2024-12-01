import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {name,quantity,supplier,taste,category,details,photo}
        console.log(newCoffee)

        //send data to the server

       fetch('http://localhost:5000/coffee',
        {
            method:'POST',
            headers:{
                'content-type' : 'application/json',
            },
            body: JSON.stringify(newCoffee)
        }
       )
       .then(res=>res.json())
       .then(data =>{
        if(data.insertedId){
            Swal.fire({
                title: 'Success!',
                text: 'Coffee Added Successfully',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            form.reset();
        }else{
            Swal.fire({
                title: 'Error!',
                text: 'Something went wrong',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
       })
    }
    return (
        <div className="bg-[#F3F4F0] p-24">
           <h2 className="text-3xl font-extrabold">Add a Coffee</h2> 
           <form onSubmit={handleAddCoffee}>
            {/* form name and quantity row */}
            <div className="md:flex gap-10 mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full"/>
                        
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full"/>
                        
                    </label>
                </div>
            </div>
            {/* form supplier and taste row */}
            <div className="md:flex gap-10 mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="supplier" placeholder="Supplier Name" className="input input-bordered w-full"/>
                        
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="taste" placeholder="Taste" className="input input-bordered w-full"/>
                        
                    </label>
                </div>
            </div>
            {/* form category and details row */}
            <div className="md:flex gap-10 mb-4">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="category" placeholder="Category" className="input input-bordered w-full"/>
                        
                    </label>
                </div>
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="details" placeholder="Details" className="input input-bordered w-full"/>
                        
                    </label>
                </div>
            </div>

            <div className=" mb-4">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full"/>
                        
                    </label>
                </div>
                
            </div>
           
            <input type="submit" value="Add Coffee" className="btn btn-block btn-primary"/>
           </form>
        </div>
    );
};

export default AddCoffee;