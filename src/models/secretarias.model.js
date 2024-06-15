import mongoose from 'mongoose';

const secretariaSchema = new mongoose.Schema({
    nombreSecretaria: {
        type: String,
        required: true
    },
    emailSecretaria: {
        type: String,
        required: true,
        unique: true
    },
    claveSecretaria: {
        type: String,
        required: true
    }
}, {
    timestamps: true // Para que guarde createdAt y updatedAt automáticamente
});

export default mongoose.model('Secretaria', secretariaSchema);
