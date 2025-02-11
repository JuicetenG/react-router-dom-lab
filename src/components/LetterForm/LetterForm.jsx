import { useState } from 'react';
import { useNavigate } from 'react-router';

const LetterForm = (props) => {
  const initialState = {
    mailboxId: '1',
    recipient: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const mailboxId = formData.mailboxId;
    props.addLetter(formData);
    setFormData(initialState);
    navigate(`/mailboxes/${mailboxId}`);
  };

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };

  return (
    <main>
      <h2>New Letter</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxSize">Select Mailbox</label>
        <select 
          id="mailboxId" 
          name="mailboxId" 
          value={formData.mailboxId} 
          onChange={handleChange}
        >
          {props.mailboxes.map((mailbox) => (
            <option key={mailbox._id} value={mailbox._id} >Mailbox {mailbox._id}</option>
          ))}
        </select>
        <label htmlFor="name">Enter Recipient Name: </label>
        <input
          type="text"
          id="recipient"
          name="recipient"
          value={formData.recipient}
          onChange={handleChange}
        />
        <label htmlFor="message">Message: </label>
        <textarea
          type="textarea"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default LetterForm;