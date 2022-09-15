export default (data) => `<p>${data.map(({name}) => `${name}`).join(' / ')}</p>`
