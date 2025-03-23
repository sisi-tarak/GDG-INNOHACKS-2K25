// import React, { useState, useRef } from "react";

// import pdfCert01 from "../../assets/web-certifications/Asphalt - Satambeti. Chandu.pdf";
// import pdfCert02 from "../../assets/web-certifications/Avengers  - Gavve Sravani .pdf";
// import pdfCert03 from "../../assets/web-certifications/Avengers  - K V Supriya .pdf";
// import pdfCert04 from "../../assets/web-certifications/Avengers  - SINGAREDDYGARI SWATHI .pdf";
// import pdfCert05 from "../../assets/web-certifications/Avengers - Javvaji Meghana.pdf";
// import pdfCert06 from "../../assets/web-certifications/Code a-lot - BANDI DURGA BHAVANI .pdf";
// import pdfCert07 from "../../assets/web-certifications/Code a-lot - KANALA SIREESHA.pdf";
// import pdfCert08 from "../../assets/web-certifications/Code a-lot - TALLURU HARSHITHA .pdf";
// import pdfCert09 from "../../assets/web-certifications/Code crafters - M.Sushma Swaraj.pdf";
// import pdfCert10 from "../../assets/web-certifications/Code crafters - P.Bhanu Prakash Reddy .pdf";
// import pdfCert11 from "../../assets/web-certifications/Code crafters - Polisetty Abitha.pdf";
// import pdfCert12 from "../../assets/web-certifications/Code crafters - Rallapalli Thulasi.pdf";
// import pdfCert13 from "../../assets/web-certifications/Code Crew - Kaitha Teja Sri .pdf";
// import pdfCert14 from "../../assets/web-certifications/Code Crew - Likhitha Posa.pdf";
// import pdfCert15 from "../../assets/web-certifications/Code Crew - Ramagowni Mokshitha.pdf";
// import pdfCert16 from "../../assets/web-certifications/Code Crew - Saddala deepthi.pdf";
// import pdfCert17 from "../../assets/web-certifications/Code Crew - Thanikonda Muni Sai Manvitha.pdf";
// import pdfCert18 from "../../assets/web-certifications/Code Ninjas - Alluru Ramya.pdf";
// import pdfCert19 from "../../assets/web-certifications/Code ninjas - Gownipalli Harshitha.pdf";
// import pdfCert20 from "../../assets/web-certifications/Code ninjas - Perrala Akhila.pdf";
// import pdfCert21 from "../../assets/web-certifications/Code Ninjas - Ponneri Manasa.pdf";
// import pdfCert22 from "../../assets/web-certifications/Code Ninjas - Puthuru Samatha.pdf";
// import pdfCert23 from "../../assets/web-certifications/Code pirates  - Kuppireddy Nikhil.pdf";
// import pdfCert24 from "../../assets/web-certifications/Code pirates  - N. Lakshmi prasanna.pdf";
// import pdfCert25 from "../../assets/web-certifications/Code pirates - M.Harsha Vardan Reddy.pdf";
// import pdfCert26 from "../../assets/web-certifications/Code pirates - S A Muskaan.pdf";
// import pdfCert27 from "../../assets/web-certifications/Code sisters  - S. Bhavana.pdf";
// import pdfCert28 from "../../assets/web-certifications/Code sisters - Kavya Penumadu.pdf";
// import pdfCert29 from "../../assets/web-certifications/Code sisters - Putturu senthilkumar vedeshwari.pdf";
// import pdfCert30 from "../../assets/web-certifications/Code sisters - Sankarapu Navya.pdf";
// import pdfCert31 from "../../assets/web-certifications/Code trio - Amruthala Surya.pdf";
// import pdfCert32 from "../../assets/web-certifications/Code trio - R.Thimme Gowd.pdf";
// import pdfCert33 from "../../assets/web-certifications/Code trio - Shaik imam khasim.pdf";
// import pdfCert34 from "../../assets/web-certifications/Codsters -  Katari Tharun Teja.pdf";
// import pdfCert35 from "../../assets/web-certifications/Codsters - Aasrita Reddy C.pdf";
// import pdfCert36 from "../../assets/web-certifications/Codsters - Chalichalamala hemanth Chowdary.pdf";
// import pdfCert37 from "../../assets/web-certifications/Codsters - GADDAM HEMANTH.pdf";
// import pdfCert38 from "../../assets/web-certifications/Codsters - Kolleti varshini.pdf";
// import pdfCert39 from "../../assets/web-certifications/Dare Devils  - G.Anurag Harshith.pdf";
// import pdfCert40 from "../../assets/web-certifications/Dare Devils - Tadakara Dinesh.pdf";
// import pdfCert41 from "../../assets/web-certifications/DareDevils - M K Tharun Sai.pdf";
// import pdfCert42 from "../../assets/web-certifications/DIGITAL DYNAMITES  - P.Amrutha.pdf";
// import pdfCert43 from "../../assets/web-certifications/DIGITAL DYNAMITES  - Y.Y.Nandhi Vardhan Reddy.pdf";
// import pdfCert44 from "../../assets/web-certifications/DIGITAL DYNAMITES  - YALLANURU REVANTH KUMAR.pdf";
// import pdfCert45 from "../../assets/web-certifications/DIGITAL DYNAMITES - Shaik Afrin.pdf";
// import pdfCert46 from "../../assets/web-certifications/Front End Force - K Sai.pdf";
// import pdfCert47 from "../../assets/web-certifications/Front-End Force - K P Mohitha.pdf";
// import pdfCert48 from "../../assets/web-certifications/Hack&Learn@05 - Pillapalem Tejaswi.pdf";
// import pdfCert49 from "../../assets/web-certifications/Hackaholics  - Gayathri Appalreddy.pdf";
// import pdfCert50 from "../../assets/web-certifications/Hackaholics - Akepati Devasena.pdf";
// import pdfCert51 from "../../assets/web-certifications/Hackaholics - Syed aisha Sidhiqua.pdf";
// import pdfCert52 from "../../assets/web-certifications/Hackathon Makers - K Mahamood Ajad.pdf";
// import pdfCert53 from "../../assets/web-certifications/Hackathon Makers - P.Jayanth kumar.pdf";
// import pdfCert54 from "../../assets/web-certifications/Hackathon Makers - S USHA SAI LIKHITHA REDDY.pdf";
// import pdfCert55 from "../../assets/web-certifications/Hackathon Makers - Samanthu Harini.pdf";
// import pdfCert56 from "../../assets/web-certifications/Hackathon Makers - Sure Bindhu.pdf";
// import pdfCert57 from "../../assets/web-certifications/HUGS FOR BUGS - Edagotti Kishore.pdf";
// import pdfCert58 from "../../assets/web-certifications/HUGS FOR BUGS - G R DIVYA SREE.pdf";
// import pdfCert59 from "../../assets/web-certifications/HUGS FOR BUGS - GADAMANIPALLI RAJA SEKHAR.pdf";
// import pdfCert60 from "../../assets/web-certifications/HUGS FOR BUGS - KARUPOTHULA SHASHI KUMAR.pdf";
// import pdfCert61 from "../../assets/web-certifications/HUGS FOR BUGS - Kothuru Meghana.pdf";
// import pdfCert62 from "../../assets/web-certifications/Judgement Day - D Vinay.pdf";
// import pdfCert63 from "../../assets/web-certifications/Judgement Day - Konduru Pavan Sai Varma.pdf";
// import pdfCert64 from "../../assets/web-certifications/Judgement Day - VEMPALLI NAVEEN.pdf";
// import pdfCert65 from "../../assets/web-certifications/Judgement Day - Vemula Bala Sai Kumar.pdf";
// import pdfCert66 from "../../assets/web-certifications/Nexus - M.Kavya.pdf";
// import pdfCert67 from "../../assets/web-certifications/Nexus - M.Penchala Bhavana.pdf";
// import pdfCert68 from "../../assets/web-certifications/Novalocks - Katta Pushpanjali.pdf";
// import pdfCert69 from "../../assets/web-certifications/Novalocks - Paidipula charan.pdf";
// import pdfCert70 from "../../assets/web-certifications/PANCHKAVACH - MALLIBOYINA POOJA SRI.pdf";
// import pdfCert71 from "../../assets/web-certifications/Panchkavach - MARPURI LIKITHA.pdf";
// import pdfCert72 from "../../assets/web-certifications/PANCHKAVACH - Mekala Pavithra.pdf";
// import pdfCert73 from "../../assets/web-certifications/PANCHKAVACH - Mukkamalla Venkata Bhavana.pdf";
// import pdfCert74 from "../../assets/web-certifications/PANCHKAVACH - Nimmala Sravanthi.pdf";
// import pdfCert75 from "../../assets/web-certifications/Phoenix  - Purru Tulasi.pdf";
// import pdfCert76 from "../../assets/web-certifications/Shanthi - Earomchetty Harshitha.pdf";
// import pdfCert77 from "../../assets/web-certifications/Soft tech - BANDA VIJAY KUMAR.pdf";
// import pdfCert78 from "../../assets/web-certifications/Soft tech - Jaswanth kumar Mamilla.pdf";
// import pdfCert79 from "../../assets/web-certifications/Soft tech - Kalakada Poojitha.pdf";
// import pdfCert80 from "../../assets/web-certifications/Soft tech - Y Durga Venkata Deepak.pdf";
// import pdfCert81 from "../../assets/web-certifications/Soft Tech - Yagateela Suneel.pdf";
// import pdfCert82 from "../../assets/web-certifications/Soft Teech - MOPURI YASWANTH.pdf";
// import pdfCert83 from "../../assets/web-certifications/Strange Thinkers  - Chillakuru pardha saradhi.pdf";
// import pdfCert84 from "../../assets/web-certifications/Strange Thinkers - POTLA CHAITANYA.pdf";
// import pdfCert85 from "../../assets/web-certifications/Strange Thinkers - Sayed Yasin.pdf";
// import pdfCert86 from "../../assets/web-certifications/Strange Thinkers - Shaik Aisha.pdf";
// import pdfCert87 from "../../assets/web-certifications/Stranger Thinkers - YOGISH PASUPULETI.pdf";
// import pdfCert88 from "../../assets/web-certifications/Team anonymous  - Bukkasamudram Surya Vardhan Reddy.pdf";
// import pdfCert89 from "../../assets/web-certifications/Team anonymous  - Golla Vinod Kumar.pdf";
// import pdfCert90 from "../../assets/web-certifications/Team Asphalt  - Shaik.AsifAzeem.pdf";
// import pdfCert91 from "../../assets/web-certifications/Team asphalt  - Sk.shabber.pdf";
// import pdfCert92 from "../../assets/web-certifications/Team Asphalt - SG.Vardhan Vikranth Reddy.pdf";
// import pdfCert93 from "../../assets/web-certifications/Team Asphalt - Shaik .Imran Hashmi.pdf";
// import pdfCert94 from "../../assets/web-certifications/Tech Titans - Balaji Rupasri.pdf";
// import pdfCert95 from "../../assets/web-certifications/TECH TITANS - BALASA CHENCHU AALAYA.pdf";
// import pdfCert96 from "../../assets/web-certifications/TECH TITANS - ETLAM CHASVITHA REDDY.pdf";
// import pdfCert97 from "../../assets/web-certifications/Tech Titans - JEELA EESHA.pdf";
// import pdfCert98 from "../../assets/web-certifications/Tech Titans - KANUPURU BRUNDA.pdf";
// import pdfCert99 from "../../assets/web-certifications/TECH TITANS - Pandi vamsi.pdf";
// import pdfCert100 from "../../assets/web-certifications/Tech titans - SHAIK ARSHIYA TAJ.pdf";
// import pdfCert101 from "../../assets/web-certifications/TECH TITANS - VANDAVASI DILEEO.pdf";
// import pdfCert102 from "../../assets/web-certifications/Tech web  - Pujitha Lingala.pdf";
// import pdfCert103 from "../../assets/web-certifications/Tech web - CHITTEM KAMESWARI APARNA.pdf";
// import pdfCert104 from "../../assets/web-certifications/Tech web - Enapati keerthi.pdf";
// import pdfCert105 from "../../assets/web-certifications/TechSquad  - Motupalli Chandana.pdf";
// import pdfCert106 from "../../assets/web-certifications/TechSquad - Peddakkagari Shalini.pdf";
// import pdfCert107 from "../../assets/web-certifications/TechSquad - Ramagiri Neha.pdf";
// import pdfCert108 from "../../assets/web-certifications/Teen Titans  - Adeppagari Pallavi.pdf";
// import pdfCert109 from "../../assets/web-certifications/Teen Titans  - Cheemala Supriya.pdf";
// import pdfCert110 from "../../assets/web-certifications/Teen Titans  - Siri Ankitha.pdf";
// import pdfCert111 from "../../assets/web-certifications/Teen Titans  - SUJITHA BHARATHALA.pdf";
// import pdfCert112 from "../../assets/web-certifications/Teen Titans - Chennareddy Varshitha.pdf";
// import pdfCert113 from "../../assets/web-certifications/THE QUAD 4 - Tejasvi Pakala.pdf";
// import pdfCert114 from "../../assets/web-certifications/TWEAK - Shaik Imran.pdf";
// import pdfCert115 from "../../assets/web-certifications/TWEAK - SRIPURAM GUNASEKHAR.pdf";
// import pdfCert116 from "../../assets/web-certifications/Visioneers  - Kavadi Tejasri.pdf";
// import pdfCert117 from "../../assets/web-certifications/Visioneers  - Kurugodu Sushma.pdf";
// import pdfCert118 from "../../assets/web-certifications/Visioneers - Kalavagunta Monisha.pdf";
// import pdfCert119 from "../../assets/web-certifications/Visioneers - Krishnan Mounika.pdf";
// import pdfCert120 from "../../assets/web-certifications/Visioneers - Nandi Mangalam Geervani.pdf";
// import pdfCert121 from "../../assets/web-certifications/Web Dev - K.Charith.pdf";
// import pdfCert122 from "../../assets/web-certifications/WEB DEV - S L KESAVAANANDA.pdf";
// import pdfCert123 from "../../assets/web-certifications/Web dev - Tatigunta Chasanth Reddy.pdf";
// import pdfCert124 from "../../assets/web-certifications/Web Dev - Thathappagari Hemanth.pdf";
// import pdfCert125 from "../../assets/web-certifications/Web dev - veeraballi karthik kumar reddy.pdf";
// import pdfCert126 from "../../assets/web-certifications/Web Masters  - Kunchala Lahari.pdf";
// import pdfCert127 from "../../assets/web-certifications/Web masters  - S HEMACHANDRIKA.pdf";
// import pdfCert128 from "../../assets/web-certifications/Web Masters - Budensab Sameera.pdf";
// import pdfCert129 from "../../assets/web-certifications/Web Masters - Gagguturu Harshiya.pdf";
// import pdfCert130 from "../../assets/web-certifications/Web Titans  - Bramhanapalli Mohitha.pdf";
// import pdfCert131 from "../../assets/web-certifications/Web Titans  - Busannagari Savarni.pdf";
// import pdfCert132 from "../../assets/web-certifications/Web Titans - Bogineni Srikekha.pdf";
// import pdfCert133 from "../../assets/web-certifications/Web Titans - Chendilikumar kavya.pdf";
// import pdfCert134 from "../../assets/web-certifications/Web Trio  - Panabakam Devi.pdf";
// import pdfCert135 from "../../assets/web-certifications/Web Trio - Kavali Pravallika.pdf";
// import pdfCert136 from "../../assets/web-certifications/Web Trio - Peram.Akhila.pdf";
// import pdfCert137 from "../../assets/web-certifications/Web Trio - Thanusha peneti.pdf";
// import pdfCert138 from "../../assets/web-certifications/Web Warriors  - Chinnam Maheswari.pdf";
// import pdfCert139 from "../../assets/web-certifications/Web Warriors  - CHITTEPU GNANITHA REDDY.pdf";
// import pdfCert140 from "../../assets/web-certifications/Web Warriors  - CHITTETI SWATHI.pdf";
// import pdfCert141 from "../../assets/web-certifications/Web Warriors  - Gajjala Yaminipriya.pdf";
// import pdfCert142 from "../../assets/web-certifications/Web Warriors  - Gundluru Chandrika Sravanthi.pdf";
// import pdfCert143 from "../../assets/web-certifications/XTron - Dama Charan.pdf";
// import pdfCert144 from "../../assets/web-certifications/XTron - G NANDHEESWAR REDDY.pdf";
// import pdfCert145 from "../../assets/web-certifications/XTron - G REDDY CHARAN.pdf";
// import pdfCert146 from "../../assets/web-certifications/XTron - K.Madhukar Reddy.pdf";
// import pdfCert147 from "../../assets/web-certifications/XTron - P.L.Deepak.pdf";
// import pdfCert148 from "../../assets/web-certifications/Yuva Teja - DONDETI MONIKA.pdf";
// import pdfCert149 from "../../assets/web-certifications/Yuva Teja - G POOJITHA.pdf";
// import pdfCert150 from "../../assets/web-certifications/Yuva Teja - Shanthi Geepalem.pdf";
// import pdfCert151 from "../../assets/web-certifications/Yuvateja - P.yuvateja.pdf";

// import pdfCert152 from "../../assets/uiux-certifications/The Coders - GAYATHRI SYAMANABOYINA.pdf";
// import pdfCert153 from "../../assets/uiux-certifications/The coders - Vijayalakshmi Anala.pdf";
// import pdfCert154 from "../../assets/uiux-certifications/The Debuggers - A. V. Preethi.pdf";
// import pdfCert155 from "../../assets/uiux-certifications/The Debuggers - B. Veera Tejaswini.pdf";
// import pdfCert156 from "../../assets/uiux-certifications/The Debuggers - B.pallavi.pdf";
// import pdfCert157 from "../../assets/uiux-certifications/The Debuggers - Karnati Jahnavi.pdf";
// import pdfCert158 from "../../assets/uiux-certifications/UI_UX visioners - Chukka Reddy Anusha.pdf";
// import pdfCert159 from "../../assets/uiux-certifications/UI_UX visioners - Harika Duddela.pdf";
// import pdfCert160 from "../../assets/uiux-certifications/UI_UX visioners - J.sravanthi.pdf";
// import pdfCert161 from "../../assets/uiux-certifications/UX3 - Aylam Rachana Sree.pdf";
// import pdfCert162 from "../../assets/uiux-certifications/UX3 - NEELI MUNI PREETHIKA.pdf";
// import pdfCert163 from "../../assets/uiux-certifications/UX3 - S A sadiya thasneem.pdf";
// import pdfCert164 from "../../assets/uiux-certifications/UX3 - Takkelapati Abhinaya Chowdary.pdf";
// import pdfCert165 from "../../assets/uiux-certifications/Work on code - Othuri sowmya sree.pdf";
// import pdfCert166 from "../../assets/uiux-certifications/Work on design  - PENDEM DHARANI.pdf";
// import pdfCert167 from "../../assets/uiux-certifications/404 brain not found  - C NITHIN.pdf";
// import pdfCert168 from "../../assets/uiux-certifications/404 Brain Not Found - Kumkala Sai Yadav.pdf";
// import pdfCert169 from "../../assets/uiux-certifications/404 brain not found - Rokkam Som Sampreeth.pdf";
// import pdfCert170 from "../../assets/uiux-certifications/BLOOMING CODERS  - SYAMALA ACHYUTH KUMAR REDDY.pdf";
// import pdfCert171 from "../../assets/uiux-certifications/BLOOMING CODERS  - VIJAYARAJ SUDHARSHAN.pdf";
// import pdfCert172 from "../../assets/uiux-certifications/BLOOMING CODERS - VANKAYALA L N V V S KRISHNA RAO.pdf";
// import pdfCert173 from "../../assets/uiux-certifications/BLOOMING CODERS - Vegula Hamsini.pdf";
// import pdfCert174 from "../../assets/uiux-certifications/BLOOMING CODERS - VETTI VISHNU PRIYA.pdf";
// import pdfCert175 from "../../assets/uiux-certifications/Creative coders - Rushika Tanguturu.pdf";
// import pdfCert176 from "../../assets/uiux-certifications/Creative coders - Surineni likith.pdf";
// import pdfCert177 from "../../assets/uiux-certifications/Creative coders - T.Pavan Chaitra.pdf";
// import pdfCert178 from "../../assets/uiux-certifications/Dare Devils - Kovuru Rohith Karthik.pdf";
// import pdfCert179 from "../../assets/uiux-certifications/Design dynamo - M.Manasa.pdf";
// import pdfCert180 from "../../assets/uiux-certifications/Design dynamo - Makireddy Sowmya.pdf";
// import pdfCert181 from "../../assets/uiux-certifications/Design dynamo - PALLAVALI HEMA SREE.pdf";
// import pdfCert182 from "../../assets/uiux-certifications/Design dynamo - Swarna Pujitha.pdf";
// import pdfCert183 from "../../assets/uiux-certifications/Figma flow - Rohitha Chandhaluru.pdf";
// import pdfCert184 from "../../assets/uiux-certifications/Figma flow - Sandhya Sagala.pdf";
// import pdfCert185 from "../../assets/uiux-certifications/Figma flow - Shaik Muskan.pdf";
// import pdfCert186 from "../../assets/uiux-certifications/Figma flow - Thanguturi Dhakshayani.pdf";
// import pdfCert187 from "../../assets/uiux-certifications/Figma flow - Ulli Ganga Devi.pdf";
// import pdfCert188 from "../../assets/uiux-certifications/Hackers  - B Ashok Kumar Reddy.pdf";
// import pdfCert189 from "../../assets/uiux-certifications/Hackers - Harshith Nagipogu.pdf";
// import pdfCert190 from "../../assets/uiux-certifications/Talluru keerthana - Talluru Keerthana.pdf";
// import pdfCert191 from "../../assets/uiux-certifications/Tech Masters  - Velpula Lakshmi Nikitha.pdf";
// import pdfCert192 from "../../assets/uiux-certifications/Tech masters - K. Megana.pdf";
// import pdfCert193 from "../../assets/uiux-certifications/Tech masters - Pindi Vaishnavi.pdf";
// import pdfCert194 from "../../assets/uiux-certifications/The coders  - Polepalli Haritha.pdf";

// import pdfCert195 from "../../assets/powerbi-certifications/Bi Builders  - G.Hema Sree.pdf";
// import pdfCert196 from "../../assets/powerbi-certifications/Bi Builders  - GUMMIDI SWETHA .pdf";
// import pdfCert197 from "../../assets/powerbi-certifications/BI Builders - Bijivemula Pavani.pdf";
// import pdfCert198 from "../../assets/powerbi-certifications/Bi builders - Gilaka Balaji.pdf";
// import pdfCert199 from "../../assets/powerbi-certifications/Code crunchers  - Devarakonda Prasuna .pdf";
// import pdfCert200 from "../../assets/powerbi-certifications/Code crunchers - Appani Rajya Lakshmi .pdf";
// import pdfCert201 from "../../assets/powerbi-certifications/Code crunchers - K.Reddylokesh.pdf";
// import pdfCert202 from "../../assets/powerbi-certifications/Code Crunches - Saranya Ettikuppam .pdf";
// import pdfCert203 from "../../assets/powerbi-certifications/Hackstreet Boys  - KUMMITHA HAREESH.pdf";
// import pdfCert204 from "../../assets/powerbi-certifications/Hackstreet Boys - GUTHA RAMAKRISHNA .pdf";
// import pdfCert205 from "../../assets/powerbi-certifications/Rebort rebels - Karanam Sreenivasulu .pdf";
// import pdfCert206 from "../../assets/powerbi-certifications/Rebot rebels - S Guru Sainath Reddy.pdf";
// import pdfCert207 from "../../assets/powerbi-certifications/Robot rebels - Nandyala Naveen Kumar Reddy .pdf";
// import pdfCert208 from "../../assets/powerbi-certifications/Team Akatsuki - Rohith Dega .pdf";
// import pdfCert209 from "../../assets/powerbi-certifications/Team Akatsuki - Shaik Tazeem .pdf";
// import pdfCert210 from "../../assets/powerbi-certifications/Team Hackathon  - PALEM MONISHA .pdf";
// import pdfCert211 from "../../assets/powerbi-certifications/Team Hackathon  - PALEM THEJASREE .pdf";
// import pdfCert212 from "../../assets/powerbi-certifications/Team Hackathon  - PAMURU BHAGYA SREE .pdf";
// import pdfCert213 from "../../assets/powerbi-certifications/Team Hackathon - PUTTUR MOUNIKA .pdf";

// const Certifications = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const fileInputRef = useRef(null);

//   const certificates = [
//     {
//       id: 1,
//       name: "Satambeti. Chandu",
//       team: "Asphalt",
//       project: "Web Development",
//       filename: pdfCert01,
//     },
//     {
//       id: 2,
//       name: "Gavve Sravani",
//       team: "Avengers",
//       project: "Web Development",
//       filename: pdfCert02,
//     },
//     {
//       id: 3,
//       name: "K V Supriya",
//       team: "Avengers",
//       project: "Web Development",
//       filename: pdfCert03,
//     },
//     {
//       id: 4,
//       name: "SINGAREDDYGARI SWATHI",
//       team: "Avengers",
//       project: "Web Development",
//       filename: pdfCert04,
//     },
//     {
//       id: 5,
//       name: "Javvaji Meghana",
//       team: "Avengers",
//       project: "Web Development",
//       filename: pdfCert05,
//     },
//     {
//       id: 6,
//       name: "BANDI DURGA BHAVANI",
//       team: "Code a-lot",
//       project: "Web Development",
//       filename: pdfCert06,
//     },
//     {
//       id: 7,
//       name: "KANALA SIREESHA",
//       team: "Code a-lot",
//       project: "Web Development",
//       filename: pdfCert07,
//     },
//     {
//       id: 8,
//       name: "TALLURI HARSHITHA",
//       team: "Code a-lot",
//       project: "Web Development",
//       filename: pdfCert08,
//     },
//     {
//       id: 9,
//       name: "M.Sushma Swaraj",
//       team: "Code crafters",
//       project: "Web Development",
//       filename: pdfCert09,
//     },
//     {
//       id: 10,
//       name: "P.Bhanu Prakash Reddy",
//       team: "Code crafters",
//       project: "Web Development",
//       filename: pdfCert10,
//     },
//     {
//       id: 11,
//       name: "Polisetty Abitha",
//       team: "Code crafters",
//       project: "Web Development",
//       filename: pdfCert11,
//     },
//     {
//       id: 12,
//       name: "Rallapalli Thulasi",
//       team: "Code crafters",
//       project: "Web Development",
//       filename: pdfCert12,
//     },
//     {
//       id: 13,
//       name: "Kaitha Teja Sri",
//       team: "Code Crew",
//       project: "Web Development",
//       filename: pdfCert13,
//     },
//     {
//       id: 14,
//       name: "Likhitha Posa",
//       team: "Code Crew",
//       project: "Web Development",
//       filename: pdfCert14,
//     },
//     {
//       id: 15,
//       name: "Ramagowni Mokshitha",
//       team: "Code Crew",
//       project: "Web Development",
//       filename: pdfCert15,
//     },
//     {
//       id: 16,
//       name: "Sadaala deepthi",
//       team: "Code Crew",
//       project: "Web Development",
//       filename: pdfCert16,
//     },
//     {
//       id: 17,
//       name: "Thanikonda Sai Manvitha",
//       team: "Code Crew",
//       project: "Web Development",
//       filename: pdfCert17,
//     },
//     {
//       id: 18,
//       name: "Alluru Ramya",
//       team: "Code Ninjas",
//       project: "Web Development",
//       filename: pdfCert18,
//     },
//     {
//       id: 19,
//       name: "Gownipalli Harshitha",
//       team: "Code ninjas",
//       project: "Web Development",
//       filename: pdfCert19,
//     },
//     {
//       id: 20,
//       name: "Perrala Akhila",
//       team: "Code ninjas",
//       project: "Web Development",
//       filename: pdfCert20,
//     },
//     {
//       id: 21,
//       name: "Ponneri Manasa",
//       team: "Code Ninjas",
//       project: "Web Development",
//       filename: pdfCert21,
//     },
//     {
//       id: 22,
//       name: "Puthuru Samatha",
//       team: "Code Ninjas",
//       project: "Web Development",
//       filename: pdfCert22,
//     },
//     {
//       id: 23,
//       name: "Kuppireddy Nikhil",
//       team: "Code pirates",
//       project: "Web Development",
//       filename: pdfCert23,
//     },
//     {
//       id: 24,
//       name: "N. Lakshmi prasanna",
//       team: "Code pirates",
//       project: "Web Development",
//       filename: pdfCert24,
//     },
//     {
//       id: 25,
//       name: "M.Harsha Vardan Reddy",
//       team: "Code pirates",
//       project: "Web Development",
//       filename: pdfCert25,
//     },
//     {
//       id: 26,
//       name: "S A Muskaan",
//       team: "Code pirates",
//       project: "Web Development",
//       filename: pdfCert26,
//     },
//     {
//       id: 27,
//       name: "S. Bhavana",
//       team: "Code sisters",
//       project: "Web Development",
//       filename: pdfCert27,
//     },
//     {
//       id: 28,
//       name: "Kavya Penumadu",
//       team: "Code sisters",
//       project: "Web Development",
//       filename: pdfCert28,
//     },
//     {
//       id: 29,
//       name: "Putturu senthilkumar vedeshwari",
//       team: "Code sisters",
//       project: "Web Development",
//       filename: pdfCert29,
//     },
//     {
//       id: 30,
//       name: "Sankarapu Navya",
//       team: "Code sisters",
//       project: "Web Development",
//       filename: pdfCert30,
//     },
//     {
//       id: 31,
//       name: "Amruthala Surya",
//       team: "Code trio",
//       project: "Web Development",
//       filename: pdfCert31,
//     },
//     {
//       id: 32,
//       name: "R.Thimme Gowd",
//       team: "Code trio",
//       project: "Web Development",
//       filename: pdfCert32,
//     },
//     {
//       id: 33,
//       name: "Shaik imam khasim",
//       team: "Code trio",
//       project: "Web Development",
//       filename: pdfCert33,
//     },
//     {
//       id: 34,
//       name: "Katari Tharun Teja",
//       team: "Codsters",
//       project: "Web Development",
//       filename: pdfCert34,
//     },
//     {
//       id: 35,
//       name: "Aasrita Reddy C",
//       team: "Codsters",
//       project: "Web Development",
//       filename: pdfCert35,
//     },
//     {
//       id: 36,
//       name: "Chalamalla hemanth Chowdary",
//       team: "Codsters",
//       project: "Web Development",
//       filename: pdfCert36,
//     },
//     {
//       id: 37,
//       name: "GADDAM HEMANTH",
//       team: "Codsters",
//       project: "Web Development",
//       filename: pdfCert37,
//     },
//     {
//       id: 38,
//       name: "Kolleti varshini",
//       team: "Codsters",
//       project: "Web Development",
//       filename: pdfCert38,
//     },
//     {
//       id: 39,
//       name: "G.Anurag Harshith",
//       team: "Dare Devils",
//       project: "Web Development",
//       filename: pdfCert39,
//     },
//     {
//       id: 40,
//       name: "Tadakara Dinesh",
//       team: "Dare Devils",
//       project: "Web Development",
//       filename: pdfCert40,
//     },
//     {
//       id: 41,
//       name: "M K Tharun Sai",
//       team: "DareDevils",
//       project: "Web Development",
//       filename: pdfCert41,
//     },
//     {
//       id: 42,
//       name: "P.Amrutha",
//       team: "DIGITAL DYNAMITES",
//       project: "Web Development",
//       filename: pdfCert42,
//     },
//     {
//       id: 43,
//       name: "Y.Y.Nandini Vardhan Reddy",
//       team: "DIGITAL DYNAMITES",
//       project: "Web Development",
//       filename: pdfCert43,
//     },
//     {
//       id: 44,
//       name: "YALLANURU REVANTH KUMAR",
//       team: "DIGITAL DYNAMITES",
//       project: "Web Development",
//       filename: pdfCert44,
//     },
//     {
//       id: 45,
//       name: "Shaik Afrin",
//       team: "DIGITAL DYNAMITES",
//       project: "Web Development",
//       filename: pdfCert45,
//     },
//     {
//       id: 46,
//       name: "K Sai",
//       team: "Front End Force",
//       project: "Web Development",
//       filename: pdfCert46,
//     },
//     {
//       id: 47,
//       name: "K P Mohitha",
//       team: "Front-End Force",
//       project: "Web Development",
//       filename: pdfCert47,
//     },
//     {
//       id: 48,
//       name: "Pillapalem Tejaswi",
//       team: "Hack&Learn@os",
//       project: "Web Development",
//       filename: pdfCert48,
//     },
//     {
//       id: 49,
//       name: "Gayathri Appalredd",
//       team: "Hackaholics",
//       project: "Web Development",
//       filename: pdfCert49,
//     },
//     {
//       id: 50,
//       name: "Akepati Devasena",
//       team: "Hackaholics",
//       project: "Web Development",
//       filename: pdfCert50,
//     },
//     {
//       id: 51,
//       name: "Syed aisha Sidhiqua",
//       team: "Hackaholics",
//       project: "Web Development",
//       filename: pdfCert51,
//     },
//     {
//       id: 52,
//       name: "K Mahamood Ajad",
//       team: "Hackathon Makers",
//       project: "Web Development",
//       filename: pdfCert52,
//     },
//     {
//       id: 53,
//       name: "P.Jayanth kumar",
//       team: "Hackathon Makers",
//       project: "Web Development",
//       filename: pdfCert53,
//     },
//     {
//       id: 54,
//       name: "S USHA SAI IKITHA REDDY",
//       team: "Hackathon Makers",
//       project: "Web Development",
//       filename: pdfCert54,
//     },
//     {
//       id: 55,
//       name: "Samanthu Harini",
//       team: "Hackathon Makers",
//       project: "Web Development",
//       filename: pdfCert55,
//     },
//     {
//       id: 56,
//       name: "Sure Bindhu",
//       team: "Hackathon Makers",
//       project: "Web Development",
//       filename: pdfCert56,
//     },
//     {
//       id: 57,
//       name: "Edagotti Kishore",
//       team: "HUGS FOR BUGS",
//       project: "Web Development",
//       filename: pdfCert57,
//     },
//     {
//       id: 58,
//       name: "G R DIVYA SREE",
//       team: "HUGS FOR BUGS",
//       project: "Web Development",
//       filename: pdfCert58,
//     },
//     {
//       id: 59,
//       name: "GADAMANIPALLI RAJA SEKHAR",
//       team: "HUGS FOR BUGS",
//       project: "Web Development",
//       filename: pdfCert59,
//     },
//     {
//       id: 60,
//       name: "KARUPOTHULA SHASHI KUMAR",
//       team: "HUGS FOR BUGS",
//       project: "Web Development",
//       filename: pdfCert60,
//     },
//     {
//       id: 61,
//       name: "Kothuru Meghana",
//       team: "HUGS FOR BUGS",
//       project: "Web Development",
//       filename: pdfCert61,
//     },
//     {
//       id: 62,
//       name: "D Vinay",
//       team: "Judgement Day",
//       project: "Web Development",
//       filename: pdfCert62,
//     },
//     {
//       id: 63,
//       name: "Konduru Pavan Sai Varma",
//       team: "Judgement Day",
//       project: "Web Development",
//       filename: pdfCert63,
//     },
//     {
//       id: 64,
//       name: "VEMPALLI NAVEEN",
//       team: "Judgement Day",
//       project: "Web Development",
//       filename: pdfCert64,
//     },
//     {
//       id: 65,
//       name: "Vemula Bala Sai Kumar",
//       team: "Judgement Day",
//       project: "Web Development",
//       filename: pdfCert65,
//     },
//     {
//       id: 66,
//       name: "M.Kavya",
//       team: "Nexus",
//       project: "Web Development",
//       filename: pdfCert66,
//     },
//     {
//       id: 67,
//       name: "M.Penchala Bhavana",
//       team: "Nexus",
//       project: "Web Development",
//       filename: pdfCert67,
//     },
//     {
//       id: 68,
//       name: "Akula Pushapanjali",
//       team: "Novalocks",
//       project: "Web Development",
//       filename: pdfCert68,
//     },
//     {
//       id: 69,
//       name: "Paidipula charan",
//       team: "Novalocks",
//       project: "Web Development",
//       filename: pdfCert69,
//     },
//     {
//       id: 70,
//       name: "MALLIBOYINA POOJA SRI",
//       team: "PANCHKAVACH",
//       project: "Web Development",
//       filename: pdfCert70,
//     },
//     {
//       id: 71,
//       name: "MARPURI LIKITHA",
//       team: "Panchkavach",
//       project: "Web Development",
//       filename: pdfCert71,
//     },
//     {
//       id: 72,
//       name: "Mekala Pavithra",
//       team: "PANCHKAVACH",
//       project: "Web Development",
//       filename: pdfCert72,
//     },
//     {
//       id: 73,
//       name: "Mukkamalla Venkata Bhavana",
//       team: "PANCHKAVACH",
//       project: "Web Development",
//       filename: pdfCert73,
//     },
//     {
//       id: 74,
//       name: "Nimmala Sravanthi",
//       team: "PANCHKAVACH",
//       project: "Web Development",
//       filename: pdfCert74,
//     },
//     {
//       id: 75,
//       name: "Purru Tulasi",
//       team: "Phoenix",
//       project: "Web Development",
//       filename: pdfCert75,
//     },
//     {
//       id: 76,
//       name: "Earomchetty Harshitha",
//       team: "Shanthi",
//       project: "Web Development",
//       filename: pdfCert76,
//     },
//     {
//       id: 77,
//       name: "BANDA VIJAY KUMAR",
//       team: "Soft tech",
//       project: "Web Development",
//       filename: pdfCert77,
//     },
//     {
//       id: 78,
//       name: "Jaswanth Kumar Mamilla",
//       team: "Soft tech",
//       project: "Web Development",
//       filename: pdfCert78,
//     },
//     {
//       id: 79,
//       name: "Kalakada Poojitha",
//       team: "Soft tech",
//       project: "Web Development",
//       filename: pdfCert79,
//     },
//     {
//       id: 80,
//       name: "Y Durga Venkata Deepak",
//       team: "Soft tech",
//       project: "Web Development",
//       filename: pdfCert80,
//     },
//     {
//       id: 81,
//       name: "Yagateela Suneel",
//       team: "Soft Tech",
//       project: "Web Development",
//       filename: pdfCert81,
//     },
//     {
//       id: 82,
//       name: "MOPURI YASWANTH",
//       team: "Soft Teech",
//       project: "Web Development",
//       filename: pdfCert82,
//     },
//     {
//       id: 83,
//       name: "Chillakuru pardha saradhi",
//       team: "Strange Thinkers",
//       project: "Web Development",
//       filename: pdfCert83,
//     },
//     {
//       id: 84,
//       name: "POTLA CHAITANYA",
//       team: "Strange Thinkers",
//       project: "Web Development",
//       filename: pdfCert84,
//     },
//     {
//       id: 85,
//       name: "Sayed Yasin",
//       team: "Strange Thinkers",
//       project: "Web Development",
//       filename: pdfCert85,
//     },
//     {
//       id: 86,
//       name: "Shaik Aisha",
//       team: "Strange Thinkers",
//       project: "Web Development",
//       filename: pdfCert86,
//     },
//     {
//       id: 87,
//       name: "YOGISH PASUPULETI",
//       team: "Stranger Thinkers",
//       project: "Web Development",
//       filename: pdfCert87,
//     },
//     {
//       id: 88,
//       name: "Bukkasamudram Surya Vardhan Reddy",
//       team: "Team anonymous",
//       project: "Web Development",
//       filename: pdfCert88,
//     },
//     {
//       id: 89,
//       name: "Golla Vinod Kumar",
//       team: "Team anonymous",
//       project: "Web Development",
//       filename: pdfCert89,
//     },
//     {
//       id: 90,
//       name: "Shaik.AsifAzeem",
//       team: "Team Asphalt",
//       project: "Web Development",
//       filename: pdfCert90,
//     },
//     {
//       id: 91,
//       name: "Sk.shabber",
//       team: "Team asphalt",
//       project: "Web Development",
//       filename: pdfCert91,
//     },
//     {
//       id: 92,
//       name: "SG.Vardhan Vikranth Reddy",
//       team: "Team Asphalt",
//       project: "Web Development",
//       filename: pdfCert92,
//     },
//     {
//       id: 93,
//       name: "Shaik imran Hashimi",
//       team: "Team Asphalt",
//       project: "Web Development",
//       filename: pdfCert93,
//     },
//     {
//       id: 94,
//       name: "Balaji Rupasri",
//       team: "Tech Titans",
//       project: "Web Development",
//       filename: pdfCert94,
//     },
//     {
//       id: 95,
//       name: "BALASA CHENCHU AALAYA",
//       team: "TECH TITANS",
//       project: "Web Development",
//       filename: pdfCert95,
//     },
//     {
//       id: 96,
//       name: "ETLAM CHASVITHA REDDY",
//       team: "TECH TITANS",
//       project: "Web Development",
//       filename: pdfCert96,
//     },
//     {
//       id: 97,
//       name: "JEELA EESHA",
//       team: "Tech Titans",
//       project: "Web Development",
//       filename: pdfCert97,
//     },
//     {
//       id: 98,
//       name: "KANUPURU BRUNDA",
//       team: "TECH TITANS",
//       project: "Web Development",
//       filename: pdfCert98,
//     },
//     {
//       id: 99,
//       name: "Pandi vamsi",
//       team: "Tech Titans",
//       project: "Web Development",
//       filename: pdfCert99,
//     },
//     {
//       id: 100,
//       name: "SHAIK ARSHIYA TAJ",
//       team: "Tech titans",
//       project: "Web Development",
//       filename: pdfCert100,
//     },
//     {
//       id: 101,
//       name: "VANDAVASI DILEEQ",
//       team: "TECH TITANS",
//       project: "Web Development",
//       filename: pdfCert101,
//     },
//     {
//       id: 102,
//       name: "Pujitha Lingala",
//       team: "Tech web",
//       project: "Web Development",
//       filename: pdfCert102,
//     },
//     {
//       id: 103,
//       name: "CHITTEM KAMESWARI APARNA",
//       team: "Tech web",
//       project: "Web Development",
//       filename: pdfCert103,
//     },
//     {
//       id: 104,
//       name: "Enapati keerthi",
//       team: "Tech web",
//       project: "Web Development",
//       filename: pdfCert104,
//     },
//     {
//       id: 105,
//       name: "Motupalli Chandana",
//       team: "TechSquad",
//       project: "Web Development",
//       filename: pdfCert105,
//     },
//     {
//       id: 106,
//       name: "Peddakalgan Shalini",
//       team: "TechSquad",
//       project: "Web Development",
//       filename: pdfCert106,
//     },
//     {
//       id: 107,
//       name: "Ramagiri Neha",
//       team: "TechSquad",
//       project: "Web Development",
//       filename: pdfCert107,
//     },
//     {
//       id: 108,
//       name: "Adeppagari Pallavi",
//       team: "Teen Titans",
//       project: "Web Development",
//       filename: pdfCert108,
//     },
//     {
//       id: 109,
//       name: "Cheemala Supriya",
//       team: "Teen Titans",
//       project: "Web Development",
//       filename: pdfCert109,
//     },
//     {
//       id: 110,
//       name: "Siri Ankitha",
//       team: "Teen Titans",
//       project: "Web Development",
//       filename: pdfCert110,
//     },
//     {
//       id: 111,
//       name: "SUJITHA BHARATHALA",
//       team: "Teen Titans",
//       project: "Web Development",
//       filename: pdfCert111,
//     },
//     {
//       id: 112,
//       name: "Chennareddy Swetha",
//       team: "Teen Titans",
//       project: "Web Development",
//       filename: pdfCert112,
//     },
//     {
//       id: 113,
//       name: "Tejasvi Pakala",
//       team: "THE QUAD 4",
//       project: "Web Development",
//       filename: pdfCert113,
//     },
//     {
//       id: 114,
//       name: "Shaik Imran",
//       team: "TWEAK",
//       project: "Web Development",
//       filename: pdfCert114,
//     },
//     {
//       id: 115,
//       name: "SRIPURAM GUNASEKHAR",
//       team: "TWEAK",
//       project: "Web Development",
//       filename: pdfCert115,
//     },
//     {
//       id: 116,
//       name: "Kavadi Tejasri",
//       team: "Visioneers",
//       project: "Web Development",
//       filename: pdfCert116,
//     },
//     {
//       id: 117,
//       name: "Kurugodu Sushma",
//       team: "Visioneers",
//       project: "Web Development",
//       filename: pdfCert117,
//     },
//     {
//       id: 118,
//       name: "Kalavagunta Monisha",
//       team: "Visioneers",
//       project: "Web Development",
//       filename: pdfCert118,
//     },
//     {
//       id: 119,
//       name: "Krishnan Mounika",
//       team: "Visioneers",
//       project: "Web Development",
//       filename: pdfCert119,
//     },
//     {
//       id: 120,
//       name: "Nandi Mangalam Geerani",
//       team: "Visioneers",
//       project: "Web Development",
//       filename: pdfCert120,
//     },
//     {
//       id: 121,
//       name: "K.Charith",
//       team: "Web Dev",
//       project: "Web Development",
//       filename: pdfCert121,
//     },
//     {
//       id: 122,
//       name: "S L KESAVAANANDA",
//       team: "WEB DEV",
//       project: "Web Development",
//       filename: pdfCert122,
//     },
//     {
//       id: 123,
//       name: "Tatigunta Chasanth Reddy",
//       team: "Web Dev",
//       project: "Web Development",
//       filename: pdfCert123,
//     },
//     {
//       id: 124,
//       name: "Thathappagari Hemanth",
//       team: "Web Dev",
//       project: "Web Development",
//       filename: pdfCert124,
//     },
//     {
//       id: 125,
//       name: "veeraballi karthik kumar reddy",
//       team: "Web dev",
//       project: "Web Development",
//       filename: pdfCert125,
//     },
//     {
//       id: 126,
//       name: "Kunchala Lahari",
//       team: "Web Masters",
//       project: "Web Development",
//       filename: pdfCert126,
//     },
//     {
//       id: 127,
//       name: "S HEMACHANDRIKA",
//       team: "Web masters",
//       project: "Web Development",
//       filename: pdfCert127,
//     },
//     {
//       id: 128,
//       name: "Budensab Sameera",
//       team: "Web Masters",
//       project: "Web Development",
//       filename: pdfCert128,
//     },
//     {
//       id: 129,
//       name: "Gagguturu Harshiya",
//       team: "Web Masters",
//       project: "Web Development",
//       filename: pdfCert129,
//     },
//     {
//       id: 130,
//       name: "Brahmanapalli Mohitha",
//       team: "Web Titans",
//       project: "Web Development",
//       filename: pdfCert130,
//     },
//     {
//       id: 131,
//       name: "Busannagari Savarni",
//       team: "Web Titans",
//       project: "Web Development",
//       filename: pdfCert131,
//     },
//     {
//       id: 132,
//       name: "Bogineni Srikekha",
//       team: "Web Titans",
//       project: "Web Development",
//       filename: pdfCert132,
//     },
//     {
//       id: 133,
//       name: "Chendilkumar kavya",
//       team: "Web Titans",
//       project: "Web Development",
//       filename: pdfCert133,
//     },
//     {
//       id: 134,
//       name: "Panabakam Devi",
//       team: "Web Trio",
//       project: "Web Development",
//       filename: pdfCert134,
//     },
//     {
//       id: 135,
//       name: "Kavali Pravallika",
//       team: "Web Trio",
//       project: "Web Development",
//       filename: pdfCert135,
//     },
//     {
//       id: 136,
//       name: "Peram.Akhila",
//       team: "Web Trio",
//       project: "Web Development",
//       filename: pdfCert136,
//     },
//     {
//       id: 137,
//       name: "Thanusha peneti",
//       team: "Web Trio",
//       project: "Web Development",
//       filename: pdfCert137,
//     },
//     {
//       id: 138,
//       name: "Chinnam Maheswari",
//       team: "Web Warriors",
//       project: "Web Development",
//       filename: pdfCert138,
//     },
//     {
//       id: 139,
//       name: "CHITTEPU GNANITHA REDDY",
//       team: "Web Warriors",
//       project: "Web Development",
//       filename: pdfCert139,
//     },
//     {
//       id: 140,
//       name: "CHITTETI SWATHI",
//       team: "Web Warriors",
//       project: "Web Development",
//       filename: pdfCert140,
//     },
//     {
//       id: 141,
//       name: "Gajjala Vaminipriya",
//       team: "Web Warriors",
//       project: "Web Development",
//       filename: pdfCert141,
//     },
//     {
//       id: 142,
//       name: "Gundluru Chandrika Sravanthi",
//       team: "Web Warriors",
//       project: "Web Development",
//       filename: pdfCert142,
//     },
//     {
//       id: 143,
//       name: "Dama Charan",
//       team: "XTron",
//       project: "Web Development",
//       filename: pdfCert143,
//     },
//     {
//       id: 144,
//       name: "G NANDHEESWAR REDDY",
//       team: "XTron",
//       project: "Web Development",
//       filename: pdfCert144,
//     },
//     {
//       id: 145,
//       name: "G REDDY CHARAN",
//       team: "XTron",
//       project: "Web Development",
//       filename: pdfCert145,
//     },
//     {
//       id: 146,
//       name: "K.Madhukar Reddy",
//       team: "XTron",
//       project: "Web Development",
//       filename: pdfCert146,
//     },
//     {
//       id: 147,
//       name: "P.L.Deepak",
//       team: "XTron",
//       project: "Web Development",
//       filename: pdfCert147,
//     },
//     {
//       id: 148,
//       name: "DONDETI MONIKA",
//       team: "Yuva Teja",
//       project: "Web Development",
//       filename: pdfCert148,
//     },
//     {
//       id: 149,
//       name: "G POOJITHA",
//       team: "Yuva Teja",
//       project: "Web Development",
//       filename: pdfCert149,
//     },
//     {
//       id: 150,
//       name: "Shanthi Geepalem",
//       team: "Yuva Teja",
//       project: "Web Development",
//       filename: pdfCert150,
//     },
//     {
//       id: 151,
//       name: "P.yuvateja",
//       team: "Yuvateja",
//       project: "Web Development",
//       filename: pdfCert151,
//     },
//     {
//       id: 152,
//       name: "GAYATHRI SYAMANABOYINA",
//       team: "The Coders",
//       project: "UI/UX Designing",
//       filename: pdfCert152,
//     },
//     {
//       id: 153,
//       name: "Vijayalakshmi Anala",
//       team: "The Coders",
//       project: "UI/UX Designing",
//       filename: pdfCert153,
//     },
//     {
//       id: 154,
//       name: "A.V. Preethi",
//       team: "The Coders",
//       project: "UI/UX Designing",
//       filename: pdfCert154,
//     },
//     {
//       id: 155,
//       name: "B. Veera Tejaswini",
//       team: "The Debuggers",
//       project: "UI/UX Designing",
//       filename: pdfCert155,
//     },
//     {
//       id: 156,
//       name: "B.pallavi",
//       team: "The Debuggers",
//       project: "UI/UX Designing",
//       filename: pdfCert156,
//     },
//     {
//       id: 157,
//       name: "Kamati Jahnavi",
//       team: "The Debuggers",
//       project: "UI/UX Designing",
//       filename: pdfCert157,
//     },
//     {
//       id: 158,
//       name: "Chukka Reddy Anusha",
//       team: "UI UX Visioners",
//       project: "UI/UX Designing",
//       filename: pdfCert158,
//     },
//     {
//       id: 159,
//       name: "Harika Duddela",
//       team: "UI UX Visioners",
//       project: "UI/UX Designing",
//       filename: pdfCert159,
//     },
//     {
//       id: 160,
//       name: "J.sravanthi",
//       team: "UI UX Visioners",
//       project: "UI/UX Designing",
//       filename: pdfCert160,
//     },
//     {
//       id: 161,
//       name: "Ayiam Rachana Sree",
//       team: "UX3",
//       project: "UI/UX Designing",
//       filename: pdfCert161,
//     },
//     {
//       id: 162,
//       name: "NEELI MUNI PREETIKA",
//       team: "UX3",
//       project: "UI/UX Designing",
//       filename: pdfCert162,
//     },
//     {
//       id: 163,
//       name: "S A sadiya thaneem",
//       team: "UX3",
//       project: "UI/UX Designing",
//       filename: pdfCert163,
//     },
//     {
//       id: 164,
//       name: "Takkelapati Abhinaya Chowdary",
//       team: "UX3",
//       project: "UI/UX Designing",
//       filename: pdfCert164,
//     },
//     {
//       id: 165,
//       name: "Churi gowmya sree",
//       team: "Work on code",
//       project: "UI/UX Designing",
//       filename: pdfCert165,
//     },
//     {
//       id: 166,
//       name: "PENDEM DHARANI",
//       team: "Work on design",
//       project: "UI/UX Designing",
//       filename: pdfCert166,
//     },
//     {
//       id: 167,
//       name: "C NITHIN",
//       team: "404 brain not found",
//       project: "UI/UX Designing",
//       filename: pdfCert167,
//     },
//     {
//       id: 168,
//       name: "Kumkala Sai Yadav",
//       team: "404 Brain Not Found",
//       project: "UI/UX Designing",
//       filename: pdfCert168,
//     },
//     {
//       id: 169,
//       name: "Rokkam Som Sampreeth",
//       team: "404 brain not found",
//       project: "UI/UX Designing",
//       filename: pdfCert169,
//     },
//     {
//       id: 170,
//       name: "SYAMALA ACHYUTH KUMAR REDDY",
//       team: "BLOOMING CODERS",
//       project: "UI/UX Designing",
//       filename: pdfCert170,
//     },
//     {
//       id: 171,
//       name: "VIJAYALA SUDHARSHAN",
//       team: "BLOOMING CODERS",
//       project: "UI/UX Designing",
//       filename: pdfCert171,
//     },
//     {
//       id: 172,
//       name: "VANKAYALA N V V S KRISHNA RAO",
//       team: "BLOOMING CODERS",
//       project: "UI/UX Designing",
//       filename: pdfCert172,
//     },
//     {
//       id: 173,
//       name: "Vegula Hemsini",
//       team: "BLOOMING CODERS",
//       project: "UI/UX Designing",
//       filename: pdfCert173,
//     },
//     {
//       id: 174,
//       name: "VETTI MOUNIKA",
//       team: "BLOOMING CODERS",
//       project: "UI/UX Designing",
//       filename: pdfCert174,
//     },
//     {
//       id: 175,
//       name: "Rushika Tanguturu",
//       team: "Creative coders",
//       project: "UI/UX Designing",
//       filename: pdfCert175,
//     },
//     {
//       id: 176,
//       name: "Surineni likith",
//       team: "Creative coders",
//       project: "UI/UX Designing",
//       filename: pdfCert176,
//     },
//     {
//       id: 177,
//       name: "T.Pavan Kumar",
//       team: "Creative coders",
//       project: "UI/UX Designing",
//       filename: pdfCert177,
//     },
//     {
//       id: 178,
//       name: "Kovuru Rohith Karthik",
//       team: "Dare Devils",
//       project: "UI/UX Designing",
//       filename: pdfCert178,
//     },
//     {
//       id: 179,
//       name: "M.Manasa",
//       team: "Design dynamo",
//       project: "UI/UX Designing",
//       filename: pdfCert179,
//     },
//     {
//       id: 180,
//       name: "Makireddy Sowmya",
//       team: "Design dynamo",
//       project: "UI/UX Designing",
//       filename: pdfCert180,
//     },
//     {
//       id: 181,
//       name: "PALLAVALI HEMA SREE",
//       team: "Design dynamo",
//       project: "UI/UX Designing",
//       filename: pdfCert181,
//     },
//     {
//       id: 182,
//       name: "Swarna Pujitha",
//       team: "Design dynamo",
//       project: "UI/UX Designing",
//       filename: pdfCert182,
//     },
//     {
//       id: 183,
//       name: "Rohitha Chuntupalli",
//       team: "Figma flow",
//       project: "UI/UX Designing",
//       filename: pdfCert183,
//     },
//     {
//       id: 184,
//       name: "Sandhya Sagala",
//       team: "Figma flow",
//       project: "UI/UX Designing",
//       filename: pdfCert184,
//     },
//     {
//       id: 185,
//       name: "Shaik Muskan",
//       team: "Figma flow",
//       project: "UI/UX Designing",
//       filename: pdfCert185,
//     },
//     {
//       id: 186,
//       name: "Thangulla Dhakshayani",
//       team: "Figma flow",
//       project: "UI/UX Designing",
//       filename: pdfCert186,
//     },
//     {
//       id: 187,
//       name: "Ulli Ganga Devi",
//       team: "Figma flow",
//       project: "UI/UX Designing",
//       filename: pdfCert187,
//     },
//     {
//       id: 188,
//       name: "B.Ashok Kumar Reddy",
//       team: "Hackers",
//       project: "UI/UX Designing",
//       filename: pdfCert188,
//     },
//     {
//       id: 189,
//       name: "Harshith Nagichetty",
//       team: "Hackers",
//       project: "UI/UX Designing",
//       filename: pdfCert189,
//     },
//     {
//       id: 190,
//       name: "Talluru Keerthana",
//       team: "Talluru keerthana",
//       project: "UI/UX Designing",
//       filename: pdfCert190,
//     },
//     {
//       id: 191,
//       name: "Velpula Lakshmi Nikitha",
//       team: "Tech Masters",
//       project: "UI/UX Designing",
//       filename: pdfCert191,
//     },
//     {
//       id: 192,
//       name: "K. Madhu priya",
//       team: "Tech masters",
//       project: "UI/UX Designing",
//       filename: pdfCert192,
//     },
//     {
//       id: 193,
//       name: "Pindi Vaishnavi",
//       team: "Tech masters",
//       project: "UI/UX Designing",
//       filename: pdfCert193,
//     },
//     {
//       id: 194,
//       name: "Polepalli Haritha",
//       team: "The coders",
//       project: "UI/UX Designing",
//       filename: pdfCert194,
//     },
//     {
//       id: 195,
//       name: "G.Hema Sree",
//       team: "Bi Builders",
//       project: "Power BI",
//       filename: pdfCert195,
//     },
//     {
//       id: 196,
//       name: "GUMMIDI SWETHA",
//       team: "Bi Builders",
//       project: "Power BI",
//       filename: pdfCert196,
//     },
//     {
//       id: 197,
//       name: "Bijiyenula Pavani",
//       team: "Bi Builders",
//       project: "Power BI",
//       filename: pdfCert197,
//     },
//     {
//       id: 198,
//       name: "Gilaka Balaji",
//       team: "Bi builders",
//       project: "Power BI",
//       filename: pdfCert198,
//     },
//     {
//       id: 199,
//       name: "Devarakonda Prasuna",
//       team: "Code crunchers",
//       project: "Power BI",
//       filename: pdfCert199,
//     },
//     {
//       id: 200,
//       name: "Appani Rajya Lakshmi",
//       team: "Code crunchers",
//       project: "Power BI",
//       filename: pdfCert200,
//     },
//     {
//       id: 201,
//       name: "K.Reddylokesh",
//       team: "Code crunchers",
//       project: "Power BI",
//       filename: pdfCert201,
//     },
//     {
//       id: 202,
//       name: "Sarama Archana",
//       team: "Code Crunches",
//       project: "Power BI",
//       filename: pdfCert202,
//     },
//     {
//       id: 203,
//       name: "KUMMITHA HAREESH",
//       team: "Hackstreet Boys",
//       project: "Power BI",
//       filename: pdfCert203,
//     },
//     {
//       id: 204,
//       name: "GUTHA RAMAKRISHNA",
//       team: "Hackstreet Boys",
//       project: "Power BI",
//       filename: pdfCert204,
//     },
//     {
//       id: 205,
//       name: "Karanam Sreenivasulu",
//       team: "Rebort rebels",
//       project: "Power BI",
//       filename: pdfCert205,
//     },
//     {
//       id: 206,
//       name: "S Guru Sainath Reddy",
//       team: "Rebot rebels",
//       project: "Power BI",
//       filename: pdfCert206,
//     },
//     {
//       id: 207,
//       name: "Nandyala Pavan Kumar Reddy",
//       team: "Robot rebels",
//       project: "Power BI",
//       filename: pdfCert207,
//     },
//     {
//       id: 208,
//       name: "Rohith Dega",
//       team: "Team Akatsuki",
//       project: "Power BI",
//       filename: pdfCert208,
//     },
//     {
//       id: 209,
//       name: "Shaik Tazeem",
//       team: "Team Akatsuki",
//       project: "Power BI",
//       filename: pdfCert209,
//     },
//     {
//       id: 210,
//       name: "PALEM MONISHA",
//       team: "Team Hackathon",
//       project: "Power BI",
//       filename: pdfCert210,
//     },
//     {
//       id: 211,
//       name: "PALLA VINEETH",
//       team: "Team Hackathon",
//       project: "Power BI",
//       filename: pdfCert211,
//     },
//     {
//       id: 212,
//       name: "PAMURU BHAGYA SREE",
//       team: "Team Hackathon",
//       project: "Power BI",
//       filename: pdfCert212,
//     },
//     {
//       id: 213,
//       name: "PUTTUR MOUNIKA",
//       team: "Team Hackathon",
//       project: "Power BI",
//       filename: pdfCert213,
//     },
//   ];

//   const filteredCertificates = certificates.filter((cert) => {
//     const query = searchQuery.toLowerCase().trim();
//     if (!query) return true;

//     return (
//       cert.name.toLowerCase().includes(query) ||
//       cert.team.toLowerCase().includes(query) ||
//       cert.project.toLowerCase().includes(query)
//     );
//   });

//   const handleFileSelection = (e) => {
//     if (e.target.files && e.target.files.length > 0) {
//       const filesArray = Array.from(e.target.files);
//       setSelectedFiles(filesArray);
//     }
//   };

//   const handleUpload = () => {
//     if (selectedFiles.length === 0) {
//       alert("Please select files to upload first");
//       return;
//     }

//     const newImages = selectedFiles.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//       name: file.name,
//     }));

//     setImages((prevImages) => [...prevImages, ...newImages]);

//     setSelectedFiles([]);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }

//     alert(`Successfully uploaded ${newImages.length} image(s)!`);
//   };

//   const downloadCertificate = async (filename, teamName) => {
//     try {
//       const response = await fetch(filename);
//       if (!response.ok) {
//         throw new Error("Failed to fetch the file");
//       }

//       const blob = await response.blob();

//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;

//       const downloadName = teamName
//         ? `${teamName}-GDG-INNOHACKS-CERTIFICATE.pdf`
//         : filename.split("/").pop();
//       link.download = downloadName;

//       document.body.appendChild(link);
//       link.click();

//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Failed to download certificate:", error);
//       alert("Failed to download certificate. Please try again.");
//     }
//   };

//   const clearSearch = () => {
//     setSearchQuery("");
//   };

//   return (
//     <div className="min-h-screen bg-backgroundColor p-4 md:p-8 ">
//       <div className="mt-6">
//         <div className="bg-footerBgColor shadow rounded-lg overflow-hidden">
//           <div className="px-6 py-5 border-b border-gray-800">
//             <h2 className="text-xl font-semibold text-white">
//               Participant Certificates
//             </h2>
//             <p className="text-sm text-gray-300">
//               Find and download your certificate of participation
//             </p>
//           </div>
//           <div className="p-6">
//             <div className="mb-6">
//               <label
//                 htmlFor="certificate-search"
//                 className="block mb-2 text-sm font-medium text-gray-300"
//               >
//                 Search for your certificate
//               </label>
//               <div className="relative">
//                 <input
//                   id="certificate-search"
//                   type="text"
//                   placeholder="Search by name, team, or project"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   className="w-full p-2 pr-10 border bg-transparent border-gray-600 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
//                 />
//                 {searchQuery && (
//                   <button
//                     onClick={clearSearch}
//                     className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
//                   >
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       className="h-5 w-5"
//                       viewBox="0 0 20 20"
//                       fill="currentColor"
//                     >
//                       <path
//                         fillRule="evenodd"
//                         d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
//                         clipRule="evenodd"
//                       />
//                     </svg>
//                   </button>
//                 )}
//               </div>
//             </div>

//             <div className="mt-8">
//               <h3 className="text-lg font-medium mb-4">
//                 Available Certificates
//               </h3>
//               <div className="overflow-x-auto">
//                 {filteredCertificates.length > 0 ? (
//                   <table className="min-w-full divide-y divide-gray-500">
//                     <thead>
//                       <tr>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
//                         >
//                           Participant
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
//                         >
//                           Team
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
//                         >
//                           Project
//                         </th>
//                         <th
//                           scope="col"
//                           className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase tracking-wider"
//                         >
//                           Action
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-footerBgColor">
//                       {filteredCertificates.map((cert) => (
//                         <tr
//                           key={cert.id}
//                           className="hover:bg-zinc-800 transition-colors duration-150"
//                         >
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">
//                             {cert.name}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
//                             {cert.team}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
//                             {cert.project}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
//                             <button
//                               onClick={() =>
//                                 downloadCertificate(cert.filename, cert.team)
//                               }
//                               className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-400 bg-transparent hover:bg-gray-200 hover:text-backgroundColor transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                             >
//                               <svg
//                                 xmlns="http://www.w3.org/2000/svg"
//                                 className="h-4 w-4 mr-1.5"
//                                 fill="none"
//                                 viewBox="0 0 24 24"
//                                 stroke="currentColor"
//                               >
//                                 <path
//                                   strokeLinecap="round"
//                                   strokeLinejoin="round"
//                                   strokeWidth={2}
//                                   d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
//                                 />
//                               </svg>
//                               Download
//                             </button>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 ) : (
//                   <div className="text-center py-8">
//                     <p className="text-gray-300">
//                       No certificates found matching "{searchQuery}"
//                     </p>
//                     <button
//                       onClick={clearSearch}
//                       className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-colors"
//                     >
//                       Clear Search
//                     </button>
//                   </div>
//                 )}
//               </div>
//               {searchQuery && filteredCertificates.length > 0 && (
//                 <div className="mt-4 text-sm text-gray-400">
//                   Showing {filteredCertificates.length} of {certificates.length}{" "}
//                   certificates
//                 </div>
//               )}
//             </div>
//           </div>
//           <div className="px-6 py-4 mb-4 border-t border-gray-800">
//             <p className="text-sm text-gray-400">
//               Can't find your certificate? Contact us at support@techhack.com
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Certifications;

import React from "react";

const Certifications = () => {
  return (
    <>
      <div>Certifications</div>
    </>
  );
};

export default Certifications;
