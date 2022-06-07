import profile6 from "../assets/profile6.jpg"
import profile2 from "../assets/profile2.jpg"
import profile3 from "../assets/profile3.jpg"
import profile4 from "../assets/profile4.jpg"
import profile5 from "../assets/profile5.jpg"
import background1 from "../assets/bckg1.jpg"
import background2 from "../assets/bckg2.jpg"
import background3 from "../assets/bckg3.jpg"
import background4 from "../assets/bckg4.jpg"
import background5 from "../assets/bckg5.jpg"
  
  const Posts = [
    {
        id: Math.random(),
        profileimg: profile6,
        postimg: background3,
        storyname: "Sarah Takumi",
        category: "first",
        like: 23,
        comments: 3,
        postNote: "It is a beautiful day to be out here in the sun, getting heated up for the day",
        time: "2 hours ago"
    },
    {
        id: Math.random(),
        profileimg: profile2,
        postimg: background2,
        storyname: "Sarutobi Aizen",
        like: 27,
        comments: 6,
        postNote: "it is a beautiful day to be out here in the sun, getting heated up for the day",
        time: "2 hours ago"
    },
    {
        id: Math.random(),
        profileimg: profile3,
        postimg: background5,
        storyname: "Sasuke Uchiha",
        like: 1,
        comments: 20,
        postNote: "it is a beautiful day to be out here in the sun, getting heated up for the day",
        time: "2 hours ago"
    },
    {
        id: Math.random(),
        profileimg: profile4,
        postimg: background4,
        storyname: "Shinra Tensei",
        like: 56,
        comments: "be the first to comment",
        postNote: "it is a beautiful day to be out here in the sun, getting heated up for the day",
        time: "2 hours ago"

    },
    {
        id: Math.random(),
        profileimg: profile5,
        postimg: background5,
        storyname: "Isthar Order",
        like: 7,
        comments: 14,
        postNote: "it is a beautiful day to be out here in the sun, getting heated up for the day",
        time: "2 hours ago"
    },
]

export default Posts;