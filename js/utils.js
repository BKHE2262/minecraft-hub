export async function fetchData(url) {
  try {
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error("加载数据失败:", err);
    return [];
  }
}

export function renderCards(items, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items.map(item => `
    <div class="card">
      <div>
        <h3>${item.title} <small style="font-size: 0.8rem; color: #888;">(${item.mcVersion})</small></h3>
        <p>${item.description}</p>
        <div>
          ${(item.tags || []).map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
      </div>
      <div>
        ${item.passcode ? `<p style="font-size: 0.85rem; color: #aaa;">提取码: <code>${item.passcode}</code></p>` : ''}
        <a href="${item.downloadUrl}" target="_blank" class="btn-download">👉 蓝奏云下载</a>
      </div>
    </div>
  `).join('');
}