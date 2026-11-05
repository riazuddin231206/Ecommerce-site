import Card from "./Components/Card";
import Carousel from "./Components/Carousel";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import ProductData from "./Components/ProductData";

const App = () => {
  const name = "RDJ";
  const students = [
    { id: 1, name: "John Doe", age: 20, course: "Html" },
    { id: 2, name: "Jane Smith", age: 22, course: "Javascript" },
    { id: 3, name: "Mike Johnson", age: 21, course: "React" }
  ];
  const products = [
    {
      "id": 1,
      "name": "Samsung Galaxy S25",
      "brand": "Samsung",
      "category": "Electronics",
      "price": 799.99,
      "currency": "USD",
      "description": "A premium smartphone featuring a high-resolution AMOLED display, powerful processor, advanced camera system, and long-lasting battery.",
      "image_url": "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
      "stock": 25,
      "rating": 4.8
    },
    {
      "id": 2,
      "name": "Apple iPhone 16",
      "brand": "Apple",
      "category": "Electronics",
      "price": 899.00,
      "currency": "USD",
      "description": "A modern smartphone with a powerful chip, high-quality camera, vibrant display, and smooth iOS experience.",
      "image_url": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab",
      "stock": 15,
      "rating": 4.9
    },
    {
      "id": 3,
      "name": "Nike Air Max",
      "brand": "Nike",
      "category": "Footwear",
      "price": 120.00,
      "currency": "USD",
      "description": "Comfortable and stylish sports shoes featuring cushioned soles, breathable materials, and a modern design.",
      "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "stock": 30,
      "rating": 4.6
    },
    {
      "id": 4,
      "name": "Adidas Ultraboost",
      "brand": "Adidas",
      "category": "Footwear",
      "price": 140.00,
      "currency": "USD",
      "description": "Performance running shoes designed with responsive cushioning, comfortable fitting, and breathable fabric.",
      "image_url": "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
      "stock": 20,
      "rating": 4.7
    },
    {
      "id": 5,
      "name": "Dell Inspiron 15",
      "brand": "Dell",
      "category": "Laptop",
      "price": 650.00,
      "currency": "USD",
      "description": "A versatile laptop suitable for everyday computing, online learning, office work, browsing, and entertainment.",
      "image_url": "https://images.unsplash.com/photo-1496181133206-80ce9b88a853",
      "stock": 12,
      "rating": 4.5
    },
    {
      "id": 6,
      "name": "Sony WH-1000XM5",
      "brand": "Sony",
      "category": "Headphones",
      "price": 299.99,
      "currency": "USD",
      "description": "Premium wireless headphones featuring active noise cancellation, high-quality audio, and comfortable ear cushions.",
      "image_url": "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
      "stock": 18,
      "rating": 4.8
    },
    {
      "id": 7,
      "name": "Casio G-Shock",
      "brand": "Casio",
      "category": "Watches",
      "price": 110.00,
      "currency": "USD",
      "description": "A durable digital wristwatch featuring a sporty design, stopwatch, alarm, and water-resistant construction.",
      "image_url": "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
      "stock": 40,
      "rating": 4.6
    },
    {
      "id": 8,
      "name": "Classic Polo T-Shirt",
      "brand": "Polo",
      "category": "Clothing",
      "price": 25.00,
      "currency": "USD",
      "description": "A casual polo shirt made with comfortable fabric, featuring a classic collar and versatile everyday style.",
      "image_url": "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
      "stock": 50,
      "rating": 4.3
    },
    {
      "id": 9,
      "name": "Canon EOS R50",
      "brand": "Canon",
      "category": "Camera",
      "price": 679.00,
      "currency": "USD",
      "description": "A compact mirrorless camera designed for photography and video creation with advanced autofocus and high-resolution imaging.",
      "image_url": "https://images.unsplash.com/photo-1516035069371-29a1b244cc32",
      "stock": 8,
      "rating": 4.7
    },
    {
      "id": 10,
      "name": "Logitech MX Master 3S",
      "brand": "Logitech",
      "category": "Computer Accessories",
      "price": 99.99,
      "currency": "USD",
      "description": "An advanced wireless mouse featuring customizable buttons, precise tracking, ergonomic design, and smooth scrolling.",
      "image_url": "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46",
      "stock": 22,
      "rating": 4.8
    }
  ];
  return (
    <div>
      {/* navbar start */}
      <Navbar
        name={name}
        age={30}
      />
      {/* navbar end */}


      {/* carousel start */}
      <Carousel />
      {/* carousel end */}



      {/* hero start */}
      <Hero />
      {/* hero end */}

      {/* studentsdata start */}

      {
        <div className="overflow-x-auto">
          <table className="table table-zebra mx-auto w-10/12">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Age</th>
                <th>Course</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {
                students.map((s) => {
                  console.log(s);
                  return (
                    <tr key={s.id}>
                      <th>{s.id}</th>
                      <td>{s.name}</td>
                      <td>{s.age}</td>
                      <td>{s.course}</td>
                    </tr>
                  )
                })
              }

            </tbody>
          </table>
        </div>
      }
      {/* studentsdata end */}

      {/* product data start */}
      <div>
        <div className="grid grid-cols-3 mx-auto">
          {
            products.map((item) => {
              return (
                <div className="">
                  <ProductData item={item} />
                </div>
              )
            })
          }
        </div>
      </div>
      {/* product data end */}

      {/* card start */}
      <Card />
      {/* card end */}
    </div>
  );
};

export default App;