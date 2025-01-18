
import React from 'react';
import './ProductList.css'; 

const ProductList = ({ filters, addToCart }) => {
  const allProducts = [
    {
      id: 1,
      name: 'Red T-shirt',
      gender: 'men',
      colour: 'red',
      price: 100,
      type: 'plain',
      image: 'https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886008_1280.png', 
    },
    {
      id: 2,
      name: 'Blue T-shirt',
      gender: 'women',
      colour: 'blue',
      price: 100,
      type: 'plain',
      image: 'https://www.shutterstock.com/image-photo/blue-tshirt-template-men-isolated-600nw-2080246312.jpg', 
    },
    {
      id: 3,
      name: 'Black T-shirt',
      gender: 'men',
      colour: 'black',
      price: 100,
      type: 'plain',
      image: 'https://cdn.pixabay.com/photo/2016/12/06/09/30/blank-1886001_1280.png', 
    },
    {
        id: 4,
        name: 'White T-shirt',
        gender: 'men',
        colour: 'white',
        price: 100,
        type: 'plain',
        image: 'https://cdn.pixabay.com/photo/2016/12/06/09/31/blank-1886013_1280.png', 
      },
      {
        id: 5,
        name: 'Yellow T-shirt',
        gender: 'men',
        colour: 'yellow',
        price: 100,
        type: 'plain',
        image: 'https://media.istockphoto.com/id/1185167299/photo/yellow-t-shirt-front-and-back-view.jpg?s=612x612&w=0&k=20&c=MMcW2qlFp7nFbGKKBrLa3POOxfUYqhxpC8id2h_yWwc=', 
      },
      {
        id: 6,
        name: 'Black T-shirt',
        gender: 'women',
        colour: 'black',
        price: 250,
        type: 'polo',
        image: 'https://cdn.pixabay.com/photo/2023/10/24/02/01/girl-8337214_960_720.jpg', 
      },
      {
        id: 7,
        name: 'Pink T-shirt',
        gender: 'women',
        colour: 'pink',
        price: 350,
        type: 'graphic',
        image: 'https://cdn.pixabay.com/photo/2023/10/24/02/01/women-8337216_960_720.jpg', 
      },
      {
        id: 8,
        name: 'Black T-shirt',
        gender: 'women',
        colour: 'black',
        price: 150,
        type: 'graphic',
        image: 'https://cdn.pixabay.com/photo/2022/10/09/09/12/woman-7508618_1280.jpg', 
      },
      {
        id: 9,
        name: 'Red T-shirt',
        gender: 'women',
        colour: 'red',
        price: 250,
        type: 'graphic',
        image: 'https://img.freepik.com/free-photo/joyful-woman-with-hand-her-pockets_23-2147653650.jpg?t=st=1737097278~exp=1737100878~hmac=681ce688a1799cd95c1f6e8d72f500f74858749daf5696d11c5f7c53100eba98&w=1060', 
      },
      {
        id: 10,
        name: 'White T-shirt',
        gender: 'women',
        colour: 'white',
        price: 250,
        type: 'Plain',
        image: 'https://img.freepik.com/free-photo/beautiful-smiling-brunette-girl-pointing-fingers-your-logo-showing-something-center_1258-18999.jpg?t=st=1737097409~exp=1737101009~hmac=0149dc5da55a301f06afc13f68c57b417fb8acc316fe695ad698abae9fb5eb53&w=1060', 
      },
      {
        id: 11,
        name: 'Maroon T-shirt',
        gender: 'men',
        colour: 'maroon',
        price: 250,
        type: 'Plain',
        image: 'https://img.freepik.com/free-photo/handsome-fashionable-young-guy-with-stylish-hair-tattoo-his-arm-posing-studio-isolated-gray-background_613910-19871.jpg?t=st=1737097589~exp=1737101189~hmac=5f0225e35a4da4b86965e49c8e2b5e342ae340181282fd935fa6c9a554897dd8&w=740', 
      },
      {
        id: 12,
        name: 'Blue T-shirt',
        gender: 'men',
        colour: 'blue',
        price: 250,
        type: 'Plain',
        image: 'https://img.freepik.com/free-photo/stylish-casual-indian-man-wear-blue-tshirt-posing-against-grey-wall_627829-4727.jpg?t=st=1737097830~exp=1737101430~hmac=4941803b446e7bed1c4a5e742cc22c4c38e84e6ef6bcabdf4e6068ee73fb3bfb&w=1060', // Add product image URL
      },
      {
        id: 13,
        name: 'White T-shirt',
        gender: 'men',
        colour: 'white',
        price: 250,
        type: 'Plain',
        image: 'https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-model-with-curly-hairstyle-sexy-man-dressed-jeans-white-tshirt-fashion-male-isolated-blue-wall-studio_158538-26574.jpg?t=st=1737097962~exp=1737101562~hmac=3d1e2ad0eeb13caed46e0c82020bcf432e6c60ef2a7c8c8cca909aab07e1ff17&w=1060', // Add product image URL
      },
      {
        id: 14,
        name: 'Brown T-shirt',
        gender: 'men',
        colour: 'brown',
        price: 250,
        type: 'Plain',
        image: 'https://img.freepik.com/free-photo/good-looking-confident-young-man-red-t-shirt_176420-24297.jpg?t=st=1737098057~exp=1737101657~hmac=a2db9fa3caf089e4b1263e94d0e8c30343e34af9611410979eeb6ebb726be69b&w=1060', // Add product image URL
      },
      {
        id: 15,
        name: 'Black T-shirt',
        gender: 'men',
        colour: 'black',
        price: 250,
        type: 'Plain',
        image: 'https://img.freepik.com/free-photo/man-showing-measures-object_144627-52575.jpg?t=st=1737098297~exp=1737101897~hmac=dbe2cbbf6ca1978283c65affc46e11b73291e328276ebdf6043b392589f37500&w=1060', // Add product image URL
      },
      {
        id: 16,
        name: 'Red Polo T-shirt',
        gender: 'men',
        colour: 'red',
        price: 300,
        type: 'polo',
        image: 'https://img.freepik.com/free-photo/young-confident-man-red-shirt-with-optical-glasses-bites-lip-looks-isolated-orange-wall_141793-35245.jpg?t=st=1737132072~exp=1737135672~hmac=a10d6f102c3588486ed154e879942bc746da611a73631adae68767a73f72bea4&w=996', // Add product image URL
      },
      {
        id: 17,
        name: 'White Polo T-shirt',
        gender: 'men',
        colour: 'white',
        price: 300,
        type: 'polo',
        image: 'https://cdn.pixabay.com/photo/2018/08/08/16/37/pole-3592608_1280.jpg', // Add product image URL
      },
      {
        id: 18,
        name: 'Graphic White T-shirt',
        gender: 'men',
        colour: 'white',
        price: 250,
        type: 'graphic',
        image: 'https://cdn.pixabay.com/photo/2016/08/12/00/36/legendary-1587325_1280.jpg', // Add product image URL
      },
      {
        id: 19,
        name: 'Graphic Black T-shirt',
        gender: 'women',
        colour: 'black',
        price: 400,
        type: 'graphic',
        image: 'https://images.unsplash.com/photo-1496360938681-9a918bfabc66?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add product image URL
      },
      {
        id: 20,
        name: 'Graphic Red T-shirt',
        gender: 'men',
        colour: 'red',
        price: 400,
        type: 'graphic',
        image: 'https://images.unsplash.com/photo-1521498542256-5aeb47ba2b36?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add product image URL
      },
      {
        id: 21,
        name: 'Red Stripe T-shirt',
        gender: 'men',
        colour: 'red',
        price: 400,
        type: 'graphic',
        image: 'https://images.unsplash.com/photo-1484517186945-df8151a1a871?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // Add product image URL
      },



    
  ];

  const filteredProducts = allProducts.filter((product) => {
    const { gender, colour, priceRange, type } = filters;
    return (
      (gender.length === 0 || gender.includes(product.gender)) &&
      (colour.length === 0 || colour.includes(product.colour)) &&
      product.price <= priceRange[1] &&
      (type.length === 0 || type.includes(product.type))
    );

    // return (
    //   (gender.length === 0 || gender.includes(product.gender)) &&
    //   (colour.length === 0 || colour.includes(product.colour)) &&
    //   product.price <= priceRange[1]

      
    // );
  });
   

  return (
    <div className="product-list">
      {filteredProducts.length === 0 ? (
        <p>No products found matching the filters.</p>
      ) : (
        filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>Price: ₹{product.price}</p>
            {/* <p>Gender: {product.gender}</p>
            <p>Colour: {product.colour}</p>
            <p>Type: {product.type}</p> */}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
