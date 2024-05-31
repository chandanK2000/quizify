// // FreeResources.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { freeResources } from './courseData';
// import QuizSets from './QuizSets';

// const FreeResources = () => {
//   const { subject } = useParams();
//   const selectedSubject = freeResources.find((resource) => resource.category === subject);

//   if (!selectedSubject) {
//     return <div>Subject not found</div>;
//   }

//   return (
//     <div>
//       <h2>{selectedSubject.category}</h2>
//       {selectedSubject.subcategories.map((subcategory, index) => (
//         <div key={index}>
//           <h3>{subcategory.name}</h3>
//           <QuizSets selectedQuiz={subcategory} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FreeResources;
