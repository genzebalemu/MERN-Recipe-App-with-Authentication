import React from 'react'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const Navbar = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['access_token']);
  return (
    <div className='navbar'>

      <Link to="/">home</Link>
      <Link to="/create-recipe">CreateRecipe</Link>
      <Link to="/saved-recipes">SavedRecipes</Link>
      {!cookies.access_token?(
         <Link to="/auth">Login/Registor</Link>
      ):(
        <Link to="/auth">logout</Link>
      )}
    </div>
  )
}

export default Navbar;


// Example in a component file
// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';

// function MyNavbar() {
//   return (
//     <AppBar position="static">
//       <Toolbar>
//         <Typography variant="h6">
//         <Link to="/">home</Link>
//         <Link to="/create-recipe">CreateRecipe</Link>
//         <Link to="/auth">Login/Registor</Link>
//         <Link to="/saved-recipes">SavedRecipes</Link>
//         </Typography>
//         {/* Add more components for additional navbar items */}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default MyNavbar;
