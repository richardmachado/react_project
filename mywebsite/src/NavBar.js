import React from 'react';
import {  Routes, Route, Link} from 'react-router-dom';


import Home from './Pages/Home';
import Adverts from './Pages/Adverts';
// Define your components for different routes




// const UserDetail = () => {
//   const { id } = useParams();
//   return (
//     <div>
//       <h1>User Detail Page</h1>
//       <p>User ID: {id}</p>
//       <Link to="/">Go to Home</Link>
//     </div>
//   );
// };

// const NotFound = () => (
//   <div>
//     <h1>404 Not Found</h1>
//     <Link to="/">Go to Home</Link>
//   </div>
// );

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/adverts">Adverts</Link>
          </li>
          {/* <li>
            <Link to="/users/456">User 456</Link>
          </li> */}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adverts" element={<Adverts />} />
        {/* <Route path="/users/:id" element={<UserDetail />} /> */}
        {/* <Route path="*" element={<NotFound />} /> Catch-all route for 404 */}
      </Routes>
    </div>

  );
}

export default NavBar