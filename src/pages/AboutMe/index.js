import styles from "./AboutMe.module.css";

import ModelPost from "components/ModelPost";
import photoCover from "assets/about_me_banner.png";
import photoAboutMe from "assets/about_me_photo.png";

export default function AboutMe() {
  return (
    <ModelPost photoCover={photoCover} title="About Me ">
      <h3 className={styles.subtitle}>Olá, eu sou o Erick</h3>

      <img
        src={photoAboutMe}
        alt="Foto do Erick dando um joinha"
        className={styles.photoAboutMe}
      />
      <p className={styles.paragraph}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        turpis tortor, venenatis non venenatis quis, commodo rutrum diam. Mauris
        consequat imperdiet purus, posuere auctor ante venenatis eu. Phasellus
        varius erat vitae orci auctor facilisis. Mauris bibendum lacus viverra
        aliquam vulputate. Proin suscipit, diam at cursus consequat, velit mi
        rutrum diam, vel vehicula mi mauris eget risus. Mauris malesuada rhoncus
        tincidunt. Integer ac pellentesque nisi. Morbi vitae luctus eros. Fusce
        condimentum ipsum sit amet dui consectetur dignissim. Orci varius
        natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Etiam posuere placerat dui, in aliquam lorem suscipit id. Aenean
        nisi risus, ullamcorper eget odio at, euismod laoreet ipsum. In id erat
        purus.
      </p>
      <p className={styles.paragraph}>
        Ut luctus pretium nulla, id ultrices tortor euismod vel. Donec at ligula
        id velit egestas consequat. Integer quis ipsum augue. Class aptent
        taciti sociosqu ad litora torquent per conubia nostra, per inceptos
        himenaeos. Curabitur id lorem at lorem volutpat suscipit nec maximus
        arcu. Integer dictum odio eu metus porta pretium. Nullam eu magna et
        eros vestibulum hendrerit. Nam non metus elit. Ut tempus dictum nunc ac
        vestibulum. Cras gravida mattis urna id suscipit.
      </p>
      <p className={styles.paragraph}>
        Etiam pretium massa massa, tincidunt rutrum ligula mollis at. Nullam ac
        ipsum varius, condimentum erat eu, placerat metus. Fusce semper orci in
        blandit sagittis. Nunc aliquet tortor nec risus pharetra, ut rutrum
        massa euismod. Aenean a semper dui, vitae scelerisque lorem. Donec quis
        ornare dui, quis lobortis mauris. Cras eu sapien quis eros fermentum
        hendrerit. Nunc sit amet massa erat. Vestibulum hendrerit vehicula lorem
        at tempor.
      </p>
      <p className={styles.paragraph}>
        In accumsan dolor a lacus vestibulum posuere. Ut volutpat pharetra velit
        eget vehicula. Quisque molestie ac leo sed tincidunt. Quisque cursus
        massa sed ullamcorper iaculis. Duis purus magna, dapibus id lectus ac,
        faucibus congue dolor. Morbi quis felis porttitor, accumsan tortor ut,
        mattis enim. Nam euismod orci elit, vel hendrerit nisl placerat sed.
        Cras tristique urna nisl, nec placerat nunc ultricies in. Suspendisse
        pretium lacus sed pretium interdum. Suspendisse faucibus ex vitae diam
        euismod maximus. Nam finibus id velit non ultrices. Vivamus quis
        vehicula libero.
      </p>
      <p className={styles.paragraph}>
        Donec fermentum consequat leo, in convallis libero euismod quis.
        Maecenas vel mollis erat, sed ullamcorper felis. Curabitur sed varius
        sem. Mauris lacinia risus eget quam iaculis, ac faucibus sem ultricies.
        Aliquam eu ex ex. Nunc posuere semper nisi, mollis euismod ante gravida
        quis. Sed a sagittis odio, in faucibus enim. Praesent egestas a purus
        non eleifend. In viverra nunc vitae faucibus dignissim. Integer
        tincidunt massa neque, ut consectetur nibh malesuada a. Duis sodales
        pretium ullamcorper. Aliquam nisl dolor, fermentum eget vehicula nec,
        lobortis quis neque.
      </p>
      <p className={styles.paragraph}>
        Nullam porta dolor a elit gravida iaculis. Morbi mollis massa eu nunc
        rutrum placerat. Cras cursus rutrum lacus, ac accumsan sem elementum
        quis. Pellentesque non ligula nec erat viverra commodo id eu nibh. Sed
        at metus dignissim, mattis turpis id, pretium erat. Fusce pellentesque
        eros quis dolor efficitur, nec auctor risus vestibulum. Sed tincidunt,
        metus vehicula laoreet scelerisque, eros magna posuere mauris, eget
        porta magna lectus id urna. Praesent hendrerit, lacus non malesuada
        consectetur, massa sapien vestibulum lacus, eu malesuada velit massa
        vitae nisi.
      </p>
    </ModelPost>
  );
}
