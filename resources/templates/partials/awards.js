export default (data) => data.map(({name, date, award}) => `
    <article class="margin-bottom-sm">
        <h5 class="font-secondary"><strong>${name}</strong> / ${award} <span class="color-contrast-low">(${date})</span></h5>
    </article>
`).join('')
