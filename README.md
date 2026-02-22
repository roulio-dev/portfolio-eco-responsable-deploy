This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Pourquoi Next.js est un bien pour l'éco-conception ?

La génération statique: Contrairement aux sites dynamiques classiques qui font travailler le serveur à chaque clic, Next.js me permet de générer tout mon site en HTML une seule fois sur mon ordi. En ligne, le serveur consomme très peu d'électricité.

Le découpage du code: Le framework ne fait télécharger au visiteur que le bout de code (JS/CSS) dont la page actuelle a besoin. Ça évite de surcharger le réseau inutilement avec le code de tout le site.

La minification automatique : Next.js compresse mes fichiers tout seul quand je passe en production. Il enlève les espaces, les commentaires, et ça rend mes fichiers ultra-légers à charger.

Lors de la compilation, Next.js fait le ménage et supprime automatiquement les bouts de code ou les fonctions que j'ai pu importer mais que je n'utilise finalement pas dans mon projet.

Navigation optimisée: Quand on navigue sur mon portfolio, Next.js ne recharge que le contenu qui change, sans recharger le header ou le footer à chaque fois. Ça fait beaucoup moins de requêtes HTTP et ça économise de la donnée.

## Les 5 actions concrètes mises en oeuvre sur mon site

J'ai ajouté output: "export" dans mon next.config.ts. Du coup, je n'ai pas de serveur Node.js ou de base de données qui tournent H24 dans le vide. Mon site n'est qu'un dossier de fichiers plats.

Au lieu d'importer une police Google, j'ai écrit font-family: system-ui dans mon CSS. Ça utilise la police par défaut du PC de l'utilisateur. Bilan : zéro requête externe.

Je n'ai pas utilisé de framework CSS lourd : J'aurais pu utiliser Tailwind ou Bootstrap par facilité, mais ça alourdit vite un projet. J'ai préféré tout coder à la main en CSS Modulaire pour avoir 100% le contrôle et ne charger que les quelques kilo-octets.

J'ai d'abord compressé ma photo de profil manuellement, et surtout, je lui ai mis l'attribut natif loading="lazy". Ça veut dire qu'elle ne se télécharge que si elle apparaît à l'écran, pour économiser la data.

Mon interface va droit au but. J'ai fait exprès de ne pas mettre d'animations JavaScript compliquées, de vidéos ou de carrousels. Résultat : le site s'affiche instantanément et ne tire pas sur la batterie ou le processeur des visiteurs.
