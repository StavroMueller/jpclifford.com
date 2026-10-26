// jpclifford.com — small, dependency-free.

// Mobile nav
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  menu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Live public repos from GitHub
const repoList = document.getElementById('repo-list');
const HIDDEN = new Set(['jpclifford.com']);

function timeAgo(iso) {
  const days = Math.floor((Date.now() - new Date(iso).getTime()) / 86400000);
  if (days < 1) return 'today';
  if (days < 30) return `${days}d ago`;
  if (days < 365) return `${Math.floor(days / 30)}mo ago`;
  return `${Math.floor(days / 365)}y ago`;
}

async function loadRepos() {
  if (!repoList) return;
  try {
    const res = await fetch('https://api.github.com/users/StavroMueller/repos?per_page=100&sort=pushed');
    if (!res.ok) throw new Error(`github api ${res.status}`);
    const repos = (await res.json())
      .filter((r) => !r.fork && !r.archived && !HIDDEN.has(r.name))
      .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at));

    repoList.innerHTML = '';
    for (const r of repos) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = r.html_url;
      a.target = '_blank';
      a.rel = 'noopener';
      a.textContent = r.name;
      li.appendChild(a);
      if (r.description) {
        const d = document.createElement('span');
        d.className = 'repo-desc';
        d.textContent = r.description;
        li.appendChild(d);
      }
      const m = document.createElement('span');
      m.className = 'repo-meta';
      m.textContent = [r.language, `pushed ${timeAgo(r.pushed_at)}`, r.stargazers_count ? `★ ${r.stargazers_count}` : null]
        .filter(Boolean)
        .join(' · ');
      li.appendChild(m);
      repoList.appendChild(li);
    }
    if (!repos.length) repoList.innerHTML = '<li class="muted">nothing public right now.</li>';
  } catch (err) {
    repoList.innerHTML = '<li class="muted">github is not answering. the link below still works.</li>';
  }
}
loadRepos();

// vCard download
const vcardBtn = document.getElementById('vcard');
if (vcardBtn) {
  vcardBtn.addEventListener('click', () => {
    const vcard = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Julien Clifford',
      'N:Clifford;Julien;;;',
      'ORG:Atelier Actara',
      'TITLE:Software Engineer & Photographer',
      'URL:https://jpclifford.com',
      'EMAIL:contact@outsidetheobvious.com',
      'X-SOCIALPROFILE;TYPE=github:https://github.com/StavroMueller',
      'X-SOCIALPROFILE;TYPE=instagram:https://instagram.com/outsidetheobvious',
      'NOTE:Software, fashion shows, tall ships. Houston, Texas.',
      'END:VCARD',
    ].join('\r\n');
    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'julien-clifford.vcf';
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  });
}
