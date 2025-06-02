// import React from 'react';

// const Indexing = () => {
//   const indexingItems = [
//     {
//       img: '/images/indexing1.png',
//       title: 'COSMOS',
//       link: 'https://cosmosimpactfactor.com/page/journals_details/9588.html',
//     },
//     {
//       img: '/images/indexing2.png',
//       title: 'SUDOC',
//       link: 'https://www.sudoc.abes.fr/cbs/DB=2.1/SET=1/TTL=1/LNG=EN//NXT',
//     },
//     {
//       img: '/images/indexing3.png',
//       title: 'OPENALEX',
//       link: 'https://openalex.org/sources/S4389157840',
//     },
//     {
//         img: '/images/indexing4.png',
//         title: 'CROSSREF',
//         link: 'https://www.crossref.org/',
//       },

//   ];

//   return (

//     <div className=" container my-5">
//       <h2 className="text-center mb-5"><strong>JBES listing in the indexing databases</strong></h2>
//       <div className="row">
//         {indexingItems.map((item, index) => (
//           <div className="col-md-4 text-center mb-5" key={index}>
//             <img
//               src={item.img}
//               alt={item.title}
//               className="img-fluid mb-3"
//               style={{ maxHeight: '120px' }}
//             />
//             <h5><strong>{item.title}</strong></h5>
//             <a href={item.link} target="_blank" rel="noopener noreferrer">
//               Visit
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Indexing;

import React from "react";

const Indexing = () => {
  const indexingItems = [
    {
      img: "/images/indexing1.png",
      title: "COSMOS",
      link: "https://cosmosimpactfactor.com/page/journals_details/9588.html",
    },
    {
      img: "/images/indexing2.png",
      title: "SUDOC",
      link: "https://www.sudoc.abes.fr/cbs/DB=2.1/SET=1/TTL=1/LNG=EN//NXT",
    },
    {
      img: "/images/indexing3.png",
      title: "OPENALEX",
      link: "https://openalex.org/sources/S4389157840",
    },
    {
      img: "/images/indexing4.png",
      title: "CROSSREF",
      link: "https://www.crossref.org/",
    },
  ];

  return (
    <div className="row justify-content-md-center">
      <div className="col-md-12">
        <div className="row content-space-around">
          <div className="col-md-12 col-sm-12 body-container ">
            <div className="row justify-content-md-center ">
              <div className=" container my-5">
                <h2 className="text-center mb-5 pt-4">
                  <strong>JBES listing in the Indexing Databases</strong>
                </h2>
                <div className="row">
                  {indexingItems.map((item, index) => (
                    <div className="col-md-3 text-center mb-5" key={index}>
                      <div className="imggBox">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="img-fluid mb-3"
                        />
                        <h5>
                          <strong>{item.title}</strong>
                        </h5>
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Visit
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Indexing;
