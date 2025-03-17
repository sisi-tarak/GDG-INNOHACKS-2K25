import React, { useState, useRef, useEffect } from "react";
const pdfFiles = import.meta.glob("../assets/web-certifications/*.pdf");

import pdfCert01 from "../../assets/web-certifications/Asphalt - Satambeti. Chandu.pdf";
import pdfCert02 from "../../assets/web-certifications/Avengers  - Gavve Sravani .pdf";
import pdfCert03 from "../../assets/web-certifications/Avengers  - K V Supriya .pdf";
import pdfCert04 from "../../assets/web-certifications/Avengers  - SINGAREDDYGARI SWATHI .pdf";
import pdfCert05 from "../../assets/web-certifications/Avengers - Javvaji Meghana.pdf";
import pdfCert06 from "../../assets/web-certifications/Code a-lot - BANDI DURGA BHAVANI .pdf";
import pdfCert07 from "../../assets/web-certifications/Code a-lot - KANALA SIREESHA.pdf";
import pdfCert08 from "../../assets/web-certifications/Code a-lot - TALLURU HARSHITHA .pdf";
import pdfCert09 from "../../assets/web-certifications/Code crafters - M.Sushma Swaraj.pdf";
import pdfCert10 from "../../assets/web-certifications/Code crafters - P.Bhanu Prakash Reddy .pdf";
import pdfCert11 from "../../assets/web-certifications/Code crafters - Polisetty Abitha.pdf";
import pdfCert12 from "../../assets/web-certifications/Code crafters - Rallapalli Thulasi.pdf";
import pdfCert13 from "../../assets/web-certifications/Code Crew - Kaitha Teja Sri .pdf";
import pdfCert14 from "../../assets/web-certifications/Code Crew - Likhitha Posa.pdf";
import pdfCert15 from "../../assets/web-certifications/Code Crew - Ramagowni Mokshitha.pdf";
import pdfCert16 from "../../assets/web-certifications/Code Crew - Saddala deepthi.pdf";
import pdfCert17 from "../../assets/web-certifications/Code Crew - Thanikonda Muni Sai Manvitha.pdf";
import pdfCert18 from "../../assets/web-certifications/Code Ninjas - Alluru Ramya.pdf";
import pdfCert19 from "../../assets/web-certifications/Code ninjas - Gownipalli Harshitha.pdf";
import pdfCert20 from "../../assets/web-certifications/Code ninjas - Perrala Akhila.pdf";
import pdfCert21 from "../../assets/web-certifications/Code Ninjas - Ponneri Manasa.pdf";
import pdfCert22 from "../../assets/web-certifications/Code Ninjas - Puthuru Samatha.pdf";
import pdfCert23 from "../../assets/web-certifications/Code pirates  - Kuppireddy Nikhil.pdf";
import pdfCert24 from "../../assets/web-certifications/Code pirates  - N. Lakshmi prasanna.pdf";
import pdfCert25 from "../../assets/web-certifications/Code pirates - M.Harsha Vardan Reddy.pdf";
import pdfCert26 from "../../assets/web-certifications/Code pirates - S A Muskaan.pdf";
import pdfCert27 from "../../assets/web-certifications/Code sisters  - S. Bhavana.pdf";
import pdfCert28 from "../../assets/web-certifications/Code sisters - Kavya Penumadu.pdf";
import pdfCert29 from "../../assets/web-certifications/Code sisters - Putturu senthilkumar vedeshwari.pdf";
import pdfCert30 from "../../assets/web-certifications/Code sisters - Sankarapu Navya.pdf";
import pdfCert31 from "../../assets/web-certifications/Code trio - Amruthala Surya.pdf";
import pdfCert32 from "../../assets/web-certifications/Code trio - R.Thimme Gowd.pdf";
import pdfCert33 from "../../assets/web-certifications/Code trio - Shaik imam khasim.pdf";
import pdfCert34 from "../../assets/web-certifications/Codsters -  Katari Tharun Teja.pdf";
import pdfCert35 from "../../assets/web-certifications/Codsters - Aasrita Reddy C.pdf";
import pdfCert36 from "../../assets/web-certifications/Codsters - Chalichalamala hemanth Chowdary.pdf";
import pdfCert37 from "../../assets/web-certifications/Codsters - GADDAM HEMANTH.pdf";
import pdfCert38 from "../../assets/web-certifications/Codsters - Kolleti varshini.pdf";
import pdfCert39 from "../../assets/web-certifications/Dare Devils  - G.Anurag Harshith.pdf";
import pdfCert40 from "../../assets/web-certifications/Dare Devils - Tadakara Dinesh.pdf";
import pdfCert41 from "../../assets/web-certifications/DareDevils - M K Tharun Sai.pdf";
import pdfCert42 from "../../assets/web-certifications/DIGITAL DYNAMITES  - P.Amrutha.pdf";
import pdfCert43 from "../../assets/web-certifications/DIGITAL DYNAMITES  - Y.Y.Nandhi Vardhan Reddy.pdf";
import pdfCert44 from "../../assets/web-certifications/DIGITAL DYNAMITES  - YALLANURU REVANTH KUMAR.pdf";
import pdfCert45 from "../../assets/web-certifications/DIGITAL DYNAMITES - Shaik Afrin.pdf";
import pdfCert46 from "../../assets/web-certifications/Front End Force - K Sai.pdf";
import pdfCert47 from "../../assets/web-certifications/Front-End Force - K P Mohitha.pdf";
import pdfCert48 from "../../assets/web-certifications/Hack&Learn@05 - Pillapalem Tejaswi.pdf";
import pdfCert49 from "../../assets/web-certifications/Hackaholics  - Gayathri Appalreddy.pdf";
import pdfCert50 from "../../assets/web-certifications/Hackaholics - Akepati Devasena.pdf";
import pdfCert51 from "../../assets/web-certifications/Hackaholics - Syed aisha Sidhiqua.pdf";
import pdfCert52 from "../../assets/web-certifications/Hackathon Makers - K Mahamood Ajad.pdf";
import pdfCert53 from "../../assets/web-certifications/Hackathon Makers - P.Jayanth kumar.pdf";
import pdfCert54 from "../../assets/web-certifications/Hackathon Makers - S USHA SAI LIKHITHA REDDY.pdf";
import pdfCert55 from "../../assets/web-certifications/Hackathon Makers - Samanthu Harini.pdf";
import pdfCert56 from "../../assets/web-certifications/Hackathon Makers - Sure Bindhu.pdf";
import pdfCert57 from "../../assets/web-certifications/HUGS FOR BUGS - Edagotti Kishore.pdf";
import pdfCert58 from "../../assets/web-certifications/HUGS FOR BUGS - G R DIVYA SREE.pdf";
import pdfCert59 from "../../assets/web-certifications/HUGS FOR BUGS - GADAMANIPALLI RAJA SEKHAR.pdf";
import pdfCert60 from "../../assets/web-certifications/HUGS FOR BUGS - KARUPOTHULA SHASHI KUMAR.pdf";
import pdfCert61 from "../../assets/web-certifications/HUGS FOR BUGS - Kothuru Meghana.pdf";
import pdfCert62 from "../../assets/web-certifications/Judgement Day - D Vinay.pdf";
import pdfCert63 from "../../assets/web-certifications/Judgement Day - Konduru Pavan Sai Varma.pdf";
import pdfCert64 from "../../assets/web-certifications/Judgement Day - VEMPALLI NAVEEN.pdf";
import pdfCert65 from "../../assets/web-certifications/Judgement Day - Vemula Bala Sai Kumar.pdf";
import pdfCert66 from "../../assets/web-certifications/Nexus - M.Kavya.pdf";
import pdfCert67 from "../../assets/web-certifications/Nexus - M.Penchala Bhavana.pdf";
import pdfCert68 from "../../assets/web-certifications/Novalocks - Katta Pushpanjali.pdf";
import pdfCert69 from "../../assets/web-certifications/Novalocks - Paidipula charan.pdf";
import pdfCert70 from "../../assets/web-certifications/PANCHKAVACH - MALLIBOYINA POOJA SRI.pdf";
import pdfCert71 from "../../assets/web-certifications/Panchkavach - MARPURI LIKITHA.pdf";
import pdfCert72 from "../../assets/web-certifications/PANCHKAVACH - Mekala Pavithra.pdf";
import pdfCert73 from "../../assets/web-certifications/PANCHKAVACH - Mukkamalla Venkata Bhavana.pdf";
import pdfCert74 from "../../assets/web-certifications/PANCHKAVACH - Nimmala Sravanthi.pdf";
import pdfCert75 from "../../assets/web-certifications/Phoenix  - Purru Tulasi.pdf";
import pdfCert76 from "../../assets/web-certifications/Shanthi - Earomchetty Harshitha.pdf";
import pdfCert77 from "../../assets/web-certifications/Soft tech - BANDA VIJAY KUMAR.pdf";
import pdfCert78 from "../../assets/web-certifications/Soft tech - Jaswanth Kumar Mamilla.pdf";
import pdfCert79 from "../../assets/web-certifications/Soft tech - Kalakada Poojitha.pdf";
import pdfCert80 from "../../assets/web-certifications/Soft tech - Y Durga Venkata Deepak.pdf";
import pdfCert81 from "../../assets/web-certifications/Soft Tech - Yagateela Suneel.pdf";
import pdfCert82 from "../../assets/web-certifications/Soft Teech - MOPURI YASWANTH.pdf";
import pdfCert83 from "../../assets/web-certifications/Strange Thinkers  - Chillakuru pardha saradhi.pdf";
import pdfCert84 from "../../assets/web-certifications/Strange Thinkers - POTLA CHAITANYA.pdf";
import pdfCert85 from "../../assets/web-certifications/Strange Thinkers - Sayed Yasin.pdf";
import pdfCert86 from "../../assets/web-certifications/Strange Thinkers - Shaik Aisha.pdf";
import pdfCert87 from "../../assets/web-certifications/Stranger Thinkers - YOGISH PASUPULETI.pdf";
import pdfCert88 from "../../assets/web-certifications/Team anonymous  - Bukkasamudram Surya Vardhan Reddy.pdf";
import pdfCert89 from "../../assets/web-certifications/Team anonymous  - Golla Vinod Kumar.pdf";
import pdfCert90 from "../../assets/web-certifications/Team Asphalt  - Shaik.AsifAzeem.pdf";
import pdfCert91 from "../../assets/web-certifications/Team asphalt  - Sk.shabber.pdf";
import pdfCert92 from "../../assets/web-certifications/Team Asphalt - SG.Vardhan Vikranth Reddy.pdf";
import pdfCert93 from "../../assets/web-certifications/Team Asphalt - Shaik .Imran Hashmi.pdf";
import pdfCert94 from "../../assets/web-certifications/Tech Titans - Balaji Rupasri.pdf";
import pdfCert95 from "../../assets/web-certifications/TECH TITANS - BALASA CHENCHU AALAYA.pdf";
import pdfCert96 from "../../assets/web-certifications/TECH TITANS - ETLAM CHASVITHA REDDY.pdf";
import pdfCert97 from "../../assets/web-certifications/Tech Titans - JEELA EESHA.pdf";
import pdfCert98 from "../../assets/web-certifications/Tech Titans - KANUPURU BRUNDA.pdf";
import pdfCert99 from "../../assets/web-certifications/Tech Titans - Pandi vamsi.pdf";
import pdfCert100 from "../../assets/web-certifications/Tech titans - SHAIK ARSHIYA TAJ.pdf";
import pdfCert101 from "../../assets/web-certifications/TECH TITANS - VANDAVASI DILEEO.pdf";
import pdfCert102 from "../../assets/web-certifications/Tech web  - Pujitha Lingala.pdf";
import pdfCert103 from "../../assets/web-certifications/Tech web - CHITTEM KAMESWARI APARNA.pdf";
import pdfCert104 from "../../assets/web-certifications/Tech web - Enapati keerthi.pdf";
import pdfCert105 from "../../assets/web-certifications/TechSquad  - Motupalli Chandana.pdf";
import pdfCert106 from "../../assets/web-certifications/TechSquad - PeddaKkagari Shalini.pdf";
import pdfCert107 from "../../assets/web-certifications/TechSquad - Ramagiri Neha.pdf";
import pdfCert108 from "../../assets/web-certifications/Teen Titans  - Adeppagari Pallavi.pdf";
import pdfCert109 from "../../assets/web-certifications/Teen Titans  - Cheemala Supriya.pdf";
import pdfCert110 from "../../assets/web-certifications/Teen Titans  - Siri Ankitha.pdf";
import pdfCert111 from "../../assets/web-certifications/Teen Titans  - SUJITHA BHARATHALA.pdf";
import pdfCert112 from "../../assets/web-certifications/Teen Titans - Chennareddy Varshitha.pdf";
import pdfCert113 from "../../assets/web-certifications/THE QUAD 4 - Tejasvi Pakala.pdf";
import pdfCert114 from "../../assets/web-certifications/TWEAK - Shaik Imran.pdf";
import pdfCert115 from "../../assets/web-certifications/TWEAK - SRIPURAM GUNASEKHAR.pdf";
import pdfCert116 from "../../assets/web-certifications/Visioneers  - Kavadi Tejasri.pdf";
import pdfCert117 from "../../assets/web-certifications/Visioneers  - Kurugodu Sushma.pdf";
import pdfCert118 from "../../assets/web-certifications/Visioneers - Kalavagunta Monisha.pdf";
import pdfCert119 from "../../assets/web-certifications/Visioneers - Krishnan Mounika.pdf";
import pdfCert120 from "../../assets/web-certifications/Visioneers - Nandi Mangalam Geervani.pdf";
import pdfCert121 from "../../assets/web-certifications/Web Dev - K.Charith.pdf";
import pdfCert122 from "../../assets/web-certifications/WEB DEV - S L KESAVAANANDA.pdf";
import pdfCert123 from "../../assets/web-certifications/Web Dev - Tatigunta Chasanth Reddy.pdf";
import pdfCert124 from "../../assets/web-certifications/Web Dev - Thathappagari Hemanth.pdf";
import pdfCert125 from "../../assets/web-certifications/Web dev - veeraballi karthik kumar reddy.pdf";
import pdfCert126 from "../../assets/web-certifications/Web Masters  - Kunchala Lahari.pdf";
import pdfCert127 from "../../assets/web-certifications/Web masters  - S HEMACHANDRIKA.pdf";
import pdfCert128 from "../../assets/web-certifications/Web Masters - Budensab Sameera.pdf";
import pdfCert129 from "../../assets/web-certifications/Web Masters - Gagguturu Harshiya.pdf";
import pdfCert130 from "../../assets/web-certifications/Web Titans  - Bramhanapalli Mohitha.pdf";
import pdfCert131 from "../../assets/web-certifications/Web Titans  - Busannagari Savarni.pdf";
import pdfCert132 from "../../assets/web-certifications/Web Titans - Bogineni Srikekha.pdf";
import pdfCert133 from "../../assets/web-certifications/Web Titans - Chendilikumar kavya.pdf";
import pdfCert134 from "../../assets/web-certifications/Web Trio  - Panabakam Devi.pdf";
import pdfCert135 from "../../assets/web-certifications/Web Trio - Kavali Pravallika.pdf";
import pdfCert136 from "../../assets/web-certifications/Web Trio - Peram.Akhila.pdf";
import pdfCert137 from "../../assets/web-certifications/Web Trio - Thanusha peneti.pdf";
import pdfCert138 from "../../assets/web-certifications/Web Warriors  - Chinnam Maheswari.pdf";
import pdfCert139 from "../../assets/web-certifications/Web Warriors  - CHITTEPU GNANITHA REDDY.pdf";
import pdfCert140 from "../../assets/web-certifications/Web Warriors  - CHITTETI SWATHI.pdf";
import pdfCert141 from "../../assets/web-certifications/Web Warriors  - Gajjala Yaminipriya.pdf";
import pdfCert142 from "../../assets/web-certifications/Web Warriors  - Gundluru Chandrika Sravanthi.pdf";
import pdfCert143 from "../../assets/web-certifications/XTron - Dama Charan.pdf";
import pdfCert144 from "../../assets/web-certifications/XTron - G NANDHEESWAR REDDY.pdf";
import pdfCert145 from "../../assets/web-certifications/XTron - G REDDY CHARAN.pdf";
import pdfCert146 from "../../assets/web-certifications/XTron - K.Madhukar Reddy.pdf";
import pdfCert147 from "../../assets/web-certifications/XTron - P.L.Deepak.pdf";
import pdfCert148 from "../../assets/web-certifications/Yuva Teja - DONDETI MONIKA.pdf";
import pdfCert149 from "../../assets/web-certifications/Yuva Teja - G POOJITHA.pdf";
import pdfCert150 from "../../assets/web-certifications/Yuva Teja - Shanthi Geepalem.pdf";
import pdfCert151 from "../../assets/web-certifications/Yuvateja - P.yuvateja.pdf";

import img1 from "../../assets/logo.jpg";
import AboutSection from "../AboutSection/AboutSection";
import Certifications from "../Certifications/Certifications";

const HackathonPage = ({ manualImages = [] }) => {
  const [activeTab, setActiveTab] = useState("about");
  const [images, setImages] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
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
                  <h3 className="text-lg font-medium mb-4">
                    Gallery Images
                  </h3>
                  {allImages.length === 0 ? (
                    <p className="text-gray-300 text-center py-8">
                      No images uploaded yet. Share your hackathon
                      experience!
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
                            {image.name ||
                              `GDG Innohacks 2K25 - ${index + 1}`}
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
