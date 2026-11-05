(() => {
  'use strict';
  const p = window.PROFILE;
  if (!p) return;
  const $ = id => document.getElementById(id);
  const el = (tag, cls, text) => {
    const n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined) n.textContent = text;
    return n;
  };
  // Only allow safe external URLs or local asset files; no HTML injection.
  function safeUrl(value) {
    if (typeof value !== 'string' || !value.trim()) return '';
    const v = value.trim();
    if (/^(https?:\/\/|mailto:)/i.test(v)) return v;
    if (/^assets\/[a-zA-Z0-9_./-]+$/.test(v) && !v.includes('..')) return v;
    return '';
  }
  function links(container, list = []) {
    list.forEach(item => {
      const url = safeUrl(item.url);
      if (!url) {
        container.append(el('span', 'unavailable', `${item.label} · 待补充`));
      } else {
        const a = el('a', '', `${item.label} ↗`);
        a.href = url;
        if (/^https?:/i.test(url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
        container.append(a);
      }
    });
  }
  $('profile-name').textContent = p.name;
  $('profile-english').textContent = p.englishName;
  $('profile-role').textContent = p.role;
  document.title = `${p.name} · Research & Practice`;
  document.querySelector('meta[name="description"]').content = `${p.name}：研究方向、代表论文与个人经历。`;
  $('footer-name').textContent = `${p.name} · Research & Practice`;
  $('profile-bio').replaceChildren(...p.bio.map(text => el('p', '', text)));
  $('interests').replaceChildren(...p.interests.map(text => el('span', 'interest', text)));
  links($('profile-links'), p.links);
  links($('contact-links'), p.links.filter(item => !item.label.includes('CV')));
  document.querySelector('.portrait-monogram').textContent = p.monogram;
  const photo = safeUrl(p.photo);
  if (photo && !/^mailto:/i.test(photo)) {
    const img = el('img'); img.src = photo; img.alt = `${p.name}的照片`;
    img.addEventListener('load', () => {
      $('portrait').replaceChildren(img);
      $('portrait').removeAttribute('role'); $('portrait').removeAttribute('aria-label');
    });
    img.addEventListener('error', () => { $('portrait').setAttribute('aria-label','照片加载失败，显示占位图'); });
  }
  const paperNodes = p.publications.map((paper, index) => {
    const article = el('article','paper');
    article.append(el('span','paper-number',String(index + 1).padStart(2,'0')));
    const content = el('div');
    content.append(el('div','paper-meta',`${paper.venue} / ${paper.year}`), el('h3','',paper.title), el('p','authors',paper.authors), el('p','',paper.summary));
    const row = el('div','link-row'); links(row,paper.links); content.append(row);
    if (paper.bibtex) {
      const details = el('details'); details.append(el('summary','','BibTeX'),el('pre','',paper.bibtex)); content.append(details);
    }
    article.append(content); $('papers').append(article);
    return {article,paper};
  });
  function filterPapers(filter) {
    let count = 0;
    paperNodes.forEach(({article,paper}) => {
      const show = filter === 'all' || (filter === 'selected' && paper.selected) || (filter === 'preprint' && paper.preprint);
      article.hidden = !show; if (show) count++;
    });
    $('paper-count').textContent = `${count} 个条目`;
  }
  document.querySelectorAll('[data-filter]').forEach(button => {
    button.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(b => {
        b.classList.toggle('selected',b === button); b.setAttribute('aria-pressed',String(b === button));
      });
      filterPapers(button.dataset.filter);
    });
  });
  filterPapers('all');
  p.experience.forEach(item => {
    const row = el('article','timeline-item'); const content = el('div');
    content.append(el('h3','',item.title),el('p','',item.organization),el('p','',item.description));
    row.append(el('time','',item.period),content); $('timeline').append(row);
  });
  p.projects.forEach(item => {
    const article = el('article','project');
    article.append(el('div','project-type',item.type),el('h3','',item.title),el('p','',item.description));
    const row = el('div','link-row'); links(row,item.links); article.append(row); $('project-list').append(article);
  });
  p.news.forEach(item => {
    const row = el('div','news-item'); row.append(el('time','',item.date),el('p','',item.text)); $('news-list').append(row);
  });
  const sections = document.querySelectorAll('main section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        document.querySelectorAll('.rail nav a').forEach(a => {
          const active = a.getAttribute('href') === `#${entry.target.id}`;
          a.classList.toggle('active',active);
          if (active) a.setAttribute('aria-current','location'); else a.removeAttribute('aria-current');
        });
      });
    }, {rootMargin:'-5% 0px -65% 0px'});
    sections.forEach(section => observer.observe(section));
  }
})();
