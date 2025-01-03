import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import data from "./Components/data";
function App() {

      const ele = data.map(function(item){
            return  <Card 
                        key = {item.key}
                        image= {item.coverImg}
                        logo = {item.logo}
                        rating = {item.rating}
                        review= {item.reviewCount}
                        title = {item.title}
                        country = {item.location}
                        price = {item.price}
                        openspots = {item.openSpots}
            />
      })


  return (
    <div>
      <Nav />
      <Hero /> 
      
      <div className="card-inline">      
            {ele}
      </div>


    </div>
  );
}

export default App;
      {/* <Card 
            image= {logo1}
            logo= {logo2}
            rating= {5.0}
            review= {6}
            country= 'USA'
            title='Life Lessons with Katie'
            price='From 138$'
      />
      <Card 
            image= {logo1}
            logo= {logo2}
            rating= {5.0}
            review= {6}
            country= 'USA'
            title='Life Lessons with Katie'
            price='From 138$'
      />
      <Card 
            image= {logo1}
            logo= {logo2}
            rating= {5.0}
            review= {6}
            country= 'USA'
            title='Life Lessons with Katie'
            price='From 138$'
      /> */}