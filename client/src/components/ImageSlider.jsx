import { useEffect, useRef } from "react";

const ImageSlider = () => {
  const containerRef = useRef();

  useEffect(() => {
    window.cloudinary.galleryWidget({
      container: containerRef.current,
      cloudName: "dawteptkh",
      mediaAssets: [{ tag: "vita-logos" }],
    }).render()
  }, [])

  return (
    <div id="logo-pictures-container" ref={containerRef}></div>
  )
}

export default ImageSlider;