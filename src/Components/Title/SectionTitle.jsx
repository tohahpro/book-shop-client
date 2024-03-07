

const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div>
            <div className=" mx-auto my-6">
                {
                    subHeading && <p className="text-xl text-center mb-2 text-yellow-500">- {subHeading} -</p>
                }

                <h3 className="text-4xl font-bold  py-4 text-center ">- {heading} - </h3>
            </div>




        </div>
    );
};

export default SectionTitle;