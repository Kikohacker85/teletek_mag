function mostrarSecao(secao) {
    let conteudo = document.getElementById("conteudo");
    conteudo.style.display = "block";

    let html = "";

    if (secao === "alarme") {
        html = `
            <h2>🚨 Alarme Ativado</h2>
            <p>O LED vermelho <img src="assets/botao_fogo.png" alt="Botão Fogo" style="width: 70px; margin-bottom: -8px;"> e o LED da zona acenderam. O que deseja fazer?</p>
            <button onclick="mostrarPasso('verificar')">📍 Verificar Causa</button>
            <div class="nota-importante">⚠️ Estas indicações não substituem as Medidas de Autoproteção implementadas.</div>
        `;
    }
    else if (secao === "avaria") {
        html = `
            <h2>⚙️ Avarias e Manutenção</h2>
            <p>Escolha o problema identificado:</p>
            <button onclick="mostrarPasso('avaria')">⚠️ Avaria </button>
            <button onclick="mostrarPasso('energia')">🔌 Falha de Energia</button>
            <div class="nota-importante">⚠️ Estas indicações não substituem as Medidas de Autoproteção implementadas.</div>
        `;
    }
    else if (secao === "contato") {
        html = `
            <h2>📞 Contato e Assistência</h2>
            <p>Para emergências ou suporte:</p>
            <p>🔥 Número de Emergência Nacional: <a href="tel:112">112</a></p>
            <p>🔧 MAFEP - Suporte Técnico: <a href="tel:219152251">219152251</p>
            <button onclick="mostrarSecao('menu')">🔙 Voltar ao Menu</button>
        `;
    }

    conteudo.innerHTML = html;
}

function mostrarPasso(passo) {
    let conteudo = document.getElementById("conteudo");
    let html = "";

    if (passo === "verificar") {
        html = `
            <h2>📍 Verificar Causa</h2>
            <p>Identifique a zona no painel e vá ao local. O LED do detetor ou botão acionado estará aceso.</p>
            <img src="assets/painel_mag4.jpg" alt="Painel Teletek MAG 4" style="max-width: 100%; border-radius: 5px; margin-bottom: 15px;">
            <button onclick="mostrarPasso('incendio')">🔥 Há Incêndio</button>
            <button onclick="mostrarPasso('falso')">🚨 Falso Alarme</button>
            <button onclick="mostrarSecao('alarme')">🔙 Voltar</button>
        `;
    }
    else if (passo === "incendio") {
        html = `
            <h2>🔥 Incêndio Confirmado</h2>
            <p>Evacue o local e chame os bombeiros imediatamente.</p>
            <button onclick="window.location.href='tel:112'">📞 Ligar 112</button>
            <button onclick="mostrarSecao('alarme')">🔙 Voltar</button>
            <div class="nota-importante">⚠️ Siga as Medidas de Autoproteção!</div>
        `;
    }
    else if (passo === "falso") {
        html = `
            <h2>🚨 Falso Alarme</h2>
            <p>Siga os passos abaixo:</p>
            <ol>
                <li>Rode a chave de bloqueio de OFF para ON.<img src="assets/fechadura_mag4.png" alt="Fechadura ON/OFF" style="width: 30px; margin-bottom: -8px;"></li>
                <li>Carregue em "SILENCIAR ALARME"<img src="assets/botao_alarm.png" alt="Botão Alarme" style="width: 30px; margin-bottom: -8px;"> (silencia apenas as sirenes).</li>
                <li>Se for detetor: areje o local. Se for botão: rearme com a chave própria.</li>
                <li>Carregue em "RESET"<img src="assets/botao_reset.png" alt="Botão Reset" style="width: 30px; margin-bottom: -8px;">.</li>
            </ol>
            <button onclick="mostrarPasso('persistir')">🔊 Alarme Persiste?</button>
            <button onclick="mostrarSecao('alarme')">🔙 Voltar</button>
            <button onclick="mostrarVideo('falso')">🎥 Ver Vídeo</button>
        `;
    }
    else if (passo === "persistir") {
        html = `
            <h2>🔊 Alarme Persistente</h2>
            <p>Siga os passos abaixo:</p>
            <ol>
                <li>Rode a chave de desbloqueio de OFF para ON.<img src="assets/fechadura_mag4.png" alt="Fechadura ON/OFF" style="width: 30px; margin-bottom: -8px;"></li>
                <li>Carregue em "SILENCIAR ALARME"<img src="assets/botao_alarm.png" alt="Botão Alarme" style="width: 30px; margin-bottom: -8px;"> (silencia apenas as sirenes).</li>
                <li>Carregue em "SILENCIAR BESOURO"<img src="assets/botao_silence.png" alt="Botão Silenciar" style="width: 30px; margin-bottom: -8px;"> (2 vezes até silenciar).</li>
                <li>Contacte a MAFEP.</li>
            </ol>
            <button onclick="window.location.href='tel:21 915 2251'">📞 Ligar MAFEP</button>
            <button onclick="mostrarSecao('alarme')">🔙 Voltar</button>
        `;
    }
    else if (passo === "avaria") {
        html = `
            <h2>⚠️ Avaria </h2>
            <p>O LED amarelo <img src="assets/botao_falhasistema.png" alt="Botão Falha" style="width: 70px; margin-bottom: 0px;"> acendeu. Siga os passos:</p>
            <ol>
                <li>Rode a chave de desbloqueio de OFF para ON.<img src="assets/fechadura_mag4.png" alt="Fechadura ON/OFF" style="width: 30px; margin-bottom: -8px;"></li>
                <li>Carregue em "RESET"<img src="assets/botao_reset.png" alt="Botão Reset" style="width: 30px; margin-bottom: -8px;">.</li>
                <li>Se persistir: Carregue em "SILENCIAR BESOURO"<img src="assets/botao_silence.png" alt="Botão Silenciar" style="width: 30px; margin-bottom: -8px;"> (2 vezes até silenciar) e contacte a MAFEP.</li>
            </ol>
            <button onclick="window.location.href='tel:21 915 2251'">📞 Ligar MAFEP</button>
            <button onclick="mostrarSecao('avaria')">🔙 Voltar</button>
        `;
    }
    else if (passo === "energia") {
        html = `
            <h2>🔌 Falha de Energia</h2>
            <p>LED amarelo aceso <img src="assets/botao_falhasistema.png" alt="Botão Falha" style="width: 70px; margin-bottom: 0px;"> e LED verde apagado. Siga os passos:</p>
            <ol>
                <li>Carregue em "SILENCIAR BESOURO"<img src="assets/botao_silence.png" alt="Botão Silenciar" style="width: 30px; margin-bottom: -8px;"> (2 vezes até silenciar).</li>
                <li>Quando a energia voltar, carregue em "RESET"<img src="assets/botao_reset.png" alt="Botão Reset" style="width: 30px; margin-bottom: -8px;">.</li>
            </ol>
            <button onclick="mostrarSecao('avaria')">🔙 Voltar</button>
        `;
    }

    conteudo.innerHTML = html;
}

function mostrarVideo(tipo) {
    let conteudo = document.getElementById("conteudo");
    let html = "";

    if (tipo === "falso") {
        html = `
            <h2>🎥 Vídeo: Falso Alarme</h2>
            <video width="100%" controls>
                <source src="assets/video_falso.mp4" type="video/mp4">
                Seu navegador não suporta vídeos.
            </video>
            <button onclick="mostrarPasso('falso')">🔙 Voltar</button>
        `;
    }
    conteudo.innerHTML = html;
}

// Esconde o conteúdo ao carregar a página
document.getElementById("conteudo").style.display = "none";