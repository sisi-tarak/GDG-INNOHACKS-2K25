import React, { useState, useRef, useEffect } from "react";

import img1 from "../../assets/logo.jpg";
import AboutSection from "../AboutSection/AboutSection";
import Certifications from "../Certifications/Certifications";

const HackathonPage = ({ manualImages = [] }) => {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const savedImages =
      JSON.parse(localStorage.getItem("uploadedImages")) || [];
    setImages(savedImages);
  }, []);

  useEffect(() => {
    localStorage.setItem("uploadedImages", JSON.stringify(images));
  }, [images]);

  const allImages = [
    {
      id: 1,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 2,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 3,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 4,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 5,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 6,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 7,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 8,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 9,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 10,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 11,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 12,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 13,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 14,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 15,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 16,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 17,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 18,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 19,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
    {
      id: 20,
      src: img1,
      alt: "GDG-Innohacks-2K25",
    },
  ];

  const handleFileSelection = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const filesArray = Array.from(e.target.files);
      setSelectedFiles(filesArray);
    }
  };

  const handleUpload = () => {
    if (selectedFiles.length === 0) {
      alert("Please select files to upload first");
      return;
    }

    const newImages = selectedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      name: file.name,
    }));

    setImages((prevImages) => [...prevImages, ...newImages]);

    setSelectedFiles([]);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }

    alert(`Successfully uploaded ${newImages.length} image(s)!`);
  };

  return (
    <div className="min-h-screen bg-backgroundColor p-4 md:p-8 my-10">
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-adsBgColor mb-4">
          GDG INNOHACKS 2K25
        </h1>
        <p className="text-xl text-gray-200">GDG On Campus SVCE</p>
      </header>

      <div className="max-w-6xl mx-auto">
        <div className="flex border-b border-gray-800">
          <button
            onClick={() => setActiveTab("about")}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === "about"
                ? "border-b-2 border-white text-white"
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            About
          </button>
          <button
            onClick={() => setActiveTab("gallery")}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === "gallery"
                ? "border-b-2 border-white text-white"
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            Gallery
          </button>
          <button
            onClick={() => setActiveTab("certificates")}
            className={`py-2 px-4 font-medium text-sm ${
              activeTab === "certificates"
                ? "border-b-2 border-white text-white"
                : "text-gray-300 hover:text-gray-400"
            }`}
          >
            Certificates
          </button>
        </div>

        {activeTab === "about" && <AboutSection />}

        {activeTab === "gallery" && (
          <div className="mt-6">
            <div className="bg-backgroundColor shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-800">
                <h2 className="text-xl font-semibold text-white">
                  Hackathon Gallery
                </h2>
                <p className="text-sm text-gray-300">
                  Upload and view images from the event
                </p>
              </div>
              <div className="p-6">
                <div className="mt-1">
                  <h3 className="text-lg font-medium mb-4">Gallery Images</h3>
                  {allImages.length === 0 ? (
                    <p className="text-gray-300 text-center py-8">
                      No images uploaded yet. Share your hackathon experience!
                    </p>
                  ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {allImages.map((image, index) => (
                        <div
                          key={index}
                          className="relative group overflow-hidden rounded-lg border border-gray-800 shadow-sm"
                        >
                          <img
                            src={image.src || image.preview}
                            alt={`Hackathon image ${index + 1}`}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm truncate">
                            {image.name || `GDG Innohacks 2K25 - ${index + 1}`}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "certificates" && <Certifications />}
      </div>

      <footer className="mt-16 text-center text-gray-200 text-sm">
        <p>© GDG INNOHACKS 2K25. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HackathonPage;
