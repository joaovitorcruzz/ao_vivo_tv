import styles from "./page.module.scss";
import Link from "next/link";
import Button from "@/components/Button/pages";
import Card from "@/components/Card/page";

export default function InLive() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Canais:</h1>

        <div className={styles.channels}>
          <div>
            <p>Canal 1</p>
          </div>

          <div>
            <p>Canal 2</p>
          </div>

          <div>
            <p>Canal 3</p>
          </div>
        </div>

        <div className={styles.boxVideo}>
          <video className={styles.video} autoPlay controls preload="none" playsInline muted loop>
            <source src="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4" type="video/mp4" />
            <track
              src="https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
              kind="subtitles"
              srcLang="en"
              label="English"
            />
            Your browser does not support the video tag.
          </video>

          <div className={styles.contentInfo}>
            <div className={styles.boxInfo}>
              <h1>Nome do produto que estamos vendendo no video</h1>

              <div className={styles.line} />

              <div className={styles.info}>
                <h2>PREÇO DA VENDA</h2>
              </div>

              <div className={styles.info}>
                <h3>R$ 87,56</h3>
              </div>
            </div>

            <Button text='Compre agora' radius={0} />
          </div>

        </div>

        <div className={styles.line} />

        <h1 className={styles.title2}>Ofertas para você</h1>

        <div className={styles.contentCard}>
          <Link href='/Product'>
            <Card
              img='/product.png'
              title='Calsa marrom feminina que vai até o tornozelo'
              price1='188,00'
              price2='198,00'
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
