

const ToyForm = () => {
    

    const handleSubmit =(event)=>{
        event.preventDefault()
        const form = event.target;
        const photo = form.toysphoto.value;
        const name = form.name.value;
        const sellerName =form.sellerName.value;
        const sellerEmail = form.sellerEmail.value;
        const category = form.category.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const availablequantity = form.rating.value;
        const description = form.description.value;
        const userInfo = {
            photo, name, sellerName, sellerEmail, category, price, rating, availablequantity, description
        }
        fetch('https://assignment-11-server-five-omega.vercel.app/toys',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body:JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
        })
        console.log(userInfo);

    }

  return (
  
    <>
      <form onSubmit={handleSubmit} className="relative pt-5 ">
        <h1 className="text-center font-bold text-2xl text-blue-600">Add A toy</h1>
     <div>
     <div className=' md:grid grid-cols-2 gap-6 bg-slate-300 shadow-2xl rounded px-8 pt-6 pb-8 mb-4 md:w-1/2 lg:w-1/2 mx-auto'>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Toys Picture
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="toysPhoto"  type="text" name='toysphoto' placeholder="Enter your toys photo url" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
          Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" name='name' type="text" placeholder="Name" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller-name">
          Seller Name
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="seller-name" name='sellerName' type="text" placeholder="Seller Name" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="seller-email">
          Seller Email
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="seller-email" name='sellerEmail' type="email" placeholder="Seller Email" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="sub-category">
          Sub-category
        </label>
        <select name='category' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sub-category">
          <option >Math Toys</option>
          <option className='my-2'>Language Toys</option>
          <option>Science Toys</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
          Price
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="price" name='price' type="text" placeholder="Price" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="rating">
          Rating
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="rating" type="number" name='rating' step="0.1" min="0" max="5" placeholder="Rating" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" >
          Available Quantity
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="quantity" type="number" name='availablequantity' min="0" placeholder="Available Quantity" />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2 w-full" htmlFor="description">
          Description
        </label>
        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-10" id="description" name='description' placeholder="Add toys description" rows="5" />
      </div>
     
      </div>
     </div>
      <div className='absolute text-center  bottom-0 w-full py-5 '>
       <button className='p-2 rounded-lg text-lg font-bold text-white w-[500px] bg-blue-500 mx-auto' type="submit">Add toy</button>
       </div>
       
    </form>
    
    </>
  );
};

export default ToyForm;
