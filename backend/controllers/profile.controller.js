import User from "../models/user.model.js";

export const getProfile = async (req,res)=>{
    try {
        const user = await User.findById(req.params.userId);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(201).json(user);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const editProfile = async(req,res)=>{
    const { fullName } = req.body;
    try {
      const user = await User.findByIdAndUpdate(
        req.params.userId,
        { fullName },
        { new: true }
      );
      res.json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
}