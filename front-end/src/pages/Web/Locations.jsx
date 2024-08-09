import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const locations = [
  { name: 'Chennai', link: '/location/chennai', imageUrl: 'https://t3.ftcdn.net/jpg/02/75/03/42/360_F_275034287_RwBdkQQIvoYjxvHPocTR5MBrgQXFaZqr.jpg' },
  { name: 'Coimbatore', link: '/location/coimbatore', imageUrl: 'https://i0.wp.com/stanzaliving.wpcomstaging.com/wp-content/uploads/2022/04/b611b-resorts-near-coimbatore.jpg?fit=1000%2C667&ssl=1' },
  { name: 'Madurai', link: '/location/madurai', imageUrl: 'https://media.istockphoto.com/id/490736905/photo/meenakshi-hindu-temple-in-madurai-tamil-nadu-south-india.jpg?s=612x612&w=0&k=20&c=OlOLvdryIdkdyKcY9gRPsM1RZa5HiP6QBr2JVAIvPb0=' },
  { name: 'Ooty', link: '/location/Ooty', imageUrl: 'https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2023/12/21/0093b67e7e21d2acea2777ad96493203_1000x1000.jpg' },
  { name: 'Trichy', link: '/location/trichy', imageUrl: 'https://media.dailythanthi.com/h-upload/2022/07/17/776740-mukkompu.webp' },
  { name: 'Salem', link: '/location/salem', imageUrl: 'https://thumbs.dreamstime.com/b/aerial-view-salem-city-night-tamil-nadu-india-light-s-make-us-to-feel-like-fireflies-flying-239909144.jpg' },
  { name: 'Erode', link: '/location/erode', imageUrl: 'https://www.skyscrapercity.com/attachments/fb_img_1619368749624-jpg.1419273/' },
  { name: 'Kodaikanal', link: '/location/kodaikanal', imageUrl: 'https://tourismtn.com/wp-content/uploads/2020/12/Lake.jpg' },
  { name: 'Tirunelveli', link: '/location/tirunelveli', imageUrl: 'https://assets-news.housing.com/news/wp-content/uploads/2022/08/29071748/Tirunelveli2.jpg' },
  { name: 'Thanjavur', link: '/location/thanjavur', imageUrl: 'https://assets-news.housing.com/news/wp-content/uploads/2022/08/26004150/THANJAVUR-FEATURE-compressed.jpg' },
  { name: 'Vellore', link: '/location/vellore', imageUrl: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/FotoJetcover-vellore-kb6592.jpg' },
  { name: 'Yercaud', link: '/location/yercaud', imageUrl: 'https://www.hikenavigator.com/wp-content/uploads/2022/12/Yercaud-Tamil-Nadu.jpg' },
  { name: 'Nagercoil', link: '/location/nagercoil', imageUrl: 'https://www.tamilnadutourism.tn.gov.in/img/pages/large-desktop/kanyakumari-1656091428_cf69d9a9dbec82018046.jpg' },
  { name: 'Dindigul', link: '/location/dindigul', imageUrl: 'https://palani.org/pix/palani.town800.jpg' },
  { name: 'Tuticorin', link: '/location/tuticorin', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tuticorin_Thermal_Power_Station_at_Night_1_crop.jpg/640px-Tuticorin_Thermal_Power_Station_at_Night_1_crop.jpg' },
  { name: 'Pollachi', link: '/location/pollachi', imageUrl: 'https://thumbs.dreamstime.com/b/view-coconut-tree-plantation-pollachi-tamil-nadu-india-206816196.jpg' },
  { name: 'Kanchipuram', link: '/location/kanchipuram', imageUrl: 'https://www.transindiatravels.com/wp-content/uploads/kailasanathar-temple.jpg' },
  { name: 'Sivakasi', link: '/location/sivakasi', imageUrl: 'https://www.nativeplanet.com/img/2018/10/bhadrakali-amman-sivakasi1-1539319526.jpg' },
  { name: 'Mettupalayam', link: '/location/mettupalayam', imageUrl: 'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2022/07/28170353/Untitled-design-2022-07-28T170240.107-1600x900.jpg' },
  { name: 'Krishnagiri', link: '/location/krishnagiri', imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/KRP_Dam.jpg' },
];

const Locations = () => {
  const [search, setSearch] = useState('');

  const filteredList = locations.filter(location =>
    location.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div id="app" className="flex flex-col items-center justify-center mt-4 mb-4 w-full">
      <div className="relative w-4/5 max-w-xl mb-5">
        <input
          type="text"
          className="w-full p-3 text-gray-700 border border-purple-200 rounded-lg shadow-md bg-white dark:bg-secondary dark:text-secondary-foreground focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for locations..."
        />
      </div>
      <div className="grid grid-cols-1 pr-10 pl-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 h-full">
        {filteredList.map((location, index) => (
          <div
            className="shadow-lg p-4 rounded-lg transform transition-transform hover:scale-105 text-center border"
            key={index}
          >
            <Link to={location.link} className="flex flex-col items-center no-underline">
              <div className="w-64 h-48 overflow-hidden">
                <img src={location.imageUrl} alt={location.name} className="w-full h-full object-cover rounded mb-4" />
              </div>
              <p className="text-xl text-gray-800 dark:text-white">📍{location.name}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locations;
