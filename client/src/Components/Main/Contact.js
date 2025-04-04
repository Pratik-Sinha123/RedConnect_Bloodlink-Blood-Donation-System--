import React from "react";
import cc from "../../assets/cc.png";

const Contact = () => {
  const data = [
    {
      title: "RedConnect related queries, feedback and suggestions",
      body: ["Indian Institute Of Technology Dhanbad",
        "Police Line Road","Main Campus IIT(ISM)",
        "Near Rani Bandh,Hirapur","Sardar Patel Nagar,Dhanbad",
        "Jharkhand 826004",
        
      
        <p className="inline-block border-b-2 border-black leading-none">Person-1</p>,
        "Contact: 6201576262",
        "Institute Mail: 22je0505@iitism.ac.in",
        "Personal Mail: krpratik2003@gmail.com",
        <p className="inline-block border-b-2 border-black leading-none">Person-2</p>,
        "Contact: 9877467080",
        "Institute Mail: 22je0217@iitism.ac.in",
        "Personal Mail: ayush123@gmail.com"
      ],
    },
    {
      title: "For Administrative queries",
      body: [
        "Blood Cell, National Health Mission",
        "Ministry of Health & Family Welfare,New Delhi - 110011",
      ],
    },
  ];
  return (
    <div className="px-64">
      <br />
      <h1 className="text-center text-3xl font-bold">Contact Details</h1>
      <br />
      <div className="flex justify-around">
        <div>
          {data.map((e) => {
            return (
              <>
                <p className="text-xl font-bold underline">{e.title}</p>
                <br />
                <code>
                  {e.body.map((k) => {
                    // return <p className="text-md">{k}</p>;
                    return (
                        <ul className="text-md">{k}</ul>
                    )
                  })}
                </code>
                <br />
              </>
            );
          })}
        </div>
        <div>
          <img src={cc} draggable={false} width="90%" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
