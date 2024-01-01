import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addProduct } from "./../redux/products/actions";

const AddProduct = () => {
  const dispatch = useDispatch();
  const { register, handleSubmit,reset , formState: { errors } } = useForm();

  const onSubmit = (data) => {
    dispatch(addProduct(data));
    reset();

  };

  return (
    <div className="formContainer">
      <h4 className="formTitle">Add New Product</h4>
      <form
        className="space-y-4 text-[#534F4F]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="space-y-2">
          <label >Product Name</label>
          <input
            {...register("name", { required: true })}
            className="addProductInput"
            type="text"
          />
          {errors.name && <span className="error">Product Name is required</span>}
        </div>

        <div className="space-y-2">
          <label>Category</label>
          <select
            {...register("category", { required: true })}
            className="addProductInput"
          >
            <option value="">Select a category</option>
            <option value="clothing">Clothing</option>
            <option value="gadgets">Gadgets</option>
            <option value="bags">Bags</option>
            {/* Add more options as needed */}
          </select>
          {errors.category && <span className="error">Category is required</span>}
        </div>

        <div className="space-y-2">
          <label>Image Url</label>
          <input
            {...register("imgUrl", { required: true })}
            className="addProductInput"
            type="text"
          />
          {errors.imgUrl && <span className="error">Image Url is required</span>}
        </div>

        <div className="grid grid-cols-2 gap-8 pb-4">
          <div className="space-y-2">
            <label>Price</label>
            <input
              {...register("price", { required: true, min: 0 })}
              className="addProductInput"
              type="number"
            />
            {errors.price && <span className="error">Please enter a valid price</span>}
          </div>

          <div className="space-y-2">
            <label>Quantity</label>
            <input
              {...register("quantity", { required: true, min: 0 })}
              className="addProductInput"
              type="number"
              id="lws-inputQuantity"
            />
            {errors.quantity && <span className="error">Please enter a valid quantity</span>}
          </div>
        </div>

        <button type="submit" className="submit bg-indigo-600 text-white">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
