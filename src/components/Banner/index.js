import styles from "./Banner.module.css";
import coloredCircle from "assets/circle.png";
import myPhoto from "assets/my_photo.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Hello, World</h1>

        <p className={styles.paragraph}>
          Seja bem-vindo ao meu espaço pessoal! Eu sou Erick William, um
          desenvolvedor Front-End que está constantemente aprimorando suas
          habilidades em React. Este espaço foi criado com o objetivo de
          aperfeiçoar minhas técnicas no uso do React, e aqui foi onde dei meus
          primeiros passos com a biblioteca React Router :)
        </p>
      </div>

      <div className={styles.images}>
        <img
          className={styles.coloredCircle}
          src={coloredCircle}
          aria-hidden
          alt="Circulo Colorido"
        />

        <img
          className={styles.myPhoto}
          src={myPhoto}
          alt="Foto do Erick William :)"
        />
      </div>
    </div>
  );
}
