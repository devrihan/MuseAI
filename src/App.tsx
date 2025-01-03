
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
// import { Navbar } from './components/Layout/Navbar';
// import { Home } from './pages/Home';
// import { Create } from './pages/Create';
// import { Login } from './pages/Login';
// import { Register } from './pages/Register';
// import { Dashboard } from './pages/Dashboard';
// import { Community } from './pages/Community';
// import { Careers } from './pages/career';  // Import the Careers page
// import { PrivateRoute } from './components/Auth/PrivateRoute';

// function App() {
//   return (
//     <Router>
//       <div className="min-h-screen bg-gray-950 grid-background animate-grid">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route
//             path="/create"
//             element={
//               <PrivateRoute>
//                 <Create />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/dashboard"
//             element={
//               <PrivateRoute>
//                 <Dashboard />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/community"
//             element={
//               <PrivateRoute>
//                 <Community />
//               </PrivateRoute>
//             }
//           />
//           <Route
//             path="/careers"
//             element={
//               <PrivateRoute>
//                 <Careers />
//               </PrivateRoute>
//             }
//           />  {/* Add the careers route here */}
//         </Routes>
//         <Toaster position="bottom-right" />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Navbar } from './components/Layout/Navbar';
import { Home } from './pages/Home';
import { Create } from './pages/Create';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Dashboard } from './pages/Dashboard';
import { Community } from './pages/Community';
import Careers  from './pages/career'; // Import the Careers page
import { Gigs } from './pages/gigs'; // Import the Gigs page
import { PostGig } from './pages/post'; // Import the PostGig page
import { PrivateRoute } from './components/Auth/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 grid-background animate-grid">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/create"
            element={
              <PrivateRoute>
                <Create />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/community"
            element={
              <PrivateRoute>
                <Community />
              </PrivateRoute>
            }
          />
          {/* Add the careers routes */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/gigs" element={<Gigs />} />
          <Route path="/careers/post" element={<PostGig />} />
        </Routes>
        <Toaster position="bottom-right" />
      </div>
    </Router>
  );
}

export default App;
