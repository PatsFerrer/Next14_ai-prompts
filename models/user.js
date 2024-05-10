import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email já existe!'],
    required: [true, 'O Email é obrigatório!'],
  },
  username: {
    type: String,
    required: [true, 'O nome de usuário é obrigatório!'],
    match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Nome de usuário inválido. Deve conter de 8 a 20 letras alfanuméricas e ser único!"]
  },
  image: {
    type: String,
  }
});

const User = models.User || model('User', UserSchema);

export default User;