"Use Client"
import styles from "./page.module.css";
export default function cadastrar() {
    return (
        <div id="dFundo">
            <section>
                <form action="/submit" method="post">
                    <label for="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />

                    <label for="senha">Senha:</label>
                    <input type="senha" id="senha" name="senha" required />
                    <label for="email">Email:</label>
                    <input type="email" id="email" name="email" required />

                    <label for="celular">Celular:</label>
                    <input type="celular" id="celular" name="celular" required />

                    <input type="submit" class="botao" value="Entrar" />
                </form>

                <div class="dVoltar">
                    <p>Você já possui conta? <a href="COLOCAR O LINK DO LOGIN AQUI">Fazer login</a></p>
                </div>
            </section>
        </div>
    )
}