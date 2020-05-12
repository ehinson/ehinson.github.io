import React from "react";
import { workHistory } from "../data/work";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Font,
  PDFViewer,
} from "@react-pdf/renderer";

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
    padding: "32pt 16pt",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    fontSize: "30pt",
    padding: "10pt 0 0",
    fontFamily: "Playfair Display",
    borderTop: "1pt solid black",
    maxWidth: "200pt",
  },
  subheader: {
    fontSize: "20pt",
    padding: "10pt 0 0",
    fontFamily: "Playfair Display",
    display: "inline",
  },
  email: {
    fontSize: "11pt",
    lineHeight: "1",
    color: "#838383",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "1.1pt",
    padding: "4pt 0 16pt",
    borderBottom: "1pt solid black",
    maxWidth: "200pt",
    marginBottom: "30pt",
  },
  contact: {
    fontSize: "11pt",
    lineHeight: "1",
    color: "#838383",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "1.1pt",
    padding: "4pt 0 0",
  },
  year: {
    fontSize: "11pt",
    lineHeight: "1",
    color: "#000000",
    fontFamily: "Montserrat",
    textTransform: "uppercase",
    letterSpacing: "1.2pt",
    margin: "4pt 0 0",
  },
  text: {
    fontSize: "13pt",
    lineHeight: "1.25",
    color: "#000000",
    fontFamily: "Montserrat",
    padding: "4pt 0 0",
  },
  title: {
    fontSize: "15pt",
    lineHeight: "1",
    color: "#000000",
    fontFamily: "Montserrat",
    padding: "8pt 0 0",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "13pt",
    lineHeight: "1",
    color: "#000000",
    fontFamily: "Montserrat",
    margin: "12pt 0 0",
    textTransform: "uppercase",
    fontWeight: "bold",
    minWidth: "100%",
  },
  view: {
    marginTop: "12pt",
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
      <Text style={styles.email} fixed>
        erinqhinson@gmail.com
      </Text>
      <Text style={styles.subheader}>Summary</Text>
      <Text style={styles.text}>
        I'm a Full-stack Engineer with a front-end focus, offering extensive
        experience building software in both onsite and remote team
        environments. I have strong SaaS experience with an eye for design, and
        exceptional mindfulness for scalability, code quality and user
        experience. Excellent reputation as a team leader, collaborator, and web
        developer, with passion for taking on complex problems and helping drive
        solutions that positively impact both the products and people involved.
      </Text>
      <Text style={styles.subheader}>Experience</Text>
      {workHistory.map((workItem) => (
        <View style={styles.view} key={workItem.employer}>
          <Text style={styles.year}>{workItem.years}</Text>
          <Text style={styles.contact}>{workItem.employer}</Text>
          <Text style={styles.title}>{workItem.title}</Text>
          <View>
            {workItem.detail.map((detail) => (
              <View wrap={false} key={detail.title}>
                {workItem.detail.length > 1 && (
                  <>
                    <Text style={styles.subtitle}>{detail.title}</Text>
                    <Text style={styles.year}>{detail.year}</Text>
                  </>
                )}
                <Text style={styles.text}>{detail.description}</Text>
              </View>
            ))}
          </View>
          <Text style={[styles.text, { color: "#838383" }]}>
            Tech Stack: {workItem.skills.join(", ")}
          </Text>
        </View>
      ))}
      <Text style={styles.subheader}>Education</Text>
      <Text style={styles.contact}>2014</Text>
      <Text style={styles.year}>
        Tech Talent South -- Ruby on Rails Bootcamp
      </Text>
    </Page>
  </Document>
);

const ResumePDF = () => (
  <PDFViewer
    style={{
      position: "relative",
      width: "100%",
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
