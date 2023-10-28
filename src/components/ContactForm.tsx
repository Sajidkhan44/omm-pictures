import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
      // Form is valid, you can submit the data or take further action
      setFormSubmitted(true);
      // Send the form data to your server or perform other actions here
    } else {
      setFormErrors(errors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.name) {
      errors.name = 'Name is required';
    }
    if (!data.email || !isValidEmail(data.email)) {
      errors.email = 'Valid email is required';
    }
    if (data.number && !isValidPhoneNumber(data.number)) {
      errors.number = 'Valid phone number is required';
    }
    if (!data.message) {
      errors.message = 'Message is required';
    }
    return errors;
  };

  const isValidEmail = (email) => {
    // You can add a more complex email validation pattern here
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (number) => {
    // You can add phone number validation logic here
    // For simplicity, we'll check if it's a number with at least 10 digits
    return /^\d{10,}$/.test(number);
  };

  return (
    <div id='contact' className="my-12 text-white space-y-12">
      <h2 className={`font-semibold md:text-5xl heading-gallery text-3xl text-center`}>
        Contact Us
      </h2>
      <div className="grid lg:grid-cols-2 w-[85%] mx-auto">
        <div className="">
          <img src="/bg-2.png" alt="" className="" />
        </div>
        <div className="bg-black text-white shadow-md rounded flex justify-center items-center w-full">
          <form action="https://formsubmit.co/ommpictureswebsite@gmail.com" method="POST" className="lg:w-[80%] w-full" >
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.name ? 'border-red-500' : ''
                }`}
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
              />
              {formErrors.name && (
                <p className="text-red-500 text-xs italic">{formErrors.name}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.email ? 'border-red-500' : ''
                }`}
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
              />
              {formErrors.email && (
                <p className="text-red-500 text-xs italic">{formErrors.email}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="number">
                Phone number
              </label>
              <input
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.number ? 'border-red-500' : ''
                }`}
                id="number"
                name="number"
                type="text"
                placeholder="Your Phone number"
                value={formData.number}
                onChange={handleChange}
              />
              {formErrors.number && (
                <p className="text-red-500 text-xs italic">{formErrors.number}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-100 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  formErrors.message ? 'border-red-500' : ''
                }`}
                id="message"
                name="message"
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
              />
              {formErrors.message && (
                <p className="text-red-500 text-xs italic">{formErrors.message}</p>
              )}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
