import React, { useState, useRef, useEffect } from "react";

import IMG_9382 from "../../assets/images/IMG_9382.JPG";
import IMG_9377 from "../../assets/images/IMG_9377.JPG";
import IMG_9374 from "../../assets/images/IMG_9374.JPG";
import IMG_9370 from "../../assets/images/IMG_9370.JPG";
import IMG_9367 from "../../assets/images/IMG_9367.JPG";
import IMG_9365 from "../../assets/images/IMG_9365.JPG";
import IMG_9362 from "../../assets/images/IMG_9362.JPG";
import IMG_9359 from "../../assets/images/IMG_9359.JPG";
import IMG_9356 from "../../assets/images/IMG_9356.JPG";
import IMG_9354 from "../../assets/images/IMG_9354.JPG";
import IMG_9352 from "../../assets/images/IMG_9352.JPG";
import IMG_9351 from "../../assets/images/IMG_9351.JPG";
import IMG_9349 from "../../assets/images/IMG_9349.JPG";
import IMG_9347 from "../../assets/images/IMG_9347.JPG";
import IMG_9344 from "../../assets/images/IMG_9344.JPG";
import IMG_9343 from "../../assets/images/IMG_9343.JPG";
import IMG_9340 from "../../assets/images/IMG_9340.JPG";
import IMG_9338 from "../../assets/images/IMG_9338.JPG";
import IMG_9336 from "../../assets/images/IMG_9336.JPG";
import IMG_9334 from "../../assets/images/IMG_9334.JPG";
import IMG_9333 from "../../assets/images/IMG_9333.JPG";
import IMG_9330 from "../../assets/images/IMG_9330.JPG";
import IMG_9327 from "../../assets/images/IMG_9327.JPG";
import IMG_9326 from "../../assets/images/IMG_9326.JPG";
import IMG_9323 from "../../assets/images/IMG_9323.JPG";
import IMG_9322 from "../../assets/images/IMG_9322.JPG";
import IMG_9316 from "../../assets/images/IMG_9316.JPG";
import IMG_9306 from "../../assets/images/IMG_9306.JPG";
import IMG_9303 from "../../assets/images/IMG_9303.JPG";
import IMG_9301 from "../../assets/images/IMG_9301.JPG";
import IMG_9299 from "../../assets/images/IMG_9299.JPG";
import IMG_9295 from "../../assets/images/IMG_9295.JPG";
import IMG_9296 from "../../assets/images/IMG_9296.JPG";
import IMG_9077 from "../../assets/images/IMG_9077.JPG";
import IMG_9061 from "../../assets/images/IMG_9061.JPG";
import IMG_9051 from "../../assets/images/IMG_9051.JPG";
import IMG_9036 from "../../assets/images/IMG_9036.JPG";
import IMG_9032 from "../../assets/images/IMG_9032.JPG";
import IMG_9029 from "../../assets/images/IMG_9029.JPG";
import IMG_8991 from "../../assets/images/IMG_8991.JPG";
import IMG_8990 from "../../assets/images/IMG_8990.JPG";
import IMG_8983 from "../../assets/images/IMG_8983.JPG";
import IMG_8982 from "../../assets/images/IMG_8982.JPG";
import IMG_8981 from "../../assets/images/IMG_8981.JPG";
import IMG_8978 from "../../assets/images/IMG_8978.JPG";
import IMG_8736 from "../../assets/images/IMG_8736.JPG";
import IMG_8721 from "../../assets/images/IMG_8721.JPG";
import IMG_8716 from "../../assets/images/IMG_8716.JPG";
import IMG_8715 from "../../assets/images/IMG_8715.JPG";
import IMG_8713 from "../../assets/images/IMG_8713.JPG";
import IMG_8705 from "../../assets/images/IMG_8705.JPG";
import IMG_8704 from "../../assets/images/IMG_8704.JPG";
import IMG_8703 from "../../assets/images/IMG_8703.JPG";
import IMG_8694 from "../../assets/images/IMG_8694.JPG";
import IMG_8674 from "../../assets/images/IMG_8674.JPG";
import IMG_8669 from "../../assets/images/IMG_8669.JPG";
import IMG_8660 from "../../assets/images/IMG_8660.JPG";
import IMG_8651 from "../../assets/images/IMG_8651.JPG";
import IMG_8650 from "../../assets/images/IMG_8650.JPG";
import IMG_8649 from "../../assets/images/IMG_8649.JPG";
import IMG_8648 from "../../assets/images/IMG_8648.JPG";
import IMG_8646 from "../../assets/images/IMG_8646.JPG";
import IMG_8645 from "../../assets/images/IMG_8645.JPG";
import IMG_8644 from "../../assets/images/IMG_8644.JPG";
import IMG_8642 from "../../assets/images/IMG_8642.JPG";
import IMG_8641 from "../../assets/images/IMG_8641.JPG";
import IMG_8637 from "../../assets/images/IMG_8637.JPG";
import IMG_8636 from "../../assets/images/IMG_8636.JPG";
import IMG_8633 from "../../assets/images/IMG_8633.JPG";
import IMG_8629 from "../../assets/images/IMG_8629.JPG";
import IMG_8625 from "../../assets/images/IMG_8625.JPG";
import IMG_8623 from "../../assets/images/IMG_8623.JPG";
import IMG_8622 from "../../assets/images/IMG_8622.JPG";
import IMG_8621 from "../../assets/images/IMG_8621.JPG";
import IMG_8620 from "../../assets/images/IMG_8620.JPG";
import IMG_8619 from "../../assets/images/IMG_8619.JPG";
import IMG_8618 from "../../assets/images/IMG_8618.JPG";
import IMG_8617 from "../../assets/images/IMG_8617.JPG";
import IMG_8614 from "../../assets/images/IMG_8614.JPG";
import IMG_8612 from "../../assets/images/IMG_8612.JPG";
import IMG_8610 from "../../assets/images/IMG_8610.JPG";
import IMG_8609 from "../../assets/images/IMG_8609.JPG";
import IMG_8604 from "../../assets/images/IMG_8604.JPG";
import IMG_8603 from "../../assets/images/IMG_8603.JPG";
import IMG_8600 from "../../assets/images/IMG_8600.JPG";
import IMG_8598 from "../../assets/images/IMG_8598.JPG";
import IMG_8588 from "../../assets/images/IMG_8588.JPG";
import IMG_8587 from "../../assets/images/IMG_8587.JPG";
import IMG_8586 from "../../assets/images/IMG_8586.JPG";
import IMG_8579 from "../../assets/images/IMG_8579.JPG";
import IMG_8577 from "../../assets/images/IMG_8577.JPG";
import IMG_8576 from "../../assets/images/IMG_8576.JPG";
import IMG_8575 from "../../assets/images/IMG_8575.JPG";
import IMG_8574 from "../../assets/images/IMG_8574.JPG";
import IMG_8573 from "../../assets/images/IMG_8573.JPG";
import IMG_8572 from "../../assets/images/IMG_8572.JPG";
import IMG_8568 from "../../assets/images/IMG_8568.JPG";
import IMG_8561 from "../../assets/images/IMG_8561.JPG";
import IMG_8558 from "../../assets/images/IMG_8558.JPG";
import IMG_8547 from "../../assets/images/IMG_8547.JPG";
import IMG_8546 from "../../assets/images/IMG_8546.JPG";
import IMG_8545 from "../../assets/images/IMG_8545.JPG";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [imageStatus, setImageStatus] = useState({});
  const observerRef = useRef(null);
  const imageRefs = useRef({});

  const images = [
    { id: 1, src: IMG_9382, alt: "Hackathon Image 9382" },
    { id: 2, src: IMG_9377, alt: "Hackathon Image 9377" },
    { id: 3, src: IMG_9374, alt: "Hackathon Image 9374" },
    { id: 4, src: IMG_9370, alt: "Hackathon Image 9370" },
    { id: 5, src: IMG_9367, alt: "Hackathon Image 9367" },
    { id: 6, src: IMG_9365, alt: "Hackathon Image 9365" },
    { id: 7, src: IMG_9362, alt: "Hackathon Image 9362" },
    { id: 8, src: IMG_9359, alt: "Hackathon Image 9359" },
    { id: 9, src: IMG_9356, alt: "Hackathon Image 9356" },
    { id: 10, src: IMG_9354, alt: "Hackathon Image 9354" },
    { id: 11, src: IMG_9352, alt: "Hackathon Image 9352" },
    { id: 12, src: IMG_9351, alt: "Hackathon Image 9351" },
    { id: 13, src: IMG_9349, alt: "Hackathon Image 9349" },
    { id: 14, src: IMG_9347, alt: "Hackathon Image 9347" },
    { id: 15, src: IMG_9344, alt: "Hackathon Image 9344" },
    { id: 16, src: IMG_9343, alt: "Hackathon Image 9343" },
    { id: 17, src: IMG_9340, alt: "Hackathon Image 9340" },
    { id: 18, src: IMG_9338, alt: "Hackathon Image 9338" },
    { id: 19, src: IMG_9336, alt: "Hackathon Image 9336" },
    { id: 20, src: IMG_9334, alt: "Hackathon Image 9334" },
    { id: 21, src: IMG_9333, alt: "Hackathon Image 9333" },
    { id: 22, src: IMG_9330, alt: "Hackathon Image 9330" },
    { id: 23, src: IMG_9327, alt: "Hackathon Image 9327" },
    { id: 24, src: IMG_9326, alt: "Hackathon Image 9326" },
    { id: 25, src: IMG_9323, alt: "Hackathon Image 9323" },
    { id: 26, src: IMG_9322, alt: "Hackathon Image 9322" },
    { id: 28, src: IMG_9316, alt: "Hackathon Image 9316" },
    { id: 29, src: IMG_9306, alt: "Hackathon Image 9306" },
    { id: 30, src: IMG_9303, alt: "Hackathon Image 9303" },
    { id: 31, src: IMG_9301, alt: "Hackathon Image 9301" },
    { id: 32, src: IMG_9299, alt: "Hackathon Image 9299" },
    { id: 33, src: IMG_9295, alt: "Hackathon Image 9295" },
    { id: 34, src: IMG_9296, alt: "Hackathon Image 9296" },
    { id: 35, src: IMG_9077, alt: "Hackathon Image 9077" },
    { id: 36, src: IMG_9061, alt: "Hackathon Image 9061" },
    { id: 37, src: IMG_9051, alt: "Hackathon Image 9051" },
    { id: 38, src: IMG_9036, alt: "Hackathon Image 9036" },
    { id: 39, src: IMG_9032, alt: "Hackathon Image 9032" },
    { id: 40, src: IMG_9029, alt: "Hackathon Image 9029" },
    { id: 41, src: IMG_8991, alt: "Hackathon Image 8991" },
    { id: 42, src: IMG_8990, alt: "Hackathon Image 8990" },
    { id: 43, src: IMG_8983, alt: "Hackathon Image 8983" },
    { id: 44, src: IMG_8978, alt: "Hackathon Image 8978" },
    { id: 45, src: IMG_8981, alt: "Hackathon Image 8981" },
    { id: 46, src: IMG_8736, alt: "Hackathon Image 8736" },
    { id: 47, src: IMG_8982, alt: "Hackathon Image 8982" },
    { id: 48, src: IMG_8721, alt: "Hackathon Image 8721" },
    { id: 49, src: IMG_8716, alt: "Hackathon Image 8716" },
    { id: 50, src: IMG_8715, alt: "Hackathon Image 8715" },
    { id: 51, src: IMG_8713, alt: "Hackathon Image 8713" },
    { id: 52, src: IMG_8705, alt: "Hackathon Image 8705" },
    { id: 53, src: IMG_8704, alt: "Hackathon Image 8704" },
    { id: 54, src: IMG_8703, alt: "Hackathon Image 8703" },
    { id: 55, src: IMG_8694, alt: "Hackathon Image 8694" },
    { id: 56, src: IMG_8674, alt: "Hackathon Image 8674" },
    { id: 57, src: IMG_8669, alt: "Hackathon Image 8669" },
    { id: 58, src: IMG_8660, alt: "Hackathon Image 8660" },
    { id: 59, src: IMG_8651, alt: "Hackathon Image 8651" },
    { id: 60, src: IMG_8650, alt: "Hackathon Image 8650" },
    { id: 61, src: IMG_8649, alt: "Hackathon Image 8649" },
    { id: 62, src: IMG_8648, alt: "Hackathon Image 8648" },
    { id: 63, src: IMG_8646, alt: "Hackathon Image 8646" },
    { id: 64, src: IMG_8645, alt: "Hackathon Image 8645" },
    { id: 65, src: IMG_8644, alt: "Hackathon Image 8644" },
    { id: 66, src: IMG_8642, alt: "Hackathon Image 8642" },
    { id: 67, src: IMG_8641, alt: "Hackathon Image 8641" },
    { id: 68, src: IMG_8637, alt: "Hackathon Image 8637" },
    { id: 69, src: IMG_8636, alt: "Hackathon Image 8636" },
    { id: 70, src: IMG_8633, alt: "Hackathon Image 8633" },
    { id: 71, src: IMG_8629, alt: "Hackathon Image 8629" },
    { id: 72, src: IMG_8625, alt: "Hackathon Image 8625" },
    { id: 73, src: IMG_8623, alt: "Hackathon Image 8623" },
    { id: 74, src: IMG_8622, alt: "Hackathon Image 8622" },
    { id: 75, src: IMG_8621, alt: "Hackathon Image 8621" },
    { id: 76, src: IMG_8620, alt: "Hackathon Image 8620" },
    { id: 77, src: IMG_8619, alt: "Hackathon Image 8619" },
    { id: 78, src: IMG_8618, alt: "Hackathon Image 8618" },
    { id: 79, src: IMG_8617, alt: "Hackathon Image 8617" },
    { id: 80, src: IMG_8614, alt: "Hackathon Image 8614" },
    { id: 81, src: IMG_8612, alt: "Hackathon Image 8612" },
    { id: 82, src: IMG_8610, alt: "Hackathon Image 8610" },
    { id: 83, src: IMG_8609, alt: "Hackathon Image 8609" },
    { id: 84, src: IMG_8604, alt: "Hackathon Image 8604" },
    { id: 85, src: IMG_8603, alt: "Hackathon Image 8603" },
    { id: 86, src: IMG_8600, alt: "Hackathon Image 8600" },
    { id: 87, src: IMG_8598, alt: "Hackathon Image 8598" },
    { id: 88, src: IMG_8588, alt: "Hackathon Image 8588" },
    { id: 89, src: IMG_8587, alt: "Hackathon Image 8587" },
    { id: 90, src: IMG_8586, alt: "Hackathon Image 8586" },
    { id: 91, src: IMG_8579, alt: "Hackathon Image 8579" },
    { id: 92, src: IMG_8577, alt: "Hackathon Image 8577" },
    { id: 93, src: IMG_8576, alt: "Hackathon Image 8576" },
    { id: 94, src: IMG_8575, alt: "Hackathon Image 8575" },
    { id: 95, src: IMG_8574, alt: "Hackathon Image 8574" },
    { id: 96, src: IMG_8573, alt: "Hackathon Image 8573" },
    { id: 97, src: IMG_8572, alt: "Hackathon Image 8572" },
    { id: 98, src: IMG_8568, alt: "Hackathon Image 8568" },
    { id: 99, src: IMG_8561, alt: "Hackathon Image 8561" },
    { id: 100, src: IMG_8558, alt: "Hackathon Image 8558" },
    { id: 101, src: IMG_8547, alt: "Hackathon Image 8547" },
    { id: 102, src: IMG_8546, alt: "Hackathon Image 8546" },
    { id: 103, src: IMG_8545, alt: "Hackathon Image 8545" },
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.dataset.id;
          if (entry.isIntersecting) {
            // Mark image for loading when in viewport
            setImageStatus((prev) => ({
              ...prev,
              [id]: { ...prev[id], shouldLoad: true },
            }));
          }
        });
      },
      { rootMargin: "200px", threshold: 0.1 } // Increased rootMargin for earlier loading
    );

    // Observe all image containers
    Object.values(imageRefs.current).forEach((ref) => {
      if (ref) {
        observerRef.current.observe(ref);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const openModal = (image) => {
    setSelectedImage(image);
    setModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const setRef = (id, element) => {
    imageRefs.current[id] = element;
    if (element && observerRef.current) {
      observerRef.current.observe(element);
    }
  };

  const handleImageLoad = (id) => {
    setImageStatus((prev) => ({
      ...prev,
      [id]: { ...prev[id], loaded: true, error: false },
    }));
  };

  const handleImageError = (id) => {
    setImageStatus((prev) => ({
      ...prev,
      [id]: { ...prev[id], error: true },
    }));
  };

  const ImageModal = () => {
    if (!modalOpen || !selectedImage) return null;

    const [modalImageLoaded, setModalImageLoaded] = useState(false);

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 transition-opacity duration-300">
        <div className="relative max-w-4xl w-full mx-4">
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition-all duration-200 z-10"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <div className="bg-gray-900 rounded-lg overflow-hidden shadow-2xl transform transition-all duration-300">
            {!modalImageLoaded && (
              <div className="w-full h-6 bg-strongBgColor animate-pulse flex items-center justify-center">
                <div className="text-gray-500">Loading...</div>
              </div>
            )}
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className={`w-full h-full max-h-screen object-cover transition-opacity duration-300 ${
                modalImageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setModalImageLoaded(true)}
              onError={() => setModalImageLoaded(false)}
            />
            <div className="p-4 bg-strongBgColor">
              <p className="text-white text-sm">{selectedImage.alt}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="mt-6">
      <div className="bg-backgroundColor shadow rounded-lg overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-800">
          <h2 className="text-xl font-semibold text-white">
            Hackathon Gallery
          </h2>
        </div>

        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div key={image.id}>
                <img
                  ref={(el) => setRef(image.id, el)}
                  src={image.src}
                  alt={image.alt}
                  data-id={image.id}
                  className="relative aspect-square object-cover cursor-pointer overflow-hidden rounded-lg border border-gray-800 shadow-sm transform transition-transform duration-300 hover:scale-105"
                  onClick={() => openModal(image)}
                />
                <div className="aspect-w-1 aspect-h-1 relative">
                  {!imageStatus[image.id]?.loaded && (
                    <div
                      className="w-full h-full bg-strongBgColor animate-pulse flex items-center justify-center"
                      style={{ aspectRatio: "1/1" }}
                    >
                      {imageStatus[image.id]?.error ? (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleImageError(image.id);
                          }}
                          className="px-2 py-1 bg-gray-700 rounded text-white text-xs"
                        >
                          Retry
                        </button>
                      ) : (
                        <div className="w-8 h-8 border-4 border-gray-600 border-t-gray-400 rounded-full animate-spin"></div>
                      )}
                    </div>
                  )}

                  <img
                    src={image.src}
                    alt={image.alt}
                    className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out absolute inset-0 ${
                      imageStatus[image.id]?.loaded
                        ? "opacity-100"
                        : "opacity-0"
                    }`}
                    onLoad={() => handleImageLoad(image.id)}
                    onError={() => handleImageError(image.id)}
                    loading="lazy"
                    style={{ aspectRatio: "1/1" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <ImageModal />
    </div>
  );
};

export default Gallery;
