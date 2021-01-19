function Select({ options = [], setLanguage }) {
  const handleSelect = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <select className="select" onChange={handleSelect}>
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}

export default Select;
