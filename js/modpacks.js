import { fetchData, renderCards } from './utils.js';

document.addEventListener('DOMContentLoaded', async () => {
  const modpacks = await fetchData('../data/modpacks.json');
  renderCards(modpacks, 'modpack-list');
});