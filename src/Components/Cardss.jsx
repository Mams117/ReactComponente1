import { useNavigate } from 'react-router-dom';
import style from './Card.module.css';
import { useState } from 'react';
export const Cardss = ({ img, name, role, description }) => {
  const [count, setCount] = useState(0);

  const handlePlus = () => {
    setCount(count + 1);
  };
  const handlePlusMenos = () => {
    setCount(count - 1);
  };
  const navigate = useNavigate();
  const handleClickInfo = () => {
    navigate('/info');
  };

  const handleClick = () => {
    alert('me diste click');
  };
  const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
  };
  return (
    <div className={style.card}>
      <img src={img} alt="Imagen aleatoria" className={style.imagen} />
      <h2>{name} </h2>
      <strong>{role}</strong>
      <p>{description}</p>

      <button onClick={handleClick}>Click me</button>
      <button onClick={handleClickInfo}>Click me</button>
      <input
        type="text"
        placeholder="Escribe profecion"
        name="profesion"
        id="profesion"
        onChange={handleChange}
      />

      <div>
        <h2>contador</h2>
        <p>{count}</p>
        <button onClick={handlePlus}>Contar</button>
        <button onClick={handlePlusMenos}>Disminuir</button>
      </div>
    </div>
  );
};
