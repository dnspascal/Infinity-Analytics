import PropTypes from "prop-types";

const Resource = ({resource}) => {
    return (<div
        className={'rounded-lg border border-[#00df9a]/30 p-4 flex flex-col gap-1 w-fit cursor-pointer hover:shadow-md hover:shadow-[#00df9a]/60'}>
        <div className={'flex gap-4'}>
             <span>
               Name
             </span>
            <span className={'font-bold text-[#00df9a]'}>{resource.name}</span>
        </div>

        <div className={'flex gap-4'}>
             <span>
               Category
             </span>
            <span className={'font-bold'}>{resource.category}</span>
        </div>

        <div className={'flex flex-col  mt-2'}>
            <span>
                Description
            </span>
            <span>
                {resource.description}
            </span>
        </div>


    </div>);
}

Resource.propTypes = {
    resource:PropTypes.shape({
        name: PropTypes.string,
        category: PropTypes.string,
        description: PropTypes.string,
    })
}
export default Resource;
