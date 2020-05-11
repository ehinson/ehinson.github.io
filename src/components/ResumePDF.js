import React from "react";
import styled, { css } from "styled-components";
import { workHistory } from "../data/work";

import { slideUpAndFadeIn } from "./animations";
import ReactPDF, {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  Image,
  PDFViewer,
  render,
} from "@react-pdf/renderer";

// const Container = styled.div`
//   position: absolute;
//   background: antiquewhite;
//   top: 0;
//   left: 0;
//   height: 100%;
//   width: 100%;
//   overflow: hidden;
//   transition: all 0.3s;
//   transform: translateY(100%);
//   opacity: 0;
//   display: grid;
//   grid-template-columns: 45% 55%;
//   grid-template-rows: 100%;
//   grid-template-areas: "resumeHeader resumeBody";
//   ${(p) =>
//     p.isOpen &&
//     css`
//       transform: translateY(0);
//       opacity: 1;
//       z-index: 190;
//       animation: ${slideUpAndFadeIn} 0.3s;
//     `}

//   @media screen and (max-width: 1024px) {
//     grid-template-columns: 100%;
//     grid-template-rows: 10em 1fr;
//     grid-template-areas:
//       "resumeHeader"
//       "resumeBody";
//   }
// `;

Font.register({
  family: "Playfair Display",
  src:
    "http://fonts.gstatic.com/s/playfairdisplay/v20/nuFRD-vYSZviVYUb_rj3ij__anPXDTnCjmHKM4nYO7KN_gGUXtHA_H-oE0o.ttf",
});

Font.register({
  family: "Montserrat",
  src:
    "http://fonts.gstatic.com/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459WlhziTh89Y.ttf",
});

const styles = StyleSheet.create({
  page: {
    background: "white",
    padding: "10pt",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: "30pt",
    fontWeight: "bold",
    color: "red",
    fontFamily: "Playfair Display",
  },
  contact: {
    fontSize: "10pt",
    color: "gray",
    padding: "10pt",
    fontFamily: "Montserrat",
  },
});

// Create Document Component
const ResumeDocument = () => (
  <Document>
    <Page style={styles.page} size="A4">
      <Text style={styles.header} fixed>
        Erin Hinson
      </Text>
      <Text style={styles.contact} fixed>
        720-448-5176
      </Text>
      <Text style={styles.contact} fixed>
        erinqhinson@gmail.com
      </Text>
      {workHistory.map((workItem) => (
        <View key={workItem.employer}>
          <Text>{workItem.years}</Text>
          <Text>{workItem.employer}</Text>
          <Text>{workItem.title}</Text>
          <Text>
            {workItem.detail.map((detail) => (
              <View key={detail.title}>
                {workItem.detail.length > 1 && (
                  <>
                    <Text>{detail.title}</Text>
                    <Text>{detail.year}</Text>
                  </>
                )}
                <Text>{detail.description}</Text>
              </View>
            ))}
          </Text>
          <Text>
            Tech Stack:
            {workItem.skills.join(", ")}
          </Text>
        </View>
      ))}
    </Page>
  </Document>
);

// const ResumePDF = (props) => {
//   return (
//     <Document>
//       <Page size="A4">
//         <View>
//           <Text>My document data</Text>
//         </View>
//       </Page>
//     </Document>
//   );
// };

// const styles = StyleSheet.create({
//   body: {
//     position: "absolute",
//     background: "antiquewhite",
//     top: "0",
//     left: "0",
//     height: "100%",
//     width: "100%",
//     overflow: "hidden",
//     transition: "all 0.3s",
//     display: "grid",
//     gridTemplateColumns: "45% 55%",
//     gridTemplateRows: "100%",
//     gridTemplateAreas: '"resumeHeader resumeBody"',
//   },
//   page: {
//     background: "white",
//     gridArea: "resumeBody",
//     padding: "2rem 3rem 2rem 2rem",
//     overflow: "scroll",
//     display: "flex",
//     flexDirection: "column",
//   },
//   years: {
//     fontSize: "0.8rem",
//     margin: "1.2rem 0 0.5rem",
//   },
//   position: {
//     fontSize: "1.2rem",
//     fontWeight: "bold",
//   },
//   employer: {
//     fontSize: "0.8rem",
//     color: "darkgray",
//     padding: "0.5rem 0",
//   },
//   work: {
//     display: "flex",
//     flexDirection: "column",
//     marginTop: "15px",
//   },
//   header: {
//     fontSize: "2.5rem",
//     letterSpacing: "0",
//     fontWeight: "900",
//     fontFamily: "Playfair Display",
//     cursor: "pointer",
//     transition: "all 0.3s",
//   },
//   contact: {
//     fontSize: "0.8rem",
//     color: "darkgray",
//     padding: "0.5rem 0 0",
//   },
//   description: {
//     fontSize: "1rem",
//   },
//   skills: {
//     fontSize: "0.8rem",
//     fontWeight: "bold",
//     textTransform: "uppercase",
//     margin: "1.5rem 0 0",
//   },
//   subPosition: {
//     fontSize: "0.8rem",
//     fontWeight: "bold",
//   },
// });

const ResumePDF = () => (
  <PDFViewer
    style={{
      position: "relative",
      width: "100%",
      // background: "antiquewhite",
      top: "0",
      left: "0",
      height: "100%",
      width: "100%",
    }}
  >
    <ResumeDocument />
  </PDFViewer>
);
export default ResumePDF;
