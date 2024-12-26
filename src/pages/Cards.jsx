import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/cards.css";
import { Link } from "react-router-dom";

const Cards = () => {
  const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch('/Benifits.countries.json'); // Ensure this path is correct
        if (!res.ok) throw new Error('Network response was not ok');
        const data = await res.json(); 
        setCardDetails(data);
      } catch (err) {
        setError(err.message || "Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchCardDetails();
  }, []);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 border mt-10">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-6 w-full">
      <div className="flex flex-col justify-center text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">
          STUDY ABROAD          </h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            <strong>STUDY ABROAD:</strong> We offer services for 375 universities 
            worldwide, covering 4800 professional courses in IT, Science, Arts, 
            and Hospitality. 
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            Partnering with A++ star universities in reputable countries such as 
            the USA, Canada, the UK, Schengen countries, and Singapore.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
            <strong>OUR BUSINESS CONSULTANCY SERVICES:</strong> 
          </p>
          <ul className="list-disc pl-6 text-gray-700 text-sm sm:text-base leading-relaxed">
            <li>Financial consultancy – Bank, SBIC</li>
            <li>Work permits and VFS support</li>
            <li>Visa stamping for candidates with international clients</li>
            <li>Immigration services in various countries</li>
          </ul>
        </div>


        <div className="grid grid-cols-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 px-2 py-5 ">

  {cardDetails.map((card) => (
    <Link  to={`/country-details/${card._id.$oid}`} key={card._id.$oid}>
      <div className="flex justify-center items-center">
        <div className="flip-card w-full max-w-xs sm:max-w-md lg:max-w-lg aspect-square">
          <div className="flip-card-inner">
            {/* Front Side */}
            <div className="flip-card-front flex flex-col justify-center items-center bg-white border p-4 overflow-hidden w-full h-full">
              <img
                src={card.photo}
                alt={card.Country}
                className="w-full h-3/4 object-cover"
              />
              <h6 className=" sm:text-sm  py-2 text-center">
                {card.Country}
              </h6>
            </div>
            {/* Back Side */}
            <div className="flip-card-back bg-gray-100 text-gray-800 justify-center items-center flex flex-col border p-4">
              <h2 className="text-sm font-bold mb-2">{card.Country}</h2>
        
             
            </div>
          </div>
        </div>
      </div>
    </Link>
  ))}
</div>

      </div>
    </div>
  );
};

export default Cards;
