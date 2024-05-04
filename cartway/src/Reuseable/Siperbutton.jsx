import { useSwiper } from "swiper/react"
import '../Styles/style.css'

const Swipebutton = () => {

    const swiper = useSwiper();

  return (
      <div className="cont">
          <button className="action-buttons" onClick={() => swiper.slidePrev()}>ᐸ</button>
        <button className="action-buttons" onClick={() => swiper.slideNext()}>ᐳ</button>
        <br />
    </div>
  )
}

export default Swipebutton