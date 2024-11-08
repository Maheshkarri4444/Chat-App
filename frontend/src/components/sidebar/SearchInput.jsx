import {  useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const SearchInput = () => {
	const [search, setSearch] = useState("");
	const { setSelectedConversation } = useConversation();
	const { conversations } = useGetConversations();

	const {authUser} = useAuthContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!search) return;
		if (search.length < 3) {
			return toast.error("Search term must be at least 3 characters long");
		}

		const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

		if (conversation) {
			setSelectedConversation(conversation);
			setSearch("");
		} else toast.error("No such user found!");
	};
	return (
		<form onSubmit={handleSubmit} className='flex items-center justify-center gap-2'>
			<Link to={"/profile"}><button className="btn border-sky-500 btn-circle bg-sky-500"><img src={authUser.profilePic} className="w-12 h-12"/></button></Link>
			<input
				type='text'
				placeholder='Search…'
				className='rounded-full input input-bordered'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button type='submit' className='text-white btn btn-circle bg-sky-500'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;


