import profile6 from "../assets/profile6.jpg"
import profile2 from "../assets/profile2.jpg"
import profile3 from "../assets/profile3.jpg"
import profile4 from "../assets/profile4.jpg"
import profile5 from "../assets/profile5.jpg"

  
  const NewFriends = [
    {
        id: Math.random(),
        profileimg: profile6,
        friendname: "Judge Judy",
        accepted: false,
        title: "News Anchor"
    },
    {
        id: Math.random(),
        profileimg: profile2,
        friendname: "Erza Scralet",
        accepted: true,
        title: "Web Developer"
        
    },
    {
        id: Math.random(),
        profileimg: profile3,
        friendname: "Victoria Edward",
        accepted: false,
        title: "Web Developer at ..."
    },
    {
        id: Math.random(),
        profileimg: profile4,
        friendname: "Danny Phantom",
        accepted:false,
        title: "Content Writer"
    },
    {
        id: Math.random(),
        profileimg: profile5,
        friendname: "Isthar Order",
        accepted: false,
        title: "Journalist"
    },
]

export default NewFriends;