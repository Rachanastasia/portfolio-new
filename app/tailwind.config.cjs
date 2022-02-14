module.exports = {
  mode: 'jit',
  content: ['./src/**/*.svelte'],
  theme: {
    extend: {
      backgroundImage: {
        stitch: "url('/src/svg/stitch.svg')",
        calico: "url('/src/svg/calico.svg')"
      },
      backgroundColor: {
        'dark-blue': '#000042',
        'bright-blue': '#00007f',
        'light-blue': '#E0F7FA'
      }
    }
  }
}
