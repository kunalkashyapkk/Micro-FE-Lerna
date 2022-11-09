import React from "react";

export default function Pic() {
    const handlefunction = () => {
        window.location.href='http://localhost:3003/cart';
    };
    return (
        <><div className="my-10">Language : Javascript - App2</div><div className="p-5 text-white text-3xl font-bold flex justify-center border-4">
            <img
                className="max-w-md h-auto"
                src="https://www.ubuntupit.com/wp-content/uploads/2018/11/JavaScript.jpg"
                alt="Katherine Johnson" />
        </div><button className="border-2" onClick={() => handlefunction()}>Go to Cart</button>
    </>
    );
}