import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import { useParams } from 'react-router-dom';
import Layout from '../components/layout/Layout';

const CountryDetails = () => {
  const [data, setData] = useState(null); // Holds the specific country data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // Extract the ID from the URL
  const [isSending, setIsSending] = useState(false); // Track sending status

  const [formData, setFormData] = useState({
    name: '',
    visatype: '',
    country: '',
    countryCode: '+91',
    phone: '',
    email: '',
    terms: false,
  });

  // Fetch the data
  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        setLoading(true);
        const res = await fetch('/Benifits.countries.json'); // Ensure this path is correct
        if (!res.ok) throw new Error('Failed to fetch data');
        const countries = await res.json(); // Fetch the array of countries

        // Find the country by ID
        const country = countries.find((item) => item._id.$oid === id);
        if (!country) throw new Error('Country not found');
        setData(country); // Set the specific country data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCountryData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( !formData.name || !formData.phone ) {
      alert('Enter the fields')
      return;

    }
    setIsSending(true); // Set to true when sending starts


    const templateParams = {
      name: formData.name,
      visatype: formData.visatype,
      country: data.Country,
      countryCode: formData.countryCode,
      phone: formData.phone,
      email: formData.email,
    };

    emailjs
      .send(
        'service_r74e53r', // Replace with your EmailJS service ID
        'template_y8v5nz9', // Replace with your EmailJS template ID
        templateParams,
        'DXIWuxbV9blr57MhN' // Replace with your EmailJS user ID
      )
      .then(
        () => {
          alert('Form submitted successfully!');
          setFormData({
            name: "",
            visatype: "Study Visa",
            country: "",
            countryCode: "",
            phone: "",
            email: "",
            terms: false,
          }); 
        },
        (error) => {
          console.log('FAILED...', error);
          alert('Failed to submit the form. Please try again.');
        }
      )
      .finally(() => setIsSending(false)); // Reset to false when sending completes

  };

  // Show loading or error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  // Ensure `data` exists before rendering
  if (!data) return null;

  return (
    <Layout>
      <div>
        <div className="container max-w-full bg-white overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-6 md:p-12 border">
          <div className="relative">
            <img
              src="https://www.y-axis.com/assets/cms/2024-12/Visa-page-banner.webp"
              alt="Visa Banner"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-6 sm:p-8 lg:p-12 border">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-800 mb-6 text-center">
              Apply for a Visa
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6 p-7 max-w-lg mx-auto">
  <div className="grid sm:grid-cols-3 gap-4 items-center">
    <label className="block text-gray-700 font-medium text-sm sm:text-md">I am</label>
    <input
      type="text"
      name="name"
      placeholder="Enter your name"
      value={formData.name}
      onChange={handleChange}
      className="col-span-2 w-full text-gray-800  placeholder-gray-500 focus:outline-none focus:ring-0 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2"
    />
  </div>

  <div className="grid sm:grid-cols-3 gap-4 items-center">
    <label className="block text-gray-700 font-medium text-sm sm:text-md">Looking for </label>
    <select
      name="visatype"
      value={formData.visatype}
      onChange={handleChange}
      className="col-span-2 w-full text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2"
    >
      <option value="" disabled>Choose visa type</option>
      <option value="tourist">Tourist Visa</option>
      <option value="business">Business Visa</option>
      <option value="study">Study Visa</option>
      <option value="work">Work Visa</option>
      <option value="immigration">Immigration Visa</option>
    </select>
  </div>

  <div className="grid sm:grid-cols-3 gap-4 items-center">
    <label className="block text-gray-700 font-medium text-sm sm:text-md">Visa for</label>
    <select
      name="country"
      value={formData.country}
      onChange={handleChange}
      className="col-span-2 w-full text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2"
    >
      <option value={data.Country} > {data.Country}</option>

    </select>
  </div>

  <div className="grid sm:grid-cols-3 gap-4 items-center">
    <label className="block text-gray-700 font-medium text-sm sm:text-md">Contact me at</label>
    <div className="col-span-2 flex gap-4">
      <select
        name="countryCode"
        value={formData.countryCode}
        onChange={handleChange}
        className="w-24 text-gray-800 bg-transparent border-none border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-0 py-2"
      >
        <option value="+91">+91 (India)</option>
        <option value="+1">+1 (US)</option>
        <option value="+44">+44 (UK)</option>
        <option value="+61">+61 (Australia)</option>
        <option value="+81">+81 (Japan)</option>
        <option value="+49">+49 (Germany)</option>
        <option value="+33">+33 (France)</option>
        <option value="+86">+86 (China)</option>
      </select>
      <input
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone number"
        className="w-full text-gray-800  placeholder-gray-500 focus:outline-none focus:ring-0 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2"
      />
    </div>
  </div>

  <div className="grid sm:grid-cols-3 gap-4 items-center">
    <label className="block text-gray-700 font-medium text-sm sm:text-md">And My email</label>
    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email id"
      className="col-span-2 w-full text-gray-800  placeholder-gray-500 focus:outline-none focus:ring-0 bg-transparent border-b-2 border-gray-300 focus:border-blue-500 py-2"
    />
  </div>

  <div className="flex items-center gap-3">
    <input
      type="checkbox"
      name="terms"
      checked={formData.terms}
      onChange={(e) => setFormData({ ...formData, terms: e.target.checked })}
      id="terms"
      className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
    />
    <label htmlFor="terms" className="text-gray-600 text-sm">Accept terms and conditions</label>
  </div>

  <button
                type="submit"
                disabled={isSending}
                className={`bg-white text-black font-semibold py-3 px-8 border border-red-500 ${
                  isSending
                    ? "cursor-not-allowed bg-gray-300"
                    : "hover:bg-red-600 hover:text-white"
                } transition duration-300 w-full`}
              >
                {isSending ? "Sending..." : "Submit"}
              </button>
</form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
          <div className="p-6 w-full mx-auto">
            <h1 className="text-4xl font-bold text-red-700 mb-4">
              {data.Country}
            </h1>
            <h2 className="text-4xl font-bold mb-4">Visa Benefits</h2>
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
          </div>
          <div className="text-center p-8">
            <img
              src={data.photo}
              alt={data.Country}
              className="w-full h-auto rounded-lg border"
            />
          </div>
        </div>
      </div>
      <h1>{data.Visitvisa}</h1>
    </Layout>
  );
};

export default CountryDetails;
