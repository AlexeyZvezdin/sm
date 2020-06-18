import DatePicker from 'react-date-picker';

function DPicker() {
  const [value, onChange] = React.useState(new Date());

  return (
    <div>
      <DatePicker onChange={onChange} value={value} />
      <h1>ты че охуел</h1>
    </div>
  );
}

export default DPicker;
