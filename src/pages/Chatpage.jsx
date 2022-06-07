import React from 'react'
import "./chatpage.css"
import { useParams, Link } from 'react-router-dom';
import onlinedata from "../components/Onlinedata"
import { motion } from 'framer-motion';
import Header from "../components/Header"
import { AiOutlineArrowLeft} from 'react-icons/ai';
import coverimg from "../assets/coverimg.jpg"
import { BiSend} from 'react-icons/bi';



const Loadvariants = {
    hidden: { opacity: 0,
    },
    visible: { opacity: 1,
       transition: {
            type: "spring",
            duration: 2
       },
       exit: {
          x: "-100vw",
         transition:{ ease: 'easeInOut', duration: 1}
        }
    }
  }
  

const Chatpage = () => {

    const { profileId } = useParams();
    const profile = onlinedata.find((prof => prof.id.toString() === profileId))
    const {profileimg,  friendname, id, title} = profile


  return (
       <>
          <Header />
         <motion.div className="chatpage"
           initial="hidden"
           animate="visible"
           exit={{
            x: "-100vw",
           transition:{ ease: 'easeInOut'}
          }}
           variants={Loadvariants}
         >

              <div className="chatpage-container">
              <div className="wide-chatpage">
                          <div className="wide-chatpage-left">
                          <Link to="/">
                           <AiOutlineArrowLeft className='chat-page-arrow'/>
                           </Link>
                          <img src={profileimg} alt="" className='wide-img'/>
                          </div>
                          <div className="wide-chatpage-right">
                          <div className="wide-right-top">
                          <img src={profileimg} alt="" className='profile-picture2 chat-picture2'/>     
                          <div className="chat-name-info">       
                                   <div className="dot-green"></div>
                                   <p>{friendname}</p>
                            </div>
                          </div>
                          <form className="wide-chatpage-form">
                                  <input type="text" 
                                    placeholder='Message'
                                  />
                                  <button className='btn-primary btn'><BiSend /></button>
                          </form>
                          </div>
                    </div>

                    <div className="mobile-chatpage-top">
                    <div className="chatpage-top">
                           <Link to="/">
                           <AiOutlineArrowLeft className='chat-page-arrow'/>
                           </Link>
                           
                           <img src={coverimg} alt="" className='chat-page-cover'/>
                           <img src={profileimg} alt="" className='profile-picture2 chat-picture'/>     
                           <div className="chat-name-info qqw">       
                                   <div className="dot-green"></div>
                                   <p>{friendname}</p>
                            </div>
                            
                    </div>
                    <form className="chatpage-form">
                                  <input type="text" 
                                    placeholder='Message'
                                  />
                                  <button className='btn-primary btn'><BiSend /></button>
                          </form>
                          </div>

                  
              </div>
           
           
                        
        </motion.div>

    </>
  )
}

export default Chatpage