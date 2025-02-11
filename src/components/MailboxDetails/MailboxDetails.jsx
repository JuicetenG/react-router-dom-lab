import { useParams } from 'react-router';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();

  const viewMailbox = props.mailboxes.find((mailbox) => (
    mailbox._id === Number(mailboxId)
  ));

  const showLetters = props.letters.filter((letter) => (
    Number(letter.mailboxId) === Number(mailboxId)
  ));

  return (
    <>
      <h1>Mailbox {mailboxId}</h1>
      <h3>Details</h3>
      <p>Box Owner: {viewMailbox.boxOwner}</p>
      <p>Box Size: {viewMailbox.boxSize}</p>
      <br />
      <h3>Letters</h3>
      <ul className='letter-list'>
        {showLetters.map((letter) => (
          <li key={letter._id}>
            <p>Dear {letter.recipient}, </p>
            <p>{letter.message}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxDetails;