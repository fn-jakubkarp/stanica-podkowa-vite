import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import {
  m_arbor,
  nh_living_room_wide,
  s_signpost,
  w_arbor_bottom,
} from "../../utils/assets";
import {
  interiorSlides,
  mansionSlides,
  summerSlides,
  winterSlides,
} from "../../utils/lightboxSlides";

import { Thumbnails } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

const Gallery: React.FC = () => {
  const [openLightboxInterior, setOpenLightboxInterior] = useState(false);
  const [openLightboxWinter, setOpenLightboxWinter] = useState(false);
  const [openLightboxSummer, setOpenLightboxSummer] = useState(false);
  const [openLightboxMansion, setOpenLightboxMansion] = useState(false);

  return (
    <>
      <Lightbox
        open={openLightboxInterior}
        close={() => setOpenLightboxInterior(false)}
        slides={interiorSlides}
        plugins={[Thumbnails]}
      />
      <Lightbox
        open={openLightboxMansion}
        close={() => setOpenLightboxMansion(false)}
        slides={mansionSlides}
        plugins={[Thumbnails]}
      />
      <Lightbox
        open={openLightboxWinter}
        close={() => setOpenLightboxWinter(false)}
        slides={winterSlides}
        plugins={[Thumbnails]}
      />
      <Lightbox
        open={openLightboxSummer}
        close={() => setOpenLightboxSummer(false)}
        slides={summerSlides}
        plugins={[Thumbnails]}
      />
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center">
        <div className="h-full min-h-screen flex flex-col items-center justify-center">
          <h1 className="flex justify-center text-7xl">GALERIA</h1>
          <section className="container mx-auto px-4 py-12 md:px-6 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <p
                  onClick={() => setOpenLightboxMansion(true)}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">View</span>
                </p>
                <img
                  src={m_arbor}
                  alt="Posiadłość"
                  width={500}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="bg-white p-4 ">
                  <h3 className="text-lg font-bold">Posiadłość</h3>
                  <p className="">
                    Breathtaking vistas of rolling hills and lush meadows.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <p
                  onClick={() => setOpenLightboxSummer(true)}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">View</span>
                </p>
                <img
                  src={s_signpost}
                  alt="Lato"
                  width={500}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="bg-white p-4 ">
                  <h3 className="text-lg font-bold">Lato</h3>
                  <p className="">
                    Explore hiking trails, go horseback riding, and more.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <p
                  onClick={() => setOpenLightboxInterior(true)}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">View</span>
                </p>
                <img
                  src={nh_living_room_wide}
                  alt="Wnętrze"
                  width={500}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="bg-white p-4 ">
                  <h3 className="text-lg font-bold">Wnętrze</h3>
                  <p className="">
                    Relax in our charming cottages and farmhouses.
                  </p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <p
                  onClick={() => setOpenLightboxWinter(true)}
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">View</span>
                </p>
                <img
                  src={w_arbor_bottom}
                  alt="Zima"
                  width={500}
                  height={400}
                  className="h-64 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
                <div className="bg-white p-4 ">
                  <h3 className="text-lg font-bold">Zima</h3>
                  <p className="">
                    Savor the flavors of our farm-to-table dining experiences.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Gallery;
