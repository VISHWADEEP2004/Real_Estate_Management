import React from 'react';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarRegular } from '@fortawesome/free-solid-svg-icons';
import '../../assets/css/Slickcarousel.css'

const testimonials = [
  {
    name: "John Doe",
    role: "Homebuyer",
    text: "The team at Houserz was exceptional in helping me find my dream home. Their dedication and expertise made the process smooth and enjoyable.",
    image: "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA4L2pvYjEwMzQtZWxlbWVudC0wNy00MDMucG5n.png",
    rating: 5,
  },
  {
    name: "Jane Smith",
    role: "Seller",
    text: "Selling my property with Houserz was a great experience. Their marketing strategies and attention to detail helped me get top dollar for my home.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR64UiUQKXkLNtawAPA9VOgtm-RUfDzxLbaMDb-mXNPB_Cwh1gyaVweW3e61z2xlbEMKuY&usqp=CAU",
    rating: 4,
  },
  {
    name: "Michael Brown",
    role: "Investor",
    text: "Houserz provided invaluable advice and support for my real estate investments. Their market insights and recommendations were spot on.",
    image: "https://www.pngfind.com/pngs/m/317-3177131_636682202684372240-user-profile-photo-round-hd-png-download.png",
    rating: 5,
  },
  {
    name: "Emily Davis",
    role: "Tenant",
    text: "I had a seamless experience finding a rental property through Houserz. Their agents were friendly, responsive, and made the process easy.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQg5YRm43jkx-7W2Cp-EiUF4XJI-edcJbkSr72uNMNv4MKCNODaxv_a7x0sHUsAVcp31N8&usqp=CAU",
    rating: 4,
  }
];

const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {Array(fullStars).fill(<FontAwesomeIcon key="full" icon={faStar} className="text-yellow-500" />)}
      {halfStar && <FontAwesomeIcon key="half" icon={faStarHalfAlt} className="text-yellow-500" />}
      {Array(emptyStars).fill(<FontAwesomeIcon key="empty" icon={faStarRegular} className="text-yellow-500" />)}
    </>
  );
};

const TestimonialsCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <section className="testimonials-carousel  text-secondary-foreground dark:bg-background dark:text-primary-foreground py-12">
      <h2 className="text-3xl font-semibold mb-8 text-center">What Our Clients Say</h2>
      <div className="mx-auto w-11/12 md:w-3/4 lg:w-2/3"> {/* Adjust the width as needed */}
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border bg-card text-card-foreground dark:bg-card dark:text-card-foreground p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4"/>
                <div>
                  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
                  <p className="text-sm italic text-primary dark:text-primary-foreground">{testimonial.role}</p>
                  <div className="mt-1">{renderStars(testimonial.rating)}</div>
                </div>
              </div>
              <p className="text-base">{testimonial.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
