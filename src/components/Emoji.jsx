import React from "react";

const Emoji = ({ code }) => {
  if (code === "1f601") {
    return (
      <svg viewBox="0 0 36 36">
        <path
          fill="#FFCC4D"
          d="M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
        />
        <path
          fill="#664500"
          d="M16 18c-.419 0-.809-.265-.949-.684C14.848 16.717 14.034 15 13 15c-1.062 0-1.888 1.827-2.051 2.316-.175.523-.738.808-1.265.632-.524-.174-.807-.741-.632-1.265C9.177 16.307 10.356 13 13 13s3.823 3.307 3.949 3.684c.175.524-.108 1.091-.632 1.265-.106.034-.213.051-.317.051zm10 0c-.419 0-.809-.265-.948-.684C24.849 16.717 24.033 15 23 15c-1.062 0-1.889 1.827-2.052 2.316-.175.523-.736.808-1.265.632-.523-.174-.807-.741-.632-1.265C19.177 16.307 20.355 13 23 13s3.823 3.307 3.948 3.684c.175.524-.108 1.091-.632 1.265-.105.034-.212.051-.316.051zm-8 4c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z"
        />
        <path
          fill="#FFF"
          d="M9 23s3 1 9 1 9-1 9-1-1.344 6.75-9 6.75S9 23 9 23z"
        />
        <path
          fill="#664500"
          d="M18 27.594c-3.596 0-6.272-.372-7.937-.745l-.825-1.871c.823.312 3.889.897 8.763.897 4.954 0 8.037-.616 8.864-.938l-.701 1.842c-1.634.38-4.419.815-8.164.815z"
        />
      </svg>
    );
  } else {
    return (
      <svg viewBox="0 0 36 36">
        <path
          fill="#FFCC4D"
          d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18"
        />
        <path
          fill="#664500"
          d="M22 27c0 2.763-1.791 3-4 3-2.21 0-4-.237-4-3 0-2.761 1.79-6 4-6 2.209 0 4 3.239 4 6zm8-12c-.124 0-.25-.023-.371-.072-5.229-2.091-7.372-5.241-7.461-5.374-.307-.46-.183-1.081.277-1.387.459-.306 1.077-.184 1.385.274.019.027 1.93 2.785 6.541 4.629.513.206.763.787.558 1.3-.157.392-.533.63-.929.63zM6 15c-.397 0-.772-.238-.929-.629-.205-.513.044-1.095.557-1.3 4.612-1.844 6.523-4.602 6.542-4.629.308-.456.929-.577 1.387-.27.457.308.581.925.275 1.383-.089.133-2.232 3.283-7.46 5.374C6.25 14.977 6.124 15 6 15z"
        />
        <path fill="#5DADEC" d="M24 16h4v19l-4-.046V16zM8 35l4-.046V16H8v19z" />
        <path
          fill="#664500"
          d="M14.999 18c-.15 0-.303-.034-.446-.105-3.512-1.756-7.07-.018-7.105 0-.495.249-1.095.046-1.342-.447-.247-.494-.047-1.095.447-1.342.182-.09 4.498-2.197 8.895 0 .494.247.694.848.447 1.342-.176.35-.529.552-.896.552zm14 0c-.15 0-.303-.034-.446-.105-3.513-1.756-7.07-.018-7.105 0-.494.248-1.094.047-1.342-.447-.247-.494-.047-1.095.447-1.342.182-.09 4.501-2.196 8.895 0 .494.247.694.848.447 1.342-.176.35-.529.552-.896.552z"
        />
        <ellipse fill="#5DADEC" cx="18" cy="34" rx="18" ry="2" />
        <ellipse fill="#E75A70" cx="18" cy="27" rx="3" ry="2" />
      </svg>
    );
  }
};

export default Emoji;
