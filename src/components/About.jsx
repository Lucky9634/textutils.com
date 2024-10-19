import { Link } from "react-router-dom";

const About = () => {
    return <div className="container">
        <div className="mt-4">
            <h2>About Us.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus neque eaque perspiciatis praesentium minus deserunt quam. Harum maiores reprehenderit iusto rerum expedita sequi quos, quasi architecto itaque repellat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laboriosam ea delectus modi itaque et totam, unde amet laborum harum, veniam est omnis deleniti in. Ipsa sed dolorem id quas.</p>
        </div>
        <div className="mt-2">
            <h2>Features.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus neque eaque perspiciatis praesentium minus deserunt quam. Harum maiores reprehenderit iusto rerum expedita sequi quos, quasi architecto itaque repellat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laboriosam ea delectus modi itaque et totam, unde amet laborum harum, veniam est omnis deleniti in. Ipsa sed dolorem id quas.</p>
        </div>
        <div className="mt-3">
            <h2>Using Us.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus neque eaque perspiciatis praesentium minus deserunt quam. Harum maiores reprehenderit iusto rerum expedita sequi quos, quasi architecto itaque repellat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laboriosam ea delectus modi itaque et totam, unde amet laborum harum, veniam est omnis deleniti in. Ipsa sed dolorem id quas.</p>
        </div>
        <div className="mt-3">
            <h2>Benifits Your Text.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit doloribus neque eaque perspiciatis praesentium minus deserunt quam. Harum maiores reprehenderit iusto rerum expedita sequi quos, quasi architecto itaque repellat Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid laboriosam ea delectus modi itaque et totam, unde amet laborum harum, veniam est omnis deleniti in. Ipsa sed dolorem id quas.</p>
        </div>
        <div className="mt-3 d-flex">
            <Link to="/">Home</Link>
            <Link className="mx-4" to="/about">About Us</Link>
           
        </div>

    </div>
}
export default About;