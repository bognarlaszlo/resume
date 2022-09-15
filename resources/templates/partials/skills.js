export default (data) => data.map(({name, keywords}) => `
    <div class="grid gap-sm">
        <div class="col-2 color-contrast-low">${name}</div>
        <div class="col">${keywords}</div>
    </div>
`).join('')
