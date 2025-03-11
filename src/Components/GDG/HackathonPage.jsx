import React, { useState, useRef, useEffect } from "react";
import pdfDoc from "../../assets/Resume/sisindrisingamsetti_resume.pdf";
import img1 from "../../assets/logo.jpg";

const HackathonPage = ({ manualImages = [] }) => {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query
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

  const certificates = [
    {
      id: 1,
      name: "Sisindri Singamsetti",
      team: "Sisindri Singamsetti",
      project: "Web Development",
      filename: pdfDoc,
    },
    {
      id: 2,
      name: "Jane Smith",
      team: "Tech Titans",
      project: "Smart IoT System",
      filename: pdfDoc,
    },
    {
      id: 3,
      name: "Alex Johnson",
      team: "Byte Builders",
      project: "Blockchain Solution",
      filename: pdfDoc,
    },
    {
      id: 4,
      name: "Sarah Williams",
      team: "Data Dragons",
      project: "ML Analytics Dashboard",
      filename: pdfDoc,
    },
    {
      id: 5,
      name: "Michael Brown",
      team: "Web Wizards",
      project: "Health Monitoring App",
      filename: pdfDoc,
    },
  ];

  // Filter certificates based on search query
  const filteredCertificates = certificates.filter((cert) =>
    cert.team.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const downloadCertificate = (filename, teamName) => {
    const link = document.createElement("a");
    link.href = filename;
    link.download = `${teamName}-GDG-INNOHACKS-CERTIFICATE.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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

        {activeTab === "about" && (
          <div className="mt-6">
            <div className="bg-footerBgColor shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-800">
                <h2 className="text-xl font-semibold text-white">
                  About TechHack 2025
                </h2>
                <p className="text-sm text-gray-200">
                  The premier hackathon for innovative tech solutions
                </p>
              </div>
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                  <p className="text-gray-400">
                    TechHack brings together the brightest minds to solve
                    real-world problems through technology. Over 48 hours, teams
                    collaborate to build innovative solutions that address
                    pressing challenges in healthcare, education,
                    sustainability, and more.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">Key Highlights</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-400">
                    <li>500+ participants from across the globe</li>
                    <li>$50,000 in prizes and resources</li>
                    <li>30+ industry mentors providing guidance</li>
                    <li>Workshops on cutting-edge technologies</li>
                    <li>Networking opportunities with tech leaders</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Previous Winners
                  </h3>
                  <p className="text-gray-400">
                    Our past winners have gone on to secure funding, launch
                    startups, and contribute to open-source projects that impact
                    millions of users worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

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

        {activeTab === "certificates" && (
          <div className="mt-6">
            <div className="bg-footerBgColor shadow rounded-lg overflow-hidden">
              <div className="px-6 py-5 border-b border-gray-800">
                <h2 className="text-xl font-semibold text-white">
                  Participant Certificates
                </h2>
                <p className="text-sm text-gray-300">
                  Find and download your certificate of participation
                </p>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <label
                    htmlFor="certificate-search"
                    className="block mb-2 text-sm font-medium text-gray-300"
                  >
                    Search for your certificate
                  </label>
                  <input
                    id="certificate-search"
                    type="text"
                    placeholder="Enter your team name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full p-2 border bg-transparent border-gray-600 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-medium mb-4">
                    Available Certificates
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-500">
                      <thead className="">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                          >
                            Participant
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                          >
                            Team
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                          >
                            Project
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
                          >
                            Action
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-footerBgColor">
                        {filteredCertificates.map((cert) => (
                          <tr key={cert.id} className="hover:bg-zinc-800">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
                              {cert.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {cert.team}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                              {cert.project}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                              <button
                                onClick={() =>
                                  downloadCertificate(cert.filename, cert.team)
                                }
                                className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-400 bg-transparent hover:bg-gray-200 hover:text-backgroundColor transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 mr-1.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                                  />
                                </svg>
                                Download
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="px-6 py-4 mb-4 border-t border-gray-800">
                <p className="text-sm text-gray-400">
                  Can't find your certificate? Contact us at
                  support@techhack.com
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <footer className="mt-16 text-center text-gray-200 text-sm">
        <p>© 2025 TechHack. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HackathonPage;
