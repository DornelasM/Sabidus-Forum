const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    
    alunoId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Usuario",
        required: true,
    },

    categoria: {
        type: String,
        enum: ['Tecnologia', 'Saúde', 'Educação', 'Ciência', 'Cultura'],
        required: true,
    },

    titulo: {
        type: String,
        required: true,
    },

    conteudo: {
        type: String,
        required: true,
    },
  
  
    likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Usuario",
        default: [],
    },

    nome: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }

})

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
