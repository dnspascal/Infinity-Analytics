const Contacts = () => {
    return (
        <div className="bg-black text-white max-w-[1240px] w-screen mx-auto p-6 md:p-16">
            <h1 className="text-3xl font-bold mb-12 ">Contact Us</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[#00df9a]">Get in Touch</h2>
                <p className="opacity-90">
                    At Infinity, we are committed to providing excellent support and assistance.
                    Whether you have a question, need more information about our services, or want to discuss a potential project,
                    we are here to help. Feel free to reach out to us using the contact details below, and our team will get back to you as soon as possible.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-2 text-[#00df9a]">Contact Information</h2>
                <p className="opacity-90">
                    <strong className="font-semibold">Email:</strong> Dnspascal094@gmail.com
                </p>
                <p className="opacity-90">
                    <strong className="font-semibold">Phone:</strong> +255 752 451 811
                </p>
            </section>

            <section>
                <h2 className="text-2xl font-semibold mb-2 text-[#00df9a]">Our Address</h2>
                <p className="opacity-90">
                    <strong className="font-semibold">Infinity Analytics</strong>
                </p>
                <p className="opacity-90">
                    456 Posta Street, Suite 789,<br/>
                    Dar es Salaam,<br/>
                    Tanzania 12345
                </p>
            </section>
        </div>
    );
};

export default Contacts;
