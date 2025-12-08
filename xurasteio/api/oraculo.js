
export default function handler(req, res) {
  
  const db = {
    xurago: [
      { id: 1, texto: "Vai na fé!", vibe: "motivacional" },
      { id: 2, texto: "Só se vive uma vez.", vibe: "caos" },
      { id: 3, texto: "O não você já tem.", vibe: "realista" },
      { id: 4, texto: "Bora! O que é um peido pra quem tá cagado?", vibe: "filosofico" },
      { id: 5, texto: "XURAGO! Mas leva o carregador.", vibe: "pratico" },
      { id: 6, texto: "Se der errado, vira história. Se der certo, vira vitória.", vibe: "motivacional"},
      { id: 7, texto: "Vai! Depois você se explica pra você mesma.", vibe: "caos"},
      { id: 8, texto: "Coragem é ir com medo mesmo.", vibe: "motivacional"},
      { id: 9, texto: "Se a intuição piscou, responde com emoji.", vibe: "espiritual"},
      { id: 10, texto: "Isso tem potencial de dar bom… ou muito melhor.", vibe: "otimista"},
      { id: 11, texto: "Dá um passo. O universo arruma o resto.", vibe: "espiritual"},
      { id: 12, texto: "Hoje é dia de ousar um pouquinho mais.", vibe: "motivacional"},
      { id: 13, texto: "Se é pra fazer, faz com estilo.", vibe: "estiloso"},
      { id: 14, texto: "Dane-se. Vai ser divertido!", vibe: "caos"},
      { id: 15, texto: "Seu eu do futuro vai agradecer.", vibe: "futuro"},
      { id: 16, texto: "Confia no processo, mas acelera ele também.", vibe: "motivacional"},
      { id: 17, texto: "Pode ir sem rumo, às vezes é assim que funciona.", vibe: "filosofico"},
      { id: 18, texto: "Vai, antes que você pense demais.", vibe: "impulso"},
      { id: 19, texto: "Sorte é só coragem disfarçada.", vibe: "filosofico"},
      { id: 20, texto: "Abre a porta e vê no que dá.", vibe: "caos"},
      { id: 21, texto: "Se duvidou, é sinal de que tem coisa boa vindo.", vibe: "misterioso"},
      { id: 22, texto: "A vida gosta de quem se arrisca.", vibe: "motivacional"},
      { id: 23, texto: "Vai! No máximo você aprende algo.", vibe: "realista"},
      { id: 24, texto: "Pelo drama, eu iria.", vibe: "caos"},
      { id: 25, texto: "Abusa do carisma e vai.", vibe: "diva"},
      { id: 26, texto: "Oportunidade não manda e-mail. Vai você mesmo.", vibe: "realista"},
      { id: 27, texto: "Vai lá e surpreende geral.", vibe: "motivacional"},
      { id: 28, texto: "Se der medo, transforma em risada.", vibe: "leveza"},
      { id: 29, texto: "Você já fez coisa pior e deu certo.", vibe: "sincerão"},
      { id: 30, texto: "Ousadia alimenta o destino.", vibe: "poetico"},
      { id: 31, texto: "É agora ou vai virar arrependimento depois.", vibe: "realista"},
      { id: 32, texto: "Sentei aqui e pensei: vai logo.", vibe: "conselho"},
      { id: 33, texto: "Confia no seu caos organizador.", vibe: "caos"},
      { id: 34, texto: "Vai sem medo, só com print depois.", vibe: "humor"},
      { id: 35, texto: "Pula sem fazer conta. Matemática nunca impediu ninguém.", vibe: "caos"},
      { id: 36, texto: "Hoje o universo tá receptivo.", vibe: "espiritual"},
      { id: 37, texto: "A energia está pedindo atitude.", vibe: "espiritual"},
      { id: 38, texto: "Vai por impulso mesmo. Às vezes funciona.", vibe: "impulso"},
      { id: 39, texto: "Você está mais preparada do que acha.", vibe: "motivacional"},
      { id: 40, texto: "O barulho da coragem é alto hoje.", vibe: "poetico"},
      { id: 41, texto: "Escolhe o caminho que dá frio na barriga.", vibe: "filosofico"},
      { id: 42, texto: "Vai. E se der errado, eu finjo que nem vi.", vibe: "humor"},
      { id: 43, texto: "O caos te chama pelo nome.", vibe: "caos"},
      { id: 44, texto: "Vai que é teu momento!", vibe: "motivacional"},
      { id: 45, texto: "Libera a dopamina e vai.", vibe: "cientifico"},
      { id: 46, texto: "Isso tem cara de história boa pra contar.", vibe: "divertido"},
      { id: 47, texto: "Diga sim, depois você pensa no resto.", vibe: "caos"},
      { id: 48, texto: "Seu brilho tá pedindo palco.", vibe: "confiança"},
      { id: 49, texto: "Nada a perder, tudo a ganhar.", vibe: "realista"},
      { id: 50, texto: "Permite-se viver o plot twist.", vibe: "dramatico"},
      { id: 51, texto: "Vai com ousadia e café.", vibe: "pratico"},
      { id: 52, texto: "A tensão do momento diz: vai!", vibe: "misterioso"},
      { id: 53, texto: "Se anima. O universo adora um atrevido.", vibe: "espiritual"},
      { id: 54, texto: "Avisa que você chegou e entra.", vibe: "confiança"},
      { id: 55, texto: "A vida sorri pra quem não complica.", vibe: "leveza"}
    ],
    xurastei: [
      { id: 56, texto: "Melhor não, hein?", vibe: "segurança" },
      { id: 57, texto: "Xurastei total.", vibe: "preguica" },
      { id: 58, texto: "Sua conta bancária gritou: NÃO!", vibe: "financeiro" },
      { id: 59, texto: "Finge demência e dorme.", vibe: "preguica" },
      { id: 60, texto: "Isso tem cheiro de golpe.", vibe: "alerta" },
      { id: 16, texto: "Se fosse uma boa idéia, você não perguntaria para um site", vibe: "realista"},
      { id: 17, texto: "Melhor rever com calma… amanhã.", vibe: "preguica"},
      { id: 18, texto: "Hoje não é o dia de arriscar.", vibe: "segurança"},
      { id: 19, texto: "Vai dar trabalho e você sabe.", vibe: "realista"},
      { id: 20, texto: "Segura esse impulso aí.", vibe: "alerta"},
      { id: 21, texto: "Economiza energia, você vai precisar.", vibe: "pratico"},
      { id: 22, texto: "Pra quê se estressar agora?", vibe: "preguica"},
      { id: 23, texto: "Isso promete dor de cabeça, hein?", vibe: "alerta"},
      { id: 24, texto: "Sinta essa bandeira vermelha vibrando.", vibe: "alerta"},
      { id: 25, texto: "Melhor esperar um sinal mais claro.", vibe: "espiritual"},
      { id: 26, texto: "Respira. Não é hora.", vibe: "calma"},
      { id: 27, texto: "Se duvidou, é não.", vibe: "realista"},
      { id: 28, texto: "Sua paz vale mais do que isso aí.", vibe: "sabedoria"},
      { id: 29, texto: "Não venda sua energia por tão pouco.", vibe: "sabedoria"},
      { id: 30, texto: "Hoje é dia de ficar quietinha.", vibe: "preguica"},
      { id: 31, texto: "Aborta a missão antes que vire caos.", vibe: "alerta"},
      { id: 32, texto: "Não vale o desgaste.", vibe: "realista"},
      { id: 33, texto: "Você já sabe a resposta. E é não.", vibe: "sincerona"},
      { id: 34, texto: "Guarda seus neurônios pra amanhã.", vibe: "humor"},
      { id: 35, texto: "Não se meta nisso, sério.", vibe: "alerta"},
      { id: 36, texto: "Isso aí é problema dos outros, não seu.", vibe: "fronteiras"},
      { id: 37, texto: "Você merece descanso, não perrengue.", vibe: "autocuidado"},
      { id: 38, texto: "Pensa no seu sono. Vale a pena?", vibe: "realista"},
      { id: 39, texto: "Seu psicólogo pediu arrego.", vibe: "emocional"},
      { id: 40, texto: "Melhor deixar para depois mesmo.", vibe: "procrastinacao"},
      { id: 41, texto: "Essa vibe tá esquisita demais.", vibe: "energias"},
      { id: 42, texto: "Não se envolva. Nem por curiosidade.", vibe: "alerta"},
      { id: 43, texto: "Step back. Não mergulha nisso.", vibe: "segurança"},
      { id: 44, texto: "Seu sexto sentido disse ‘ihhh’.", vibe: "espiritual"},
      { id: 45, texto: "O silêncio é sua melhor resposta hoje.", vibe: "estrategia"},
      { id: 46, texto: "Não desperdiça sua paz mental.", vibe: "sabedoria"},
      { id: 47, texto: "Você não precisa provar nada pra ninguém.", vibe: "autocuidado"},
      { id: 48, texto: "Se afasta só um pouquinho… ou muito.", vibe: "alerta"},
      { id: 49, texto: "Pense no caos futuro. É não.", vibe: "previsao"},
      { id: 50, texto: "Você está cansada demais pra isso.", vibe: "preguica"},
      { id: 51, texto: "Isso é cilada com glitter.", vibe: "humor"},
      { id: 52, texto: "Evita que é sucesso.", vibe: "pratico"},
      { id: 53, texto: "Se tiver dúvida, foge.", vibe: "segurança"},
      { id: 54, texto: "Seu banco agradece você não ir.", vibe: "financeiro"},
      { id: 55, texto: "Seu emocional não aguenta esse rolê.", vibe: "emocional"},
      { id: 56, texto: "É legal, canta bem, tem presença de palco... Mas hoje é NÃO", vibe: "Humor"},
      { id: 57, texto: "Melhor manter distância estratégica.", vibe: "estrategia"},
      { id: 58, texto: "O clima não favorece.", vibe: "energias"},
      { id: 59, texto: "Para com isso, você nem quer mesmo", vibe: "realista"},
      { id: 60, texto: "Ainda não. Espera o momento certo (nunca).", vibe: "paciencia"},
      { id: 61, texto: "Melhor evitar a fadiga", vibe: "Jaiminho"},
      { id: 62, texto: "Esse risco é alto demais pro retorno.", vibe: "financeiro"},
      { id: 63, texto: "Você já sabe que vai se arrepender.", vibe: "realista"},
      { id: 64, texto: "Seu corpo de idoso disse NÃO.", vibe: "autocuidado"},
      { id: 65, texto: "Toma água e vai dormir.", vibe: "autocuidado"}

    ]
  };

   try {
    const { pergunta } = req.body || {};
    const textoPergunta = pergunta ? pergunta.toLowerCase() : "";

    const palavrasProibidas = [
      'ex', 'voltar', 'ligar', 'mensagem', 'saudade', 
      'oi sumido', 'bofinho', 'tóxico', 'toxica', 'falida', 'boy magia' 
    ];

    const ehCilada = palavrasProibidas.some(termo => textoPergunta.includes(termo));

    let decisao;

    if (ehCilada) {

      decisao = Math.random() < 0.1 ? 'xurago' : 'xurastei';
    } else {
      decisao = Math.random() < 0.5 ? 'xurago' : 'xurastei';
    }

    const listaFrases = db[decisao];
    const fraseSorteada = listaFrases[Math.floor(Math.random() * listaFrases.length)];

    return res.status(200).json({
      resultado: decisao.toUpperCase(),
      mensagem: fraseSorteada.texto,
      vibe: fraseSorteada.vibe
    });

  } catch (error) {
    console.error("ERRO NA API:", error);
    return res.status(500).json({ erro: "O oráculo bebeu demais." });
  }
}