const watch = process.argv.includes('--watch')

export default {
    bundle: true,
    logLevel: 'info',
    minify: !watch,
    outdir: 'public',
    sourcemap: watch,
    watch: watch
}
