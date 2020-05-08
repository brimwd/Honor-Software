module.exports = {
  // publicPath: process.env.NODE_ENV === 'production' ? '/Honor-Software/' : '/'
  css: {
    loaderOptions: {
      sass: {
      	prependData: `@import "@/app.scss";`
	  }
    }
  }
}
