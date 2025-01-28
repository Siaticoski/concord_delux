import styles from "./login.module.css"
import Image from "next/image"
import Link from "next/link"

export default function login() {
    return(
        <section className={styles.fundo}>
            <div className={styles.quadrado}>

                <div className={styles.arruma}>
                    <form className={styles.form} action="/submit" method="post">

                        <label className={styles.label}>Email:</label>
                        <input type="email" id="email" name="email" required />

                        <label className={styles.label}>Senha:</label>
                        <input type="senha" id="senha" name="senha" required />

                        <Link className={styles.a} href="colocar sim">Lembrar senha?</Link>

                        <input type="submit" className={styles.botao} value="Entrar"/>

                        <div className={styles.cadastrar}>
                            <p>Não possui uma conta? <Link className={styles.a} href="sim">Cadastrar-se</Link></p>
                        </div>
                        
                        <div className={styles.voltar}>
                            <Link className={styles.a} href="sim"><Image className={styles.img} src="/images/Ellipse 4.png" alt="sim" width={15} height={15}/> Voltar</Link>
                        </div>
                    </form>

                    

                </div>

            </div>
        </section>
    )
}