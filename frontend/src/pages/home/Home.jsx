import React ,{ useState , useEffect}from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/messages/MessageContainer'
import useConversation from '../../zustand/useConversation'
const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);
  const { selectedConversation } = useConversation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // useEffect(() => {
  //   console.log("Selected Conversation:", selectedConversation);
  // }, [selectedConversation]);
  
  return (
    <div className='flex justify-center sm:h-[550px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0 '>
    {!isMobile && (
      <>
      <Sidebar/>
      <MessageContainer/>
      </>) },
    
    {
      isMobile && (
        <>
        {
          !selectedConversation ? (
            <>
            <Sidebar/>
            </>
          ):(
            <>
              <MessageContainer/>
            </>
          )
        }
        </>
      )
    }
    </div>
  )
}

export default Home