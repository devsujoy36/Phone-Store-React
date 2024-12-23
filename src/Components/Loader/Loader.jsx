import { InfinitySpin } from 'react-loader-spinner'
    ;

const Loader = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <InfinitySpin
                visible={true}
                width="200"
                color="#4fa94d"
                ariaLabel="infinity-spin-loading"
            />
        </div>
    )
}

export default Loader