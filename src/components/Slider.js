import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function ResponsiveCarousel({ children }) {
  return (
    <div className="flex w-full custom-carousel">
      <Carousel
        showArrows={false}
        showStatus={false}
        infiniteLoop={true}
        dynamicHeight={false}
        autoPlay={true}
        showThumbs={false}
        className="w-full"
      >
        {children}
      </Carousel>
    </div>
  );
}
