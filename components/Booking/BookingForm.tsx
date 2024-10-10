import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interestedServices: string[];
  addOns: string[];
  vehicleInfo: string;
  freePickup: boolean;
  homeAddress: string;
  comments: string;
}

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    interestedServices: [],
    addOns: [],
    vehicleInfo: "",
    freePickup: false,
    homeAddress: "",
    comments: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: checked,
    }));
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const interestedServices = checked
        ? [...prevData.interestedServices, value]
        : prevData.interestedServices.filter((service) => service !== value);
      return { ...prevData, interestedServices };
    });
  };

  const handleAddOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const addOns = checked
        ? [...prevData.addOns, value]
        : prevData.addOns.filter((addOn) => addOn !== value);
      return { ...prevData, addOns };
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_cdz4bl6", // Your service ID
        "template_8vh8iuk", // Your template ID
        {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          interestedServices: formData.interestedServices.join(", "),
          addOns: formData.addOns.join(", "),
          vehicleInfo: formData.vehicleInfo,
          freePickup: formData.freePickup ? "Yes" : "No",
          homeAddress: formData.freePickup ? formData.homeAddress : "N/A",
          comments: formData.comments,
        },
        "JIT7wDfN9lboVIXNK" // Your public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setMessage("Booking submitted successfully!");
          setLoading(false);

          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            interestedServices: [],
            addOns: [],
            vehicleInfo: "",
            freePickup: false,
            homeAddress: "",
            comments: "",
          });
        },
        (err) => {
          console.log("FAILED...", err);
          setMessage("Booking submission failed. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="flex gap-10 items-stretch max-w-7xl">
        {/* Form Section */}
        <div className="flex flex-col w-full max-w-md">
          <h1 className="text-3xl font-medium text-black">Booking Form</h1>
          <p className="mt-4 text-base leading-7 text-black">
            Please fill in the details to book your service.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col mt-8 w-full">
            {/* First Name */}
            <div className="flex flex-col mt-4">
              <label htmlFor="firstName" className="font-medium leading-none text-red-600">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                required
                placeholder="John"
                className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                aria-label="First Name"
              />
            </div>

            {/* Last Name */}
            <div className="flex flex-col mt-4">
              <label htmlFor="lastName" className="font-medium leading-none text-red-600">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                required
                placeholder="Doe"
                className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                aria-label="Last Name"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col mt-4">
              <label htmlFor="email" className="font-medium leading-none text-red-600">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="you@company.com"
                className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                aria-label="Email"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col mt-4">
              <label htmlFor="phone" className="font-medium leading-none text-red-600">
                Phone <span className="text-red-600">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                placeholder="123-456-7890"
                className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                aria-label="Phone"
              />
            </div>

            {/* Interested Services */}
            <div className="flex flex-col mt-4">
              <label className="font-medium leading-none text-red-600">Interested Services</label>
              <div className="flex flex-col">
                <label>
                  <input
                    type="checkbox"
                    value="Interior Detailing"
                    onChange={handleServiceChange}
                  />
                  Interior Detailing
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Exterior Detailing"
                    onChange={handleServiceChange}
                  />
                  Exterior Detailing
                </label>
                <label>
                  <input
                    type="checkbox"
                    value="Complete Detailing"
                    onChange={handleServiceChange}
                  />
                  Complete Detailing
                </label>
              </div>
            </div>

            {/* Add-ons */}
            <div className="flex flex-col mt-4">
              <label className="font-medium leading-none text-red-600">Add-ons</label>
              <div className="flex flex-col">
                <label>
                  <input type="checkbox" value="Ceramic Coating" onChange={handleAddOnChange} />
                  Ceramic Coating
                </label>
                <label>
                  <input type="checkbox" value="Headlight Restoration" onChange={handleAddOnChange} />
                  Headlight Restoration
                </label>
              </div>
            </div>

            {/* Vehicle Info */}
            <div className="flex flex-col mt-4">
              <label htmlFor="vehicleInfo" className="font-medium leading-none text-red-600">
                Vehicle Info
              </label>
              <textarea
                id="vehicleInfo"
                name="vehicleInfo"
                value={formData.vehicleInfo}
                onChange={handleInputChange}
                placeholder="Make, Model, Year"
                className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                aria-label="Vehicle Info"
              />
            </div>

            {/* Free Pickup */}
            <div className="flex flex-col mt-4">
              <label className="font-medium leading-none text-red-600">Free Pickup</label>
              <label>
                <input
                  type="checkbox"
                  name="freePickup"
                  checked={formData.freePickup}
                  onChange={handleCheckboxChange}
                />
                Yes
              </label>
            </div>

            {/* Home Address */}
            {formData.freePickup && (
              <div className="flex flex-col mt-4">
                <label htmlFor="homeAddress" className="font-medium leading-none text-red-600">
                  Home Address
                </label>
                <textarea
                  id="homeAddress"
                  name="homeAddress"
                  value={formData.homeAddress}
                  onChange={handleInputChange}
                  placeholder="Street, City, Zip"
                  className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                  aria-label="Home Address"
                />
              </div>
            )}

            {/* Comments */}
            <div className="flex flex-col mt-4">
              <label htmlFor="comments" className="font-medium leading-none text-red-600">
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleInputChange}
                placeholder="Any additional comments?"
                className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 font-light leading-6 text-black bg-white border-gray-300 border-solid shadow-sm border-[0.91px]"
                aria-label="Comments"
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={loading}
              className={`transform transition-transform duration-500 ${message && !loading ? "animate-success" : ""} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            >
              {loading ? "Submitting..." : message ? "Submitted!" : "Submit"}
            </button>


          </form>
        </div>

        {/* Image Section */}

      </section>
    </main>
  );
};

export default BookingForm;
