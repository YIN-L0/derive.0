import { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Bookmark,
  Check,
  Compass,
  Globe2,
  MapPin,
  Menu,
  MoveUpRight,
  Plus,
  Send,
  X,
} from 'lucide-react';
import './style.css';

const copy = {
  en: {
    nav: ['The idea', 'Paris atlas', 'Manifesto', 'Artist union'],
    eyebrow: 'A living atlas of art & place',
    titleA: 'The city is',
    titleB: 'not a backdrop.',
    intro: 'Walk into the stories already living beneath your feet.',
    homeText: 'Derive reconnects streets to the films, books, artists and ideas that have passed through them. Follow a feeling, not a pin. Let the city write the itinerary.',
    explore: 'Wander through Paris',
    manifestoLink: 'Read our manifesto',
    imageCaption: 'Paris, 48°51′ N — a city of unfinished sentences',
    sideNote: 'No route is ever the same twice.',
    index: '01 — The proposition',
    sectionTitle: 'A place is never just a place.',
    sectionCopy: 'A pavement can hold a scene. A doorway, a whole novel. Derive makes those invisible layers walkable, gathering cultural memory into routes shaped by curiosity and the people who live here.',
    principles: ['Start with a place', 'Follow an association', 'Leave a trace'],
    atlasTitle: 'Paris, in fragments',
    atlasDeck: 'Pick a point. Find what happened here, what was imagined here, and what might happen next.',
    routeLabel: 'A left-bank drift',
    routeMeta: '5 traces · 3.2 km · about 48 min',
    selected: 'At this address',
    allTraces: 'Five traces along the way',
    begin: 'Begin this dérive',
    checked: 'Trace recorded',
    checkIn: 'Check in here',
    save: 'Save trace',
    notePlaceholder: 'What did this place make you notice?',
    noteSaved: 'Your field note is saved on this device.',
    source: 'A cultural association, not an official endorsement.',
    manifestoEyebrow: 'A note for the wandering',
    manifestoTitle: 'The right to lose our way.',
    manifestoLead: 'We refuse the city as a product to be consumed at speed.',
    manifestoBody: [
      'We believe a street is more than its destination. It is a score for the body, a memory held in stone, a meeting that has not happened yet.',
      'We borrow the Situationists’ invitation to drift, but make no map into a command. Derive is an open invitation to walk without efficiency: to let architecture, a line of dialogue, a stranger’s gesture alter your direction.',
      'Culture does not belong only behind glass. It leaks into cafés, crossings, stairwells, cinemas and the names we give a corner. We gather these fragments with care, credit their makers, and return them to the places that shaped them.',
      'The city is not a feed. It is a shared, unfinished work. Walk gently. Notice who is missing. Add your trace. Leave room for another.'
    ],
    manifestoSign: 'For the right to wander, remember, and remake the everyday.',
    unionEyebrow: 'For the ones who make and notice',
    unionTitle: 'A city is made by its witnesses.',
    unionCopy: 'Derive is an independent cultural atlas built with artists, writers, researchers, walkers and neighbours. Add a route, host a dérive, annotate a place, or help us question the map.',
    waysTitle: 'Bring your practice',
    ways: ['Propose a place-led artwork or route', 'Join a collective walk or reading', 'Contribute research, memory or translation'],
    contactTitle: 'Keep in touch',
    contactCopy: 'A quiet letter when the atlas moves. No noise, no tracking.',
    emailPlaceholder: 'Your email address',
    join: 'Join the list',
    joined: 'You are on the list on this device.',
    emailNote: 'Demo form: your address stays in this browser until a mailing-list service is connected.',
    direct: 'Or write to the collective',
    footerLine: 'Walk slowly. The city is speaking.',
    back: 'Back to the beginning',
    language: 'Français',
    close: 'Close menu',
    open: 'Open menu',
    savedNotes: 'Field notes',
    noNotes: 'Your observations will gather here.',
    madeWith: 'An open cultural atlas in progress',
  },
  fr: {
    nav: ['Le projet', 'Atlas de Paris', 'Manifeste', 'Union des artistes'],
    eyebrow: 'Un atlas vivant de l’art et des lieux',
    titleA: 'La ville',
    titleB: 'n’est pas un décor.',
    intro: 'Entrez dans les histoires qui vivent déjà sous vos pas.',
    homeText: 'Derive relie les rues aux films, aux livres, aux artistes et aux idées qui les ont traversées. Suivez une intuition, pas une épingle. Laissez la ville écrire l’itinéraire.',
    explore: 'Dériver dans Paris',
    manifestoLink: 'Lire notre manifeste',
    imageCaption: 'Paris, 48°51′ N — une ville de phrases inachevées',
    sideNote: 'Aucun trajet ne se répète.',
    index: '01 — La proposition',
    sectionTitle: 'Un lieu n’est jamais seulement un lieu.',
    sectionCopy: 'Un trottoir peut contenir une scène. Une porte, tout un roman. Derive rend ces strates invisibles praticables et rassemble la mémoire culturelle en itinéraires guidés par la curiosité et celles et ceux qui habitent la ville.',
    principles: ['Partir d’un lieu', 'Suivre une association', 'Laisser une trace'],
    atlasTitle: 'Paris, par fragments',
    atlasDeck: 'Choisissez un point. Découvrez ce qui s’y est passé, ce qui s’y est imaginé, et ce qui pourrait arriver.',
    routeLabel: 'Une dérive rive gauche',
    routeMeta: '5 traces · 3,2 km · environ 48 min',
    selected: 'À cette adresse',
    allTraces: 'Cinq traces en chemin',
    begin: 'Commencer la dérive',
    checked: 'Trace enregistrée',
    checkIn: 'Pointer ici',
    save: 'Enregistrer la trace',
    notePlaceholder: 'Qu’est-ce que ce lieu vous a fait remarquer ?',
    noteSaved: 'Votre note de terrain est enregistrée sur cet appareil.',
    source: 'Une association culturelle, sans affiliation officielle.',
    manifestoEyebrow: 'Note à l’usage des personnes qui dérivent',
    manifestoTitle: 'Le droit de se perdre.',
    manifestoLead: 'Nous refusons la ville comme produit à consommer à toute vitesse.',
    manifestoBody: [
      'Nous croyons qu’une rue est plus qu’une destination. C’est une partition pour le corps, une mémoire dans la pierre, une rencontre qui n’a pas encore eu lieu.',
      'Nous reprenons l’invitation situationniste à la dérive, sans faire de la carte une consigne. Derive invite à marcher sans rendement : laisser l’architecture, une réplique, le geste d’un inconnu infléchir sa direction.',
      'La culture ne se trouve pas seulement derrière une vitre. Elle déborde dans les cafés, les carrefours, les escaliers, les cinémas et les noms donnés à un coin de rue. Nous rassemblons ces fragments avec soin, citons leurs créateurs et les rendons aux lieux qui les ont façonnés.',
      'La ville n’est pas un fil d’actualité. C’est une œuvre commune, inachevée. Marchez avec douceur. Voyez qui manque. Ajoutez votre trace. Laissez une place à l’autre.'
    ],
    manifestoSign: 'Pour le droit de dériver, de se souvenir et de réinventer le quotidien.',
    unionEyebrow: 'Pour celles et ceux qui font et qui regardent',
    unionTitle: 'La ville est faite par ses témoins.',
    unionCopy: 'Derive est un atlas culturel indépendant, construit avec des artistes, écrivain·es, chercheur·ses, marcheur·ses et voisin·es. Proposez un itinéraire, animez une dérive, annotez un lieu ou aidez-nous à questionner la carte.',
    waysTitle: 'Faites entrer votre pratique',
    ways: ['Proposer une œuvre ou un itinéraire situé', 'Rejoindre une marche ou une lecture collective', 'Contribuer par une recherche, un souvenir ou une traduction'],
    contactTitle: 'Restons en lien',
    contactCopy: 'Une lettre discrète quand l’atlas avance. Pas de bruit, pas de suivi.',
    emailPlaceholder: 'Votre adresse e-mail',
    join: 'Rejoindre la liste',
    joined: 'Vous êtes sur la liste, sur cet appareil.',
    emailNote: 'Formulaire de démonstration : votre adresse reste dans ce navigateur tant qu’un service de liste n’est pas connecté.',
    direct: 'Ou écrire au collectif',
    footerLine: 'Marchez lentement. La ville parle.',
    back: 'Retour au début',
    language: 'English',
    close: 'Fermer le menu',
    open: 'Ouvrir le menu',
    savedNotes: 'Notes de terrain',
    noNotes: 'Vos observations se rassembleront ici.',
    madeWith: 'Un atlas culturel ouvert en devenir',
  },
};

const traces = [
  {
    id: 'shakespeare',
    number: '01',
    name: 'Shakespeare and Company',
    area: '5e arrondissement',
    work: 'A Moveable Feast',
    artist: 'Ernest Hemingway · 1964',
    lat: 35,
    left: 42,
    image: 'photo-1500530855697-b586d89ba3ee',
    en: 'A bookshop that became a refuge for a generation of writers. Hemingway remembered the Left Bank as a life assembled from walks, cafés and sentences.',
    fr: 'Une librairie devenue refuge pour toute une génération d’écrivains. Hemingway se souvient de la rive gauche comme d’une vie faite de marches, de cafés et de phrases.',
  },
  {
    id: 'flore',
    number: '02',
    name: 'Café de Flore',
    area: '6e arrondissement',
    work: 'The Ethics of Ambiguity',
    artist: 'Simone de Beauvoir · 1947',
    lat: 54,
    left: 28,
    image: 'photo-1514924013411-cbf25faa35bb',
    en: 'A table as a public thinking room. Beauvoir and Sartre made the café part of their working day, where private thought could meet the street.',
    fr: 'Une table comme espace public de pensée. Beauvoir et Sartre faisaient du café une partie de leur journée de travail, là où la pensée privée rencontre la rue.',
  },
  {
    id: 'campagne',
    number: '03',
    name: 'Rue Campagne-Première',
    area: '14e arrondissement',
    work: 'L’Âge d’or',
    artist: 'Luis Buñuel · 1930',
    lat: 73,
    left: 52,
    image: 'photo-1499856871958-5b9627545d1a',
    en: 'A street crossing ordinary life with the unruly image. The Surrealists treated the city as a place where chance could interrupt the everyday.',
    fr: 'Une rue où la vie ordinaire croise l’image indocile. Les surréalistes voyaient la ville comme un lieu où le hasard pouvait interrompre le quotidien.',
  },
  {
    id: 'champs',
    number: '04',
    name: 'Champs-Élysées',
    area: '8e arrondissement',
    work: 'À bout de souffle',
    artist: 'Jean-Luc Godard · 1960',
    lat: 27,
    left: 72,
    image: 'photo-1502602898657-3e91760cbb34',
    en: 'A walk turned into cinema. Patricia moves through the boulevard in Godard’s film, making the familiar street feel improvised and new.',
    fr: 'Une marche transformée en cinéma. Patricia traverse le boulevard chez Godard et rend familière cette rue, tout en la faisant paraître improvisée.',
  },
  {
    id: 'notredame',
    number: '05',
    name: 'Parvis Notre-Dame',
    area: '4e arrondissement',
    work: 'Notre-Dame de Paris',
    artist: 'Victor Hugo · 1831',
    lat: 15,
    left: 43,
    image: 'photo-1502602898657-3e91760cbb34',
    en: 'Hugo gave the cathedral the scale of a protagonist: stone, time and social life bound into one impossible body.',
    fr: 'Hugo donne à la cathédrale l’ampleur d’un personnage : la pierre, le temps et la vie sociale réunis en un seul corps impossible.',
  },
];

const readStorage = (key, fallback) => {
  try {
    return JSON.parse(localStorage.getItem(key) || 'null') ?? fallback;
  } catch {
    return fallback;
  }
};

function App() {
  const [language, setLanguage] = useState(() => localStorage.getItem('derive-language') || 'en');
  const [page, setPage] = useState(() => window.location.hash.replace('#/', '') || 'home');
  const [activeTrace, setActiveTrace] = useState(traces[0]);
  const [checkedIns, setCheckedIns] = useState(() => readStorage('derive-checkins', []));
  const [notes, setNotes] = useState(() => readStorage('derive-notes', []));
  const [noteDraft, setNoteDraft] = useState('');
  const [email, setEmail] = useState('');
  const [joined, setJoined] = useState(() => Boolean(localStorage.getItem('derive-contact')));
  const [mobileOpen, setMobileOpen] = useState(false);
  const [notice, setNotice] = useState('');
  const t = copy[language];

  useEffect(() => {
    const syncPage = () => setPage(window.location.hash.replace('#/', '') || 'home');
    window.addEventListener('hashchange', syncPage);
    return () => window.removeEventListener('hashchange', syncPage);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    localStorage.setItem('derive-language', language);
  }, [language]);

  useEffect(() => {
    if (!notice) return undefined;
    const timer = window.setTimeout(() => setNotice(''), 2800);
    return () => window.clearTimeout(timer);
  }, [notice]);

  const go = (target) => {
    setMobileOpen(false);
    if (page === target) window.scrollTo({ top: 0, behavior: 'smooth' });
    else window.location.hash = `/${target}`;
  };

  const toggleCheckIn = () => {
    const next = checkedIns.includes(activeTrace.id)
      ? checkedIns.filter((id) => id !== activeTrace.id)
      : [...checkedIns, activeTrace.id];
    setCheckedIns(next);
    localStorage.setItem('derive-checkins', JSON.stringify(next));
    setNotice(next.includes(activeTrace.id) ? t.checked : t.allTraces);
  };

  const saveNote = (event) => {
    event.preventDefault();
    if (!noteDraft.trim()) return;
    const next = [{ text: noteDraft.trim(), place: activeTrace.name, date: new Date().toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-GB') }, ...notes];
    setNotes(next);
    localStorage.setItem('derive-notes', JSON.stringify(next));
    setNoteDraft('');
    setNotice(t.noteSaved);
  };

  const joinList = (event) => {
    event.preventDefault();
    if (!email.trim()) return;
    localStorage.setItem('derive-contact', email.trim());
    setJoined(true);
    setEmail('');
  };

  const changePage = (target) => {
    const keys = ['home', 'atlas', 'manifesto', 'union'];
    const index = keys.indexOf(target);
    return index < 0 ? 0 : index;
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="wordmark" href="#/home" onClick={() => go('home')} aria-label="Derive, home">dérive<span>®</span></a>
        <span className="header-edition">PARIS / FIELD EDITION 01</span>
        <button className="mobile-menu-toggle icon-button" type="button" aria-label={mobileOpen ? t.close : t.open} onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav className={`main-nav ${mobileOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {['home', 'atlas', 'manifesto', 'union'].map((target, index) => (
            <a key={target} href={`#/${target}`} onClick={(event) => { event.preventDefault(); go(target); }} className={page === target ? 'active' : ''}>
              <span className="nav-index">0{index + 1}</span>{t.nav[index]}
            </a>
          ))}
        </nav>
        <button className="language-switch" type="button" onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')} aria-label={`Switch language to ${t.language}`}>
          <Globe2 size={15} strokeWidth={1.6} /> <span>{t.language}</span>
        </button>
      </header>

      <main key={page} className="page-content">
        {page === 'home' && (
          <>
            <section className="hero-section">
              <div className="hero-copy">
                <div className="eyebrow"><span className="live-dot" />{t.eyebrow}</div>
                <div className="hero-heading-wrap">
                  <h1><span>{t.titleA}</span><em>{t.titleB}</em></h1>
                  <span className="hero-star" aria-hidden="true">✳</span>
                </div>
                <p className="hero-intro">{t.intro}</p>
                <p className="hero-description">{t.homeText}</p>
                <div className="hero-actions">
                  <button className="button button-dark" type="button" onClick={() => go('atlas')}>{t.explore}<ArrowRight size={16} /></button>
                  <button className="text-link" type="button" onClick={() => go('manifesto')}>{t.manifestoLink}<ArrowUpRight size={15} /></button>
                </div>
                <div className="hero-index"><span>48°51′24″N</span><span>02°21′08″E</span><span>01 / 04</span></div>
              </div>
              <figure className="hero-image">
                <img src="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=1500&q=88" alt="Paris rooftops and streets in warm afternoon light" />
                <span className="image-number">FIG. 01</span>
                <div className="image-stamp"><Compass size={18} strokeWidth={1.4} /><span>WALK<br />WITHOUT<br />A PLAN</span></div>
                <figcaption>{t.imageCaption}</figcaption>
                <span className="image-side-note">{t.sideNote}</span>
              </figure>
            </section>
            <section className="thesis-section">
              <div className="section-kicker"><span>{t.index}</span><span>DERIVE / 2026</span></div>
              <div className="thesis-layout">
                <h2>{t.sectionTitle}</h2>
                <div className="thesis-right"><p>{t.sectionCopy}</p><div className="principle-row">{t.principles.map((item, index) => <span key={item}><b>0{index + 1}</b>{item}</span>)}</div></div>
              </div>
            </section>
            <section className="preview-section">
              <div className="preview-heading"><div><span className="micro-label">AN OPEN INVITATION / PARIS</span><h2>Take the long way.</h2></div><button className="round-arrow" aria-label={t.explore} type="button" onClick={() => go('atlas')}><ArrowUpRight size={22} /></button></div>
              <div className="preview-strip">
                {traces.slice(0, 3).map((trace) => <button className="preview-place" key={trace.id} type="button" onClick={() => { setActiveTrace(trace); go('atlas'); }}><span>{trace.number}</span><b>{trace.name}</b><ArrowUpRight size={14} /></button>)}
              </div>
            </section>
          </>
        )}

        {page === 'atlas' && (
          <section className="atlas-page">
            <div className="page-heading atlas-heading">
              <div><div className="eyebrow"><span className="live-dot" />PARIS / ROUTE 01</div><h1>{t.atlasTitle}</h1><p>{t.atlasDeck}</p></div>
              <div className="route-meta"><span className="route-symbol"><Compass size={22} /></span><div><b>{t.routeLabel}</b><small>{t.routeMeta}</small></div></div>
            </div>
            <div className="atlas-workspace">
              <div className="map-panel">
                <div className="map-topline"><span>48°51′ N / 02°20′ E</span><span>NOT TO SCALE · WALKABLE MEMORY</span></div>
                <div className="map-canvas" aria-label="Illustrated map of Paris with five interactive cultural landmarks">
                  <svg className="map-streets" viewBox="0 0 800 600" preserveAspectRatio="none" aria-hidden="true">
                    <path className="river" d="M-30 390 C95 325 143 408 253 354 S405 286 500 322 S682 274 830 219" />
                    <path className="street" d="M45 90 L250 183 L340 110 L550 177 L760 80 M30 250 L203 260 L275 340 L418 262 L590 310 L760 270 M95 470 L220 408 L332 515 L486 432 L665 510 M110 40 L130 180 L80 330 L130 550 M320 20 L310 160 L410 240 L350 400 L400 590 M560 45 L530 190 L635 255 L565 395 L700 580 M740 120 L680 200 L755 350" />
                    <path className="route-line" d="M340 110 C320 150 302 213 275 260 S355 345 418 262 S545 188 550 177 S500 275 590 310 S540 415 486 432" />
                    <path className="district-line" d="M180 65 L250 183 L203 260 L220 408 L332 515 M450 60 L410 240 L418 262 L350 400 L400 590 M650 80 L550 177 L635 255 L590 310 L665 510" />
                  </svg>
                  <span className="map-label label-rive">RIVE GAUCHE</span><span className="map-label label-seine">LA SEINE</span><span className="map-label label-latin">QUARTIER LATIN</span>
                  {traces.map((trace) => <button key={trace.id} className={`map-marker ${activeTrace.id === trace.id ? 'selected' : ''} ${checkedIns.includes(trace.id) ? 'visited' : ''}`} style={{ top: `${trace.lat}%`, left: `${trace.left}%` }} onClick={() => setActiveTrace(trace)} type="button" aria-label={`${trace.name}${checkedIns.includes(trace.id) ? ', visited' : ''}`}><span className="marker-num">{trace.number}</span><span className="marker-pulse" /></button>)}
                  <div className="map-compass">N<ArrowUpRight size={16} /></div>
                  <div className="map-legend"><span><i className="legend-route" /> DÉRIVE 01</span><span><i className="legend-check" /> TRACES</span></div>
                </div>
                <div className="map-bottomline"><span>STREET MEMORY / PARIS</span><span>CLICK A TRACE TO BEGIN</span></div>
              </div>
              <aside className="trace-detail">
                <div className="detail-index"><span>{t.selected}</span><span>{activeTrace.number} / 05</span></div>
                <div className="detail-image"><img src={`https://images.unsplash.com/${activeTrace.image}?auto=format&fit=crop&w=900&q=80`} alt={`Atmospheric Paris street near ${activeTrace.name}`} /><span className="detail-image-label">SITE NOTE / {activeTrace.area.toUpperCase()}</span></div>
                <div className="detail-copy"><p className="micro-label">{activeTrace.area.toUpperCase()} · {activeTrace.number}</p><h2>{activeTrace.name}</h2><p className="work-title">{activeTrace.work}</p><p className="artist-line">{activeTrace.artist}</p><p className="trace-description">{activeTrace[language]}</p>
                  <button className={`button ${checkedIns.includes(activeTrace.id) ? 'button-marked' : 'button-dark'}`} type="button" onClick={toggleCheckIn}>{checkedIns.includes(activeTrace.id) ? <Check size={16} /> : <MapPin size={16} />}{checkedIns.includes(activeTrace.id) ? t.checked : t.checkIn}</button>
                </div>
                <form className="field-note" onSubmit={saveNote}><label htmlFor="field-note-text">{t.savedNotes.toUpperCase()}</label><textarea id="field-note-text" value={noteDraft} onChange={(event) => setNoteDraft(event.target.value)} placeholder={t.notePlaceholder} rows="2" /><button type="submit" className="note-submit" aria-label={t.save}><Plus size={15} />{t.save}</button></form>
              </aside>
            </div>
            <div className="trace-list-section"><div className="trace-list-header"><h2>{t.allTraces}</h2><span>{checkedIns.length} / 05 {language === 'fr' ? 'VISITÉS' : 'VISITED'}</span></div><div className="trace-list">{traces.map((trace) => <button key={trace.id} type="button" className={`trace-row ${activeTrace.id === trace.id ? 'current' : ''}`} onClick={() => setActiveTrace(trace)}><span className="trace-row-number">{trace.number}</span><span className="trace-row-name">{trace.name}<small>{trace.area}</small></span><span className="trace-row-work">{trace.work}<small>{trace.artist}</small></span><span className="trace-row-state">{checkedIns.includes(trace.id) ? <Check size={17} /> : <ArrowUpRight size={17} />}</span></button>)}</div><p className="source-note">{t.source}</p></div>
            {notes.length > 0 && <section className="saved-notes"><h2>{t.savedNotes}</h2>{notes.slice(0, 3).map((note, index) => <p key={`${note.date}-${index}`}><span>{note.place} · {note.date}</span>{note.text}</p>)}</section>}
          </section>
        )}

        {page === 'manifesto' && (
          <section className="manifesto-page">
            <div className="manifesto-top"><div><div className="eyebrow"><span className="live-dot" />{t.manifestoEyebrow}</div><h1>{t.manifestoTitle}</h1></div><div className="manifesto-mark">D<br />—<br />01</div></div>
            <div className="manifesto-rule"><span>DERIVE / NOTES FOR AN UNFINISHED CITY</span><span>PARIS · MMXXVI</span></div>
            <div className="manifesto-grid"><p className="manifesto-lead">{t.manifestoLead}</p><div className="manifesto-text">{t.manifestoBody.map((paragraph, index) => <p key={paragraph}><span>0{index + 1}</span>{paragraph}</p>)}</div></div>
            <div className="manifesto-end"><span className="manifesto-asterisk">✳</span><p>{t.manifestoSign}</p><button className="text-link" type="button" onClick={() => go('union')}>{t.nav[3]}<ArrowRight size={15} /></button></div>
            <figure className="manifesto-image"><img src="https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?auto=format&fit=crop&w=1800&q=85" alt="Parisian café tables spilling onto the pavement" /><figcaption>THE EVERYDAY IS ALREADY A WORK IN PROGRESS.</figcaption></figure>
          </section>
        )}

        {page === 'union' && (
          <section className="union-page">
            <div className="union-heading"><div className="eyebrow"><span className="live-dot" />{t.unionEyebrow}</div><h1>{t.unionTitle}</h1><p>{t.unionCopy}</p></div>
            <div className="union-layout"><div className="union-left"><div className="union-image"><img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85" alt="A shared studio table ready for collective work" /><span>COMMON ROOM / OPEN DOOR</span></div><div className="ways-block"><h2>{t.waysTitle}</h2>{t.ways.map((way, index) => <div className="way-row" key={way}><span>0{index + 1}</span><p>{way}</p><MoveUpRight size={16} /></div>)}</div></div>
              <div className="contact-panel"><div className="contact-index"><span>DERIVE / UNION 01</span><span><Bookmark size={15} /> OPEN CALL</span></div><h2>{t.contactTitle}</h2><p>{t.contactCopy}</p><form className="contact-form" onSubmit={joinList}><label htmlFor="contact-email">EMAIL / COURRIEL</label><div className="email-field"><input id="contact-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder={t.emailPlaceholder} required /><button type="submit" aria-label={t.join}>{joined ? <Check size={18} /> : <Send size={17} />}</button></div><button className="button button-acid" type="submit">{joined ? t.joined : t.join}<ArrowRight size={16} /></button></form><small className="email-note">{joined ? t.joined : t.emailNote}</small><div className="contact-divider"><span>OR / OU</span></div><a href="mailto:collective@derive.city" className="direct-link">{t.direct}<ArrowUpRight size={15} /></a><div className="contact-stamp">OPEN<br />CITY<br />UNION</div></div></div>
            <div className="union-bottom"><span>NO MEMBERSHIP FEE / NO FIXED ROUTE</span><span>MADE TO BE REMADE TOGETHER</span></div>
          </section>
        )}

        {!['home', 'atlas', 'manifesto', 'union'].includes(page) && <section className="not-found"><h1>Lost is a direction.</h1><button className="text-link" type="button" onClick={() => go('home')}><ArrowLeft size={15} />{t.back}</button></section>}
      </main>

      <footer className="site-footer"><a className="footer-mark" href="#/home" onClick={() => go('home')}>dérive<span>®</span></a><span>{t.footerLine}</span><span>{t.madeWith}</span><button type="button" className="footer-up" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label={t.back}><ArrowUpRight size={17} /></button></footer>
      {notice && <div className="toast" role="status"><Check size={16} />{notice}</div>}
    </div>
  );
}

export default App;

const rootElement = document.getElementById('root');
const appRoot = window.__deriveRoot ?? createRoot(rootElement);
window.__deriveRoot = appRoot;
appRoot.render(<App />);
