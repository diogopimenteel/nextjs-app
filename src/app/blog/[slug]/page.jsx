import Image from "next/image";
import styles from "./singlePage.module.css";

const SinglePostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://w.wallhaven.cc/full/o5/wallhaven-o5wlp9.png"
          alt=""
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="https://w.wallhaven.cc/full/o5/wallhaven-o5wlp9.png"
            alt=""
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Terry Jefferson</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos,
          e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
          bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
          sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica,
          permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset
          lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a
          ser integrado a softwares de editoração eletrônica como Aldus PageMaker.
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
