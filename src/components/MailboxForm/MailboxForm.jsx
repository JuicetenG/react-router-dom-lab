import { useState } from 'react';
import { useNavigate } from 'react-router';

const MailboxForm = (props) => {
  const initialState = {
    boxSize: 'small',
    boxOwner: '',
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addMailbox(formData);
    setFormData(initialState);
    navigate('/mailboxes');
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Boxholder Name: </label>
        <input
          type="text"
          id="boxOwner"
          name="boxOwner"
          value={formData.boxOwner}
          onChange={handleChange}
        />
        <label htmlFor="boxSize">Mailbox Size: </label>
        <select 
          id="boxSize" 
          name="boxSize" 
          value={formData.boxSize} 
          onChange={handleChange}
        >
          <option defaultValue='small'>small</option>
          <option value='medium'>medium</option>
          <option value='large'>large</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default MailboxForm;