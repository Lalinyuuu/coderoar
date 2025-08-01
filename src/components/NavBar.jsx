import React from 'react'; 
function NavBar() {
    return (
      <nav className="flex justify-between items-center px-6 py-4 border border-yellow-400 rounded-full mx-auto mt-6 max-w-5xl bg-white">
        <div className="text-2xl font-bold text-neutral-800">hh<span className="text-emerald-600">.</span></div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-1.5 rounded-full text-sm border border-black text-black hover:bg-neutral-100">Log in</button>
          <button className="px-4 py-1.5 rounded-full text-sm bg-neutral-900 text-white hover:bg-black">Sign up</button>
        </div>
      </nav>
    );
  }
  
  export default NavBar;