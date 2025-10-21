import mongoose from 'mongoose';

const healthAssessmentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sleepQuality: { type: Number, required: true, min: 1, max: 5 },
  appetite: { type: Number, required: true, min: 1, max: 5 },
  stressLevel: { type: Number, required: true, min: 1, max: 5 },
  activityType: { type: String, required: true },
  energyLevel: { type: Number, required: true, min: 1, max: 5 },
  result: {
    score: { type: Number, required: true },
    recommendation: { type: String, required: true },
    category: { type: String, required: true }
  }
}, { timestamps: true });

export default mongoose.model('HealthAssessment', healthAssessmentSchema);