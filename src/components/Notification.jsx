const Notification = ({ message, status }) => {
  return (
    <>
      {message && (
        <div className={`mt-4 ${status === "ok" ? "success" : "error"}`}>
          {message}
        </div>
      )}
    </>
  );
};

export default Notification;
