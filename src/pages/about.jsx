
const About = () => {
    return (
        <div className="text-white max-w-[1240px] w-screen mx-auto p-6 md:p-16">
            <h1 className="text-3xl font-bold mb-4  text-[#00df9a]">About Infinity</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[#00df9a]">Introduction</h2>
                <p className="opacity-90">
                    Infinity is a leading data analytics company that specializes in transforming raw data into valuable insights. Our comprehensive range of resources includes advanced analytical tools, machine learning models, and data visualization techniques. We are dedicated to helping businesses unlock the full potential of their data to drive strategic decision-making and achieve their goals.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[#00df9a]">Mission and Vision</h2>
                <p className="opacity-90">
                    <strong className="font-semibold">Mission:</strong> To empower organizations with the insights they need to make data-driven decisions.
                </p>
                <p className="opacity-90">
                    <strong className="font-semibold">Vision:</strong> To be the most trusted and innovative data analytics partner for businesses worldwide.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[#00df9a]">Services</h2>
                <ul className="list-disc list-inside opacity-90">
                    <li><strong className="font-semibold">Data Analysis:</strong> Transforming raw data into actionable insights.</li>
                    <li><strong className="font-semibold">Machine Learning:</strong> Implementing advanced machine learning models to predict outcomes and optimize processes.</li>
                    <li><strong className="font-semibold">Data Visualization:</strong> Creating interactive and intuitive visualizations to represent data clearly.</li>
                    <li><strong className="font-semibold">Data Governance:</strong> Ensuring data quality, security, and compliance.</li>
                    <li><strong className="font-semibold">Custom Solutions:</strong> Tailored data analytics solutions to meet specific business needs.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[#00df9a]">Technologies We Use</h2>
                <p className="opacity-90">We leverage the latest technologies in data analytics, including but not limited to:</p>
                <ul className="list-disc list-inside opacity-90">
                    <li>Python</li>
                    <li>R</li>
                    <li>SQL</li>
                    <li>Financial Analysis</li>
                    <li>Database Management</li>
                    <li>Visualization</li>
                    <li>Artificial Intelligence</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[#00df9a]">Our Team</h2>
                <p className="opacity-90">
                    Our team consists of experienced data scientists, analysts, and engineers who are passionate about data and dedicated to delivering the best results for our clients. Meet some of our key members:
                </p>
                <ul className="list-disc list-inside opacity-90">
                    <li><strong className="font-semibold">Denis Mgaya:</strong> CEO & Founder</li>
                    <li><strong className="font-semibold">Salim Mchomvu:</strong> Chief Data Scientist</li>
                    <li><strong className="font-semibold">Frank Ndagula:</strong> Lead Data Engineer</li>
                    <li><strong className="font-semibold">Heri Karata:</strong> Senior Data Analyst</li>
                </ul>
            </section>


        </div>
    );
};

export default About;
