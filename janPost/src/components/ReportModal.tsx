// import {
//   Box,
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Modal,
//   Radio,
//   RadioGroup,
//   TextField,
//   Typography,
//   styled,
// } from "@mui/material";
// import React from "react";
// import { Announcement } from "@mui/icons-material";
// import { useTheme } from "@emotion/react";
// interface Probs {
//   open:boolean,
//   onClose:
// }

// const ReportModal = ({ open, onClose }) => {
//   const theme = useTheme();

//   const StyledModal = styled(Modal)({
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     overflow: "auto",
//     Box: {
//       width: "80%",
//       maxWidth: "600px",
//       bgcolor: "white",
//       borderRadius: "5px",
//       background: "red",
//       // boxShadow: theme.shadows[5],
//       // padding: theme.spacing(2, 4, 3),
//     },
//   });

//   return (
//     <>
//       <StyledModal
//         open={open}
//         onClose={() => onClose(false)}
//         aria-labelledby="modal-modal-title"
//         aria-describedby="modal-modal-description"
//       >
//         <Box
//           sx={{
//             // background: theme.palette.background.default,
//             // color: theme.palette.text.primary,

//             padding: 2,
//             borderRadius: 2,
//             width: "auto",
//             boxShadow: 10,
//           }}
//         >
//           <Box
//             sx={{
//               display: "flex",
//               alignItems: "center",
//               fontWeight: "bold",
//               color: "#283593",
//             }}
//           >
//             <Announcement fontSize="large" />
//             <Typography
//               id="modal-modal-title"
//               variant="h5"
//               component="h2"
//               fontWeight={700}
//             >
//               Report an Issue
//             </Typography>{" "}
//           </Box>
//           <hr />
//           <FormControl sx={{ margin: 2 }}>
//             <FormLabel
//               sx={{ color: "#283593", fontWeight: 700 }}
//               id="demo-radio-buttons-group-label"
//             >
//               Report Type:
//             </FormLabel>
//             <RadioGroup
//               sx={{ paddingX: 5 }}
//               aria-labelledby="demo-radio-buttons-group-label"
//               defaultValue="female"
//               name="radio-buttons-group"
//             >
//               <FormControlLabel
//                 value="Not Educative"
//                 control={<Radio />}
//                 label="Not Educative"
//               />
//               <FormControlLabel
//                 value="Ethnic Violence"
//                 control={<Radio />}
//                 label="Ethnic Violence"
//               />
//               <FormControlLabel
//                 value="Explicit Content"
//                 control={<Radio />}
//                 label="Explicit Content"
//               />
//               <FormControlLabel
//                 value="Politics"
//                 control={<Radio />}
//                 label="Politics"
//               />
//               <FormControlLabel value="Spam" control={<Radio />} label="Spam" />
//               <FormControlLabel
//                 value="Other"
//                 control={<Radio />}
//                 label="Other"
//               />
//             </RadioGroup>
//             <FormLabel
//               sx={{ color: "#283593", fontWeight: 700 }}
//               id="demo-radio-buttons-group-label"
//             >
//               Additional details:
//             </FormLabel>
//             <TextField
//               id="standard-multiline-static"
//               fullWidth
//               multiline
//               rows={4}
//               placeholder="Please enter any additional details relevant to your report."
//               variant="standard"
//             />
//           </FormControl>
//         </Box>
//       </StyledModal>
//     </>
//   );
// };

// export default ReportModal;
