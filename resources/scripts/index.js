import header from '../templates/header.js';
import item from '../templates/item.js';

import awards from '../templates/partials/awards.js';
import bio from '../templates/partials/bio.js';
import interests from '../templates/partials/interests.js';
import languages from '../templates/partials/languages.js';
import skills from '../templates/partials/skills.js';
import work from '../templates/partials/work.js';

import data from '../../data.json';

document.addEventListener(
    'DOMContentLoaded',
    () => {
        document.body.innerHTML = `
            <main class="max-width-adaptive-md margin-auto">
                ${header(data.basics)}
                <section class="padding-y-xl">
                
                    ${item(bio, 'Bio', data.basics.summary)}
                    ${item(skills, 'Skills', data.skills)}
                    ${item(work, 'Experience', data.work)}
                    ${item(awards, 'Awards', data.awards)}
                    ${item(languages, 'Languages', data.languages)}
                    ${item(interests, 'Interests', data.interests)}

                </section>
            </main>
        `;
    }
)
