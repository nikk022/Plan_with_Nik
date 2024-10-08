
import Card from './Card'
function Tours({tours,removeTour})
{
return (
<div className='container'>
<div>
<h2 className="title">Plan with Nik</h2>

</div>
    <div className='cards'>
        {

           /* <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card>
           <Card></Card> */
           
            //sending data from array using map function
            tours.map((tour)=>{


//important point: when use map() then always pass key
            return<Card key={tour.id} {...tour} removeTour={removeTour}></Card>


            } )
        }
    </div>
    </div>
);

}
export default Tours;