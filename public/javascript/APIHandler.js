class APIHandler {
  constructor (baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList () {
   return axios.get(this.BASE_URL + '/characters').then(res => {
    return res.data
   })
    
  }

  getOneRegister (id) {
    return axios.get(this.BASE_URL + `/characters/${id}`).then(res => {
      return res.data
    })
  }

  createOneRegister (name, occupation, weapon, cartoon) {

    const body = { name: name, occupation: occupation, weapon: weapon, cartoon: cartoon }
    return axios.post(this.BASE_URL + '/characters', body).catch((err) => next(err));
  }

  updateOneRegister (id, name, occupation, weapon, cartoon) {
    const body = { name: name, occupation: occupation, weapon: weapon, cartoon: cartoon }
    return axios.put(this.BASE_URL + `/characters/${id}`, body).catch(console.log("Character not found"));
  }

  deleteOneRegister (id) {
    return axios.delete(this.BASE_URL + `/characters/${id}`).then(res => {
      
      return 'Character ${id} has been successfully deleted'
    }).catch(console.log("Character not found"));
  }
}

