import HealthAssessment from '../models/HealthAssessment.js';

const calculateHealthScore = (data) => {
  const { sleepQuality, appetite, stressLevel, energyLevel } = data;
  const score = Math.round((sleepQuality + appetite + (6 - stressLevel) + energyLevel) / 4 * 20);
  
  let category, recommendation;
  if (score >= 80) {
    category = 'Excellent';
    recommendation = 'Keep up the great work! Maintain your healthy lifestyle.';
  } else if (score >= 60) {
    category = 'Good';
    recommendation = 'You\'re doing well. Consider improving sleep or reducing stress.';
  } else if (score >= 40) {
    category = 'Fair';
    recommendation = 'Focus on better sleep, nutrition, and stress management.';
  } else {
    category = 'Poor';
    recommendation = 'Consider consulting a healthcare professional for guidance.';
  }
  
  return { score, category, recommendation };
};

export const submitAssessment = async (req, res) => {
  try {
    const result = calculateHealthScore(req.body);
    
    const assessment = new HealthAssessment({
      userId: req.user.userId,
      ...req.body,
      result
    });
    
    await assessment.save();
    res.json({ assessment });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getHistory = async (req, res) => {
  try {
    const assessments = await HealthAssessment.find({ userId: req.user.userId })
      .sort({ createdAt: -1 });
    res.json({ assessments });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};