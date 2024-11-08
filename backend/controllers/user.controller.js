import User from "../models/user.model.js";
import Conversation from "../models/conversation.model.js";

export const getUsersForSidebar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
		// console.log(loggedInUserId);
		const conversations = await Conversation.find({
      	participants: loggedInUserId,
    	}).sort({updatedAt: -1});

		// console.log(conversations);

		const sortedUsers = [];
    	const uniqueUserIds = new Set(); // To avoid duplicates

    	conversations.forEach((conversation) => {
			conversation.participants.forEach((user) => {
        	if (!user._id.equals(loggedInUserId) && !uniqueUserIds.has(user._id.toString())) {
          		sortedUsers.push(user);
          		uniqueUserIds.add(user._id.toString());
        		}
      		});
    	});

		// console.log(sortedUsers);
		// console.log(uniqueUserIds);

    	const otherUsers = await User.find({
			_id: { $ne: loggedInUserId, $nin: Array.from(uniqueUserIds) },
    	}).select("_id");

		const otherUsersIds = otherUsers.map(user => user._id);

		// console.log(otherUsersIds);

		const allUsers = [...sortedUsers,...otherUsersIds];

		// console.log("all the users (sorted)",allUsers);

		// const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");

		const filteredUsers = await User.aggregate([
			{ $match: { _id: { $in: allUsers } } },
			{
			  $addFields: {
				sortOrder: { $indexOfArray: [allUsers, "$_id"] }
			  }
			},
			{ $sort: { sortOrder: 1 } }, // Sort by the custom order
			{ $project: { password: 0 } } // Exclude the password field
		  ]);
		console.log("filtered users: ",filteredUsers);

		res.status(200).json(filteredUsers); 
	} catch (error) {
		console.error("Error in getUsersForSidebar: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
};
