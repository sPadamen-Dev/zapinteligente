import './App.css' // importa o CSS do componente principal

import { useState } from 'react' // importa o hook useState do React para gerenciamento de estado

const benefits = [ // define a lista de benefícios mostrados no hero
  ['Configuração fácil', 'gear'], // benefício: texto e classe de ícone
  ['Sem cartão de crédito', 'card'], // benefício: texto e classe de ícone
  ['Suporte especializado', 'support'], // benefício: texto e classe de ícone
]

const reasons = [ // define as razões para escolher o serviço
  { // razão 1
    title: 'Atendimento 24/7', // título da razão 1
    text: 'Responda seus clientes a qualquer hora do dia.', // texto explicativo da razão 1
    icon: 'headset', // ícone usado para a razão 1
  },
  { // razão 2
    title: 'Aumento de Vendas', // título da razão 2
    text: 'Mais leads e conversões para o seu negócio.', // texto explicativo da razão 2
    icon: 'growth', // ícone usado para a razão 2
  },
  { // razão 3
    title: 'Economia de Tempo', // título da razão 3
    text: 'Automação para focar no que realmente importa.', // texto explicativo da razão 3
    icon: 'time', // ícone usado para a razão 3
  },
]

const steps = [ // define as etapas de funcionamento da automação
  { // etapa 1
    title: 'Chatbots Inteligentes', // título da etapa 1
    text: 'Respostas automaticas com IA que entendem seus clientes.', // texto da etapa 1
    variant: 'bot', // variante visual da etapa 1
  },
  { // etapa 2
    title: 'Funis de Mensagens', // título da etapa 2
    text: 'Envios de sequencias personalizadas para nutrir e converter leads.', // texto da etapa 2
    variant: 'funnel', // variante visual da etapa 2
  },
  { // etapa 3
    title: 'Relatorios Completos', // título da etapa 3
    text: 'Analises e insights detalhados para decisoes inteligentes.', // texto da etapa 3
    variant: 'chart', // variante visual da etapa 3
  },
]

const testimonials = [ // define os depoimentos dos clientes
  ['Mariana S.', 'Ótimo serviço! Aumentei minhas vendas rapidamente!', 'woman'], // depoimento do cliente 1
  ['Ricardo L.', 'A automação facilitou muito meu atendimento!', 'man'], // depoimento do cliente 2
  ['Fernanda T.', 'Excelente! Recomendo a todos!', 'woman'], // depoimento do cliente 3
]

const faqs = [ // define as perguntas frequentes
  'Ainda tem dúvidas?', // pergunta 1
  'Como funciona a automação de WhatsApp?', // pergunta 2
  'Posso testar antes de contratar?', // pergunta 3
  'A plataforma é segura?', // pergunta 4
  'Preciso de conhecimento técnico para usar?', // pergunta 5
]
const faqs_respostas = [ // define as respostas para as perguntas frequentes
  'Nossa equipe ajuda voce a configurar tudo de forma simples e rapida.', // resposta para pergunta 1
  'Nossa automação usa IA para criar chatbots inteligentes, funis de mensagens personalizados e relatorios detalhados, tudo integrado ao seu WhatsApp para otimizar seu atendimento e aumentar suas vendas.', // resposta para pergunta 2
  'Sim! Oferecemos um teste gratuito de 7 dias para que voce possa experimentar todas as funcionalidades sem compromisso.', // resposta para pergunta 3
  'Sim, nossa plataforma é segura e confiável. Utilizamos criptografia avançada e seguimos as melhores práticas de segurança para proteger seus dados e os dados dos seus clientes.', // resposta para pergunta 4
  'Não, nossa plataforma é projetada para ser fácil de usar, mesmo para quem não tem conhecimento técnico. Além disso, oferecemos suporte especializado para ajudar voce em cada etapa do processo.' // resposta para pergunta 5
]

function Logo() { // componente que renderiza a marca ZapInteligente
  return (
    <a className="brand" href="#top" aria-label="ZapInteligente">{/* link principal para o topo */}
      <span className="brand-mark" aria-hidden="true">{/* marca visual escondida para leitores de tela */}
        <BotFace mini />{/* ícone do robô em versão pequena */}
      </span>
      <span>{/* contêiner do texto da marca */}
        <strong>{/* nome principal da marca */}
          Zap<span>Inteligente</span>{/* parte do nome com destaque */}
        </strong>
        <small>Automação com IA para WhatsApp</small>{/* subtítulo da marca */}
      </span>
    </a>
  )
}

function BotFace({ mini = false }) { // componente SVG do rosto do robô
  return (
    <svg
      className={mini ? 'bot-face mini' : 'bot-face'}
      viewBox="0 0 96 88"
      role="img"
      aria-label="Robo assistente"
    >
      {/* define a área do SVG */}
      <path className="antenna" d="M21 47v-9M75 47v-9" />{/* antenas do robô */}
      <circle className="antenna-dot" cx="21" cy="35" r="4" />{/* ponto da antena esquerda */}
      <circle className="antenna-dot" cx="75" cy="35" r="4" />{/* ponto da antena direita */}
      <rect className="ear" x="5" y="41" width="15" height="29" rx="7" />{/* orelha esquerda */}
      <rect className="ear" x="76" y="41" width="15" height="29" rx="7" />{/* orelha direita */}
      <rect className="helmet" x="14" y="22" width="68" height="58" rx="23" />{/* capacete do robô */}
      <rect className="screen" x="24" y="36" width="48" height="28" rx="12" />{/* tela do robô */}
      <path className="eye" d="M34 51c1-7 11-7 12 0M50 51c1-7 11-7 12 0" />{/* olhos do robô */}
      <path className="smile" d="M39 61c6 6 14 6 20 0" />{/* sorriso do robô */}
    </svg>
  )
}

function WhatsappIcon() { // componente SVG do ícone do WhatsApp
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">{/* define o tamanho do ícone */}
      <path d="M16 3.4A12.2 12.2 0 0 0 5.7 22.2L4 28l6-1.6A12.2 12.2 0 1 0 16 3.4Zm0 22.2c-2 0-3.9-.6-5.5-1.7l-.4-.2-3.1.8.8-3-.3-.5A10 10 0 1 1 16 25.6Zm5.7-7.5c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.3-.7.1a8.2 8.2 0 0 1-4.1-3.6c-.2-.4 0-.6.1-.8l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.8 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.7-.5Z" />{/* caminho do ícone WhatsApp */}
    </svg>
  )
}

function HeroBot() { // componente que renderiza a arte principal do herói
  return (
    <div className="hero-art" aria-hidden="true">{/* contêiner de arte do herói */}
  <img src="/robo.png" alt="robo" />
    
    </div>
  )
}

function SmallIcon({ type }) { // componente de ícone pequeno que varia por tipo
  if (type === 'growth') { // opção de ícone de crescimento
    return (
      <svg viewBox="0 0 90 72" aria-hidden="true">{/* define o tamanho do SVG */}
        <path className="icon-fill" d="M10 53h12v11H10Zm19-15h12v26H29Zm19-13h12v39H48Zm19-14h12v53H67Z" />{/* barras do gráfico */}
        <path className="icon-line" d="M9 64h73M16 39 34 29l16 5 26-24M68 10h12v12" />{/* linhas do gráfico */}
      </svg>
    )
  }

  if (type === 'time') { // opção de ícone de tempo
    return (
      <svg viewBox="0 0 90 72" aria-hidden="true">{/* define o tamanho do SVG */}
        <circle className="icon-fill pale" cx="50" cy="36" r="24" />{/* mostrador do relógio */}
        <path className="gear-a" d="M50 4v11M50 57v11M18 36H7M83 36H72M27 13l8 8M65 51l8 8M27 59l8-8M65 21l8-8" />{/* dentes da engrenagem */}
        <circle className="icon-line" cx="50" cy="36" r="18" />{/* contorno do mostrador */}
        <path className="icon-line" d="M50 24v14l10 7" />{/* ponteiros do relógio */}
      </svg>
    )
  }

  return (
      <img className="icon-fill icon-line" style={{ width: '55%' }} src="/atendimento.png" alt="" />
  )
}

function StepArt({ variant }) { // componente de arte para as etapas
  return (
    <div className={`step-art ${variant}`} aria-hidden="true">{/* contêiner da arte da etapa */}
      {variant === 'bot' && ( // arte de bot para a etapa bot
        <>
        <img className="step-art" src="/robo.png" alt="" />  
        </>
      )}
      {variant === 'funnel' && ( // arte de funil para a etapa funnel
        <>{/* fragmento React para múltiplos elementos */}
       <img  className="step-art" src="/funil-de-venda.png" alt="funil de venda " />
        </>
      )}
      {variant === 'chart' && ( // arte de gráfico para a etapa chart
        
        <img className="step-art" src="/relatorio.png" alt="relatorio whatsapp" />  
         
      )}
    </div>
  )
}

function App() { // componente principal que monta toda a página
  const [number, setNumber] = useState("https://wa.me/5511960309423") // define o número de contato para WhatsApp;
  const [robo, setRobo] = useState("../../dist/robo.png") // define a URL da imagem do robô para o herói
  
  const [activeFaqIndex, setActiveFaqIndex] = useState(null)

  return (
    <main id="top" className="page">{/* contêiner principal de página */}
      <header className="site-header">{/* cabeçalho do site */}
        <Logo />{/* logo e marca */}
        <nav aria-label="Navegacao principal">{/* navegação principal */}
          <a href="#inicio">Inicio</a>{/* link para a seção inicial */}
          <a href="#recursos">Recursos</a>{/* link para recursos */}
          <a href="#como-funciona">Como Funciona</a>{/* link para explicação */}
          <a href="#depoimentos">Depoimentos</a>{/* link para depoimentos */}
          <a href="#faq">FAQ</a>{/* link para perguntas frequentes */}
        </nav>
        <a className="button button-primary header-button" href={number} target="_blank" rel="noopener noreferrer">{/* botão de chamada no cabeçalho */}
          Teste Gratis Agora{/* texto do botão */}
        </a>
      </header>

      <section id="inicio" className="hero-section">{/* seção inicial hero */}
        <div className="hero-copy">{/* coluna de texto do hero */}
          <h1>{/* título principal do hero */}
            Automatize seu WhatsApp com <span>Inteligencia Artificial</span>{/* destaque em uma parte do título */}
          </h1>
          <p>Aumente suas vendas e otimize seu atendimento agora mesmo!</p>{/* mensagem de conversão */}
          <div className="hero-actions">{/* ações principais do hero */}
            <a className="button button-primary" href={number} target="_blank" rel="noopener noreferrer">{/* botão principal do hero */}
              <WhatsappIcon />{/* ícone do WhatsApp */}
              Teste Gratis Agora{/* texto do botão */}
            </a>
            <a className="button button-light" href="#recursos">{/* botão secundário */}
              Saiba Mais{/* texto do botão */}
              <span>›</span>{/* seta de navegação */}
            </a>
          </div>
          <ul className="benefit-row">{/* lista de benefícios em linha */}
            {benefits.map(([label, icon]) => ( // percorre cada benefício
              <li key={label}>{/* item da lista de benefício */}
                <span className={`mini-icon ${icon}`}></span>{/* ícone pequeno do benefício */}
                {label}{/* texto do benefício */}
              </li>
            ))}
          </ul>
        </div>
        <HeroBot />{/* renderiza a arte do herói */}
      </section>

      <div className="content-shell">{/* contêiner do conteúdo interno */}
        <section id="recursos" className="section">{/* seção de recursos */}
          <SectionTitle>Por que escolher nosso serviço?</SectionTitle>{/* título decorado */}
          <div className="card-grid reason-grid">{/* grade das razões */}
            {reasons.map((reason) => ( // percorre cada razão do array
              <article className="info-card" key={reason.title}>{/* cartão de razão */}
                <SmallIcon type={reason.icon} />{/* ícone relacionado à razão */}
                <h3>{reason.title}</h3>{/* título da razão */}
                <p>{reason.text}</p>{/* texto explicativo da razão */}
              </article>
            ))}
          </div>
        </section>

        <section id="como-funciona" className="section">{/* seção de explicação do funcionamento */}
          <SectionTitle>Como Funciona a Automação?</SectionTitle>{/* título decorado */}
          <div className="step-grid">{/* grade de etapas */}
            {steps.map((step, index) => ( // percorre cada etapa
              <article className="step-card" key={step.title}>{/* cartão de etapa */}
                <header>{/* cabeçalho do cartão */}
                  <span>{index + 1}</span>{/* número da etapa */}
                  <h3>{step.title}</h3>{/* título da etapa */}
                </header>
                <StepArt variant={step.variant} />{/* arte ilustrativa da etapa */}
                <p>{step.text}</p>{/* texto da etapa */}
              </article>
            ))}
          </div>
        </section>

        <section id="depoimentos" className="section">{/* seção de depoimentos */}
          <SectionTitle>O que nossos clientes dizem</SectionTitle>{/* título decorado */}
          <div className="card-grid testimonial-grid">{/* grade de depoimentos */}
            {testimonials.map(([name, text, avatar]) => ( // percorre cada depoimento
              <article className="testimonial-card" key={name}>{/* cartão de depoimento */}
                <div className={`avatar ${avatar}`}></div>{/* avatar do cliente */}
                <div>{/* contêiner do texto do depoimento */}
                  <h3>{name}</h3>{/* nome do cliente */}
                  <p className="stars">★★★★★</p>{/* avaliação em estrelas */}
                </div>
                <p className="quote">"{text}"</p>{/* frase do depoimento */}
              </article>
            ))}
          </div>
        </section>

        <section id="faq" className="section faq-section">{/* seção de FAQ */}
          <SectionTitle>Perguntas Frequentes</SectionTitle>{/* título decorado */}
          <div className="faq-layout">{/* layout do FAQ */}
            <div className="faq-list">{/* lista de perguntas */}
              {faqs.map((faq, index) => {
                const isOpen = activeFaqIndex === index
                return (
                  <div className={`faq-item ${isOpen ? 'open' : ''}`} key={faq}>
                    <button
                      type="button"
                      className="faq-question"
                      aria-expanded={isOpen}
                      onClick={() => setActiveFaqIndex(isOpen ? null : index)}
                    >
                      {faq}
                    </button>
                    <div className="faq-answer" aria-hidden={!isOpen}>
                      <p>{faqs_respostas[index]}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="faq-art" aria-hidden="true">{/* arte decorativa do FAQ */}
              <div className="big-whatsapp">{/* contêiner grande de WhatsApp */}
                <WhatsappIcon />{/* ícone do WhatsApp */}
              </div>
              <div className="question-bubble">?</div>{/* bolha de pergunta */}
            </div>
          </div>
          <div className="help-box">{/* caixa de ajuda */}
            <div className="help-icon">{/* ícone de ajuda */}
              <SmallIcon type="headset" />{/* ícone de headset */}
            </div>
            <div>{/* texto da ajuda */}
              <strong>Ainda precisa de ajuda?</strong>{/* título da ajuda */}
              <p>Fale com nosso time especialista pelo WhatsApp.</p>{/* explicação adicional */}
            </div>
            <a className="button button-outline" href={number} target="_blank" rel="noopener noreferrer">{/* botão de contato via WhatsApp */}
              <WhatsappIcon />{/* ícone do WhatsApp */}
              Falar no WhatsApp{/* texto do botão */}
            </a>
          </div>
        </section>
      </div>

      <section id="cta" className="final-cta">{/* seção de chamada final */}
        <div>{/* bloco de texto */}
          <h2>Pronto para transformar seu atendimento?</h2>{/* título da chamada */}
          <p>Comece agora gratuitamente!</p>{/* texto de apoio */}
        </div>
        <div>{/* bloco de ação */}
          <a className="button button-primary" href={number} target="_blank" rel="noopener noreferrer">{/* botão para WhatsApp */}
            <WhatsappIcon />{/* ícone do WhatsApp */}
            Testar Gratis Agora{/* texto do botão */}
          </a>
          <ul>{/* lista de benefícios extras */}
            <li>7 dias gratis</li>{/* item 1 */}
            <li>Sem compromisso</li>{/* item 2 */}
            <li>Cancele quando quiser</li>{/* item 3 */}
          </ul>
        </div>
      </section>
    </main>
  )
}

function SectionTitle({ children }) { // componente que renderiza título decorado
  return (
    <div className="section-title">{/* contêiner do título */}
      <span></span>{/* linha decorativa esquerda */}
      <h2>{children}</h2>{/* texto do título */}
      <span></span>{/* linha decorativa direita */}
    </div>
  )
}

export default App // exporta o componente principal como padrão
