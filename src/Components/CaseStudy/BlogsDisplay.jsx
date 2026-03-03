import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBlogs } from "../../api/blogApi";

// const blogs = [
//   {
//     id: 1,
//     title:
//       "How to Choose the Best Digital Marketing Agency in Chennai for Your Business Growth",
//     content:
//       "Learn how strategic marketing boosts business visibility and conversions.",
//     image: "/assets/img/case-studies/blog1.png",
//   },
//   {
//     id: 2,
//     title:
//       "Why Your Business Needs the Best Digital Marketing Agency in Chennai to Stay Competitive",
//     content: "Search engine optimization trends you must know.",
//     image: "/assets/img/case-studies/blog1.png",
//   },
//   {
//     id: 3,
//     title:
//       "Services You Should Expect from the Best Digital Marketing Agency in Chennai",
//     content: "Building brand awareness through social platforms.",
//     image: "/assets/img/case-studies/blog1.png",
//   },
//   {
//     id: 4,
//     title:
//       "How Digital Marketing Helps Chennai Businesses Generate Quality Leads Faster",
//     content: "How to increase open rates and conversions.",
//     image: "/assets/img/case-studies/blog1.png",
//   },
//   {
//     id: 5,
//     title:
//       "The Future of Business Growth Lies with the Best Digital Marketing Agency in Chennai",
//     content: "Create engaging content that converts.",
//     image: "/assets/img/case-studies/blog1.png",
//   },
// ];



const BlogsDisplay = () => {
  const [blogs, setBlogs] = useState([]);
    const [activeBlog, setActiveBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     document.querySelectorAll('.box').forEach(box => {
    //         box.addEventListener('mouseenter', function () {
    //             document.querySelectorAll('.box').forEach(b => b.classList.remove('active'));
    //             this.classList.add('active');
    //         });
    //     });
    // }, []);

    useEffect(() => {
      const loadBlogs = async () => {
          try {
            const data = await fetchBlogs();
            setBlogs(data);

            if (data.length > 0) {
              setActiveBlog(data[data.length -1].id);
            }
          } catch (error) {
            console.error("Failed to load blogs: ",)
          } finally {
            setLoading(false)
          }
      };

      loadBlogs();
    }, []);

    console.log("blogs: ", blogs);

    
    

      if (loading) return <div>Loading...</div>;
      if (!blogs.length) return <div>No blogs found</div>;

      const activeBlogData = blogs.find((blog) => blog.id === activeBlog);

      console.log(
        "IMAGE URL:",
        activeBlogData
          ? `${import.meta.env.VITE_API_BASE_URL}${activeBlogData.image_url}`
          : "no blog",
      );

    return (
      <section className="case-study-section fix section-padding">
        <div className="overlay-shape">
          <img src="/assets/img/case-studies/overlay-shape.png" alt="img" />
        </div>
        <div className="left-shape float-bob-x">
          <img src="/assets/img/case-studies/left-shape.png" alt="img" />
        </div>
        <div className="right-shape float-bob-x">
          <img src="/assets/img/case-studies/right-shaape.png" alt="img" />
        </div>
        <div className="container">
          <div className="section-title-area">
            <div className="section-title">
              <div className="sub-title wow fadeInUp">
                <span>Blogs</span>
              </div>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                We Are A Creative Digital <br />
                Marketing Agency
              </h2>
            </div>
            <div className="main-button wow fadeInUp" data-wow-delay=".5s">
              <Link to="/about">
                {" "}
                <span className="theme-btn"> EXPLORE MORE </span>
                <span className="arrow-btn">
                  <i className="bi bi-arrow-right"></i>
                </span>
              </Link>
            </div>
          </div>
          <div className="case-study-wrapper">
            <div className="row">
              <div className="col-xxl-6 wow fadeInUp">
                <div className="case-study-box-items">
                  <div className="thumb">
                    <img
                      src={
                        activeBlogData
                          ? `${import.meta.env.VITE_API_BASE_URL}${encodeURI(activeBlogData.image_url)}`
                          : ""
                      }
                      alt="blog image"
                    />
                    <h3 className="project-title">
                      <Link to={`blog/1`}>
                        <img
                          src="/assets/img/case-studies/icon.png"
                          alt="img"
                        />
                        {blogs[0]?.title}
                      </Link>
                    </h3>
                    <span className="number">01</span>
                  </div>
                </div>
              </div>
              <div className="col-xxl-6">
                <div className="main-box">
                  {/* <div className="box wow fadeInUp">
                    <div className="title-items">
                      <h3>
                        <Link to="/project/project-details">
                          Digital Marketing
                        </Link>
                      </h3>
                      <span className="number">02</span>
                    </div>
                    <span className="number-hover">02</span>
                    <div className="project-content">
                      <h3>
                        <Link to="/project/project-details">
                          Digital Marketing
                        </Link>
                      </h3>
                      <p>
                        Reprehendeirure irit in volut ate velit esse cillum
                        dolDuis aute irure dolor in ore
                      </p>
                      <Link
                        href="/project/project-details"
                        className="link-btn"
                      >
                        Read More <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div> */}

                  {blogs.slice(1).map((blog, index) => (
                    <div
                      key={blog.id}
                      className={`box wow fadeInUp ${activeBlog === blog.id ? "active" : ""} `}
                      data-wow-delay={`.${index * 2}s`}
                      onMouseEnter={() => setActiveBlog(blog.id)}
                    >
                      {activeBlog !== blog.id && (
                        <div className="blur-overlay"></div>
                      )}
                      <div className="title-items">
                        <p className="text-sm">
                          <Link to={`blog/${blog.id}`}>{blog.title}</Link>
                        </p>
                        <span className="number">
                          {String(index + 2).padStart(2, "0")}
                        </span>
                      </div>
                      <span className="number-hover">
                        {String(index + 2).padStart(2, "0")}
                      </span>
                      <div className="project-content">
                        <h3>
                          <Link>{blog.title}</Link>
                        </h3>
                        <p>{blog.content}</p>
                        <Link to={`/blog/${blog.id}`} className="link-btn">
                          Read More <i className="bi bi-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default BlogsDisplay;