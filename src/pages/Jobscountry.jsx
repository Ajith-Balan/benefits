import React, { useState, useEffect } from "react";
import "../components/cards.css";
import { Link } from "react-router-dom"
const Jobscountry = () => { const [cardDetails, setCardDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCardDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch('/job.json'); // Ensure this path is correct
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
          Job Seeker      </h1>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
          HR CONSULTANCY SERVICES FOR WORK PERMIT WITH VISAS IN DIFFERENT COUNTRIES 
          </p>
        
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-4">
          Different sector – Industrial, Hospital, Education ,Manufacturing , Automobile , IT Sector <br />
We are A crossing for below countries          </p>
       
        </div>


        <div className="grid grid-cols-6 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-6 gap-4 px-2 py-5 ">

  {cardDetails.map((card) => (
    <Link  to={`/job-details/${card._id.$oid}`} key={card._id.$oid}>
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
export default Jobscountry
