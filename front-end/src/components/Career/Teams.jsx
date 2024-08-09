import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Teams = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    centerMode: false,
  };

  return (
    <section id="teams" className="py-20  bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Our Teams</h2>
        <h3 className="text-2xl mb-6">Secure your spot among world-class talent</h3>
        <p className="mb-6">
          Our teams are always switched-on, they know their stuff and take the time to connect with those around them. Sound a bit like you? Read about our different teams.
        </p>
        <Slider {...settings}>
          {/* Card 1 */}
          <div className="flex justify-center items-center p-4">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden w-full">
              <img 
                src="https://okcredit-blog-images-prod.storage.googleapis.com/2021/04/Real-Estate-Business1--1-.jpg" 
                alt="Business Team" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Business</h4>
                <p className="text-gray-600">
                  Learn about the Business team and their role in driving growth.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex justify-center items-center p-4">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden w-full">
              <img 
                src="https://myrealestate.in/storage/2022/08/Digital-Era-in-Real-Estate.jpg" 
                alt="Growth & Marketing Team" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Growth & Marketing</h4>
                <p className="text-gray-600">
                  Discover how our Growth & Marketing team enhances our brand
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex justify-center items-center p-4">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden w-full">
              <img 
                src="https://www.montrealinternational.com/app/uploads/2022/06/jll-en-1200x592-1-1200x592.jpg" 
                alt="Centre of Excellence Team" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Centre of Excellence</h4>
                <p className="text-gray-600">
                  Explore the Centre of Excellence and their commitment to quality.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex justify-center items-center p-4">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden w-full">
              <img 
                src="https://media.istockphoto.com/id/927978752/photo/smartphone-application-for-online-searching-buying-selling-and-booking-real-estate-unusual-3d.jpg?s=2048x2048&w=is&k=20&c=ctCGMst7Jf65KL758HmcU_jw1q9wiiz0nZUQ1IQ1880=" 
                alt="Technology Team" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Technology</h4>
                <p className="text-gray-600">
                  Dive into the Technology team's innovative solutions and tools.
                </p>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex justify-center items-center p-4">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden w-full">
              <img 
                src="https://media.istockphoto.com/id/1351472483/photo/house-project-in-virtual-reality.jpg?s=612x612&w=0&k=20&c=WD5nBG2kzfNSUqvCOgbVL2E-pfDRzbukzp2pZMWxCjE=" 
                alt="Design Team" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Design</h4>
                <p className="text-gray-600">
                  Explore how our Design team shapes user experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex justify-center items-center p-4">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden w-full">
              <img 
                src="https://media.istockphoto.com/id/1179667632/photo/woman-holding-a-mobile-phone-with-loan-application-approval.jpg?s=612x612&w=0&k=20&c=CjqxQH6mAjvewQRrwpNKl2qDyJLhNbH9uw5ZCKQSkd4=" 
                alt="Support Team" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Support</h4>
                <p className="text-gray-600">
                  Learn about our Support team and their role in assisting clients.
                </p>
              </div>
            </div>
          </div>

          {/* Card 7 */}
          <div className="flex justify-center items-center p-4">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden w-full">
              <img 
                src="https://media.istockphoto.com/id/1497684257/photo/real-estate-agent-explain-house-plans-to-view-house-plans-and-sales-contracts-house-purchase.jpg?s=612x612&w=0&k=20&c=CUzac2HRc9FQW2at2fbDxVfYKRdNYvg6CcNl8D9IHAM=" 
                alt="Sales Team" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Sales</h4>
                <p className="text-gray-600">
                  Discover how our Sales team drives growth and success.
                </p>
              </div>
            </div>
          </div>

          {/* Card 8 */}
          <div className="flex justify-center items-center p-4">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden w-full">
              <img 
                src="https://media.istockphoto.com/id/1335050734/photo/businessman-using-a-computer-for-property-sales-listings-real-estate-agent-agency-contractor.jpg?s=612x612&w=0&k=20&c=-QsLOTTjONcvkhAJQWjsXHjeRXnInmclCZIjRt3wE20=" 
                alt="Operations Team" 
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold">Operations</h4>
                <p className="text-gray-600">
                  Explore the Operations team and their role in efficiency.
                </p>
              </div>
            </div>
          </div>
        </Slider></div>
    </section>
  );
};

export default Teams;
