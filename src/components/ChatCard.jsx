const ChatCard = ({ answer, question }) => {
  return (
    <li className="flex flex-col gap-4 mb-6">
      <div className="bg-purple-100 self-start mx-4 p-2 rounded-md shadow-lg whitespace-pre-wrap">
        {answer}
      </div>
      <div className="self-end bg-yellow-00 mx-4 p-2 rounded-md shadow-lg whitespace-pre-wrap">
        {question}
      </div>
    </li>
  );
};

export default ChatCard;
