import React from "react";

const AboutSection = ({
  eventName = "GDG Innohacks 2K25",
  eventTagline = "Redefining Innovation!",
  participantCount = "260+",
  hackathonDuration = "4+",
  registrationDate = "March 1, 2025",
  domainSessionDates = "March 11-12, 2025",
  mentorshipDate = "March 13, 2025",
  hackathonDate = "March 15, 2025",
  closingDate = "March 17, 2025",
}) => {
  return (
    <section id="about" className="py-10 ">
      <div className="container mx-auto px-4 py-8 px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            {eventName} – {eventTagline}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            GDG Innohacks is where technology meets creativity, and ideas
            transform into impactful solutions. Hosted within our college, this
            hackathon is not just an event—it's an innovation movement designed
            to push the boundaries of technological advancements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div className="p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              About GDG Innohacks 2K25
            </h3>
            <p className="text-gray-300 mb-4">
              GDG Innohacks is a premier college-level hackathon aimed at
              fostering innovation among tech enthusiasts. From AI-powered
              automation to data visualization and UI/UX advancements,
              participants are challenged to think beyond conventional limits.
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold text-gray-200 mb-3">
                What Made GDG Innohacks Special?
              </h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🌎</span>
                  <span className="text-gray-300">
                    <strong>{participantCount} participants</strong> from
                    various technical backgrounds.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">⏳</span>
                  <span className="text-gray-300">
                    <strong>{hackathonDuration} hours</strong> of coding,
                    modeling, designing, and visualizing.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🎓</span>
                  <span className="text-gray-300">
                    <strong>Industry mentors</strong> and hands-on tech
                    workshops.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">💡</span>
                  <span className="text-gray-300">
                    <strong>Diverse challenges</strong> across multiple
                    technology domains.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">🎁</span>
                  <span className="text-gray-300">
                    <strong>Exciting prizes</strong> and career opportunities.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Why GDG Innohacks Matters
            </h3>
            <p className="text-gray-300 mb-4">
              GDG Innohacks is more than just a competition—it's a launchpad for
              future innovators. It bridges the gap between theoretical
              knowledge and practical implementation by offering:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <div>
                  <strong>Creative Problem-Solving</strong> – Tackling
                  real-world challenges through technology.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <div>
                  <strong>Collaboration with Industry Experts</strong> – Gaining
                  insights from professionals.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <div>
                  <strong>Tech for a Better Future</strong> – Solutions focused
                  on sustainability, AI, and automation.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 font-bold mr-2">•</span>
                <div>
                  <strong>Career & Startup Opportunities</strong> – Access to
                  funding, mentorship, and internships.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-12">
          <h3 className="text-2xl font-bold text-white mb-4">
            Event Timeline ⏳
          </h3>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
              <div className="border-l-4 border-blue-500 pl-4 h-full">
                <p className="text-sm font-semibold text-gray-500">
                  Registrations Open
                </p>
                <p className="text-lg font-bold text-white">
                  {registrationDate}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
              <div className="border-l-4 border-blue-500 pl-4 h-full">
                <p className="text-sm font-semibold text-gray-500">
                  Domain Explanation Sessions
                </p>
                <p className="text-lg font-bold text-white">
                  {domainSessionDates}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
              <div className="border-l-4 border-blue-500 pl-4 h-full">
                <p className="text-sm font-semibold text-gray-500">
                  Mentorship & Ideation Phase
                </p>
                <p className="text-lg font-bold text-white">
                  {mentorshipDate}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5 mb-6 md:mb-0">
              <div className="border-l-4 border-blue-500 pl-4 h-full">
                <p className="text-sm font-semibold text-gray-500">
                  Hackathon & Evaluation
                </p>
                <p className="text-lg font-bold text-white">
                  {hackathonDate}
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/5">
              <div className="border-l-4 border-blue-500 pl-4 h-full">
                <p className="text-sm font-semibold text-gray-500">
                  Winner Announcements & Closing
                </p>
                <p className="text-lg font-bold text-white">{closingDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Domain Explanation Sessions 📅
            </h3>
            <div className="mb-6">
              <p className="font-semibold text-gray-700 mb-2">
                📍 11th March 2025 (Tuesday)
              </p>
              <ul className="space-y-2 pl-6">
                <li className="text-gray-300">
                  🔹 <strong>Session 1:</strong> AI, DS & ML –{" "}
                  <em>Handled by Anirudh A</em>
                </li>
                <li className="text-gray-300">
                  🔹 <strong>Session 2:</strong> Data Analysis –{" "}
                  <em>Handled by Eswar</em>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-gray-700 mb-2">
                📍 12th March 2025 (Wednesday)
              </p>
              <ul className="space-y-2 pl-6">
                <li className="text-gray-300">
                  🔹 <strong>Session 1:</strong> Web Development –{" "}
                  <em>Handled by Sisindri Singamsetti</em>
                </li>
                <li className="text-gray-300">
                  🔹 <strong>Session 2:</strong> UI/UX Designing –{" "}
                  <em>Handled by Gnana Shekar</em>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-white mb-4">
              Event Themes & Domains 🎯
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">
                  UI/UX Design
                </h4>
                <p className="text-gray-300">
                  Creating engaging user experiences.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">
                  Web Development
                </h4>
                <p className="text-gray-300">Building scalable applications.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">
                  Data Visualization
                </h4>
                <p className="text-gray-300">Turning data into insights.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-white mb-2">
                  AI & Machine Learning
                </h4>
                <p className="text-gray-300">
                  Developing intelligent solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 mb-6">
            GDG Innohacks 2K25 was just the beginning. Join us in 2K26 and be
            part of something bigger! 🚀
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Sign Up for GDG Innohacks 2K26
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
