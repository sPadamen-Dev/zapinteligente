import './App.css'

import { useState } from 'react'

const whatsappUrl = 'https://wa.me/5511960309423'

const benefits = [
  ['Configuracao facil', 'gear'],
  ['Sem cartao de credito', 'card'],
  ['Suporte especializado', 'support'],
]

const reasons = [
  {
    title: 'Atendimento 24/7',
    text: 'Responda seus clientes a qualquer hora do dia.',
    icon: '/icon-atendimento.png',
    alt: 'Icone de atendimento ao cliente',
  },
  {
    title: 'Aumento de Vendas',
    text: 'Mais leads e conversoes para o seu negocio.',
    icon: '/icon-crescimento.png',
    alt: 'Icone de crescimento de vendas',
  },
  {
    title: 'Economia de Tempo',
    text: 'Automacao para focar no que realmente importa.',
    icon: '/icon-tempo.png',
    alt: 'Icone de economia de tempo',
  },
]

const steps = [
  {
    title: 'Chatbots Inteligentes',
    text: 'Respostas automaticas com IA que entendem seus clientes.',
    image: '/robo.png',
    alt: 'Robo virtual para chatbot de WhatsApp',
    width: 579,
    height: 431,
  },
  {
    title: 'Funis de Mensagens',
    text: 'Envios de sequencias personalizadas para nutrir e converter leads.',
    image: '/funil-de-venda.png',
    alt: 'Funil de venda automatizado com mensagens',
    width: 677,
    height: 369,
  },
  {
    title: 'Relatórios Completos',
    text: 'Analises e insights detalhados para decisoes inteligentes.',
    image: '/relatorio.png',
    alt: 'Grafico representando relatórios de resultados',
    width: 512,
    height: 512,
  },
]

const testimonials = [
  ['Mariana S.', 'Ótimo serviço! Aumentei minhas vendas rapidamente!', 'woman'],
  ['Ricardo L.', 'A automação facilitou muito meu atendimento!', 'man'],
  ['Fernanda T.', 'Excelente! Recomendo a todos!', 'woman'],
]

const faqs = [
  {
    question: 'Ainda tem dúvida?',
    answer: 'Nossa equipe ajuda voce a configurar tudo de forma simples e rapida.',
  },
  {
    question: 'Como funciona a automação de WhatsApp?',
    answer: 'A automação usa IA para criar chatbots, funis de mensagens e relatórios integrados ao seu WhatsApp.',
  },
  {
    question: 'Posso testar antes de contratar?',
    answer: 'Sim. Você pode iniciar uma conversa, entender o melhor fluxo e validar a solução antes de avançar.',
  },
  {
    question: 'A plataforma e segura?',
    answer: 'Sim. Trabalhamos com boas praticas de cinfiguração, controle de acesso e proteção dos dados dos clientes.',
  },
  {
    question: 'Preciso de conhecimento tecnico para usar?',
    answer: 'Não. A plataforma e simples, e nosso time acompanha voce na configuração dos primeiros fluxos.',
  },
]

function WhatsappIcon() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 3.4A12.2 12.2 0 0 0 5.7 22.2L4 28l6-1.6A12.2 12.2 0 1 0 16 3.4Zm0 22.2c-2 0-3.9-.6-5.5-1.7l-.4-.2-3.1.8.8-3-.3-.5A10 10 0 1 1 16 25.6Zm5.7-7.5c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.3-.7.1a8.2 8.2 0 0 1-4.1-3.6c-.2-.4 0-.6.1-.8l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6l-1-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.2-1.2 2.9s1.2 3.3 1.4 3.5c.2.2 2.4 3.8 5.9 5.2.8.4 1.5.6 2 .7.8.3 1.6.2 2.2.1.7-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.7-.5Z" />
    </svg>
  )
}

function BotLogo() {
  return (
    <svg className="bot-logo" viewBox="0 0 72 64" role="img" aria-label="Robo do ZapInteligente">
      <path d="M18 33v-8M54 33v-8" />
      <circle cx="18" cy="21" r="4" />
      <circle cx="54" cy="21" r="4" />
      <rect x="10" y="23" width="52" height="34" rx="16" />
      <rect x="18" y="31" width="36" height="17" rx="8" />
      <path d="M25 39c2-5 8-5 10 0M37 39c2-5 8-5 10 0M30 48c4 4 8 4 12 0" />
    </svg>
  )
}

function Button({ children, variant = 'primary', href = whatsappUrl }) {
  const isExternal = href.startsWith('http')

  return (
    <a className={`button button-${variant}`} href={href} target={isExternal ? '_blank' : undefined} rel={isExternal ? 'noopener noreferrer' : undefined}>
      {children}
    </a>
  )
}

function SectionTitle({ children, id }) {
  return (
    <div className="section-title">
      <span aria-hidden="true"></span>
      <h2 id={id}>{children}</h2>
      <span aria-hidden="true"></span>
    </div>
  )
}

function App() {
  const [activeFaqIndex, setActiveFaqIndex] = useState(0)

  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteudo</a>
      <div className="page" id="inicio">
        <header className="site-header">
          <a className="brand" href="#inicio" aria-label="ZapInteligente - inicio">
            <BotLogo />
            <span>
              <strong>Zap<span>Inteligente</span></strong>
              <small>Automacao com IA para WhatsApp</small>
            </span>
          </a>
          <nav aria-label="Navegacao principal">
            <a href="#inicio">Inicio</a>
            <a href="#recursos">Recursos</a>
            <a href="#como-funciona">Como Funciona</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#faq">FAQ</a>
          </nav>
          <Button>Teste Gratis Agora</Button>
        </header>

        <main id="conteudo">
          <section className="hero-section" aria-labelledby="hero-title">
            <div className="hero-copy">
              <h1 id="hero-title">Automatize seu WhatsApp com <span>Inteligencia Artificial</span></h1>
              <p>Aumente suas vendas e otimize seu atendimento agora mesmo!</p>
              <div className="hero-actions">
                <Button>
                  <WhatsappIcon />
                  Teste Gratis Agora
                </Button>
                <Button variant="light" href="#recursos">Saiba Mais <span aria-hidden="true">›</span></Button>
              </div>
              <ul className="benefit-row" aria-label="Beneficios principais">
                {benefits.map(([label, icon]) => (
                  <li key={label}>
                    <span className={`mini-icon ${icon}`} aria-hidden="true"></span>
                    {label}
                  </li>
                ))}
              </ul>
            </div>
            <div className="hero-media" aria-hidden="true">
              <span className="floating-card whats"><WhatsappIcon /></span>
              <span className="floating-card chat"></span>
              <span className="floating-card insta"></span>
              <img src="/robo.png" width="579" height="431" alt="" fetchPriority="high" />
            </div>
          </section>

          <div className="content-shell">
            <section id="recursos" className="section" aria-labelledby="recursos-title">
              <SectionTitle id="recursos-title">Por que escolher nosso servico?</SectionTitle>
              <div className="card-grid reason-grid">
                {reasons.map((reason) => (
                  <article className="info-card" key={reason.title}>
                    <img src={reason.icon} width="96" height="96" alt={reason.alt} loading="lazy" decoding="async" />
                    <h3>{reason.title}</h3>
                    <p>{reason.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="como-funciona" className="section" aria-labelledby="como-funciona-title">
              <SectionTitle id="como-funciona-title">Como Funciona a Automacao?</SectionTitle>
              <div className="step-grid">
                {steps.map((step, index) => (
                  <article className="step-card" key={step.title}>
                    <header>
                      <span aria-label={`Etapa ${index + 1}`}>{index + 1}</span>
                      <h3>{step.title}</h3>
                    </header>
                    <div className="step-media">
                      <img src={step.image} width={step.width} height={step.height} alt={step.alt} loading="lazy" decoding="async" />
                    </div>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </section>

            <section id="depoimentos" className="section" aria-labelledby="depoimentos-title">
              <SectionTitle id="depoimentos-title">O que nossos clientes dizem</SectionTitle>
              <div className="card-grid testimonial-grid">
                {testimonials.map(([name, text, avatar]) => (
                  <figure className="testimonial-card" key={name}>
                    <div className={`avatar ${avatar}`} aria-hidden="true"></div>
                    <figcaption>
                      <strong>{name}</strong>
                      <span aria-label="Avaliacao cinco estrelas">★★★★★</span>
                    </figcaption>
                    <blockquote>{text}</blockquote>
                  </figure>
                ))}
              </div>
            </section>

            <section id="faq" className="section faq-section" aria-labelledby="faq-title">
              <SectionTitle id="faq-title">Perguntas Frequentes</SectionTitle>
              <div className="faq-layout">
                <div className="faq-list">
                  {faqs.map((faq, index) => {
                    const isOpen = activeFaqIndex === index
                    const panelId = `faq-panel-${index}`

                    return (
                      <div className="faq-item" key={faq.question}>
                        <button type="button" className="faq-question" aria-expanded={isOpen} aria-controls={panelId} onClick={() => setActiveFaqIndex(isOpen ? null : index)}>
                          {faq.question}
                          <span aria-hidden="true">{isOpen ? '⌃' : '⌄'}</span>
                        </button>
                        <div id={panelId} className="faq-answer" hidden={!isOpen}>
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
                <div className="faq-art" aria-hidden="true">
                  <div className="big-whatsapp"><WhatsappIcon /></div>
                  <div className="question-bubble">?</div>
                </div>
              </div>
              <div className="help-box">
                <div className="help-icon" aria-hidden="true"><BotLogo /></div>
                <div>
                  <strong>Ainda precisa de ajuda?</strong>
                  <p>Fale com nosso time especialista pelo WhatsApp.</p>
                </div>
                <Button variant="outline">
                  <WhatsappIcon />
                  Falar no WhatsApp
                </Button>
              </div>
            </section>
          </div>

          <section className="final-cta" aria-labelledby="cta-title">
            <div>
              <h2 id="cta-title">Pronto para transformar seu atendimento?</h2>
              <p>Comece agora gratuitamente!</p>
            </div>
            <div>
              <Button>
                <WhatsappIcon />
                Testar Gratis Agora
              </Button>
              <ul aria-label="Condicoes do teste gratis">
                <li>7 dias gratis</li>
                <li>Sem compromisso</li>
                <li>Cancele quando quiser</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
