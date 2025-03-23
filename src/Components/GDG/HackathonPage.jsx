import React, { useState, useRef, useEffect } from "react";

import AboutSection from "../AboutSection/AboutSection";
import Certifications from "../Certifications/Certifications";
import Gallery from "../Gallery/Gallery";

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

        {activeTab === "gallery" && <Gallery />}

        {activeTab === "certificates" && <Certifications />}
      </div>

      <footer className="mt-16 text-center text-gray-200 text-sm">
        <p>© GDG INNOHACKS 2K25. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HackathonPage;
