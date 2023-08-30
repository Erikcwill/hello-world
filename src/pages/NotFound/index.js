import MainButton from "components/MainButton";
import styles from "./NotFound.module.css";
import erro404 from "assets/error404.png";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigation = useNavigate();

  return (
    <>
      <div className={styles.containerContent}>
        <span className={styles.text404}></span>

        <h1 className={styles.title}>Opss! Página não encontrada</h1>

        <p className={styles.paragraph}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragraph}>
          Aguarde uns instantes e recarregue a página, ou volte para a página
          inicial
        </p>

        <div className={styles.containerButton} onClick={() => navigation(-1)}>
          <MainButton size="lg">Voltar</MainButton>
        </div>

        <img className={styles.dogImage} src={erro404} alt="Cachorro 404" />
      </div>
      <div className={styles.blankSpace}></div>
    </>
  );
}
