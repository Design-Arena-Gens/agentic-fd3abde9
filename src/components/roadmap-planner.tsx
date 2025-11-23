"use client";

import { FormEvent, useMemo, useState } from "react";

type Stage = "idee" | "prototype" | "production";
type Dataset = "aucun" | "csv" | "api";
type Experience = "debutant" | "confirme";
type Budget = "lean" | "standard" | "premium";

const stageLabels: Record<Stage, string> = {
  idee: "Idéation",
  prototype: "Prototype",
  production: "Production",
};

const datasetLabels: Record<Dataset, string> = {
  aucun: "À constituer",
  csv: "Données internes (CSV/Excel)",
  api: "Sources externes / API",
};

const experienceLabels: Record<Experience, string> = {
  debutant: "Débutant·e en IA",
  confirme: "Confirmé·e en IA",
};

const budgetLabels: Record<Budget, string> = {
  lean: "Lean (0 - 5 k€)",
  standard: "Standard (5 - 30 k€)",
  premium: "Ambitieux (30 k€ +)",
};

const recommendations = {
  idee: [
    "Validez la proposition de valeur à l'aide d'interviews utilisateurs et de prototypes basse fidélité.",
    "Identifiez le bénéfice généré par l'IA et assurez-vous que les données nécessaires sont accessibles.",
  ],
  prototype: [
    "Assemblez un prototype fonctionnel avec un modèle pré-entraîné (OpenAI, Claude, Gemini) et une couche de prompts solide.",
    "Mettez en place une boucle de feedback rapide avec des utilisateurs pilotes.",
  ],
  production: [
    "Industrialisez les flux de données avec une pipeline automatisée (Airbyte, Dagster, dbt).",
    "Définissez des indicateurs de performance (fiabilité, précision, temps de réponse) et alignez votre monitoring.",
  ],
};

const datasetAdvice = {
  aucun: [
    "Planifiez une étape de collecte: formulaires, scraping ou partenariats, en respectant le RGPD.",
    "Créez un schéma cible de données pour faciliter l'annotation et la gouvernance.",
  ],
  csv: [
    "Nettoyez et documentez vos colonnes clés, puis centralisez-les dans un data warehouse (BigQuery, Snowflake).",
    "Mettez en place des notebooks ou pipelines pour automatiser les mises à jour.",
  ],
  api: [
    "Sécurisez les accès (OAuth, clés API) et implémentez un cache pour limiter les coûts.",
    "Normalisez les formats pour favoriser l'hybridation avec vos données internes.",
  ],
};

const experienceAdvice = {
  debutant: [
    "Privilégiez des plateformes low-code (Bubble, Retool, WeWeb) couplées à des API d'IA.",
    "Documentez chaque expérimentation pour capitaliser sur les apprentissages.",
  ],
  confirme: [
    "Prototypage rapide via un orchestrateur (LangChain, LlamaIndex) et modèles open-source adaptés.",
    "Automatisations CI/CD pour la partie machine learning (GitHub Actions, DVC, Model Registry).",
  ],
};

const budgetAdvice = {
  lean: [
    "Utilisez des modèles SaaS facturés à l'usage pour éviter l'infrastructure.",
    "Sécurisez un parcours de paiement ou de génération de lead avant d'investir davantage.",
  ],
  standard: [
    "Mixez modèles propriétaires et open-source pour optimiser le coût/qualité.",
    "Investissez dans l'observabilité (Evidently, Arize) dès la mise en production.",
  ],
  premium: [
    "Constituez une équipe pluridisciplinaire (Produit, Data, MLOps) et définissez une roadmap trimestrielle.",
    "Explorez le fine-tuning ou la création de modèles sur-mesure.",
  ],
};

const timelineEstimates: Record<Stage, { sprints: number; focus: string }> = {
  idee: { sprints: 2, focus: "Valider l'usage et collecter des données réelles." },
  prototype: {
    sprints: 4,
    focus: "Délivrer une expérience cohérente pour 10 à 20 utilisateurs pilotes.",
  },
  production: {
    sprints: 6,
    focus: "Industrialiser la fiabilité, la sécurité et la mesure de la valeur business.",
  },
};

export function RoadmapPlanner() {
  const [stage, setStage] = useState<Stage>("idee");
  const [dataset, setDataset] = useState<Dataset>("aucun");
  const [experience, setExperience] = useState<Experience>("debutant");
  const [budget, setBudget] = useState<Budget>("lean");
  const [objectif, setObjectif] = useState("Générer un assistant qui automatise 30% du support client.");

  const summary = useMemo(() => {
    const headline =
      stage === "production"
        ? "Priorité: fiabilisez et scalabilisez votre produit IA."
        : stage === "prototype"
        ? "Priorité: livrez un MVP IA testable dans les 4 prochaines semaines."
        : "Priorité: clarifiez votre promesse et construisez votre base de données.";

    const timeline = timelineEstimates[stage];

    return {
      headline,
      timeline,
      blocks: [
        { title: "Décisions clés", items: recommendations[stage] },
        { title: "Données", items: datasetAdvice[dataset] },
        { title: "Compétences", items: experienceAdvice[experience] },
        { title: "Budget", items: budgetAdvice[budget] },
      ],
    };
  }, [stage, dataset, experience, budget]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className="w-full rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-lg shadow-lg shadow-slate-950/30">
      <div className="mb-8 flex flex-col gap-3">
        <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-cyan-300">
          🎯 Plan de route personnalisé
        </span>
        <h2 className="text-3xl font-semibold text-white md:text-4xl">
          Personnalisez votre trajectoire IA
        </h2>
        <p className="max-w-2xl text-base leading-relaxed text-slate-200/70 md:text-lg">
          Choisissez le niveau de maturité de votre projet, vos données et votre budget: nous
          calculons les chantiers prioritaires pour créer votre application IA.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 lg:grid-cols-2 lg:gap-8"
      >
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-white/80">Étape actuelle</span>
          <select
            value={stage}
            onChange={(event) => setStage(event.target.value as Stage)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
          >
            {Object.entries(stageLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-white/80">Sources de données</span>
          <select
            value={dataset}
            onChange={(event) => setDataset(event.target.value as Dataset)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
          >
            {Object.entries(datasetLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-white/80">Niveau d&apos;expérience IA</span>
          <select
            value={experience}
            onChange={(event) => setExperience(event.target.value as Experience)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
          >
            {Object.entries(experienceLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-white/80">Niveau d&apos;investissement</span>
          <select
            value={budget}
            onChange={(event) => setBudget(event.target.value as Budget)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
          >
            {Object.entries(budgetLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="lg:col-span-2 flex flex-col gap-2">
          <span className="text-sm font-semibold text-white/80">Objectif produit</span>
          <textarea
            value={objectif}
            onChange={(event) => setObjectif(event.target.value)}
            rows={3}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/30"
          />
        </label>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:shadow-xl hover:shadow-cyan-500/40"
        >
          Rafraîchir les recommandations
        </button>
      </form>

      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-cyan-300">
              Synthèse
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
              {summary.headline}
            </h3>
          </div>
          <div className="inline-flex flex-col rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-3 text-sm text-cyan-100">
            <span className="font-semibold">{summary.timeline.sprints} sprints</span>
            <span className="text-cyan-200/80">{summary.timeline.focus}</span>
          </div>
        </div>
        <p className="mt-4 max-w-3xl text-sm text-slate-100/80 md:text-base">
          Objectif déclaré: <span className="font-semibold text-white">{objectif}</span>
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {summary.blocks.map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-5"
            >
              <h4 className="text-base font-semibold text-white">{block.title}</h4>
              <ul className="mt-3 space-y-3 text-sm text-slate-200/80">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="mt-1 text-cyan-300">
                      ▹
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
