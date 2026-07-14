# Plan de mesure GA4 — Procarré & Fils

Ce document décrit la collecte installée dans le site et les réglages à effectuer une seule fois
dans Google Analytics 4. Les événements ne sont envoyés qu'après consentement et ne contiennent
ni nom, ni e-mail, ni téléphone, ni adresse, ni texte libre saisi par un visiteur.

## 1. Réglage indispensable du flux Web

Le site React envoie lui-même une seule `page_view` à chaque changement de route afin d'ajouter
les catégories SEO (`content_group`, `page_type`, `service_name`).

Dans **Admin > Flux de données > flux Web > Mesure améliorée > Pages vues > Afficher les
paramètres avancés**, désactiver **Changements de page basés sur les événements de l'historique du
navigateur**. Conserver la mesure des chargements de page. Le code bloque déjà la page vue
automatique initiale avec `send_page_view: false`.

Sans ce réglage, les navigations internes d'une SPA peuvent être comptées deux fois.

## 2. Événements collectés

| Événement | Déclenchement | Usage |
| --- | --- | --- |
| `page_view` | Une fois par route et paramètres d'URL | Pages, sessions, entrées, parcours SEO |
| `generate_lead` | Réponse serveur réussie du formulaire devis ou contact | Conversion principale |
| `form_start` | Premier focus réel dans un formulaire | Début du tunnel |
| `form_submit_attempt` | Formulaire valide avant appel de l'API | Abandon ou panne technique |
| `form_error` | Validation, erreur serveur ou réseau | Diagnostic du tunnel |
| `select_project_type` | Choix d'un type de chantier | Demande et intention commerciale |
| `cta_click` | Clic vers une demande de devis | Performance des appels à l'action |
| `contact_click` | Clic téléphone ou e-mail | Contact direct |
| `internal_link_click` | Clic sur un lien interne | Maillage interne réellement utilisé |
| `outbound_click` | Clic vers un autre domaine | Maps, réseaux sociaux, partenaires |
| `scroll_depth` | 25 %, 50 %, 75 % et 90 % | Consommation du contenu |
| `faq_interaction` | Ouverture ou fermeture d'une FAQ | Questions qui intéressent les visiteurs |
| `portfolio_filter` | Filtre des réalisations | Types de travaux recherchés |
| `portfolio_image_open` | Ouverture d'une réalisation | Intérêt fort pour un chantier |
| `portfolio_image_select` | Navigation dans une galerie | Engagement portfolio |
| `web_vital` | LCP, INP, CLS, FCP et TTFB réels | Performance technique par page/appareil |

`generate_lead` doit être marqué comme **événement clé** dans **Admin > Événements**. Ne pas
marquer `form_submit_attempt` comme conversion : il peut être suivi d'une erreur serveur.

## 3. Définitions personnalisées à créer dans GA4

Dans **Admin > Définitions personnalisées**, créer les dimensions de portée **Événement** suivantes.
Le nom affiché peut être lisible, mais le paramètre doit être copié exactement.

| Nom conseillé | Paramètre |
| --- | --- |
| Type de page | `page_type` |
| Service | `service_name` |
| Page précédente SPA | `previous_page_path` |
| Formulaire | `form_name` |
| Type de prospect | `lead_type` |
| Type de projet | `project_type` |
| Nature du projet | `project_kind` |
| Profil client | `customer_role` |
| Délai du projet | `project_delay` |
| Type de bâtiment | `building_type` |
| Méthode de contact | `contact_method` |
| Emplacement du lien | `link_location` |
| Nom du CTA | `cta_name` |
| Domaine sortant | `link_domain` |
| Profondeur de lecture | `percent_scrolled` |
| Métrique Web Vital | `metric_name` |
| État Web Vital | `metric_rating` |
| Type de navigation | `navigation_type` |

Créer aussi les métriques personnalisées de portée **Événement** :

| Nom conseillé | Paramètre | Unité |
| --- | --- | --- |
| Valeur Web Vital | `metric_value` | Standard |
| Délai avant interaction | `input_delay` | Millisecondes |
| Traitement interaction | `processing_duration` | Millisecondes |
| Présentation interaction | `presentation_delay` | Millisecondes |
| Temps premier octet | `time_to_first_byte` | Millisecondes |
| Délai ressource LCP | `resource_load_delay` | Millisecondes |
| Chargement ressource LCP | `resource_load_duration` | Millisecondes |
| Rendu élément LCP | `element_render_delay` | Millisecondes |

Ne pas enregistrer `metric_id` ni `debug_target` comme dimensions : leur cardinalité est élevée.
Ces paramètres restent disponibles dans l'export BigQuery pour les diagnostics précis.

## 4. Rapports GA4 à créer

### Acquisition SEO

- Dimension : groupe de canaux principal de la session.
- Filtre : `Organic Search`.
- Dimensions secondaires : page de destination, appareil, ville et type de page.
- Métriques : sessions, utilisateurs, sessions avec engagement, taux d'engagement, événements
  clés et taux d'événement clé de la session.

### Performance des pages SEO

- Lignes : chemin de la page puis type de page.
- Colonnes : catégorie d'appareil.
- Valeurs : vues, utilisateurs actifs, durée d'engagement moyenne, défilements à 75/90 %, clics
  CTA, contacts et `generate_lead`.

### Tunnel commercial

Créer une exploration en entonnoir :

1. `page_view` avec chemin `/devis` ou `/contact` ;
2. `form_start` ;
3. `form_submit_attempt` ;
4. `generate_lead`.

Segmenter par `project_type`, source/support de la session, page de destination et appareil.

### Qualité technique

- Lignes : chemin de page, `metric_name`, catégorie d'appareil.
- Valeur : moyenne de `metric_value`.
- Filtre conseillé : `metric_rating` vaut `needs-improvement` ou `poor`.
- Examiner dans BigQuery `debug_target` et les sous-métriques LCP/INP pour trouver l'élément ou
  la phase lente.

Seuils Core Web Vitals à surveiller : LCP <= 2 500 ms, INP <= 200 ms, CLS <= 0,1.

## 5. Relier trafic et SEO

Relier la propriété à **Google Search Console**. Search Console reste la source de vérité pour les
requêtes, impressions, clics, position moyenne et indexation. GA4 mesure ensuite ce que ces
visiteurs font sur le site et s'ils deviennent prospects.

Dans Looker Studio, utiliser deux sources :

1. Search Console, regroupée par URL et date ;
2. GA4, regroupée par page de destination et date.

Le tableau de bord mensuel doit afficher : impressions, clics, CTR, position, sessions organiques,
engagement, leads, taux de conversion et Web Vitals. Pour garder l'historique événementiel brut et
faire des jointures plus précises, activer l'export quotidien GA4 vers BigQuery.

## 6. Vérification avant exploitation

1. Accepter les cookies sur le site de production.
2. Ouvrir Tag Assistant puis GA4 DebugView.
3. Naviguer entre au moins trois routes : une seule `page_view` doit apparaître par route.
4. Tester téléphone, e-mail, CTA, FAQ, filtres et profondeur de page.
5. Envoyer un formulaire de test et vérifier qu'un seul `generate_lead` apparaît après le succès.
6. Refuser ensuite les cookies et vérifier qu'aucun événement GA4 ne part.
7. Exclure les IP internes, d'abord avec un filtre en mode **Test**, puis l'activer après validation.

Les dimensions personnalisées ne sont pas rétroactives. Les créer dès la mise en production du
plan de mesure.
