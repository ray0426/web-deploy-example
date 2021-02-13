import Name from '../models/name'

const Query = {
  async getNames(){
    try {
      const names = await Name.find().sort({_id: -1});
      return names.map(na => {
        return na.name
      })
    }catch (err){
      throw new Error('201 getNames: '+err);
    }
  }
}

export { Query as default }
