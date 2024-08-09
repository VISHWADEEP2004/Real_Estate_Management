import React from 'react';

const WhyJoin = () => {
  return (
    <section id="why-join" className="py-20  bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Join Us?</h2>
        <div className="flex flex-wrap justify-between gap-8">
          {/* Card 1 */}
          <div className="flex flex-col bg-white border rounded-lg shadow-lg w-full md:w-1/3 max-w-xs md:max-w-sm">
            <div className="flex-grow">
              <img 
                src="https://t4.ftcdn.net/jpg/03/00/10/35/360_F_300103505_oBLUa4dEG8mFdP60givbyNdoy7aHFmuu.jpg" 
                alt="Global Family" 
                className="w-full h-80 object-cover" 
              />
            </div>
            <div className="p-6 flex-shrink-0 ">
              <h3 className="text-xl font-semibold mb-2">Come home to your global family</h3>
              <p>Experience being a part of a leading global network of excellence in real estate.</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col bg-white border rounded-lg shadow-lg w-full md:w-1/3 max-w-xs md:max-w-sm">
            <div className="flex-grow">
              <img 
                src="https://www.oregonlive.com/resizer/v2/https%3A%2F%2Fadvancelocal-adapter-image-uploads.s3.amazonaws.com%2Fimage.advance.net%2Fhome%2Fadv-media%2Fwidth2048%2Fimg%2Fsell_my_home%2Fphoto%2F2017%2F08%2F22%2F23276135-large.jpg?auth=51af2ff9fc311a4384f0082ba89bd81791f2591c2d0b3cfe43437e050d3ad4ad&width=500&quality=90" 
                alt="Fulfill Dreams" 
                className="w-full h-80 object-cover" 
              />
            </div>
            <div className="p-6 flex-shrink-0 ">
              <h3 className="text-xl font-semibold mb-2">Come home to fulfill dreams</h3>
              <p>Experience the feeling of changing the way India experiences property.</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col bg-white border rounded-lg shadow-lg w-full md:w-1/3 max-w-xs md:max-w-sm">
            <div className="flex-grow">
              <img 
                src="https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg" 
                alt="Learn and Grow" 
                className="w-full h-80 object-cover" 
              />
            </div>
            <div className="p-6 flex-shrink-0 ">
              <h3 className="text-xl font-semibold mb-2">Come home to learn and grow</h3>
              <p>Experience a fast-paced learning environment that fosters growth.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
