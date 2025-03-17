import { useState } from 'react';

const FeedbackLoader = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Your provided JSON data
  const jsonData = [
    // Paste your entire JSON array here
    // (I've truncated it for space, you should include all items)
    {
      "img": "https://img.drz.lazcdn.com/g/kf/Saa6355f918344779aca19b07424dc892h.jpg_200x200q80.jpg_.webp",
      "text": "3.5mm Mini Microphone...",
      "price": "200",
      "discount": "-18%",
      "rating": "19",
      "star": ["/images/star/one.png", "/images/star/one.png", "/images/star/one.png", "/images/star/two.png", "/images/star/three.png"]
    },
    {
      "img": "https://img.drz.lazcdn.com/g/kf/Saa6355f918344779aca19b07424dc892h.jpg_200x200q80.jpg_.webp",
      "text": "3.5mm Mini Microphone...",
      "price": "200",
      "discount": "-18%",
      "rating": "19",
      "star": ["/images/star/one.png", "/images/star/one.png", "/images/star/one.png", "/images/star/two.png", "/images/star/three.png"]
    },
    {
      "img": "https://img.drz.lazcdn.com/g/kf/Saa6355f918344779aca19b07424dc892h.jpg_200x200q80.jpg_.webp",
      "text": "3.5mm Mini Microphone...",
      "price": "200",
      "discount": "-18%",
      "rating": "19",
      "star": ["/images/star/one.png", "/images/star/one.png", "/images/star/one.png", "/images/star/two.png", "/images/star/three.png"]
    },
    {
      "img": "https://img.drz.lazcdn.com/g/kf/Saa6355f918344779aca19b07424dc892h.jpg_200x200q80.jpg_.webp",
      "text": "3.5mm Mini Microphone...",
      "price": "200",
      "discount": "-18%",
      "rating": "19",
      "star": ["/images/star/one.png", "/images/star/one.png", "/images/star/one.png", "/images/star/two.png", "/images/star/three.png"]
    },
    {
      "img": "https://img.drz.lazcdn.com/g/kf/Saa6355f918344779aca19b07424dc892h.jpg_200x200q80.jpg_.webp",
      "text": "3.5mm Mini Microphone...",
      "price": "200",
      "discount": "-18%",
      "rating": "19",
      "star": ["/images/star/one.png", "/images/star/one.png", "/images/star/one.png", "/images/star/two.png", "/images/star/three.png"]
    },
    {
      "img": "https://img.drz.lazcdn.com/g/kf/Saa6355f918344779aca19b07424dc892h.jpg_200x200q80.jpg_.webp",
      "text": "3.5mm Mini Microphone...",
      "price": "200",
      "discount": "-18%",
      "rating": "19",
      "star": ["/images/star/one.png", "/images/star/one.png", "/images/star/one.png", "/images/star/two.png", "/images/star/three.png"]
    },
    {
      "img": "https://img.drz.lazcdn.com/g/kf/Saa6355f918344779aca19b07424dc892h.jpg_200x200q80.jpg_.webp",
      "text": "3.5mm Mini Microphone...",
      "price": "200",
      "discount": "-18%",
      "rating": "19",
      "star": ["/images/star/one.png", "/images/star/one.png", "/images/star/one.png", "/images/star/two.png", "/images/star/three.png"]
    },
    {
      "img": "https://img.drz.lazcdn.com/g/kf/Saa6355f918344779aca19b07424dc892h.jpg_200x200q80.jpg_.webp",
      "text": "3.5mm Mini Microphone...",
      "price": "200",
      "discount": "-18%",
      "rating": "19",
      "star": ["/images/star/one.png", "/images/star/one.png", "/images/star/one.png", "/images/star/two.png", "/images/star/three.png"]
    },
    // ... rest of your items
  ];

  const loadMoreItems = async () => {
    setLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const startIndex = (page - 1) * 10;
    const newItems = jsonData.slice(startIndex, startIndex + 5);

    if (newItems.length > 0) {
      setItems(prev => [...prev, ...newItems]);
      setPage(prev => prev + 1);
    } else {
      setHasMore(false);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      <div className="product-grid">
        {items.map((item, index) => (
          <div key={index} className="product-card">
            <img src={item.img} alt={item.text} className="product-image" />
            <div className="product-details">
              <p className="product-text">{item.text}</p>
              <div className="price-section">
                <span className="price">৳{item.price}</span>
                <span className="discount">{item.discount}</span>
              </div>
              <div className="rating-section">
                <span className="rating">Rating: {item.rating}</span>
                <div className="stars">
                  {item.star.map((star, starIndex) => (
                    <img key={starIndex} src={star} alt="star" className="star-icon" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {hasMore && (
        <button 
          onClick={loadMoreItems}
          disabled={loading}
          className="load-button"
        >
          {loading ? 'Loading...' : 'Load More Products'}
        </button>
      )}
    </div>
  );
};

export default FeedbackLoader;