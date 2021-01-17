function Select({ options = [], setLanguage }) {
  const onChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <select className="select" onChange={onChange}>
      {options.map((optionData) => (
        <option key={optionData.value} {...optionData} />
      ))}
    </select>
  );
}

export default Select;
