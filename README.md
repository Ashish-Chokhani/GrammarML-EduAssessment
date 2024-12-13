# Grammar Language Modeling for Automated Educational Assessment

This repository contains the implementation of a robust grammar checker application aimed at supporting educational institutions by enhancing students' grammatical proficiency and speech pronunciation accuracy. Developed using machine learning, this project integrates grammar evaluation and pronunciation assessment in an interactive learning environment.

## 📋 Objective

To develop a machine learning-powered application that evaluates grammar and pronunciation, providing actionable feedback to improve students' skills.

## 🚀 Features

1. **Automated Grammar Evaluation**  
   - Includes MCQ-based assessments requiring students to pronounce complete sentences and fill in blanks.

2. **Jumbled Sentence Exercises**  
   - Rearrange jumbled words into grammatically correct sentences.
   - Example: Rearrange `on / sat / mat / the / the / cat` to form "The cat sat on the mat."

3. **Speech Pronunciation Assessment**  
   - Uses Goodness of Pronunciation (GoP) scores to validate spoken sentences against target sentences.
   - Real-time feedback is provided based on pronunciation accuracy.

4. **Feedback Mechanism**  
   - Highlights grammatical mistakes and pronunciation issues, offering actionable feedback for improvement.

5. **User Interface Enhancements**  
   - Responsive Navbar and improved login page for a better user experience.

6. **Backend Enhancements**  
   - Dynamic data folder creation for organizing audio files and transcriptions.
   - API endpoints for handling file uploads and question processing.

## 📂 Project Structure

- `src/`: Contains core implementations, including functions for grammar checking, GoP extraction, and speech processing.
- `frontend/`: Includes the front-end components such as the login page and jumbled sentence interface.
- `backend/`: Stores audio files, transcriptions, and database backups.
- `docs/`: Contains the ER diagram and additional documentation.

## 📊 Key Components

1. **GoP Extraction**  
   - Custom function `extract_word_gops` calculates GoP scores using Kaldi’s phoneme alignments.

2. **Database Design**  
   - Tables:
     - `User`: Manages user data.
     - `AudioFile`: Stores uploaded audio files.
     - `Question`: Stores question details.
     - `GOPScore`: Tracks GoP scores.

3. **Technical Challenges and Solutions**  
   - Accurate Pronunciation Assessment: Improved phoneme-level GoP calculations.
   - Diverse Audio Formats: Automated conversion to compatible formats using `ffmpeg`.
   - Real-Time Feedback: Optimized speech processing pipeline to reduce latency.

## 🛠️ Technologies Used

- **Programming Languages**: Python  
- **Frameworks**: FastAPI, Kaldi  
- **Tools**: ffmpeg
- **Database**: SQLite (with ER diagram for reference)

## 🚨 Don't forget to check out this amazing report and presentation for more insights into the project!
- [Project Presentation (PDF)](https://github.com/Ashish-Chokhani/GrammarML-EduAssessment/blob/main/docs/BTP_report2.pdf)
- [Project Presentation (Video)](https://github.com/Ashish-Chokhani/GrammarML-EduAssessment/blob/main/docs/btp2_final_presentation.mp4)

## 🤝 Contributions
Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or suggestions.

## 👨‍💻 Authors and Mentors
- Ashish Chokhani
- Ishit Bansal
- Manuj Garg

  
`Guide`: Dr. Ramesh Loganathan
`Mentor`: Arjun Sir
`Panel`: Rajakrishnan Sir
