import img1 from './img1.png';
const LandingContent =()=>{
    return (
        <div className=' fixed h-3/5'>
        <div className='flex justify-around pb-'>
        <div className='m-10 p-5'>
            <h2 className='font-semibold text-center p-7 text-3xl tracking-wider'>Welcome to Vlab</h2>
            <small className='font-thin text-xl'>Virtual Labs project is an initiative of Ministry of Human Resource Development (MHRD), Government of India under the aegis of National Mission on Education through Information and Communication Technology (NMEICT). This project is a consortium activity of twelve participating institutes and IIT Delhi is coordinating institute.This virtual lab deals with data structures algorithms.</small>
            </div>
            <img src={img1}   alt="Vlab"></img></div>
            </div>
    );
}
export default LandingContent;