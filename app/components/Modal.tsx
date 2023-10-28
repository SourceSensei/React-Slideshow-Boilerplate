import React from "react";
import Slideshow from "./Slideshow";

const Modal = () => {
  return (
    <div>
      <h1>Test Modal</h1>

      <div className="modal-content w-full">
        <div>
          <Slideshow />
        </div>
        <h4 className="h3 modal-title pb-2"> Title</h4>

        <div className="min-w-full border rounded-lg shadow">
          <div className="p-5">
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Corporis, distinctio? Praesentium, deserunt expedita! Animi ea,
              vitae possimus tenetur reiciendis sint quidem totam praesentium
              doloremque eius. Nihil mollitia ut fuga sapiente?
            </p>
            <a
              href="/"
              target="_blank"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Check it out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
