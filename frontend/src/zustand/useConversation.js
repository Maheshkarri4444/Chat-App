import {create} from 'zustand';

const useConversation = create((set)=>({
    selectedConversation: null,
    setSelectedConversation:(selectedConversation)=> set({selectedConversation}),
    // setSelectedConversation: (conversation) => {
    //     console.log("Updating selectedConversation:", conversation);
    //     set({ selectedConversation: conversation });
    //   },
      
    messages:[],
    setMessages:(messages)=>set({messages}),
}))

export default useConversation;