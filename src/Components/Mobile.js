import React from "react";

const Mobile = () => {
  return (
    <div className="container mx-auto bg-getir-secondary bg-mobile mt-7 rounded-lg text-white flex flex-col md:flex-row justify-between items-center">
      <div className="flex flex-col space-y-3 p-10">
        <h3 className="text-2xl font-bold tracking-tight">Getir'i indirin!</h3>
        <p className="font-semibold">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.
        </p>
        <nav className="flex flex-col md:flex-row items-center space-x-0 md:space-x-2 space-y-2 md:space-y-0 pt-5">
          <a href="/" className="hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
            />
          </a>
          <a href="/" className="hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
            />
          </a>
          <a href="/" className="hover:scale-105">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
            />
          </a>
        </nav>
      </div>
      <figure className="hidden md:block mt-6">
        <img
          src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png"
          alt=""
        />
      </figure>
    </div>
  );
};

export default Mobile;
