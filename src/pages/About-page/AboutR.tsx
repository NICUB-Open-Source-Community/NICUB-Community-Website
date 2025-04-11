import Faq from "../../components/landing-page/faq/Faq"

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-bold ">
      <div className="flex flex-col justify-center items-center justify-items-center p-[60px]">
        <h1 className="text-bold text-[40px] font-extrabold">About Us</h1>
        <p className="text-black text-[18px] text-center px-[70px]">NICUB is an open-source community dedicated to empowering beginners and developers by equipping
           them with the skills they need to thrive in the tech industry. Our community serves as a
            hub for learning, collaboration, and innovation, helping individuals build meaningful careers
             while contributing to impactful open-source projects.
        </p>
      </div>
      <div className="grid grid-cols-2 px-[50px] py-[20px] gap-[20px]">
         <div className="flex flex-col justify-center items-center justify-items-center bg-[#f7f6f6] p-[30px] rounded-xl border-2">
            <img src="/vision.png" alt="vision" className="w-[60px]"/>
            <h1 className="text-bold text-[40px]">Our Vision</h1>
            <p className="text-gray-700">We envision a world where technology is accessible to everyone, and collaboration drives innovation. NICUB strives to: Cultivate a global network of developers passionate about open source. Lead the way in bridging the gap between education and industry needs.
              Create inclusivity, ensuring equal opportunities for individuals from diverse backgrounds to succeed in tech.
            </p>
         </div>
         <div className="flex flex-col justify-center items-center justify-items-center bg-[#f7f6f6] p-[30px] rounded-xl border-2">
            <img src="/mission.png" alt="mission" className="w-[40px]"/>
            <h1 className="text-bold text-[40px]">Our Mission</h1>
            <p className="text-gray-700">At NICUB, our mission is to create a supportive ecosystem where anyone regardless of their experience level can learn, grow, and succeed. By offering hands-on training, mentorship programs, and real-world projects, we aim to transform beginners into skilled developers and enable experienced 
              contributors to refine their expertise while giving back to the open-source ecosystem.
            </p>
         </div>
      </div>
      <div className=" flex flex-col justify-center items-center justify-items-center mt-[50px]">
        <h1 className="text-bold text-[40px] font-extrabold">Members Benefits</h1>
        <div>
          <div className="flex justify-between items-center gap-[100px] p-[50px] px-[150px] ">
            <div className="flex flex-col">
              <h1 className="text-bold text-[40px]">Career Advancement</h1>
              <p className="text-gray-700">Participation in NICUB's ecosystem equips members with in-demand expertise,
                 enhancing their employability and career prospects in the tech industry.
              </p>
            </div>
            <img src="/career-adv.jpeg" alt="career" className="rounded-xl min-w-[400px] h-[300px] " /> 

          </div>
          <div className="flex justify-between items-center gap-[100px] p-[50px] px-[150px] ">
            <div>
              <img src="/skill-adv.jpeg" alt="career" className="rounded-xl min-w-[400px] h-[300px]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-bold text-[40px]">Skill Development</h1>
              <p className="text-gray-700">Members gain access to hands-on training and real-world projects,
                 allowing them to acquire and refine practical skills in software development.
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center gap-[100px] p-[50px] px-[150px] ">
            <div className="flex flex-col">
              <h1 className="text-bold text-[40px]">Mentorship Oppotunities</h1>
              <p className="text-gray-700">Beginners can learn from experienced developers through structured mentorship programs,
                 receiving guidance and support to accelerate their growth.
              </p>
            </div>
            <div>
              <img src="/mentor-opp.jpeg" alt="career" className="rounded-xl min-w-[400px] h-[300px]" />
            </div>
          </div>
          <div className="flex justify-between items-center gap-[100px] p-[50px] px-[150px] ">
            <div>
              <img src="/com-eng.jpg" alt="career" className="rounded-xl min-w-[400px]" />
            </div>
            <div className="flex flex-col">
              <h1 className="text-bold text-[40px]">Community Engagement</h1>
              <p className="text-gray-700">Experienced contributors can give back by mentoring others and contributing 
                to open-source projects, fostering a sense of purpose and collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div  className="mt-[70px] flex flex-col justify-center items-center justify-items-center">
        <h1 className="text-bold text-[40px] font-extrabold">Meet The Team</h1>
        <div className="grid grid-cols-3 py-[20px] gap-[50px]">
                  <div className="border-4 rounded-xl">
                    <img src='https://www.portotheme.com/wordpress/porto/classic-one-page/wp-content/uploads/sites/85/2016/06/team-1-640x640.jpg'alt="team" className="rounded-t-lg min-w-[250px]"/>
                    <div className="py-[30px] px-[15px]">
                          <h1 className="text-bold text-[20px]">John Doe</h1>
                          <p className="text-gray-700">Project Manager</p>
                    </div>
                  </div>
                  {/* <div className="border-4 rounded-xl">
                    <img src='/elon-musk.jpeg'alt="team" className="rounded-t-lg min-w-[250px]"/>
                    <div className="py-[30px] px-[15px]">
                          <h1 className="text-bold text-[20px]">Elon Musk</h1>
                          <p className="text-gray-700">Project Manager</p>
                    </div>
                  </div>
                  <div className="border-4 rounded-xl">
                    <img src='/elon-musk.jpeg'alt="team" className="rounded-t-lg min-w-[250px]"/>
                    <div className="py-[30px] px-[15px]">
                          <h1 className="text-bold text-[20px]">Elon Musk</h1>
                          <p className="text-gray-700">Project Manager</p>
                    </div>
                  </div>
                  <div className="border-4 rounded-xl">
                    <img src='/elon-musk.jpeg'alt="team" className="rounded-t-lg min-w-[250px]"/>
                    <div className="py-[30px] px-[15px]">
                          <h1 className="text-bold text-[20px]">Elon Musk</h1>
                          <p className="text-gray-700">Project Manager</p>
                    </div>
                  </div>
                  <div className="border-4 rounded-xl">
                    <img src='/elon-musk.jpeg'alt="team" className="rounded-t-lg min-w-[250px]"/>
                    <div className="py-[30px] px-[15px]">
                          <h1 className="text-bold text-[20px]">Elon Musk</h1>
                          <p className="text-gray-700">Project Manager</p>
                    </div>
                  </div> */}
        </div>
      </div>
      <Faq />
      </div>

  )
}

export default AboutUs

