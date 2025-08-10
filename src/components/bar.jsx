import React from 'react';


export default function GlassUI() {
  return (<>
    <div
      className="glass-ui fixed bottom-0 left-1/2 -translate-x-1/2 px-3 py-2  items-center rounded-none w-full text-white text-lg flex justify-center gap-5"
      style={{
        background: 'rgba(0,0,0,0.5)',
        WebkitBackdropFilter: 'blur(8px)',
        backdropFilter: 'blur(6px)',
      }}
    >

      <div className="flex items-center gap-2 px-4">
        <a href="#image" className="bg-white/6 hover:bg-white/10 px-3 py-1 rounded-lg">
           <i className="fa-solid fa-home"></i></a>
        <a href="#about" className="bg-white/6 hover:bg-white/10 px-3 py-1 rounded-lg">     <i className="fa-solid fa-user"></i>
        </a>
        <a href="#ratio2v" className="bg-white/6 hover:bg-white/10 px-3 py-1 rounded-lg ">    <i className="fa-solid fa-search"></i>
        </a>
        <a href="#help" className="bg-white/6 hover:bg-white/10 px-3 py-1 rounded-lg">
              <i className="fa-solid fa-bell"></i>
        </a>
         <a href="#help" className="bg-white/6 hover:bg-white/10 px-3 py-1 rounded-lg">
               <i className="fa-solid fa-cog"></i>
        </a>
      </div>

    </div>
  </>
  );
}
