import React from 'react';
import about from '../../assets/img/about.jpg'
import img1 from '../../assets/img/img1.jpg'
import img2 from '../../assets/img/img2.jpg'
import img3 from '../../assets/img/img3.jpg'
import img4 from '../../assets/img/img4.jpg'
const AboutUs = () => {
  return (
    <section className="about-us-section  text-secondary-foreground dark:bg-background dark:text-primary-foreground pt-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-8 text-center pt-10">About DreamDwelling</h2>
        <div className="flex flex-col md:flex-row items-center md:justify-center">
          <div className="md:w-1/2 lg:w-2/5 mb-8 md:mb-0">
            <img
              src={about}
              alt="About Us"
              className="rounded-lg shadow-md w-full"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5 md:pl-8">
            <p className="text-lg mb-4">
              DreamDwelling is your trusted partner in real estate, offering comprehensive services since 1994. We are dedicated to helping you find your dream home, sell your property, or make a smart investment.
            </p>
            <p className="text-lg mb-4">
              Our experienced team is committed to providing reliable support and guidance throughout your real estate journey. We pride ourselves on our integrity, professionalism, and customer-centric approach.
            </p>
            <p className="text-lg">
              At DreamDwelling, we strive to make your real estate experience seamless and successful. Join us and discover the best properties, expert advice, and unparalleled service.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center mt-8">
          <img src={img1} alt="Team Member 1" className="w-24 h-24 rounded-full m-4" />
          <img src={img2} alt="Team Member 2" className="w-24 h-24 rounded-full m-4" />
          <img src={img3} alt="Team Member 3" className="w-24 h-24 rounded-full m-4" />
          <img src={img4} alt="Team Member 4" className="w-24 h-24 rounded-full m-4" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
