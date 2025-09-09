import React from "react";

const ErrorMsg = ({ msg }: { msg: string }) => {
  return (
    <>
      <div className="tp-error-msg">{msg}</div>
      <style jsx>{`
        .tp-error-msg {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          font-weight: 400;
        }
        
        /* Dark mode support */
        :global([data-theme="dark"]) .tp-error-msg,
        :global(.dark) .tp-error-msg {
          color: #ff6b6b;
        }
      `}</style>
    </>
  );
};

export default ErrorMsg;
