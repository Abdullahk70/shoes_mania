import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addTestimonials, delTestimonials, getTestimoanial } from '../services/api';
import { FaEdit, FaTrash } from 'react-icons/fa';


const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const[edit,setEdit]=useState(false);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    description: '',
  });
  const handleEdit = (itm) => {
  
    setNewTestimonial(itm);
    setEdit(true);
    
  };
  const onEdit=()=>{
   delTestimonials(newTestimonial._id);
   addTestimonial();
   setEdit(false);
  }
  
  const handleDelete = async (id) => {
    try {
      
      
      delTestimonials(id);
      fetchData();
    } catch (error) {
      console.error('Error deleting testimonial:', error.message);
    }
  };
  
  const fetchData = async () => {
    try {
      const response = await getTestimoanial();
      setTestimonials(response.data);
    } catch (error) {
      console.error('Error fetching testimonials:', error.message);
    }
  };

  useEffect(() => {
    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData(); // Fetch every 5 seconds
    }, 2000);

    return () => {
      clearInterval(intervalId); // Cleanup interval on component unmount
    };
  }, []);

  const handleInputChange = (e) => {
    setNewTestimonial({
      ...newTestimonial,
      [e.target.name]: e.target.value,
    });
  };

  const addTestimonial = async () => {
    try {
        const test=newTestimonial;
        setNewTestimonial({
            name: '',
            description: '',
          });
      await addTestimonials(test);

      fetchData(); // Update testimonials after adding a new one
    } catch (error) {
      console.error('Error adding testimonial:', error.message);
    }
  };

  return (
    <div className="container" style={{ marginTop: "8rem" }}>
      <h2 className="text-center mb-4">Testimonials</h2>
      <div className="row">
      {testimonials.map((testimonial) => (
  <div key={testimonial.id} className="col-md-4 mb-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{testimonial.name}</h5>
        <p className="card-text">{testimonial.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => handleEdit(testimonial)}
          >
            <FaEdit />
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => handleDelete(testimonial._id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  </div>
))}

      </div>
      <div className="mt-4">
        <h3>Add a Testimonial</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={newTestimonial.name}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={newTestimonial.description}
            onChange={handleInputChange}
            className="form-control"
          />
        </div>
        {edit==false && <button onClick={addTestimonial} className="btn btn-primary">
          Add Testimonial
        </button>
        }
        {edit==true && <button onClick={onEdit} className="btn btn-warning">
          Edit Testimonial
        </button>}
      </div>
    </div>
  );
};

export default Testimonials;

