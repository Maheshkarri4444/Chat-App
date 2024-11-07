import { useState } from "react";
import { BsSend } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";

const MessageInput = () => {
	const [message, setMessage] = useState("");
	const { loading, sendMessage } = useSendMessage();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!message) return;
		await sendMessage(message);
		setMessage("");
	};
	const scrollInputIntoView = (e) => {
		if (window.innerWidth <= 640) {
			e.target.scrollIntoView({ behavior: "smooth", block: "nearest" });
		}
	};

	return (
		<form className='fixed bottom-0 w-full px-4 my-3' style={{ zIndex: 1000 }} onSubmit={handleSubmit}>
			<div className='relative w-full'>
				<input
					type='text'
					className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white'
					placeholder='Send a message'
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					onFocus={scrollInputIntoView}
				/>
				<button type='submit' className='absolute inset-y-0 flex items-center end-0 pe-3'>
					{loading ? <div className='loading loading-spinner'></div> : <BsSend />}
				</button>
			</div>
		</form>
	);
};
export default MessageInput;

