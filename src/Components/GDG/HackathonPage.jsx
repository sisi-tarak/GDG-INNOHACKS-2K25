import React, { useState, useRef, useEffect } from "react";
const pdfFiles = import.meta.glob("../assets/web-certifications/*.pdf");

// First set of PDFs (Image 1)
import pdfCert01 from "../../assets/web-certifications/Asphalt - Satambeti. Chandu.pdf";
import pdfCert02 from "../../assets/web-certifications/Avengers - Gavve Sravani.pdf";
import pdfCert03 from "../../assets/web-certifications/Avengers - K V Supriya.pdf";
import pdfCert04 from "../../assets/web-certifications/Avengers - SINGAREDDYGARI SWATHI.pdf";
import pdfCert05 from "../../assets/web-certifications/Avengers - Javvaji Meghana.pdf";
import pdfCert06 from "../../assets/web-certifications/Code a-lot - BANDI DURGA BHAVANI.pdf";
import pdfCert07 from "../../assets/web-certifications/Code a-lot - KANALA SIREESHA.pdf";
import pdfCert08 from "../../assets/web-certifications/Code a-lot - TALLURI HARSHITHA.pdf";
import pdfCert09 from "../../assets/web-certifications/Code crafters - M.Sushma Swaraj.pdf";
import pdfCert10 from "../../assets/web-certifications/Code crafters - P.Bhanu Prakash Reddy.pdf";
import pdfCert11 from "../../assets/web-certifications/Code crafters - Polisetty Abitha.pdf";
import pdfCert12 from "../../assets/web-certifications/Code crafters - Rallapalli Thulasi.pdf";
import pdfCert13 from "../../assets/web-certifications/Code Crew - Kaitha Teja Sri.pdf";
import pdfCert14 from "../../assets/web-certifications/Code Crew - Likhitha Posa.pdf";
import pdfCert15 from "../../assets/web-certifications/Code Crew - Ramagowni Mokshitha.pdf";
import pdfCert16 from "../../assets/web-certifications/Code Crew - Sadaala deepthi.pdf";
import pdfCert17 from "../../assets/web-certifications/Code Crew - Thanikonda Sai Manvitha.pdf";
import pdfCert18 from "../../assets/web-certifications/Code Ninjas - Alluru Ramya.pdf";
import pdfCert19 from "../../assets/web-certifications/Code ninjas - Gownipalli Harshitha.pdf";
import pdfCert20 from "../../assets/web-certifications/Code ninjas - Perrala Akhila.pdf";
import pdfCert21 from "../../assets/web-certifications/Code Ninjas - Ponneri Manasa.pdf";
import pdfCert22 from "../../assets/web-certifications/Code Ninjas - Puthuru Samatha.pdf";
import pdfCert23 from "../../assets/web-certifications/Code pirates  - Kuppireddy Nikhil .pdf";
import pdfCert24 from "../../assets/web-certifications/Code pirates  - N. Lakshmi prasanna.pdf";
import pdfCert25 from "../../assets/web-certifications/Code pirates - M.Harsha Vardan Reddy.pdf";
import pdfCert26 from "../../assets/web-certifications/Code pirates - S A Muskaan.pdf";
import pdfCert27 from "../../assets/web-certifications/Code sisters  - S. Bhavana.pdf";
import pdfCert28 from "../../assets/web-certifications/Code sisters - Kavya Penumadu .pdf";
import pdfCert29 from "../../assets/web-certifications/Code sisters - Putturu senthilkumar vedeshwari.pdf";
import pdfCert30 from "../../assets/web-certifications/Code sisters - Sankarapu Navya.pdf";
import pdfCert31 from "../../assets/web-certifications/Code trio - Amruthala Surya.pdf";
import pdfCert32 from "../../assets/web-certifications/Code trio - R.Thimme Gowd .pdf";
import pdfCert33 from "../../assets/web-certifications/Code trio - Shaik imam khasim.pdf";
import pdfCert34 from "../../assets/web-certifications/Codsters - Katari Tharun Teja.pdf";
import pdfCert35 from "../../assets/web-certifications/Codsters - Aasrita Reddy C.pdf";
import pdfCert36 from "../../assets/web-certifications/Codsters - Chalamalla hemanth Chowdary.pdf";
import pdfCert37 from "../../assets/web-certifications/Codsters - GADDAM HEMANTH.pdf";
import pdfCert38 from "../../assets/web-certifications/Codsters - Kolleti varshini.pdf";
import pdfCert39 from "../../assets/web-certifications/Dare Devils - G.Anurag Harshith.pdf";
import pdfCert40 from "../../assets/web-certifications/Dare Devils - Tadakara Dinesh.pdf";
import pdfCert41 from "../../assets/web-certifications/DareDevils - M K Tharun Sai.pdf";
import pdfCert42 from "../../assets/web-certifications/DIGITAL DYNAMITES - P.Amrutha.pdf";
import pdfCert43 from "../../assets/web-certifications/DIGITAL DYNAMITES - Y.Y.Nandini Vardhan Reddy.pdf";
import pdfCert44 from "../../assets/web-certifications/DIGITAL DYNAMITES - YALLANURU REVANTH KUMAR.pdf";
import pdfCert45 from "../../assets/web-certifications/DIGITAL DYNAMITES - Shaik Afrin.pdf";
import pdfCert46 from "../../assets/web-certifications/Front End Force - K Sai.pdf";
import pdfCert47 from "../../assets/web-certifications/Front-End Force - K P Mohitha.pdf";
import pdfCert48 from "../../assets/web-certifications/Hack&Learn@os - Pillapalem Tejaswi.pdf";
import pdfCert49 from "../../assets/web-certifications/Hackaholics - Gayathri Appalredd.pdf";
import pdfCert50 from "../../assets/web-certifications/Hackaholics - Akepati Devasena.pdf";
import pdfCert51 from "../../assets/web-certifications/Hackaholics - Syed aisha Sidhiqua.pdf";
import pdfCert52 from "../../assets/web-certifications/Hackathon Makers - K Mahamood Ajad.pdf";
import pdfCert53 from "../../assets/web-certifications/Hackathon Makers - P.Jayanth kumar.pdf";
import pdfCert54 from "../../assets/web-certifications/Hackathon Makers - S USHA SAI IKITHA REDDY.pdf";
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
import pdfCert68 from "../../assets/web-certifications/Novalocks - Akula Pushapanjali.pdf";
import pdfCert69 from "../../assets/web-certifications/Novalocks - Paidipula charan.pdf";
import pdfCert70 from "../../assets/web-certifications/PANCHKAVACH - MALLIBOYINA POOJA SRI.pdf";
import pdfCert71 from "../../assets/web-certifications/Panchkavach - MARPURI LIKITHA.pdf";
import pdfCert72 from "../../assets/web-certifications/PANCHKAVACH - Mekala Pavithra.pdf";
import pdfCert73 from "../../assets/web-certifications/PANCHKAVACH - Mukkamalla Venkata Bhavana.pdf";
import pdfCert74 from "../../assets/web-certifications/PANCHKAVACH - Nimmala Sravanthi.pdf";
import pdfCert75 from "../../assets/web-certifications/Phoenix - Purru Tulasi.pdf";
import pdfCert76 from "../../assets/web-certifications/Shanthi - Earomchetty Harshitha.pdf";
import pdfCert77 from "../../assets/web-certifications/Soft tech - BANDA VIJAY KUMAR.pdf";
import pdfCert78 from "../../assets/web-certifications/Soft tech - Jaswanth Kumar Mamilla.pdf";
import pdfCert79 from "../../assets/web-certifications/Soft tech - Kalakada Poojitha.pdf";
import pdfCert80 from "../../assets/web-certifications/Soft tech - Y Durga Venkata Deepak.pdf";
import pdfCert81 from "../../assets/web-certifications/Soft Tech - Yagateela Suneel.pdf";
import pdfCert82 from "../../assets/web-certifications/Soft Teech - MOPURI YASWANTH.pdf";
import pdfCert83 from "../../assets/web-certifications/Strange Thinkers - Chillakuru pardha saradhi.pdf";
import pdfCert84 from "../../assets/web-certifications/Strange Thinkers - POTLA CHAITANYA.pdf";
import pdfCert85 from "../../assets/web-certifications/Strange Thinkers - Sayed Yasin.pdf";
import pdfCert86 from "../../assets/web-certifications/Strange Thinkers - Shaik Aisha.pdf";
import pdfCert87 from "../../assets/web-certifications/Stranger Thinkers - YOGISH PASUPULETI.pdf";
import pdfCert88 from "../../assets/web-certifications/Team anonymous - Bukkasamudram Surya Vardhan Reddy.pdf";
import pdfCert89 from "../../assets/web-certifications/Team anonymous - Golla Vinod Kumar.pdf";
import pdfCert90 from "../../assets/web-certifications/Team Asphalt - Shaik.AsifAzeem.pdf";
import pdfCert91 from "../../assets/web-certifications/Team asphalt - Sk.shabber.pdf";
import pdfCert92 from "../../assets/web-certifications/Team Asphalt - SG.Vardhan Vikranth Reddy.pdf";
import pdfCert93 from "../../assets/web-certifications/Team Asphalt - Shaik Imran Hashimi.pdf";
import pdfCert94 from "../../assets/web-certifications/Tech Titans - Balaji Rupasri.pdf";
import pdfCert95 from "../../assets/web-certifications/TECH TITANS - BALASA CHENCHU AALAYA.pdf";
import pdfCert96 from "../../assets/web-certifications/TECH TITANS - ETLAM CHASVITHA REDDY.pdf";
import pdfCert97 from "../../assets/web-certifications/Tech Titans - JEELA EESHA.pdf";
import pdfCert98 from "../../assets/web-certifications/Tech Titans - KANUPURU BRUNDA.pdf";
import pdfCert99 from "../../assets/web-certifications/Tech Titans - Pandi vamsi.pdf";
import pdfCert100 from "../../assets/web-certifications/Tech titans - SHAIK ARSHIYA TAJ.pdf";
import pdfCert101 from "../../assets/web-certifications/TECH TITANS - VANDAVASI DILEEQ.pdf";
import pdfCert102 from "../../assets/web-certifications/Tech web - Pujitha Lingala.pdf";
import pdfCert103 from "../../assets/web-certifications/Tech web - CHITTEM KAMESWARI APARNA.pdf";
import pdfCert104 from "../../assets/web-certifications/Tech web - Enapati keerthi.pdf";
import pdfCert105 from "../../assets/web-certifications/TechSquad - Motupalli Chandana.pdf";
import pdfCert106 from "../../assets/web-certifications/TechSquad - PeddaKkagari Shalini.pdf";
import pdfCert107 from "../../assets/web-certifications/TechSquad - Ramagiri Neha.pdf";
import pdfCert108 from "../../assets/web-certifications/Teen Titans - Adeppagari Pallavi.pdf";
import pdfCert109 from "../../assets/web-certifications/Teen Titans - Cheemala Supriya.pdf";
import pdfCert110 from "../../assets/web-certifications/Teen Titans - Siri Ankitha.pdf";
import pdfCert111 from "../../assets/web-certifications/Teen Titans - SUJITHA BHARATHALA.pdf";
import pdfCert112 from "../../assets/web-certifications/Teen Titans - Chennareddy Swetha.pdf";
import pdfCert113 from "../../assets/web-certifications/THE QUAD 4 - Tejasvi Pakala.pdf";
import pdfCert114 from "../../assets/web-certifications/TWEAK - Shaik Imran.pdf";
import pdfCert115 from "../../assets/web-certifications/TWEAK - SRIPURAM GUNASEKHAR.pdf";
import pdfCert116 from "../../assets/web-certifications/Visioneers - Kavadi Tejasri.pdf";
import pdfCert117 from "../../assets/web-certifications/Visioneers - Kurugodu Sushma.pdf";
import pdfCert118 from "../../assets/web-certifications/Visioneers - Kalavagunta Monisha.pdf";
import pdfCert119 from "../../assets/web-certifications/Visioneers - Krishnan Mounika.pdf";
import pdfCert120 from "../../assets/web-certifications/Visioneers - Nandi Mangalam Geerani.pdf";
import pdfCert121 from "../../assets/web-certifications/Web Dev - K.Charith.pdf";
import pdfCert122 from "../../assets/web-certifications/WEB DEV - S L KESAVAANANDA.pdf";
import pdfCert123 from "../../assets/web-certifications/Web Dev - Tatigunta Chasanth Reddy.pdf";
import pdfCert124 from "../../assets/web-certifications/Web Dev - Thathappagari Hemanth.pdf";
import pdfCert125 from "../../assets/web-certifications/Web dev - veeraballi karthik kumar reddy.pdf";
import pdfCert126 from "../../assets/web-certifications/Web Masters - Kunchala Lahari.pdf";
import pdfCert127 from "../../assets/web-certifications/Web masters - S HEMACHANDRIKA.pdf";
import pdfCert128 from "../../assets/web-certifications/Web Masters - Budensab Sameera.pdf";
import pdfCert129 from "../../assets/web-certifications/Web Masters - Gagguturu Harshiya.pdf";
import pdfCert130 from "../../assets/web-certifications/Web Titans - Brahmanapalli Mohitha.pdf";
import pdfCert131 from "../../assets/web-certifications/Web Titans - Busannagari Savarni.pdf";
import pdfCert132 from "../../assets/web-certifications/Web Titans - Bogineni Srikekha.pdf";
import pdfCert133 from "../../assets/web-certifications/Web Titans - Chendilkumar kavya.pdf";
import pdfCert134 from "../../assets/web-certifications/Web Trio - Panabakam Devi.pdf";
import pdfCert135 from "../../assets/web-certifications/Web Trio - Kavali Pravallika.pdf";
import pdfCert136 from "../../assets/web-certifications/Web Trio - Peram.Akhila.pdf";
import pdfCert137 from "../../assets/web-certifications/Web Trio - Thanusha peneti.pdf";
import pdfCert138 from "../../assets/web-certifications/Web Warriors - Chinnam Maheswari.pdf";
import pdfCert139 from "../../assets/web-certifications/Web Warriors - CHITTEPU GNANITHA REDDY.pdf";
import pdfCert140 from "../../assets/web-certifications/Web Warriors - CHITTETI SWATHI.pdf";
import pdfCert141 from "../../assets/web-certifications/Web Warriors - Gajjala Vaminipriya.pdf";
import pdfCert142 from "../../assets/web-certifications/Web Warriors - Gundluru Chandrika Sravanthi.pdf";
import pdfCert143 from "../../assets/web-certifications/XTron - Dama Charan.pdf";
import pdfCert144 from "../../assets/web-certifications/XTron - G NANDHEESWAR REDDY.pdf";
import pdfCert145 from "../../assets/web-certifications/XTron - G REDDY CHARAN.pdf";
import pdfCert146 from "../../assets/web-certifications/XTron - K.Madhukar Reddy.pdf";
import pdfCert147 from "../../assets/web-certifications/XTron - P.L.Deepak.pdf";
import pdfCert148 from "../../assets/web-certifications/Yuva Teja - DONDETI MONIKA.pdf";
import pdfCert149 from "../../assets/web-certifications/Yuva Teja - G POOJITHA.pdf";
import pdfCert150 from "../../assets/web-certifications/Yuva Teja - Shanthi Geepalem.pdf";
import pdfCert151 from "../../assets/web-certifications/Yuvateja - Pyuvateja.pdf";

import img1 from "../../assets/logo.jpg";
import AboutSection from "../AboutSection/AboutSection";

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

  const certificates = [
    {
      id: 1,
      name: "Satambeti. Chandu",
      team: "Asphalt",
      project: "Web Development",
      filename: pdfCert01,
    },
    {
      id: 2,
      name: "Gavve Sravani",
      team: "Avengers",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Avengers - Gavve Sravani.pdf"],
    },
    {
      id: 3,
      name: "K V Supriya",
      team: "Avengers",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Avengers - K V Supriya.pdf"],
    },
    {
      id: 4,
      name: "SINGAREDDYGARI SWATHI",
      team: "Avengers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Avengers - SINGAREDDYGARI SWATHI.pdf"
        ],
    },
    {
      id: 5,
      name: "Javvaji Meghana",
      team: "Avengers",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Avengers - Javvaji Meghana.pdf"],
    },
    {
      id: 6,
      name: "BANDI DURGA BHAVANI",
      team: "Code a-lot",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code a-lot - BANDI DURGA BHAVANI.pdf"
        ],
    },
    {
      id: 7,
      name: "KANALA SIREESHA",
      team: "Code a-lot",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code a-lot - KANALA SIREESHA.pdf"
        ],
    },
    {
      id: 8,
      name: "TALLURI HARSHITHA",
      team: "Code a-lot",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code a-lot - TALLURI HARSHITHA.pdf"
        ],
    },
    {
      id: 9,
      name: "M.Sushma Swaraj",
      team: "Code crafters",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code crafters - M.Sushma Swaraj.pdf"
        ],
    },
    {
      id: 10,
      name: "P.Bhanu Prakash Reddy",
      team: "Code crafters",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code crafters - P.Bhanu Prakash Reddy.pdf"
        ],
    },
    {
      id: 11,
      name: "Polisetty Abitha",
      team: "Code crafters",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code crafters - Polisetty Abitha.pdf"
        ],
    },
    {
      id: 12,
      name: "Rallapalli Thulasi",
      team: "Code crafters",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code crafters - Rallapalli Thulasi.pdf"
        ],
    },
    {
      id: 13,
      name: "Kaitha Teja Sri",
      team: "Code Crew",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code Crew - Kaitha Teja Sri.pdf"
        ],
    },
    {
      id: 14,
      name: "Likhitha Posa",
      team: "Code Crew",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Code Crew - Likhitha Posa.pdf"],
    },
    {
      id: 15,
      name: "Ramagowni Mokshitha",
      team: "Code Crew",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code Crew - Ramagowni Mokshitha.pdf"
        ],
    },
    {
      id: 16,
      name: "Sadaala deepthi",
      team: "Code Crew",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code Crew - Sadaala deepthi.pdf"
        ],
    },
    {
      id: 17,
      name: "Thanikonda Sai Manvitha",
      team: "Code Crew",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code Crew - Thanikonda Sai Manvitha.pdf"
        ],
    },
    {
      id: 18,
      name: "Alluru Ramya",
      team: "Code Ninjas",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Code Ninjas - Alluru Ramya.pdf"],
    },
    {
      id: 19,
      name: "Gownipalli Harshitha",
      team: "Code ninjas",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code ninjas - Gownipalli Harshitha.pdf"
        ],
    },
    {
      id: 20,
      name: "Perrala Akhila",
      team: "Code ninjas",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code ninjas - Perrala Akhila.pdf"
        ],
    },

    // Continue with the rest of the files from Image 1, 2, 3, and 4...
    // I'm showing a sample of the first 20 certificates, but you would include all files

    // Example from Image 2
    {
      id: 21,
      name: "Ponneri Manasa",
      team: "Code Ninjas",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Code Ninjas - Ponneri Manasa.pdf"
        ],
    },

    // Example from Image 3
    {
      id: 22,
      name: "Balaji Rupasri",
      team: "Tech Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Tech Titans - Balaji Rupasri.pdf"
        ],
    },

    // Example from Image 4
    {
      id: 23,
      name: "K.Charithy",
      team: "Web Dev",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Web Dev - K.Charithy.pdf"],
    },
    // Continuing from id: 23...
    {
      id: 24,
      name: "S L KESAVAANANDA",
      team: "WEB DEV",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/WEB DEV - S L KESAVAANANDA.pdf"],
    },
    {
      id: 25,
      name: "Tatigunta Chasanth Reddy",
      team: "Web dev",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web dev - Tatigunta Chasanth Reddy.pdf"
        ],
    },
    {
      id: 26,
      name: "Thathappagari Hemanth",
      team: "Web Dev",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Dev - Thathappagari Hemanth.pdf"
        ],
    },
    {
      id: 27,
      name: "veeraballi karthik kumar reddy",
      team: "Web dev",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web dev - veeraballi karthik kumar reddy.pdf"
        ],
    },
    {
      id: 28,
      name: "Kunchala Lahari",
      team: "Web Masters",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Masters - Kunchala Lahari.pdf"
        ],
    },
    {
      id: 29,
      name: "S HEMACHANDRIKA",
      team: "Web masters",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web masters - S HEMACHANDRIKA.pdf"
        ],
    },
    {
      id: 30,
      name: "Budensab Sameera",
      team: "Web Masters",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Masters - Budensab Sameera.pdf"
        ],
    },
    {
      id: 31,
      name: "Gagguturu Harshiya",
      team: "Web Masters",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Masters - Gagguturu Harshiya.pdf"
        ],
    },
    {
      id: 32,
      name: "Brahmanapalli Mohitha",
      team: "Web Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Titans - Brahmanapalli Mohitha.pdf"
        ],
    },
    {
      id: 33,
      name: "Busannagari Savarni",
      team: "Web Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Titans - Busannagari Savarni.pdf"
        ],
    },
    {
      id: 34,
      name: "Bogineni Srikekha",
      team: "Web Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Titans - Bogineni Srikekha.pdf"
        ],
    },
    {
      id: 35,
      name: "Chendilkumar kavya",
      team: "Web Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Titans - Chendilkumar kavya.pdf"
        ],
    },
    {
      id: 36,
      name: "Panabakam Devi",
      team: "Web Trio",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Web Trio - Panabakam Devi.pdf"],
    },
    {
      id: 37,
      name: "Kavali Pravallika",
      team: "Web Trio",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Trio - Kavali Pravallika.pdf"
        ],
    },
    {
      id: 38,
      name: "Peram.Akhila",
      team: "Web Trio",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Web Trio - Peram.Akhila.pdf"],
    },
    {
      id: 39,
      name: "Thanusha peneti",
      team: "Web Trio",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Web Trio - Thanusha peneti.pdf"],
    },
    {
      id: 40,
      name: "Chinnam Maheswari",
      team: "Web Warriors",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Warriors - Chinnam Maheswari.pdf"
        ],
    },
    {
      id: 41,
      name: "CHITTEPU GNANITHA REDDY",
      team: "Web Warriors",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Warriors - CHITTEPU GNANITHA REDDY.pdf"
        ],
    },
    {
      id: 42,
      name: "CHITTEPU SWATHI",
      team: "Web Warriors",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Warriors - CHITTEPU SWATHI.pdf"
        ],
    },
    {
      id: 43,
      name: "Gajjala Yaminipriya",
      team: "Web Warriors",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Warriors - Gajjala Yaminipriya.pdf"
        ],
    },
    {
      id: 44,
      name: "Gundluru Chandrika Sravanthi",
      team: "Web Warriors",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Web Warriors - Gundluru Chandrika Sravanthi.pdf"
        ],
    },
    {
      id: 45,
      name: "Dama Charan",
      team: "XTron",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/XTron - Dama Charan.pdf"],
    },
    {
      id: 46,
      name: "G NANDHEESWEAR REDDY",
      team: "XTron",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/XTron - G NANDHEESWEAR REDDY.pdf"
        ],
    },
    {
      id: 47,
      name: "G REDDY CHARAN",
      team: "XTron",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/XTron - G REDDY CHARAN.pdf"],
    },
    {
      id: 48,
      name: "K.Madhukar Reddy",
      team: "XTron",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/XTron - K.Madhukar Reddy.pdf"],
    },
    {
      id: 49,
      name: "P.L.Deepak",
      team: "XTron",
      project: "Web Development",
      filename: pdfFiles["../assets/web-certifications/XTron - P.L.Deepak.pdf"],
    },
    {
      id: 50,
      name: "DONDETI MONIKA",
      team: "Yuva Teja",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Yuva Teja - DONDETI MONIKA.pdf"],
    },
    {
      id: 51,
      name: "G POOJITHA",
      team: "Yuva Teja",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Yuva Teja - G POOJITHA.pdf"],
    },
    {
      id: 52,
      name: "Shanthi Geepalem",
      team: "Yuva Teja",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Yuva Teja - Shanthi Geepalem.pdf"
        ],
    },
    {
      id: 53,
      name: "P.yuvateja",
      team: "Yuvateja",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Yuvateja - P.yuvateja.pdf"],
    },
    {
      id: 54,
      name: "Shaik Imran",
      team: "TWEAK",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/TWEAK - Shaik Imran.pdf"],
    },
    {
      id: 55,
      name: "SRIPURAM GUNASEKHAR",
      team: "TWEAK",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/TWEAK - SRIPURAM GUNASEKHAR.pdf"
        ],
    },
    {
      id: 56,
      name: "Kavadi Tejasri",
      team: "Visioneers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Visioneers - Kavadi Tejasri.pdf"
        ],
    },
    {
      id: 57,
      name: "Kurugodu Sushma",
      team: "Visioneers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Visioneers - Kurugodu Sushma.pdf"
        ],
    },
    {
      id: 58,
      name: "Kalavagunta Monisha",
      team: "Visioneers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Visioneers - Kalavagunta Monisha.pdf"
        ],
    },
    {
      id: 59,
      name: "Krishnan Mounika",
      team: "Visioneers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Visioneers - Krishnan Mounika.pdf"
        ],
    },
    {
      id: 60,
      name: "Nandi Mangalam Geerani",
      team: "Visioneers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Visioneers - Nandi Mangalam Geerani.pdf"
        ],
    },
    {
      id: 61,
      name: "Tejaswi Pakala",
      team: "THE QUAD 4",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/THE QUAD 4 - Tejaswi Pakala.pdf"
        ],
    },
    {
      id: 62,
      name: "Adeppagari Pallavi",
      team: "Teen Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Teen Titans - Adeppagari Pallavi.pdf"
        ],
    },
    {
      id: 63,
      name: "Cheemala Supriya",
      team: "Teen Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Teen Titans - Cheemala Supriya.pdf"
        ],
    },
    {
      id: 64,
      name: "Siri Ankitha",
      team: "Teen Titans",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Teen Titans - Siri Ankitha.pdf"],
    },
    {
      id: 65,
      name: "SUJITHA BHARATHALA",
      team: "Teen Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Teen Titans - SUJITHA BHARATHALA.pdf"
        ],
    },
    {
      id: 66,
      name: "Chennareddy Pranavi",
      team: "Teen Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Teen Titans - Chennareddy Pranavi.pdf"
        ],
    },
    {
      id: 67,
      name: "Motupalli Chandana",
      team: "TechSquad",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/TechSquad - Motupalli Chandana.pdf"
        ],
    },
    {
      id: 68,
      name: "Peddakalgan Shalini",
      team: "TechSquad",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/TechSquad - Peddakalgan Shalini.pdf"
        ],
    },
    {
      id: 69,
      name: "Ramagiri Neha",
      team: "TechSquad",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/TechSquad - Ramagiri Neha.pdf"],
    },
    {
      id: 70,
      name: "Pujitha Lingala",
      team: "Tech web",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Tech web - Pujitha Lingala.pdf"],
    },
    {
      id: 71,
      name: "CHITTEM KAMESWARI APARNA",
      team: "Tech web",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Tech web - CHITTEM KAMESWARI APARNA.pdf"
        ],
    },
    {
      id: 72,
      name: "Enapati keerthi",
      team: "Tech web",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Tech web - Enapati keerthi.pdf"],
    },
    {
      id: 73,
      name: "Balaji Rupasri",
      team: "Tech Titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Tech Titans - Balaji Rupasri.pdf"
        ],
    },
    {
      id: 74,
      name: "BALASA CHENCHU AALAYA",
      team: "TECH TITANS",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/TECH TITANS - BALASA CHENCHU AALAYA.pdf"
        ],
    },
    {
      id: 75,
      name: "ETLAM CHASVITHA REDDY",
      team: "TECH TITANS",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/TECH TITANS - ETLAM CHASVITHA REDDY.pdf"
        ],
    },
    {
      id: 76,
      name: "JEELA EESHA",
      team: "Tech Titans",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Tech Titans - JEELA EESHA.pdf"],
    },
    {
      id: 77,
      name: "KANUPURU BRUNDA",
      team: "TECH TITANS",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/TECH TITANS - KANUPURU BRUNDA.pdf"
        ],
    },
    {
      id: 78,
      name: "Pandi vamsi",
      team: "Tech Titans",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Tech Titans - Pandi vamsi.pdf"],
    },
    {
      id: 79,
      name: "SHAIK ARSHIYA TAJ",
      team: "Tech titans",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Tech titans - SHAIK ARSHIYA TAJ.pdf"
        ],
    },
    {
      id: 80,
      name: "VANDAVASI DILEEQ",
      team: "TECH TITANS",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/TECH TITANS - VANDAVASI DILEEQ.pdf"
        ],
    },
    {
      id: 81,
      name: "Earomchetty Harshitha",
      team: "Shanthi",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Shanthi - Earomchetty Harshitha.pdf"
        ],
    },
    {
      id: 82,
      name: "BANDA VIJAY KUMAR",
      team: "Soft tech",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Soft tech - BANDA VIJAY KUMAR.pdf"
        ],
    },
    {
      id: 83,
      name: "Jaswanth Kumar Mamilla",
      team: "Soft tech",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Soft tech - Jaswanth Kumar Mamilla.pdf"
        ],
    },
    {
      id: 84,
      name: "Kalakada Poojitha",
      team: "Soft tech",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Soft tech - Kalakada Poojitha.pdf"
        ],
    },
    {
      id: 85,
      name: "Y Durga Venkata Deepak",
      team: "Soft tech",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Soft tech - Y Durga Venkata Deepak.pdf"
        ],
    },
    {
      id: 86,
      name: "Yagateela Suneel",
      team: "Soft Tech",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Soft Tech - Yagateela Suneel.pdf"
        ],
    },
    {
      id: 87,
      name: "MOPURI YASWANTH",
      team: "Soft Teech",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Soft Teech - MOPURI YASWANTH.pdf"
        ],
    },
    {
      id: 88,
      name: "Chillakuru pardha saradhi",
      team: "Strange Thinkers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Strange Thinkers - Chillakuru pardha saradhi.pdf"
        ],
    },
    {
      id: 89,
      name: "POTLA CHAITANYA",
      team: "Strange Thinkers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Strange Thinkers - POTLA CHAITANYA.pdf"
        ],
    },
    {
      id: 90,
      name: "Sayed Yasin",
      team: "Strange Thinkers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Strange Thinkers - Sayed Yasin.pdf"
        ],
    },
    {
      id: 91,
      name: "Shaik Aisha",
      team: "Strange Thinkers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Strange Thinkers - Shaik Aisha.pdf"
        ],
    },
    {
      id: 92,
      name: "YOGISH PASUPULETI",
      team: "Stranger Thinkers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Stranger Thinkers - YOGISH PASUPULETI.pdf"
        ],
    },
    {
      id: 93,
      name: "Bukkasamudram Surya Vardhan Reddy",
      team: "Team anonymous",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Team anonymous - Bukkasamudram Surya Vardhan Reddy.pdf"
        ],
    },
    {
      id: 94,
      name: "Golla Vinod Kumar",
      team: "Team anonymous",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Team anonymous - Golla Vinod Kumar.pdf"
        ],
    },
    {
      id: 95,
      name: "Shaik.AsifAzeem",
      team: "Team Asphalt",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Team Asphalt - Shaik.AsifAzeem.pdf"
        ],
    },
    {
      id: 96,
      name: "Sk.shabber",
      team: "Team asphalt",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Team asphalt - Sk.shabber.pdf"],
    },
    {
      id: 97,
      name: "SG.Vardhan Vikranth Reddy",
      team: "Team Asphalt",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Team Asphalt - SG.Vardhan Vikranth Reddy.pdf"
        ],
    },
    {
      id: 98,
      name: "Shaik imran Hashimi",
      team: "Team Asphalt",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Team Asphalt - Shaik imran Hashimi.pdf"
        ],
    },
    {
      id: 99,
      name: "Purru Tulasi",
      team: "Phoenix",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Phoenix - Purru Tulasi.pdf"],
    },
    {
      id: 100,
      name: "MALLIBOYINA POOJA SRI",
      team: "PANCHKAVACH",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/PANCHKAVACH - MALLIBOYINA POOJA SRI.pdf"
        ],
    },
    {
      id: 101,
      name: "MARPURI LIKITHA",
      team: "Panchkavach",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Panchkavach - MARPURI LIKITHA.pdf"
        ],
    },
    {
      id: 102,
      name: "Mekala Pavithra",
      team: "PANCHKAVACH",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/PANCHKAVACH - Mekala Pavithra.pdf"
        ],
    },
    {
      id: 103,
      name: "Mukkamalla Venkata Bhavana",
      team: "PANCHKAVACH",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/PANCHKAVACH - Mukkamalla Venkata Bhavana.pdf"
        ],
    },
    {
      id: 104,
      name: "Nimmala Sravanthi",
      team: "PANCHKAVACH",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/PANCHKAVACH - Nimmala Sravanthi.pdf"
        ],
    },
    {
      id: 105,
      name: "Vaka Pushpanjali",
      team: "Novalocks",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Novalocks - Vaka Pushpanjali.pdf"
        ],
    },
    {
      id: 106,
      name: "Paidipula charan",
      team: "Novalocks",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Novalocks - Paidipula charan.pdf"
        ],
    },
    {
      id: 107,
      name: "M.Kavya",
      team: "Nexus",
      project: "Web Development",
      filename: pdfFiles["../assets/web-certifications/Nexus - M.Kavya.pdf"],
    },
    {
      id: 108,
      name: "M.Penchala Bhavana",
      team: "Nexus",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Nexus - M.Penchala Bhavana.pdf"],
    },
    {
      id: 109,
      name: "D Vinay",
      team: "Judgement Day",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Judgement Day - D Vinay.pdf"],
    },
    {
      id: 110,
      name: "Konduru Pavan Sai Varma",
      team: "Judgement Day",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Judgement Day - Konduru Pavan Sai Varma.pdf"
        ],
    },
    {
      id: 111,
      name: "VEMPALLI NAVEEN",
      team: "Judgement Day",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Judgement Day - VEMPALLI NAVEEN.pdf"
        ],
    },
    {
      id: 112,
      name: "Vemula Bala Sai Kumar",
      team: "Judgement Day",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Judgement Day - Vemula Bala Sai Kumar.pdf"
        ],
    },
    {
      id: 113,
      name: "Edagotti Kishore",
      team: "HUGS FOR BUGS",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/HUGS FOR BUGS - Edagotti Kishore.pdf"
        ],
    },
    {
      id: 114,
      name: "G R DIVYA SREE",
      team: "HUGS FOR BUGS",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/HUGS FOR BUGS - G R DIVYA SREE.pdf"
        ],
    },
    {
      id: 115,
      name: "GADAMANIPALI RAJA SEKHAR",
      team: "HUGS FOR BUGS",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/HUGS FOR BUGS - GADAMANIPALI RAJA SEKHAR.pdf"
        ],
    },
    {
      id: 116,
      name: "KARUPOTHULA SHASHI KUMAR",
      team: "HUGS FOR BUGS",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/HUGS FOR BUGS - KARUPOTHULA SHASHI KUMAR.pdf"
        ],
    },
    {
      id: 117,
      name: "Kothuru Meghana",
      team: "HUGS FOR BUGS",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/HUGS FOR BUGS - Kothuru Meghana.pdf"
        ],
    },
    {
      id: 118,
      name: "K Mahamood Ajad",
      team: "Hackathon Makers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Hackathon Makers - K Mahamood Ajad.pdf"
        ],
    },
    {
      id: 119,
      name: "P.Jayanth kumar",
      team: "Hackathon Makers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Hackathon Makers - P.Jayanth kumar.pdf"
        ],
    },
    {
      id: 120,
      name: "S USHA SAI LIKITHA REDDY",
      team: "Hackathon Makers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Hackathon Makers - S USHA SAI LIKITHA REDDY.pdf"
        ],
    },
    {
      id: 121,
      name: "Samanthu Harini",
      team: "Hackathon Makers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Hackathon Makers - Samanthu Harini.pdf"
        ],
    },
    {
      id: 122,
      name: "Sure Bindhu",
      team: "Hackathon Makers",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Hackathon Makers - Sure Bindhu.pdf"
        ],
    },
    {
      id: 123,
      name: "Gayathri Appareddy",
      team: "Hackatholics",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Hackatholics - Gayathri Appareddy.pdf"
        ],
    },
    {
      id: 124,
      name: "Akepati Devasena",
      team: "Hackatholics",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Hackatholics - Akepati Devasena.pdf"
        ],
    },
    {
      id: 125,
      name: "Syed aisha Sidhiqua",
      team: "Hackatholics",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Hackatholics - Syed aisha Sidhiqua.pdf"
        ],
    },
    {
      id: 126,
      name: "Pillapalem Tejaswi",
      team: "Hack&Learn@05",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Hack&Learn@05 - Pillapalem Tejaswi.pdf"
        ],
    },
    {
      id: 127,
      name: "K Sai",
      team: "Front End Force",
      project: "Web Development",
      filename:
        pdfFiles["../assets/web-certifications/Front End Force - K Sai.pdf"],
    },
    {
      id: 128,
      name: "K P Mohitha",
      team: "Front-End Force",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/Front-End Force - K P Mohitha.pdf"
        ],
    },
    {
      id: 129,
      name: "P.Amrutha",
      team: "DIGITAL DYNAMITES",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/DIGITAL DYNAMITES - P.Amrutha.pdf"
        ],
    },
    {
      id: 130,
      name: "Y.V.Nandhi Vardhan Reddy",
      team: "DIGITAL DYNAMITES",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/DIGITAL DYNAMITES - Y.V.Nandhi Vardhan Reddy.pdf"
        ],
    },
    {
      id: 131,
      name: "YALLANURU REVANTH KUMAR",
      team: "DIGITAL DYNAMITES",
      project: "Web Development",
      filename:
        pdfFiles[
          "../assets/web-certifications/DIGITAL DYNAMITES - YALLANURU REVANTH KUMAR.pdf"
        ],
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

  const downloadCertificate = async (filename, teamName) => {
    try {
      const response = await fetch(filename);
      if (!response.ok) {
        throw new Error("Failed to fetch the file");
      }

      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;

      const downloadName = teamName
        ? `${teamName}-GDG-INNOHACKS-CERTIFICATE.pdf`
        : filename.split("/").pop();
      link.download = downloadName;

      document.body.appendChild(link);
      link.click();

      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to download certificate:", error);
      alert("Failed to download certificate. Please try again.");
    }
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
                        {certificates.map((cert) => (
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
        <p>© GDG INNOHACKS 2K25. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HackathonPage;
