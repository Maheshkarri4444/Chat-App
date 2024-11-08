import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import { useAuthContext } from "../../context/AuthContext";

// Add the icon to the library
library.add(faCircleLeft);

const MessageContainer = () => {
	const { selectedConversation, setSelectedConversation } = useConversation();

	// useEffect(() => {
	// 	// cleanup function (unmounts)
	// 	return () => setSelectedConversation(null);
	// }, [setSelectedConversation]);

	return (
		<div className={`relative md:min-w-[450px] w-[90vw] h-[80vh] sm:w-full sm:h-[550px] flex flex-col`}>
			{!selectedConversation ? (
				<NoChatSelected />
			) : (
				<>
					{/* Header */}
					<div className='flex justify-between px-4 py-2 mb-2 bg-slate-500'>
						<button className="" onClick={()=>{setSelectedConversation(null)}}>
						<FontAwesomeIcon icon={faCircleLeft} />
						</button>
						<div>
						<span className='label-text'>To:</span>{" "}
						<span className='font-bold text-black'>{selectedConversation.fullName}</span>
						</div>
					</div>
					<Messages />
					<MessageInput />
				</>
			)}
		</div>
	);
};
export default MessageContainer;

const NoChatSelected = () => {
	const { authUser } = useAuthContext();
	return (
		<div className='items-center justify-center hidden w-full h-full sm:flex'>
			<div className='flex flex-col items-center gap-2 px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl'>
				<p>Welcome 👋 {authUser.fullName} ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl text-center md:text-6xl' />
			</div>
		</div>
	);
};

