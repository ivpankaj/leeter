import express from 'express';
import DataModel from './model.js';

const router = express.Router();

router.post('/api/data', async (req, res) => {
    try {
        // Assuming req.body.data is the actual data you want to save
        const newdata = new DataModel({
            data: req.body.data
        });
        await newdata.save();
        res.json({ message: 'Data saved successfully' });
    } catch (error) {
        console.error('Error saving data:', error);
        res.status(500).json({ error: 'Failed to save data' });
    }
});

export default router;
