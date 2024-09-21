import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


// import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
// import './index.css';
// import './App.css';

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <header>
//       <nav>
//         <ul>
//           <li><a href="#">Features</a></li>
//           <li><a href="#">Pricing</a></li>
//           <li><a href="#">About</a></li>
//         </ul>
//       </nav>
//     </header>
//     <App />
//     <footer>
//       <p>&copy; 2023 Printify</p>
//     </footer>
//   </StrictMode>,
// );