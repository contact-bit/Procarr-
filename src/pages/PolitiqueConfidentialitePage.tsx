import { Helmet } from 'react-helmet-async';
import './LegalPage.css';

export function PolitiqueConfidentialitePage() {
  return (
    <div id="main-content" className="legal-page">
      <Helmet>
        <title>Politique de confidentialité | Procarré &amp; Fils</title>
        <meta
          name="description"
          content="Politique de confidentialité de Procarré & Fils : données collectées, finalités, destinataires et droits RGPD."
        />
        <link rel="canonical" href="https://procarre.fr/politique-de-confidentialite" />
      </Helmet>

      <header className="legal-hero">
        <p className="legal-kicker">Protection de vos données</p>
        <h1>Politique de confidentialité</h1>
        <p className="legal-intro">
          Cette politique explique de manière transparente quelles données sont traitées lorsque
          vous consultez procarre.fr ou nous adressez une demande.
        </p>
        <span className="legal-updated">Dernière mise à jour : 14 juillet 2026</span>
      </header>

      <div className="legal-summary" aria-label="Résumé de la politique de confidentialité">
        <div>
          <strong>Utilisation</strong>
          <span>Répondre à vos messages et préparer vos demandes de devis.</span>
        </div>
        <div>
          <strong>Partage</strong>
          <span>Uniquement avec nos prestataires techniques nécessaires.</span>
        </div>
        <div>
          <strong>Vos droits</strong>
          <span>Accès, rectification, effacement, limitation et opposition.</span>
        </div>
      </div>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Responsable du traitement</h2>
          <address className="legal-address">
            <strong>PROCARRE – SARL</strong><br />
            302 chemin des Vannades, 04100 Manosque, France<br />
            E-mail : <a href="mailto:procarre.dussert@wanadoo.fr">procarre.dussert@wanadoo.fr</a><br />
            Téléphone : <a href="tel:+33603123065">06 03 12 30 65</a>
          </address>
        </section>

        <section className="legal-section">
          <h2>2. Données collectées</h2>
          <p>Lorsque vous utilisez les formulaires de contact ou de demande de devis, nous pouvons collecter :</p>
          <ul>
            <li>votre nom, votre adresse e-mail et votre numéro de téléphone ;</li>
            <li>votre ville ou commune ;</li>
            <li>les caractéristiques de votre projet et le contenu de votre message ;</li>
            <li>les informations techniques nécessaires à la sécurité et au fonctionnement du site.</li>
          </ul>
          <p>
            Les champs signalés comme obligatoires sont nécessaires pour traiter votre demande.
            À défaut, nous ne pourrons pas vous répondre.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Finalités et bases juridiques</h2>
          <h3>Demandes de contact et de devis</h3>
          <p>
            Vos données sont utilisées pour comprendre votre besoin, vous répondre, organiser un
            éventuel rendez-vous et établir un devis. Ce traitement repose sur l’exécution de
            mesures précontractuelles prises à votre demande et, pour les simples demandes de
            renseignement, sur l’intérêt légitime de PROCARRE à répondre aux sollicitations.
          </p>
          <h3>Sécurité et fonctionnement du site</h3>
          <p>
            Certaines données techniques peuvent être traitées afin d’assurer la disponibilité,
            la sécurité et la prévention des abus. Ce traitement repose sur notre intérêt légitime
            à sécuriser le site.
          </p>
          <h3>Mesure d’audience</h3>
          <p>
            Avec votre accord, nous utilisons Vercel Web Analytics et Google Analytics pour
            obtenir des statistiques sur la fréquentation du site. Vercel Web
            Analytics ne dépose pas de cookies. Google Analytics peut en déposer et n’est chargé
            qu’après votre consentement.
          </p>
        </section>

        <section className="legal-section">
          <h2>4. Destinataires et prestataires</h2>
          <p>
            Les données sont accessibles uniquement aux personnes habilitées au sein de PROCARRE
            et, dans la stricte mesure nécessaire, aux prestataires techniques suivants :
          </p>
          <ul>
            <li><strong>Vercel Inc.</strong>, pour l’hébergement du site et la mesure d’audience ;</li>
            <li><strong>Plus Five Five, Inc. (Resend)</strong>, pour l’acheminement des messages envoyés par les formulaires.</li>
            <li><strong>Google</strong>, lorsque vous autorisez Google Maps, YouTube ou Google Analytics ;</li>
            <li><strong>Meta Platforms</strong>, lorsque vous autorisez l’affichage des publications Facebook.</li>
          </ul>
          <p>PROCARRE ne vend ni ne loue vos données personnelles.</p>
        </section>

        <section className="legal-section">
          <h2>5. Transferts hors de l’Union européenne</h2>
          <p>
            Certains de nos prestataires, notamment Vercel, Resend, Google et Meta, peuvent traiter
            des données aux États-Unis. Ils prévoient des garanties contractuelles et mécanismes
            reconnus par la réglementation applicable, notamment les clauses contractuelles types
            de la Commission européenne et, lorsqu’il est applicable, le cadre de protection des
            données UE–États-Unis.
          </p>
          <p>
            Le choix de la région européenne de Resend permet l’expédition des e-mails depuis
            l’Irlande, mais certaines métadonnées et données de compte peuvent rester traitées aux
            États-Unis.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Durées de conservation</h2>
          <ul>
            <li>
              Les demandes sans suite commerciale sont conservées pendant le temps nécessaire à
              leur traitement, puis au maximum trois ans à compter du dernier contact.
            </li>
            <li>
              Lorsqu’une relation contractuelle est engagée, les informations utiles sont
              conservées pendant sa durée, puis archivées selon les délais légaux applicables aux
              documents commerciaux, comptables et à la défense de nos droits.
            </li>
            <li>
              Les données techniques de sécurité sont conservées pour une durée proportionnée à
              la finalité poursuivie.
            </li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Cookies et traceurs</h2>
          <p>
            Le site conserve votre choix de confidentialité dans le stockage local de votre
            navigateur. Ce stockage est strictement nécessaire pour mémoriser vos préférences.
          </p>
          <p>
            Les outils de mesure d’audience et les contenus externes — publications Facebook,
            carte Google Maps et vidéos YouTube — sont désactivés tant que vous ne les avez pas
            autorisés. Vous pouvez accepter, refuser ou personnaliser ces catégories depuis le
            bandeau, puis modifier votre décision à tout moment grâce au lien « Gérer les cookies »
            présent dans le pied de page.
          </p>
          <p>
            Votre choix, qu’il s’agisse d’une acceptation ou d’un refus, est conservé pendant six
            mois. À l’issue de cette période, le site vous demandera de l’exprimer à nouveau.
          </p>
        </section>

        <section className="legal-section legal-callout">
          <h2>8. Vos droits</h2>
          <p>
            Selon votre situation, vous disposez d’un droit d’accès, de rectification,
            d’effacement, de limitation et d’opposition au traitement de vos données, ainsi que du
            droit à la portabilité lorsque celui-ci est applicable.
          </p>
          <p>
            Pour exercer vos droits, écrivez à{' '}
            <a href="mailto:procarre.dussert@wanadoo.fr">
              procarre.dussert@wanadoo.fr
            </a>{' '}
            ou à PROCARRE, 302 chemin
            des Vannades, 04100 Manosque. Une preuve d’identité pourra être demandée uniquement en
            cas de doute raisonnable sur votre identité. Nous vous répondrons dans le délai légal.
          </p>
          <p>
            Si vous estimez, après nous avoir contactés, que vos droits ne sont pas respectés, vous
            pouvez adresser une réclamation à la{' '}
            <a href="https://www.cnil.fr/fr/plaintes" target="_blank" rel="noopener noreferrer">
              CNIL
            </a>.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Évolution de cette politique</h2>
          <p>
            Cette politique peut être mise à jour pour refléter une évolution du site, de nos
            prestataires ou de la réglementation. La date de dernière mise à jour figure en haut de
            la page.
          </p>
        </section>
      </div>
    </div>
  );
}
