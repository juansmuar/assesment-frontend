import './styles.css';

const About = () => (
  <section className="about__container">
    <img src="/assets/image.jpg" alt="imagen" className="about__image" />
    <section className="info__container">
      <h1 className="about__name">Juan Sebastian Muñoz</h1>
      <h5 className="about__mail">juansmuar@gmail.com</h5>
      <a className="about__link" href="https://github.com/juansmuar">Github</a>
      <ul className="about__list">
        <li className="about__item">En este programa he aprendido a usar flexbox y grid para organizar la composicion de los sitios.</li>
        <li className="about__item">He aprendido a usar los componentes de react para reutilizar código.</li>
        <li className="about__item">He aprendido a hacer peticiones asincronas para traer datos de serviodres remotos.</li>
      </ul>
    </section>
  </section>
);

export default About;
