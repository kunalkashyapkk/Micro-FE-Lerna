import React from "react";

export default function Cartdetail() {
    return (
        <div className="p-5 text-black text-3xl font-bold h-32 flex items-center">
           <button className="border-2" onClick={() => alert('button click catched')}>Click</button>
        </div >
    );
}