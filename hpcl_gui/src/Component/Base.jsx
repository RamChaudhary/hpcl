import CustomNav from "./CustomNav"

const Base=({children})=>
{
    return(
        <div>
            <>
        <CustomNav/>

        {children}

        {/* custom footer */}
        </>
        </div>
    )
}

export default Base