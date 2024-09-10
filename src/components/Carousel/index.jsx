import styles from './Carousel.module.css';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Carousel() {
  const testimonials = [
    {
      id: '1',
      image: '/Mariana.png',
      text: 'Nunca imaginei que a psicologia poderia ter um impacto tão grande na minha alimentação. Com a ajuda da VivaNutri, consegui controlar minha ansiedade e fazer escolhas alimentares melhores. Minha energia e bem-estar melhoraram significativamente!',
      name: 'Carla',
    },
    {
      id: '2',
      image: '/Mariana.png',
      text: 'A VivaNutri transformou minha vida! Com a orientação nutricional e as técnicas psicológicas, consegui perder peso de forma saudável e adotar hábitos alimentares que realmente duram. Recomendo a todos que buscam uma mudança verdadeira e sustentável!',
      name: 'João',
    },
    {
      id: '3',
      image: '/Mariana.png',
      text: 'Sempre lutei com dietas restritivas, mas a VivaNutri me mostrou uma abordagem diferente. Comer com atenção e entender os aspectos psicológicos da alimentação fizeram toda a diferença para mim. Finalmente encontrei um equilíbrio saudável!',
      name: 'Mariana',
    },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        Depoimentos de <span>Clientes</span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles.swiperContainer}
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className={styles.slideItem}>
              <img
                src={item.image}
                alt={item.name}
                className={styles.testimonialImage}
              />
              <div className={styles.testimonialContent}>
                <p className={styles.testimonialText}>{item.text}</p>
                <p className={styles.testimonialName}>- {item.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default Carousel;
