"use client";
import { useState } from "react";
import styles from "./bloqueios.module.css";

export default function filtro() {
    
    const nums = [1,2,3,4,5,6,7,8,9,10];
    const pares = nums.filter((num) => (num % 2===0));
    const nomes = ['Miguel', 'João', 'Caleb', 'Guilherme', 'Gabriel'];
    const [busca, setBusca] = useState('');
    const nomesBusca = nomes.filter((nome) => (nome.toLowerCase().includes(busca.toLowerCase())))

    console.log(pares);
    console.log(nums);

    return(
        <div className={styles.cor}>

            <input className={styles.pesquisa}
                value={busca}
                type="text"
                onChange={(ev) => setBusca(ev.target.value)}
            />

            <h1>Filtro</h1>
            
            <ul>
                {nomesBusca.map((nome, i) =>(
                    <li key={i}>{nome}</li>
                ))}
            </ul>
        </div>
    );
};