// Swiper imports
import { Mousewheel, Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "../../../styles/main.css";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/pagination";

import grill from "../../../assets/grill.jpg";
import imprezy from "../../../assets/imprezy.jpg";
import konie from "../../../assets/konie.jpg";
import noclegi from "../../../assets/noclegi.jpg";
import sauna from "../../../assets/sauna.jpg";
import paintball from "../../../assets/paintball.jpg";

// Custom card component
import { CardType } from "../Card/Card";
import Card from "../Card/Card";

const ScrollGallery = () => {
  return (
    <>
      <div className="relative w-full h-1/2 md:w-1/2 my-8 px-4">
        <Swiper
          direction={"horizontal"}
          slidesPerView={"auto"}
          spaceBetween={30}
          mousewheel={true}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          style={{
            // @ts-ignore
            "--swiper-pagination-color": "#fff",
          }}
          modules={[Mousewheel, Autoplay, Pagination]}
          className="mySwiper w-full h-full rounded-md px-4"
        >
          {cards.map((card) => (
            <SwiperSlide>
              <Card key={card.id} card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ScrollGallery;

const cards: CardType[] = [
  {
    url: grill,
    title: "Grill",
    alt: "Grill",
    text: "Rozkoszuj się soczystymi grillowanymi potrawami w naszym ogrodzie!",
    id: 1,
  },
  {
    url: imprezy,
    title: "Imprezy",
    alt: "Imprezy",
    text: "Organizujemy niezapomniane imprezy i wydarzenia w malowniczej scenerii.",
    id: 2,
  },
  {
    url: konie,
    title: "Konie",
    alt: "Konie",
    text: "Odkryj piękno natury podczas jazdy konnej z naszymi doświadczonymi instruktorami.",
    id: 3,
  },
  {
    url: noclegi,
    title: "Noclegi",
    alt: "Noclegi",
    text: "Oferujemy komfortowe noclegi w przytulnych pokojach z widokiem na naturę.",
    id: 4,
  },
  {
    url: sauna,
    title: "Sauna",
    alt: "Sauna",
    text: "Zrelaksuj się w naszej autentycznej fińskiej banii i saunie, odprężając ciało i umysł",
    id: 5,
  },
  {
    url: paintball,
    title: "Paintball",
    alt: "Paintball",
    text: "Adrenalina i zabawa czekają na Ciebie na naszym polu do paintballa",
    id: 6,
  },
];