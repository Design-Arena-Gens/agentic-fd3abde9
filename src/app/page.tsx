import { RoadmapPlanner } from "@/components/roadmap-planner";

export default function Home() {
  const phases = [
    {
      title: "1. Clarifier l'opportunité",
      description:
        "Articulez le problème client, la promesse de valeur et l'avantage IA par rapport aux solutions existantes.",
      bullets: [
        "Cartographiez l'expérience utilisateur actuelle et identifiez les frictions où l'IA apporte une valeur mesurable.",
        "Collectez les données disponibles et qualifiez leurs limitations (qualité, anonymisation, volume).",
        "Définissez des indicateurs business (NPS, temps gagné, revenus) qui guideront vos itérations.",
      ],
      deliverable: "Canvas produit IA + liste de métriques de succès.",
    },
    {
      title: "2. Prototyper avec des modèles existants",
      description:
        "Construisez un MVP end-to-end en capitalisant sur des API ou des modèles open-source prêts à l'emploi.",
      bullets: [
        "Choisissez une stack orchestratrice (LangChain, LlamaIndex, Dify) pour tester rapidement plusieurs prompts.",
        "Couplez l'IA à une interface réactive (Next.js, Vercel AI SDK, tRPC) pour valider le parcours utilisateur.",
        "Tracez chaque décision de l'IA pour préparer l'explicabilité et la conformité (logs structurés).",
      ],
      deliverable: "Prototype cliquable avec un flux d'IA opérationnel.",
    },
    {
      title: "3. Industrialiser et monitorer",
      description:
        "Sécurisez la qualité des prédictions, les performances et la gouvernance des données avant le lancement public.",
      bullets: [
        "Automatisez l'ingestion et la préparation des données (Airbyte, Dagster, dbt) avec une observabilité temps réel.",
        "Mettez en place des garde-fous: modération, filtrage, workflows de validation humaine.",
        "Déployez un monitoring métier + technique (Evidently, Arize, OpenTelemetry) avec alertes.",
      ],
      deliverable: "Pipeline MLOps + tableau de bord de pilotage IA.",
    },
  ];

  const architecture = [
    {
      name: "Interface utilisateur",
      details:
        "Next.js + Tailwind pour un front réactif, couplé à Vercel Edge Functions afin de traiter les requêtes IA proche de l'utilisateur.",
      stack: ["Next.js", "Tailwind CSS", "Vercel Edge"],
    },
    {
      name: "Orchestration IA",
      details:
        "Utilisez LangChain ou LlamaIndex pour gérer prompts, mémoire conversationnelle et appels multi-modèles.",
      stack: ["LangChain", "LlamaIndex", "OpenAI / Claude / Mistral"],
    },
    {
      name: "Données & contexte",
      details:
        "Stockage vectoriel pour la recherche sémantique (Supabase, Pinecone) et base documentaire versionnée.",
      stack: ["Supabase", "Postgres", "Vector store"],
    },
    {
      name: "MLOps & Monitoring",
      details:
        "Pipeline d'entraînement ou de fine-tuning, suivi des performances et rollbacks automatisés.",
      stack: ["Weights & Biases", "Evidently AI", "GitHub Actions"],
    },
  ];

  const resources = [
    {
      title: "Vercel AI SDK",
      link: "https://sdk.vercel.ai",
      description:
        "SDK React/Next.js pour intégrer rapidement des modèles de génération de texte, d'images ou de speech.",
    },
    {
      title: "LangSmith Playbooks",
      link: "https://docs.smith.langchain.com",
      description:
        "Cadre pour itérer sur les prompts, tracer la qualité des réponses et comparer plusieurs modèles.",
    },
    {
      title: "Supabase Vector",
      link: "https://supabase.com/vector",
      description:
        "Base de données Postgres + embeddings pour mettre en place une RAG robuste et scalabler.",
    },
    {
      title: "Étude RGPD & IA",
      link: "https://www.cnil.fr/fr/intelligence-artificielle",
      description:
        "Guides de conformité CNIL pour cadrer la collecte de données, les bases légales et le droit à l'explication.",
    },
  ];

  const faq = [
    {
      question: "Quels modèles d'IA choisir pour démarrer ?",
      answer:
        "Commencez par un modèle SaaS (OpenAI GPT-4.1, Claude 3.5, Gemini) pour valider l'usage. Ensuite, évaluez des modèles open-source (Llama 3, Mistral) afin d'optimiser le coût par requête ou de gagner en maîtrise.",
    },
    {
      question: "Comment garantir la confidentialité des données ?",
      answer:
        "Segmentez les données sensibles, chiffrez les flux et utilisez des options de déploiement européen. Activez l'opt-out de réutilisation des données auprès des fournisseurs d'API et tracez les accès pour prouver la conformité.",
    },
    {
      question: "Quel budget prévoir pour un MVP IA ?",
      answer:
        "Un MVP fonctionnel peut être construit en 4 à 6 semaines avec une équipe réduite en s'appuyant sur des API existantes. Prévoyez un budget entre 5 et 20 k€ selon la complexité du domaine et les exigences d'intégration.",
    },
    {
      question: "Faut-il une équipe data dédiée ?",
      answer:
        "Pas au démarrage. Un profil produit + un développeur full-stack peuvent assembler un MVP IA. Renforcez l'équipe avec des expert·es data/MLOps lorsque la charge d'annotation, d'automatisation ou de monitoring augmente.",
    },
  ];

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-[-20%] h-[480px] bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.28),_transparent_60%)] blur-3xl" />
      </div>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-20 px-6 pb-24 pt-16 sm:pt-20 md:gap-24 md:px-10 lg:px-12">
        <header className="flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/[0.02] p-10 shadow-xl shadow-slate-950/30 backdrop-blur">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
            ✨ Construire une application avec IA
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl">
            De l&apos;idée au produit IA en production
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-200/80 md:text-xl">
            Suivez cette feuille de route structurée pour concevoir, prototyper et déployer une
            application alimentée par l&apos;intelligence artificielle. Stack Next.js/Vercel,
            orchestrateurs d&apos;IA et bonnes pratiques MLOps: tout est rassemblé pour accélérer vos
            livraisons.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300/90">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 font-medium text-cyan-100">
              🚀 Time-to-Market: 6 semaines
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 font-medium">
              🧠 IA générative + RAG
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 font-medium">
              🔐 RGPD & Observabilité
            </span>
          </div>
        </header>

        <section className="grid gap-10 md:grid-cols-3 md:gap-8">
          {phases.map((phase) => (
            <article
              key={phase.title}
              className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.02] p-7 shadow-lg shadow-slate-950/30"
            >
              <h2 className="text-xl font-semibold text-white">{phase.title}</h2>
              <p className="text-sm text-slate-200/80">{phase.description}</p>
              <ul className="flex flex-1 flex-col gap-3 text-sm text-slate-100/80">
                {phase.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3">
                    <span aria-hidden="true" className="mt-1 text-cyan-300">
                      ●
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border border-cyan-400/30 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
                Livrable: {phase.deliverable}
              </div>
            </article>
          ))}
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr,0.8fr] lg:gap-12">
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-lg shadow-slate-950/30">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Architecture de référence
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-slate-200/75 md:text-base">
              Cette architecture cible sépare clairement collecte de données, orchestration IA et
              interface. Elle s&apos;adapte aussi bien à un MVP rapide qu&apos;à une montée en charge.
            </p>
            <ul className="mt-8 space-y-6">
              {architecture.map((layer) => (
                <li
                  key={layer.name}
                  className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold text-white">{layer.name}</h3>
                    <div className="flex flex-wrap gap-2 text-xs font-medium uppercase tracking-widest text-cyan-200">
                      {layer.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200/75">
                    {layer.details}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-8">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-slate-950 p-7 shadow-lg shadow-cyan-500/20">
              <h3 className="text-2xl font-semibold text-white">KPI à surveiller</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-100/80">
                <li>🌟 Satisfaction utilisateur (CSAT, NPS ciblé)</li>
                <li>⚡ Temps moyen de réponse de l&apos;IA &amp; taux de fallback</li>
                <li>💰 Coût par requête &amp; économies générées</li>
                <li>🔁 Taux d&apos;adoption &amp; rétention des utilisateurs actifs</li>
                <li>🛡️ Incidents de conformité ou erreurs critiques</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 shadow-lg shadow-slate-950/30">
              <h3 className="text-2xl font-semibold text-white">Équipe minimale</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-100/80">
                <li>👩‍💼 Product Manager ou fondateur·ice pour cadrer la valeur.</li>
                <li>👨‍💻 Développeur·se full-stack pour intégrer l&apos;IA et l&apos;interface.</li>
                <li>🧑‍🔬 Expert·e data externe (fractional) pour auditer modèles et datasets.</li>
                <li>🧑‍⚖️ Support juridique/RGPD ponctuel pour sécuriser la conformité.</li>
              </ul>
            </div>
          </div>
        </section>

        <RoadmapPlanner />

        <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-lg shadow-slate-950/30">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <h2 className="text-3xl font-semibold text-white md:text-4xl">
              Ressources incontournables
            </h2>
            <span className="text-sm font-medium text-cyan-100">
              Stack recommandée pour accélérer vos livraisons IA
            </span>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {resources.map((resource) => (
              <a
                key={resource.title}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-6 transition hover:border-cyan-400/50 hover:bg-cyan-500/10"
              >
                <h3 className="text-xl font-semibold text-white">{resource.title}</h3>
                <p className="text-sm leading-relaxed text-slate-200/75">
                  {resource.description}
                </p>
                <span className="text-sm font-semibold text-cyan-200">Voir la ressource →</span>
              </a>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 shadow-lg shadow-slate-950/30">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            FAQ pour lancer une application IA
          </h2>
          <div className="mt-8 space-y-6">
            {faq.map((item) => (
              <div
                key={item.question}
                className="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200/80">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        <footer className="flex flex-col items-start gap-4 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-8 shadow-2xl shadow-slate-950/60 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">
              Prêt·e à lancer votre produit IA ?
            </h2>
            <p className="mt-3 max-w-xl text-sm text-slate-200/80 md:text-base">
              Itérez par sprints, mesurez la valeur générée et soyez obsédé·e par la qualité des
              données. Cette feuille de route vous sert de repère pour orchestrer vos prochains
              livrables.
            </p>
          </div>
          <a
            href="https://vercel.com/templates"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/40 bg-cyan-500/15 px-6 py-3 text-sm font-semibold text-cyan-100 transition hover:border-cyan-300 hover:bg-cyan-500/25"
          >
            Explorer des starters Next.js
          </a>
        </footer>
      </main>
    </div>
  );
}
