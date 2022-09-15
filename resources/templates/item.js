export default (template, label, data) => `
    <div class="grid gap-md margin-bottom-lg">
        <h5 class="title col-2 color-contrast-medium">${label}</h5>
        <div class="data col-10 font-primary text-justify">${template(data)}</div>
    </div>
`
