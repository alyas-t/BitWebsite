import React from 'react';
import Header from './header';
import './getInvolved.css';
import peter from './peter.png';
import studentPhoto from './students-pomona.jpg';
import blackInTechPhoto from './blackInTechGroup.jpg'

function GetInvolved(){
    return(
        <div className="GetInvolved">
        <Header />
        <main>
         <h1 className='title'>Get Involved</h1>
         <h2 className='titleH2'>Join The BIT Community Today</h2>
       </main>
        

        <div className='membershipInfo'>

            <div className='membershipText'>
            <h2>Membership Info</h2>
              
                <p> Membership in BIT is completely free, so there’s nothing holding you back! We host weekly meetings packed with exciting opportunities to network, learn new skills, and collaborate with an inspiring group of diverse tech enthusiasts.</p>
                <p><b>Membership Benefits</b></p>
                <ul>
                    <li className='list1'>Access to networking events and internship opportunities</li>
                    <li className='list2'>Build your skills through peer-driven workshops</li>
                    <li className='list3'>Get paired and learn from experienced mentors</li>
                    <li className='list1'>Be apart of an inclusive and supporting enviornment</li>
                </ul>
                <button className="basicButton">Join</button>
            </div>
        </div>

       <div className="leadershipOpportunities">
        <div className="imageHolder"> <img src={blackInTechPhoto} alt="Awesome Image"/></div>
        <div className="textHolder">        <h2>Leadership Opportunities</h2>
        
        <p>Leadership roles at BIT offer an exciting opportunity to grow both personally and professionally while making a meaningful impact on the tech community. As a leader, you'll develop essential skills, collaborate with passionate peers, and help shape the future of BIT. Key benefits include:</p>
        <ul>
            <li className='list1'>Empowering leadership development through strategic decision-making and guiding key initiatives.</li>
            <li className='list2'>Networking and career growth with access to industry professionals, mentors, and exciting opportunities.</li>
            <li className='list3'>Building a supportive community, where you can mentor others, plan impactful events, and advocate for diversity and inclusion in tech.</li>

        </ul>
        <p>By stepping into a leadership role at BIT, you'll not only gain valuable skills but also become an integral part of a movement to elevate underrepresented voices in tech. Join us and make a lasting impact!</p>
        <button className="basicButton">Apply</button></div>
       </div>

       <div className="mentorshipPrograms">

        <div className='mentorshipText'>     
            <h2>Mentorship Programs</h2>
        <p>Join our year-long mentorship pronpgram and connect with experienced mentors who will guide you throughout your tech journey. You'll be paired with a mentor and join a 'family' of students, with your mentor leading the group.</p>
        <p>Together, you'll learn, collaborate, and grow—gaining valuable insights and building relationships that will last a lifetime. This is a unique opportunity to develop your skills, receive personalized guidance, and be part of a supportive community at BIT.</p>
        <button className='basicButton'>Join</button>
        </div>
        
        </div>
       <div className="footer">
         <p>BIT 2025</p>
       </div>
     </div>
    );
}


export default GetInvolved;