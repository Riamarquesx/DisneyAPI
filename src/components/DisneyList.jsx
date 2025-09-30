import React, { useEffect, useState } from 'react';

const API_URL = "https://api.disneyapi.dev/character";

export default function DisneyList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const characters = data.data.map((item) => ({
          name: item.name,
          image: item.imageUrl || "https://via.placeholder.com/150"
        }));
        setItems(characters);
      })
      .catch((err) => console.error("Erro ao buscar dados", err));
  }, []);

  return (
    <ul style={{ display: "flex", flexWrap: "wrap", gap: "20px", padding: 0 }}>
      {items.map((item, index) => (
        <li
          key={index}
          style={{
            listStyle: "none",
            padding: "10px",
            background: "#fff",
            borderRadius: "8px",
            textAlign: "center",
            width: "150px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "120px",
              height: "120px",
              objectFit: "contain",
              borderRadius: "6px",
            }}
          />
          <p style={{ marginTop: "10px", textTransform: "capitalize" }}>
            {item.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
