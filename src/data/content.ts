// Zentrale Inhalte. Texte hier ändern, Layout bleibt unberührt.

export const person = {
  name: 'Cedric Leonard Schwandt',
  short: 'Cedric Schwandt',
  role: 'Wirtschaftsingenieur (M.Sc.)',
  claim: 'Produktion × Energie × Daten',
  intro:
    'Ich verbinde Produktion, Energie und Daten: von der Montage bei Stäubli bis zur Planung von 3D-Druckaufträgen nach Strompreis am Fraunhofer IAPT.',
  seeking: 'Ab Januar 2027 suche ich meinen Einstieg in Produktion, Supply Chain, Energie oder Datenanalyse.',
  status: 'Offen für den Berufseinstieg ab Januar 2027',
  statusCta: 'Gespräch vereinbaren',
  availability: 'Verfügbar ab Januar 2027',
  location: 'Hamburg',
  email: 'cedric.schwandt@gmail.com',
  linkedin: 'https://www.linkedin.com/in/cedric-schwandt',
  github: 'https://github.com/CleerScreen',
};

export const stats = [
  { value: 47, prefix: '+', suffix: ' %', label: 'Effizienz in einem Montageschritt (Bachelorarbeit, Stäubli)' },
  { value: 20, prefix: '−', suffix: ' %', label: 'manueller Aufwand in der Rechnungsprüfung (Power Automate)' },
  { value: 21, prefix: '', suffix: '', label: 'Prozesse in BPMN 2.0 aufgenommen und analysiert' },
  { value: 100, prefix: '~', suffix: '', label: 'Mitglieder im Verein, als Vorstand Finanzen und Recht verantwortet' },
];

export type Project = {
  id: string;
  kicker: string;
  title: string;
  org: string;
  period: string;
  problem: string;
  approach: string;
  result: string;
  tags: string[];
  metric?: string;
};

export const projects: Project[] = [
  {
    id: 'masterarbeit',
    kicker: 'Masterarbeit · Fraunhofer IAPT',
    title: 'Druckaufträge dann fertigen, wenn Strom günstig ist',
    org: 'Fraunhofer IAPT, Hamburg',
    period: '2026 – 2027',
    problem:
      '3D-Drucker brauchen viel Strom, und der Strompreis ändert sich im Tagesverlauf ständig. Wer Aufträge einfach nacheinander abarbeitet, zahlt oft unnötig viel.',
    approach:
      'Ich messe den Stromverbrauch echter 3D-Drucker je Auftrag und entwickle in Python eine Planung, die Druckaufträge in günstige Zeitfenster legt und eigenen Solarstrom mitnutzt, ohne Liefertermine aus dem Blick zu verlieren.',
    result:
      'Vergleich mit der üblichen Planung nach Liefertermin: Wie viel Stromkosten lassen sich sparen, und was kostet das an Zeit? Ergebnisse folgen nach der Veröffentlichung.',
    tags: ['Python', 'Produktionsplanung', 'Energiekosten', 'Demand Response'],
  },
  {
    id: 'staeubli',
    kicker: 'Bachelorarbeit · Stäubli',
    title: 'Ein Prototyp, der einen Montageschritt um 47 % beschleunigt',
    org: 'Stäubli, Norderstedt',
    period: '2023 – 2024',
    problem: 'Die Kugelabfüllung in der Montage war manuell, langsam und fehleranfällig.',
    approach:
      'Prozessaufnahme vor Ort, Konstruktion einer neuen Vorrichtung in CAD, Prototypenbau und Test in der Linie. Parallel Materialfluss-Simulation für den Reinraum einer neuen Produktreihe.',
    result: 'Effizienzsteigerung um 47 % im betrachteten Montageschritt.',
    tags: ['Konstruktion', 'CAD', 'Prozessoptimierung', 'Simulation'],
    metric: '+47 %',
  },
  {
    id: 'hanseatic',
    kicker: 'Projektleitung · Hanseatic Consulting',
    title: 'Rechnungsprüfung automatisiert, Order Management neu gedacht',
    org: 'Hanseatic Consulting, Hamburg',
    period: '2021 – heute',
    problem: 'Kundenunternehmen mit manuellen, schlecht dokumentierten Prozessen im Order Management und der Rechnungsprüfung.',
    approach:
      'Interviews zur Prozessaufnahme, Modellierung von 21 Prozessen in BPMN 2.0, drei digitalisierte Soll-Prozesse. Umsetzung der Automatisierung mit Power Automate, Qualitätssicherung und Berichte an die Geschäftsführung.',
    result: '−20 % manueller Aufwand und eine geringere Fehlerquote in der Rechnungsprüfung.',
    tags: ['BPMN 2.0', 'Power Automate', 'Prozessanalyse', 'Projektleitung'],
    metric: '−20 %',
  },
  {
    id: 'beiersdorf',
    kicker: 'Werkstudent · Beiersdorf',
    title: 'Kennzahlen und Risikomanagement im Einkauf digitalisiert',
    org: 'Beiersdorf AG, Hamburg',
    period: '2024 – heute',
    problem: 'Management-Reporting im Einkauf war aufwendig und das Procurement Risk Management sollte weiterentwickelt werden.',
    approach:
      'Analyse und Umsetzung der Weiterentwicklung des Risikomanagements, Automatisierung von Reporting-Prozessen, Aufbau von Kennzahlen-Dashboards in Power BI.',
    result: 'Dashboards und automatisierte Reports im Einsatz im Team Digitalization & Insights.',
    tags: ['Power BI', 'Automatisierung', 'Reporting', 'Risk Management'],
  },
];

export type Station = { period: string; title: string; org: string; text: string; type: 'work' | 'edu' };

export const timeline: Station[] = [
  { period: '08/2026 – 01/2027', title: 'Masterand', org: 'Fraunhofer IAPT', text: 'Stromkosten im 3D-Druck senken: Aufträge dann planen, wenn Strom günstig ist.', type: 'work' },
  { period: '10/2024 – heute', title: 'Werkstudent Procurement Excellence', org: 'Beiersdorf AG', text: 'Digitalization & Insights: Power BI, Reporting-Automatisierung, Risk Management.', type: 'work' },
  { period: '09/2025 – 01/2026', title: 'Auslandssemester', org: 'Beijing Normal University', text: 'M.Sc. World Economy and China an einer der zehn besten Universitäten Chinas.', type: 'edu' },
  { period: '10/2024 – 01/2027', title: 'M.Sc. Wirtschaftsingenieurwesen', org: 'Universität Hamburg · HAW · HSU', text: 'Schwerpunkt Produktentwicklung, Masterarbeit am Fraunhofer IAPT.', type: 'edu' },
  { period: '2023 – 2024', title: 'Bachelorand, Werkstudent, Praktikant', org: 'Stäubli', text: 'Montage-Prototyp (+47 %), Materialfluss-Simulation, Einkaufs-Cockpit, Bestandsprognose.', type: 'work' },
  { period: '04/2021 – heute', title: 'Vorstand & Projektleitung', org: 'Hanseatic Consulting', text: 'Vorstand Finanzen und Recht, Projekte zu Prozessoptimierung und Automatisierung.', type: 'work' },
  { period: '11/2020 – 04/2024', title: 'B.Sc. Wirtschaftsingenieurwesen', org: 'Universität Hamburg · HAW', text: 'Schwerpunkt Operations und Supply Chain Management, Bachelorarbeit bei Stäubli.', type: 'edu' },
];

export const skills = [
  { group: 'Daten & Optimierung', items: ['Python (Datenanalyse, Optimierung)', 'Power BI', 'Statistik & Machine Learning', 'Produktionsplanung'] },
  { group: 'Prozesse & Automatisierung', items: ['BPMN 2.0', 'Power Automate', 'Power Apps', 'Visio', 'Six Sigma White Belt'] },
  { group: 'Produktion & Technik', items: ['CAD (Fusion)', 'Fertigungstechnik', 'Additive Fertigung', 'Materialfluss-Simulation'] },
  { group: 'Sprachen', items: ['Deutsch (Muttersprache)', 'Englisch (fließend)'] },
];
