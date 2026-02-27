import { Link } from "react-router-dom";

const Services3 = () => {

    const chooseContent = [
      {
        img: "/assets/img/service/icon-1.png",
        title: "Reels & Visual Storytelling",
        content:
          "We create short-form videos that communicate your message quickly and effectively. Designed for modern audiences, our reels highlight your brand, products, or services in an engaging format that increases recall, interaction, and digital visibility.",
      },
      {
        img: "/assets/img/service/icon-2.png",
        title: "Ad Creatives",
        content:
          "We design performance-driven ad visuals that capture attention instantly and encourage action. Every creative balances strong design with clear messaging, ensuring your campaigns not only look professional but also generate clicks, enquiries, and conversions.",
      },
      {
        img: "/assets/img/service/icon-3.png",
        title: "Meta Campaigns (FB & Insta Ads)",
        content:
          "We run targeted ad campaigns across Facebook and Instagram to reach the right audience at the right time. By combining precise targeting, compelling creatives, and optimization, we generate visibility, engagement, and enquiries quickly.",
      },
      {
        img: "/assets/img/service/icon-4.png",
        title: "Google Campaigns",
        content:
          "We position your business in front of high-intent users actively searching online. Our Google campaigns use smart keyword targeting and performance tracking to drive qualified traffic, increase leads, and deliver measurable business outcomes.",
      },
      {
        img: "/assets/img/service/icon-5.png",
        title: "Social Media Management",
        content:
          "We manage your brand across social platforms with planned content, consistent posting, and audience engagement. Our approach keeps your business active, relevant, and visible, helping build trust while turning followers into meaningful customer interactions.",
      },
      {
        img: "/assets/img/service/icon-6.png",
        title: "WhatsApp Marketing",
        content:
          "We use WhatsApp to connect with customers instantly through personalized messages, updates, and offers. With high visibility and quick response rates, this channel helps drive immediate engagement, strengthen relationships, and encourage faster decisions.",
      },
      {
        img: "/assets/img/service/icon-4.png",
        title: "Email Marketing",
        content:
          "We craft targeted email campaigns that keep your audience informed, engaged, and connected to your brand. From promotions to follow-ups, our emails nurture relationships, encourage repeat business, and turn existing contacts into loyal customers.",
      },
      {
        img: "/assets/img/service/icon-5.png",
        title: "SEO",
        content:
          "We optimize your website to appear in search results when customers actively look for your services. Through keyword strategy and content improvements, we drive consistent organic traffic that builds long-term visibility and enquiries.",
      },
      {
        img: "/assets/img/service/icon-6.png",
        title: "Lead Generation",
        content:
          "We build targeted campaigns focused on attracting genuine prospects for your business. By capturing and nurturing interest, we help convert attention into qualified enquiries, giving you a steady pipeline of potential customers ready to engage.",
      },
    ]; 

    return (
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="row g-4">
            {chooseContent.map((item, i) => (
              <div
                key={i}
                className="col-xl-4 col-lg-6 col-md-6 wow d-flex fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="service-box-items mt-0 w-100">
                  <div className="icon">
                    <img src={item.img} alt="img" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link to="/service/service-details">{item.title}</Link>
                    </h4>
                    <p className="text-sm mt-4">{item.content}</p>
                    {/* <Link to="/service/service-details" className="link-btn">Read More <i className="bi bi-arrow-right"></i></Link> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Services3;