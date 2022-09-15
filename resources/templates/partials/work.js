export default (data) => data.map(({company, position, startDate, endDate, summary, highlights}) => `
    <article class="margin-bottom-lg">
        <header>
            <h5 class="font-secondary"><strong>${position}</strong> / ${company}</h5>
            <small>${startDate} - ${endDate}</small>
        </header>
        <p>${summary}</p>
        <ul class="highlights">
            ${highlights.map(highlight => `
                <li>${highlight}</li>
            `).join('')}
        </ul>
    </article>
`).join('')
