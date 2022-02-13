module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      backgroundImage: {
        stitch: "url('/src/svg/stitch.svg')",
        velvet: "url('/src/svg/velvet.svg')",
        calico: "url('/src/svg/calico.svg')"
      },
      backgroundColor: {
        'dark-blue': '#000042'
      }
    }
  }
}
