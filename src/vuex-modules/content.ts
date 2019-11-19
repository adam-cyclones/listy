export default {
  namespaced: true,
  state: {
    APP_NAME: 'Listy'
  },
  getters: {
    getAppName({ APP_NAME }){
      return APP_NAME;
    }
  }
}