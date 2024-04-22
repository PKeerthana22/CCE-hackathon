// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import CreatePost from './CreatePost';
import './App.css';

function App() {
	return (
		<Router>
			<div className="app">
				<nav>
					<ul>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/create">Create Post</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route path="/create" element={<CreatePost />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
