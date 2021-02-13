import Name from '../models/name'

const Mutation = {
  async submitName(_, {name}){
    const newName = new Name({
      name: name
    })
    const na = await newName.save();
    return na.name
  }
}

export { Mutation as default }
