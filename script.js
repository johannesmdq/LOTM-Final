// ===== FUNCIONALIDADE 1: Revelar/ocultar membros do Tarot Club =====
function alternarMembros() {
    let lista = document.getElementById("listaMembros");
    let botao = document.getElementById("btnMembros");

    lista.classList.toggle("d-none");

    if (lista.classList.contains("d-none")) {
        botao.textContent = "Revelar membros";
    } else {
        botao.textContent = "Ocultar membros";
    }
}

document.getElementById("btnMembros").addEventListener("click", alternarMembros);

// ===== FUNCIONALIDADE 2: Validação do formulário =====
function validarFormulario(evento) {
    evento.preventDefault(); // impede a página de recarregar

    let campos = ["nome", "email", "telefone", "mensagem"];
    let msg = document.getElementById("msgForm");
    let erros = 0;

    for (let i = 0; i < campos.length; i++) {
        let campo = document.getElementById(campos[i]);
        let valor = campo.value.trim();
        let valido = valor !== "";

        if (campos[i] === "email") {
            valido = valor.includes("@") && valor.includes(".");
        }
        if (campos[i] === "telefone") {
            valido = valor.replace(/\D/g, "").length >= 10;
        }

        if (valido) {
            campo.classList.remove("is-invalid");
            campo.classList.add("is-valid");
        } else {
            campo.classList.remove("is-valid");
            campo.classList.add("is-invalid");
            erros++;
        }
    }

    if (erros > 0) {
        msg.className = "mt-3 msg-erro";
        msg.textContent = "Preencha corretamente os " + erros + " campo(s) destacado(s).";
    } else {
        let nome = document.getElementById("nome").value.trim();
        msg.className = "mt-3 msg-sucesso";
        msg.textContent = "Obrigado, " + nome + "! Sua mensagem chegou ao Tarot Club. 🃏";
        document.getElementById("formContato").reset();
        for (let i = 0; i < campos.length; i++) {
            document.getElementById(campos[i]).classList.remove("is-valid");
        }
    }
}

document.getElementById("formContato").addEventListener("submit", validarFormulario);

// ===== EXTRA: fecha o menu ao clicar em um link (celular) =====
let links = document.querySelectorAll("#menuLista .nav-link");
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function () {
        let menu = document.getElementById("menuLista");
        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
}
// ===== FUNCIONALIDADE 3: Informações dos membros (modal) =====
let membros = {
    fool: {
        titulo: "🃏 The Fool — Klein Moretti",
        texto: `
            <p>Klein Moretti é o protagonista da web novel chinesa <em>Lord of the Mysteries</em> e o fundador e líder do Clube do Tarô, onde atende pela identidade de <strong>O Louco (The Fool)</strong>.</p>
            <p>Vindo do mundo moderno como o transmigrador Zhou Mingrui, ele acorda no corpo de Klein em um universo vitoriano e steampunk repleto de horror cósmico. Para sobreviver e buscar um caminho de volta para casa, inicia uma farsa mística acima da Névoa Cinza, fingindo ser uma divindade antiga. Com o tempo, a atuação se funde à realidade: ele ascende pelo Caminho do Vidente e se torna um <strong>Sequence 0 True God</strong>, fundando a Igreja do Louco.</p>
            <h6>O Clube do Tarô</h6>
            <p>No topo do Castelo de Sefirah, Klein assume uma postura onisciente e imponente, embora internamente mantenha monólogos bem-humorados e paranoicos. Os membros usam codinomes dos Arcanos Maiores e recorrem ao Louco em busca de conhecimento, fórmulas de poções e proteção.</p>
            <h6>Nome honorífico</h6>
            <blockquote class="honorifico">
                "O Louco que não pertence a esta era;<br>
                O Governante Misterioso acima da Névoa Cinza;<br>
                O Rei do Amarelo e Preto que empunha a boa sorte."
            </blockquote>`
    },
    justice: {
        titulo: "⚖️ Justice — Audrey Hall",
        texto: `
            <p>Audrey Hall é uma das personagens principais de <em>Lord of the Mysteries</em>, conhecida pelo codinome <strong>Justiça (Justice)</strong> no Clube do Tarô.</p>
            <ul>
                <li><strong>Identidade:</strong> filha do Conde Hall e de Caitlyn Hall, nobre do Reino de Loen. Chamada de "A Gema Mais Deslumbrante de Backlund" e "Senhorita Orgulho".</li>
                <li><strong>Clube do Tarô:</strong> uma das primeiras integrantes e importante fonte financeira do grupo.</li>
                <li><strong>Caminho Beyonder:</strong> Espectador / Visionário, chegando à Sequence 2 Discerner.</li>
                <li><strong>Habilidades:</strong> leitura de mentes, telepatia, psicanálise, manipulação de emoções e acesso ao subconsciente coletivo.</li>
                <li><strong>Companheira:</strong> Susie, uma Golden Retriever que também se tornou Beyonder.</li>
                <li><strong>Evolução:</strong> de jovem nobre inocente e fascinada pelo misticismo a alguém que usa seus poderes para ajudar os vulneráveis e enfrentar conspirações.</li>
            </ul>`
    },
    sun: {
        titulo: "☀️ The Sun — Derrick Berg",
        texto: `
            <p>Derrick Berg é um personagem importante da novel e do donghua <em>Lord of the Mysteries</em>.</p>
            <ul>
                <li><strong>Codinome:</strong> O Sol (The Sun) no Clube do Tarô, liderado por Klein Moretti (O Louco).</li>
                <li><strong>Origem:</strong> Cidade de Prata, na sombria Terra Abandonada dos Deuses.</li>
                <li><strong>Caminho Beyonder:</strong> Caminho do Sol (Bardo).</li>
                <li><strong>Personalidade:</strong> jovem puro, sincero e determinado, com a missão de levar seu povo para fora da escuridão e restaurar a luz do sol.</li>
                <li><strong>Papel no clube:</strong> compartilha conhecimentos sobre a história antiga, monstros e perigos da Terra Abandonada dos Deuses.</li>
            </ul>`
    },
    hanged: {
        titulo: "🪢 The Hanged Man — Alger Wilson",
        texto: `
            <p>Alger Wilson, o <strong>Enforcado (The Hanged Man)</strong>, é um dos membros fundadores do Clube do Tarô. Experiente, pragmático e extremamente cauteloso, é a principal fonte de conhecimento sobre o mundo oculto, fórmulas de poções e assuntos marítimos no início da obra.</p>
            <h6>Identidade e dupla jornada</h6>
            <ul>
                <li><strong>Pirata e espião:</strong> capitaneia o navio fantasma <em>Blue Avenger</em>, mas secretamente é espião da Igreja das Tempestades.</li>
                <li><strong>No Clube do Tarô:</strong> foi puxado para a Névoa Cinza no primeiro capítulo ao encontrar uma garrafa misteriosa. Movido de início por interesse próprio, passa a ver Mr. Fool como uma divindade insondável e se torna um de seus seguidores mais leais.</li>
            </ul>`
    }
};

function abrirMembro() {
    let info = membros[this.dataset.membro];
    document.getElementById("modalTitulo").textContent = info.titulo;
    document.getElementById("modalCorpo").innerHTML = info.texto;
    bootstrap.Modal.getOrCreateInstance(document.getElementById("modalMembro")).show();
}

let cards = document.querySelectorAll(".card-clicavel");
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", abrirMembro);
}
