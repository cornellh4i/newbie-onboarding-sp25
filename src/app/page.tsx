import Img from "next/image";
import someImage from "../../public/vercel.svg";

export default function BlogThing() {
  return (
    <div className="container bg-white" style={{ padding: "10px", margin: 0 }}>
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "lightgray",
          boxShadow: "0 4px 2px -2px gray",
        }}
      >
        <nav
          className="nav-container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "15px",
          }}
        >
          <h1 style={{ color: "#333", fontSize: "2.5rem" }}>Some Blog Title</h1>
          <div style={{ display: "flex", gap: "2px" }}>
            <a
              href="/"
              style={{ margin: "5px", textDecoration: "none", color: "#333" }}
            >
              Homepage
            </a>
            <a href="/about" style={{ color: "red", marginRight: "15px" }}>
              About us
            </a>
            <a href="/contact" style={{ fontWeight: "bold", color: "blue" }}>
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Blog Posts */}
      <main style={{ padding: "20px", marginTop: "30px" }}>
        <section
          className="blogSection"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
            gap: "25px",
          }}
        >
          {/* First post */}
          <article
            style={{
              backgroundColor: "#fafafa",
              border: "2px solid #ddd",
              padding: "10px",
            }}
            className="blogPost"
          >
            <Img
              src={someImage}
              alt="Random Image"
              width={350}
              height={150}
              style={{ objectFit: "cover" }}
            />
            <div style={{ padding: "12px" }}>
              <h2
                style={{
                  fontSize: "1.4rem",
                  color: "#444",
                  marginBottom: "8px",
                }}
              >
                Random Post Title
              </h2>
              <p style={{ color: "green", fontSize: "14px" }}>
                This is a short description of the blog post. It's a really
                interesting post.
              </p>
              <a href="#" style={{ color: "purple" }}>
                Continue reading →
              </a>
            </div>
          </article>

          {/* Second post */}
          <article
            className="postCard"
            style={{
              backgroundColor: "whitesmoke",
              padding: "20px",
              borderRadius: "5px",
            }}
          >
            <Img src={someImage} alt="Some image" width={350} height={150} />
            <h2
              className="blogTitle"
              style={{
                fontSize: "24px",
                fontFamily: "sans-serif",
                color: "darkblue",
              }}
            >
              Post About AI
            </h2>
            <p style={{ fontSize: "13px", marginBottom: "15px" }}>
              Some random content here. More text for the blog post. It’s very
              exciting.
            </p>
            <a
              href="#"
              className="readMore"
              style={{
                color: "red",
                textDecoration: "underline",
                fontStyle: "italic",
              }}
            >
              Read more!
            </a>
          </article>

          {/* Third post */}
          <article
            style={{
              padding: "20px 15px",
              border: "1px solid lightgray",
              boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
            }}
          >
            <Img src={someImage} alt="An image" width={350} height={150} />
            <h2 style={{ marginTop: "10px", color: "#222", fontSize: "20px" }}>
              Blog Post Three
            </h2>
            <p style={{ color: "gray", fontSize: "15px" }}>
              Here’s some more text for the third post. It’s also quite
              thrilling to read.
            </p>
            <a href="#" style={{ color: "#555" }}>
              Read more →
            </a>
          </article>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "20px",
          textAlign: "center",
          backgroundColor: "#efefef",
          marginTop: "40px",
        }}
      >
        <p style={{ fontSize: "16px", color: "#555" }}>
          © 2024 Random Blog Inc.
        </p>
        <p>
          <a href="#" style={{ color: "#007bff" }}>
            Privacy Policy
          </a>{" "}
          |
          <a href="#" style={{ marginLeft: "5px", color: "#007bff" }}>
            Terms of Use
          </a>
        </p>
      </footer>
    </div>
  );
}
