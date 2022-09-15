import item from './item.js';

export default ({name, title, profiles}) => `
    <header class="flex justify-between items-center">
        <section>
            <h1 class="display-1">${name}</h1>
            <p class="text-lg color-contrast-low">${title}</p>
        </section>
        
        <aside class="flex flex-column">
            ${profiles.map(({icon, url, label}) => `
                <a class="flex items-center" href="${url}">
                    <i class="icon icon--md ${icon}"></i> ${label}
                </a>
            `).join('')}
        </aside>
    </header>
`
