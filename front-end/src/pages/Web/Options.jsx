// import React, { useState } from 'react';
import '../../assets/css/Destinations.css'


// const optionsData = [
//   {
//     background: "url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fDB8fHww)",
//     icon: "fas fa-walking",
//     main: "Blonkisoaz",
//     sub: "Omuke trughte a otufta"
//   },
//   {
//     background: "url(https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg)",
//     icon: "fas fa-snowflake",
//     main: "Oretemauw",
//     sub: "Omuke trughte a otufta"
//   },
//   {
//     background: "url(https://img.freepik.com/premium-photo/real-estate-comfortable-villa-luxurious-modern-home_485374-3012.jpg)",
//     icon: "fas fa-tree",
//     main: "Iteresuselle",
//     sub: "Omuke trughte a otufta"
//   },
//   {
//     background: "url(https://media.istockphoto.com/id/1488924467/photo/new-condos-san-francisco-california.webp?b=1&s=170667a&w=0&k=20&c=G9BrlnDdbMpbxK2mP867SpxVUrzOvMqu9P9PnxznPyc=)",
//     icon: "fas fa-tint",
//     main: "Idiefe",
//     sub: "Omuke trughte a otufta"
//   },
//   {
//     background: "url(https://c4.wallpaperflare.com/wallpaper/396/394/415/city-apartment-design-wallpaper-preview.jpg)",
//     icon: "fas fa-sun",
//     main: "Inatethi",
//     sub: "Omuke trughte a otufta"
//   }
// ];

// const Options = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className='destination-container'>
//     <div className="options flex justify-center items-center">
//       {optionsData.map((option, index) => (
//         <div
//           key={index}
//           className={`option ${activeIndex === index ? 'active' : ''}`}
//           style={{ '--optionBackground': option.background }}
//           onClick={() => setActiveIndex(index)}
//         >
//           <div className="shadow"></div>
//           <div className="label">
//             <div className="icon">
//               <i className={option.icon}></i>
//             </div>
//             <div className="info">
//               <div className="main">{option.main}</div>
//               <div className="sub">{option.sub}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
//   );
// };

// export default Options;


import React, { useState } from 'react';

const optionsData = [
  {
    background: "url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJlYXV0aWZ1bCUyMGhvdXNlfGVufDB8fDB8fHww)",
    icon: "fas fa-walking",
    main: "Blonkisoaz",
    sub: "Omuke trughte a otufta"
  },
  {
    background: "url(https://img.freepik.com/free-photo/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-ge_1258-150755.jpg)",
    icon: "fas fa-snowflake",
    main: "Oretemauw",
    sub: "Omuke trughte a otufta"
  },
  {
    background: "url(https://img.freepik.com/premium-photo/real-estate-comfortable-villa-luxurious-modern-home_485374-3012.jpg)",
    icon: "fas fa-tree",
    main: "Iteresuselle",
    sub: "Omuke trughte a otufta"
  },
  {
    background: "url(https://media.istockphoto.com/id/1488924467/photo/new-condos-san-francisco-california.webp?b=1&s=170667a&w=0&k=20&c=G9BrlnDdbMpbxK2mP867SpxVUrzOvMqu9P9PnxznPyc=)",
    icon: "fas fa-tint",
    main: "Idiefe",
    sub: "Omuke trughte a otufta"
  },
  {
    background: "url(https://c4.wallpaperflare.com/wallpaper/396/394/415/city-apartment-design-wallpaper-preview.jpg)",
    icon: "fas fa-sun",
    main: "Inatethi",
    sub: "Omuke trughte a otufta"
  }
];


const Options = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="options flex justify-center ">
      {optionsData.map((option, index) => (
        <div
          key={index}
          className={`option ${activeIndex === index ? 'active' : ''}`}
          style={{ '--optionBackground': option.background }}
          onClick={() => setActiveIndex(index)}
        >
          <div className="shadow"></div>
          <div className="label">
            <div className="icon">
              <i className={option.icon}></i>
            </div>
            <div className="info">
              <div className="main">{option.main}</div>
              <div className="sub">{option.sub}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;

