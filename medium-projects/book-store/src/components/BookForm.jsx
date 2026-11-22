import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


function BookForm({ initialData, onSubmit }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: initialData?.title || "",
        author: initialData?.author || "",
        price: initialData?.price || "",
        description: initialData?.description || "",
        imageUrl: initialData?.imageUrl || ""
    })

    useEffect(() => {
  setFormData({
    title: initialData?.title || "",
    author: initialData?.author || "",
    price: initialData?.price || "",
    description: initialData?.description || "",
    imageUrl: initialData?.imageUrl || ""
  });
}, [initialData]);

    const [errors, setErrors] = useState({})

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(validate()){
            onSubmit(formData)
        }
        navigate("/books");
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) =>({
            ...prev,
            [name]: value
        }))
     }

    const validate = () =>{
        const newErrors = {}

        if(!formData.title.trim()){
            newErrors.title = "Title is required"
        }
        if(!formData.price){
            newErrors.price = "Price is required"
        }
        if(!formData.author.trim()){
            newErrors.author = "Author is required"
        }
        if(!formData.description.trim()){
            newErrors.description = "Description is required"
        }
        setErrors(newErrors)

        return Object.keys(newErrors).length === 0;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title</label>
                    <input
                     type="text" 
                     name="title"
                     onChange={handleChange}
                     value={formData.title}

                    />
                    {errors.title && <p className="error">{errors.title}</p>}
                    
                </div>
                <div>
                    <label>Description </label>
                    <input type="text"
                    name="description" 
                        onChange={handleChange}
                        value={formData.description}
                    />
                    {errors.description && <p className="error">{errors.description}</p>}
                </div>
                <div>
                    <label >Author </label>
                    <input type="text" 
                    name="author"
                        onChange={handleChange}
                        value={formData.author}
                    />
                    {errors.author && <p className="error">{errors.author}</p>}
                </div>
                <div>
                    <label >Price </label>
                    <input type="number" 
                        name="price"
                        onChange={handleChange}
                        value={formData.price}
                    />
                    {errors.price && <p className="error">{errors.price}</p>}
                </div>
                <div>
                    <label>Image URL</label>
                    <input
                     type="text"
                     name="imageUrl"
                     onChange={handleChange}
                     value={formData.imageUrl}
                    />
                </div>
            <button>Submit</button>
            </form>
        </div>
    );
}
export default BookForm;
