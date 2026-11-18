const starter = `
<section class="intro">
  <div class="eyebrow">PORTFOLIO — 2026</div>
  <h1>Créer des idées.<br><em>Faire impression.</em></h1>
  <p class="intro-copy">Direction artistique, design graphique et expériences numériques.</p>
  <a class="intro-link" href="#projets">Découvrir mes projets <span>↗</span></a>
</section>
<section id="projets" class="projects">
  <div class="section-label">01 / SÉLECTION DE PROJETS</div>
  <div class="project-grid">
    <article class="project-card"><div class="project-visual visual-one"><span>01</span></div><h2>Identité visuelle</h2><p>Branding · 2026</p></article>
    <article class="project-card"><div class="project-visual visual-two"><span>02</span></div><h2>Édition & culture</h2><p>Art direction · 2025</p></article>
  </div>
</section>
<footer class="footer"><span>DISPONIBLE POUR DE NOUVEAUX PROJETS</span><span>CONTACT ↗</span></footer>
`;

const editor = grapesjs.init({
  container: '#gjs',
  height: '100%',
  width: 'auto',
  fromElement: false,
  storageManager: {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
    options: { local: { key: 'portfolio-studio-project' } }
  },
  selectorManager: { appendTo: '#selectors' },
  blockManager: { appendTo: '#blocks' },
  layerManager: { appendTo: '#layers' },
  styleManager: {
    appendTo: '#styles',
    sectors: [
      { name: 'Disposition', open: true, properties: [
        'display', 'position', 'top', 'right', 'bottom', 'left',
        { property: 'width', type: 'integer', units: ['px','%','vw'], defaults: 'auto' },
        { property: 'height', type: 'integer', units: ['px','%','vh'], defaults: 'auto' },
        'max-width', 'min-height', 'margin', 'padding', 'flex-direction',
        'justify-content', 'align-items', 'gap'
      ]},
      { name: 'Typographie', open: false, properties: [
        'font-family', 'font-size', 'font-weight', 'letter-spacing',
        'line-height', 'text-align', 'text-decoration', 'text-transform', 'color'
      ]},
      { name: 'Décoration', open: false, properties: [
        'background-color', 'background', 'border', 'border-radius',
        'box-shadow', 'opacity', 'overflow'
      ]},
      { name: 'Effets', open: false, properties: [
        'transition', 'transform', 'filter'
      ]}
    ]
  },
  traitManager: { appendTo: '#traits' },
  deviceManager: { devices: [
    { name: 'Desktop', width: '' },
    { name: 'Tablet', width: '768px', widthMedia: '992px' },
    { name: 'Mobile', width: '375px', widthMedia: '480px' }
  ]},
  canvas: { styles: [] },
  panels: { defaults: [] },
  components: starter,
  noticeOnUnload: false
});

const addBlock = (id, label, category, content, media) => {
  editor.BlockManager.add(id, {
    label, category, content,
    media: media || '<div style="font-size:22px;line-height:1">✦</div>'
  });
};

addBlock('hero', 'Grand titre', 'Sections',
  `<section style="padding:90px 8%;background:#f0eee8;color:#202020"><div style="font-size:11px;letter-spacing:2px;margin-bottom:28px">PORTFOLIO / 2026</div><h1 style="font-size:clamp(42px,8vw,100px);line-height:.95;letter-spacing:-.06em;margin:0 0 25px">Une idée<br><i>prend forme.</i></h1><p style="max-width:420px;font-size:16px;line-height:1.6">Présente ici ton univers, ton approche et ce qui rend ton travail singulier.</p></section>`,
  '<div style="font-size:20px;font-weight:800">H1</div>');
addBlock('text', 'Bloc texte', 'Basique',
  '<div style="padding:28px 8%;font-size:16px;line-height:1.7"><p>Ajoute ton texte ici. Raconte ton approche, ton intention ou le contexte de ton projet.</p></div>',
  '<div style="font-size:18px">T</div>');
addBlock('image', 'Image', 'Basique',
  '<div style="padding:20px 8%"><img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1400" style="width:100%;height:auto;display:block" alt="Image de projet"></div>',
  '<div style="font-size:21px">▧</div>');
addBlock('button', 'Lien / bouton', 'Basique',
  '<div style="padding:20px 8%"><a href="#" style="display:inline-block;padding:14px 22px;background:#202020;color:#fff;text-decoration:none;font-size:13px">Découvrir le projet ↗</a></div>',
  '<div style="font-size:20px">↗</div>');
addBlock('columns', 'Deux colonnes', 'Mise en page',
  '<section style="display:grid;grid-template-columns:1fr 1fr;gap:30px;padding:50px 8%"><div><h2 style="font-size:30px">Colonne gauche</h2><p>Ton contenu ici.</p></div><div><h2 style="font-size:30px">Colonne droite</h2><p>Ton contenu ici.</p></div></section>',
  '<div style="font-size:19px">▥</div>');
addBlock('gallery', 'Galerie 2 images', 'Mise en page',
  '<section style="display:grid;grid-template-columns:1fr 1fr;gap:12px;padding:24px 8%"><div style="background:#dedbd4;min-height:220px;display:grid;place-items:center;color:#777">Image 01</div><div style="background:#d4d8d3;min-height:220px;display:grid;place-items:center;color:#777">Image 02</div></section>',
  '<div style="font-size:20px">▦</div>');
addBlock('spacer', 'Espace', 'Mise en page',
  '<div style="height:100px"></div>',
  '<div style="font-size:20px">↕</div>');
addBlock('footer', 'Pied de page', 'Sections',
  '<footer style="padding:45px 8%;background:#202020;color:#fff;display:flex;justify-content:space-between;gap:20px;flex-wrap:wrap;font-size:11px;letter-spacing:1px"><span>TON NOM — PORTFOLIO</span><a href="mailto:bonjour@example.com" style="color:#fff">CONTACT ↗</a></footer>',
  '<div style="font-size:18px">▤</div>');

editor.setStyle(`
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Arial, sans-serif; color: #202020; }
  .intro { min-height: 570px; padding: 9% 8%; background: #f0eee8; display:flex; flex-direction:column; align-items:flex-start; justify-content:center; }
  .eyebrow,.section-label { font-size:10px; letter-spacing:2px; }
  .intro h1 { font-size:clamp(48px,8vw,106px); line-height:.91; letter-spacing:-.065em; margin:55px 0 24px; font-weight:600; }
  .intro h1 em { font-family:Georgia,serif; font-weight:400; }
  .intro-copy { max-width:410px; font-size:15px; line-height:1.7; }
  .intro-link { margin-top:25px; color:inherit; text-decoration:none; border-bottom:1px solid #222; padding-bottom:8px; font-size:12px; }
  .intro-link span { margin-left:22px; }
  .projects { padding:75px 8%; }
  .project-grid { display:grid; grid-template-columns:1fr 1fr; gap:22px; margin-top:30px; }
  .project-visual { min-height:300px; display:flex; align-items:flex-end; padding:20px; font-size:12px; }
  .visual-one { background:linear-gradient(135deg,#d9bca9,#7e7269); }
  .visual-two { background:linear-gradient(135deg,#c9d0c7,#7c8a83); }
  .project-card h2 { font-size:17px; margin:16px 0 5px; }
  .project-card p { font-size:11px; color:#777; margin:0; }
  .footer { padding:28px 8%; background:#202020; color:white; display:flex; justify-content:space-between; font-size:10px; letter-spacing:1px; }
  @media(max-width:600px) { .project-grid { grid-template-columns:1fr; } .intro { min-height:470px; } }
`);

function toast(message) {
  const el = document.getElementById('toast');
  el.textContent = message;
  el.classList.add('show');
  clearTimeout(window.__toastTimer);
  window.__toastTimer = setTimeout(() => el.classList.remove('show'), 2400);
}

document.querySelectorAll('[data-tab]').forEach(btn => {
  btn.addEventListener('click', () => {
    const group = btn.closest('.left-panel') ? '.left-panel' : '.right-panel';
    document.querySelectorAll(`${group} [data-tab]`).forEach(b => b.classList.remove('active'));
    document.querySelectorAll(`${group} .panel-section, ${group} .right-section`).forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = btn.dataset.tab === 'blocks' ? 'blocksPanel' :
                   btn.dataset.tab === 'layers' ? 'layersPanel' :
                   btn.dataset.tab === 'styles' ? 'stylesPanel' : 'traitsPanel';
    document.getElementById(target).classList.add('active');
  });
});
document.getElementById('undoBtn').onclick = () => editor.UndoManager.undo();
document.getElementById('redoBtn').onclick = () => editor.UndoManager.redo();
document.getElementById('desktopBtn').onclick = () => editor.setDevice('Desktop');
document.getElementById('tabletBtn').onclick = () => editor.setDevice('Tablet');
document.getElementById('mobileBtn').onclick = () => editor.setDevice('Mobile');
document.getElementById('previewBtn').onclick = e => {
  const active = editor.Commands.isActive('preview');
  if (active) editor.stopCommand('preview'); else editor.runCommand('preview');
  e.currentTarget.textContent = active ? 'Aperçu' : 'Quitter aperçu';
};
document.getElementById('clearBtn').onclick = () => {
  if (confirm('Vider toute la page ? Cette action peut être annulée.')) {
    editor.setComponents('');
    toast('Page vidée');
  }
};
document.getElementById('exportBtn').onclick = () => {
  const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Mon portfolio</title><style>${editor.getCss()}</style></head><body>${editor.getHtml()}</body></html>`;
  const blob = new Blob([html], {type:'text/html;charset=utf-8'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url; a.download = 'index.html'; a.click();
  URL.revokeObjectURL(url);
  toast('Page exportée : index.html');
};
editor.on('update', () => {
  const dot = document.getElementById('savedDot');
  dot.style.background = '#53c68c';
  dot.title = 'Sauvegarde locale activée';
});
editor.on('storage:store', () => toast('Projet sauvegardé sur cet ordinateur'));
