// import { forwardRef } from "react";

// import PropTypes from "prop-types";
// import image_url from "./images";
// import { Link } from "react-router-dom";

// const Logo = forwardRef(({ disabledLink = false, style, ...other }, ref) => {
//   const logo = (
//     <div
//       ref={ref}
//       style={{
//         width: 200,
//         display: "inline-flex",
//         flexShrink: 0,
//         ...style,
//       }}
//       {...other}
//     >
//       <img src={image_url.logo} alt="logo-img" className="img-fluid" />
//     </div>
//   );

//   if (disabledLink) {
//     return <>{logo}</>;
//   }

//   return (
//     <Link to="/" sx={{ display: "contents" }}>
//       {logo}
//     </Link>
//   );
// });

// Logo.propTypes = {
//   style: PropTypes.object,
//   disabledLink: PropTypes.bool,
// };

// export default Logo;
