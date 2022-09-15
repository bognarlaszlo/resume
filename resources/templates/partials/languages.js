export default (data) => `<p>${data.map(({language, fluency}) => `
    <article class="margin-bottom-sm">
        <h5 class="font-secondary"><strong>${language}</strong> / ${fluency}</h5>
    </article>
`).join('')}</p>`
