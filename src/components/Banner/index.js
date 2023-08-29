import styles from "./Banner.module.css";
import coloredCircle from "assets/circle.png";
import myPhoto from "assets/my_photo.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.presentation}>
        <h1 className={styles.title}>Hello, World</h1>

        <p className={styles.paragraph}>
          Boas vindas ao meu espaço pessoal! Eu sou Erick William um
          desenvolvedor Front-End que está se aprimorando no React. Eu criei
          esse espaço para fim de aperfeiçoar minhas tecnicas no uso do React,
          nesse espaço eu realizei meus primeiros passos com a biblioteca
          ReactRouter :)
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
