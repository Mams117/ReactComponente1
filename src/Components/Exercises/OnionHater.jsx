export const OnionHater = () => {
  const handleChange = (e) => {
    const palabra = 'cebolla';
    if (e.target.value.includes(palabra)) {
      alert('Odio la cebolla');
    }
    console.log(e.target.name, e.target.value);
  };
  return (
    <>
      <input type="text" name="data" id="data" onChange={handleChange} />
    </>
  );
};
