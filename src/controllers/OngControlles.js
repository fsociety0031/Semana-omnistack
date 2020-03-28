const connect = require('../database/connection');
const crypto = require('crypto');

module.exports = {
  async index (req, res) {
    const ongs = await connect('ongs').select('*');
    return res.json(ongs);
  },

  async create(req, res) {
  const { name, email, whatsapp, city, uf, formapag } = req.body;
  const id = crypto.randomBytes(4).toString('HEX');

  const ongs = await connect('ongs').select('email').where('email', email);

    if (Array.isArray(ongs) && ongs.length) {
      return res.json({error: true});
    } else {
      await connect('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
        formapag,
    })
    return res.json({id});
    }
  },

  async delete(req, res) {
    const { id } = req.body;
  
    const ongs = await connect('ongs').select('id').where('id', id);
  
      if (Array.isArray(ongs) && ongs.length) {
       await connect('ongs').where('id', id).del()
       return res.json({success: true});
     } else {
       return res.json({error: true});
     }
   }
}