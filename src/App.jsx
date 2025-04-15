import { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Paper,
  Chip,
  Divider,
  Avatar,
  useTheme
} from "@mui/material";
import { GitHub, LinkedIn, Email, ArrowForward } from "@mui/icons-material";

const skills = [
  "React.js",
  "Next.js",
  "TypeScript",
  "SvelteKit",
  "Redux",
  "Material UI",
  "Ant Design",
  "Framer Motion",
  "Bootstrap",
  "GitHub",
  "JavaScript",
  "HTML",
  "CSS"
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "AI Interviewer Company",
    time: "2023 – Present",
    description:
      "Working on AI-powered interview platforms. Built dynamic UIs using React, optimized for performance and accessibility. Integrated AI models and worked closely with backend teams."
  },
  {
    role: "React Developer",
    company: "Micropyramid Inc",
    time: "2021 – 2023",
    description:
      "Built ERP and CRM systems using React, TypeScript, and MUI. Implemented server-side rendering with Next.js and improved website performance. Mentored interns and worked on tourism and marketing-related projects."
  },
  {
    role: "UI Developer",
    company: "Squares Information Technology",
    time: "2021",
    description:
      "Worked on frontend using React and Bootstrap. Contributed to performance optimization and UI development."
  },
  {
    role: "Design Engineer",
    company: "Femlogic Technology",
    time: "2018 – 2020",
    description: "Initial industry experience before switching to frontend development."
  }
];

const Portfolio = () => {
  const theme = useTheme();

  useEffect(() => {
    document.title = "Anandraj Devarajan | Frontend Developer";
  }, []);

  return (
    <Box sx={{ bgcolor: "#ffffff", color: "#1e1e1e", minHeight: "100vh", pt: 6 }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" fontWeight={800} gutterBottom>
            👋 Hi, I'm Anandraj
          </Typography>
          <Typography variant="h6" color="text.secondary">
            Frontend Developer specializing in React, Next.js, and building smart UI with AI integration.
          </Typography>
          <Box sx={{ mt: 4, display: "flex", flexWrap: "wrap", gap: 2 }}>
            <Button
              variant="contained"
              size="large"
              startIcon={<LinkedIn />}
              href="https://www.linkedin.com/in/anand-raj-devarajan"
            >
              LinkedIn
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<GitHub />}
              href="https://github.com"
            >
              GitHub
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<Email />}
              href="mailto:anandraj76986@gmail.com"
            >
              Email Me
            </Button>
          </Box>
        </motion.div>

        <Divider sx={{ my: 8 }} />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            🧠 About Me
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: 800, fontSize: "1.1rem" }}>
            I'm a passionate frontend developer crafting interfaces that merge design with logic. My work thrives on clean aesthetics, optimized performance, and smart systems — currently focused on building AI-powered interview platforms.
          </Typography>
        </motion.div>

        <Divider sx={{ my: 8 }} />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            🛠️ Skills & Tools
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              maxWidth: 1000,
              justifyContent: "flex-start"
            }}
          >
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Chip
                  label={skill}
                  sx={{
                    fontWeight: 600,
                    fontSize: 14,
                    px: 2,
                    py: 1,
                    borderRadius: "20px",
                    boxShadow: "0 3px 6px rgba(0,0,0,0.05)",
                    transition: "all 0.3s ease"
                  }}
                  color="primary"
                  variant="outlined"
                />
              </motion.div>
            ))}
          </Box>
        </motion.div>

        <Divider sx={{ my: 8 }} />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            💼 Experience
          </Typography>
          <Grid container spacing={4}>
            {experiences.map((exp, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <motion.div whileHover={{ scale: 1.03 }} transition={{ duration: 0.3 }}>
                  <Paper elevation={6} sx={{ p: 4, borderRadius: 4, height: "100%", background: "#f3f4f6" }}>
                    <Typography variant="h6" fontWeight={700} gutterBottom>
                      {exp.role}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      {exp.company} | {exp.time}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {exp.description}
                    </Typography>
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <Divider sx={{ my: 8 }} />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom>
            📫 Contact
          </Typography>
          <Typography variant="body1" sx={{ mb: 1.5 }}>
            Let's connect — freelance projects, collaborations or coffee chat. I'm just an email away.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            endIcon={<ArrowForward />}
            href="mailto:anandraj76986@gmail.com"
          >
            Get In Touch
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Portfolio;